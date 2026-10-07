/**
 * ==========================================================================
 * KAMUS DIGITAL BAHASA MANDAR - INDONESIA | CONTROLLER
 * Boyang Digital • Pelestarian Bahasa & Budaya Mandar
 * ==========================================================================
 */

// Initialize PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

(function () {
  'use strict';

  // State Management
  const state = {
    allWords: window.DICTIONARY_DATA || [],
    filteredWords: [],
    searchQuery: '',
    searchDirection: 'all', // 'all', 'mandar-id', 'id-mandar'
    selectedCategory: 'all',
    selectedLetter: 'all',
    viewMode: 'grid', // 'grid' | 'list'
    favorites: JSON.parse(localStorage.getItem('kamus_mandar_favs') || '[]'),
    
    // PDF State
    pdfDoc: null,
    pdfPageNum: 1,
    pdfTotalPages: 0,
    pdfScale: 1.2,
    pdfRendering: false,
    pdfPagePending: null,
    pdfFileName: 'Kamus Bahasa Mandar-Indonesia.pdf',
    pdfTextIndex: [], // Cached text per page for in-PDF search
    pdfSearchMatches: []
  };

  // DOM Elements
  const elements = {
    // Nav Tabs
    tabs: document.querySelectorAll('.nav-tab'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Search & Filter
    searchInput: document.getElementById('searchInput'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    dirBtns: document.querySelectorAll('.dir-btn'),
    categoryPills: document.getElementById('categoryPills'),
    alphabetBar: document.getElementById('alphabetBar'),
    resultsCount: document.getElementById('resultsCount'),
    dictionaryGrid: document.getElementById('dictionaryGrid'),
    emptyState: document.getElementById('emptyState'),
    btnResetSearch: document.getElementById('btnResetSearch'),
    btnQuickPdfSearch: document.getElementById('btnQuickPdfSearch'),
    btnEmptySearchPdf: document.getElementById('btnEmptySearchPdf'),

    // View Toggle
    btnViewGrid: document.getElementById('btnViewGrid'),
    btnViewList: document.getElementById('btnViewList'),

    // Word of the Day
    wotdSection: document.getElementById('wotdSection'),
    wotdMandar: document.getElementById('wotdMandar'),
    wotdPhonetic: document.getElementById('wotdPhonetic'),
    wotdPos: document.getElementById('wotdPos'),
    wotdMeaning: document.getElementById('wotdMeaning'),
    wotdExMandar: document.getElementById('wotdExMandar'),
    wotdExIndo: document.getElementById('wotdExIndo'),
    btnRefreshWotd: document.getElementById('btnRefreshWotd'),
    btnSpeakWotd: document.getElementById('btnSpeakWotd'),
    btnShareWotd: document.getElementById('btnShareWotd'),
    btnFavWotd: document.getElementById('btnFavWotd'),

    // PDF Elements
    pdfCurrentFileName: document.getElementById('pdfCurrentFileName'),
    btnDownloadPdf: document.getElementById('btnDownloadPdf'),
    localPdfInput: document.getElementById('localPdfInput'),
    btnPdfPrev: document.getElementById('btnPdfPrev'),
    btnPdfNext: document.getElementById('btnPdfNext'),
    pdfPageNumInput: document.getElementById('pdfPageNumInput'),
    pdfTotalPages: document.getElementById('pdfTotalPages'),
    btnPdfZoomIn: document.getElementById('btnPdfZoomIn'),
    btnPdfZoomOut: document.getElementById('btnPdfZoomOut'),
    btnPdfFitWidth: document.getElementById('btnPdfFitWidth'),
    pdfZoomText: document.getElementById('pdfZoomText'),
    btnPdfFullscreen: document.getElementById('btnPdfFullscreen'),
    pdfViewport: document.getElementById('pdfViewport'),
    pdfCanvas: document.getElementById('pdfCanvas'),
    pdfSpinner: document.getElementById('pdfSpinner'),
    pdfNotification: document.getElementById('pdfNotification'),
    pdfNotifyContent: document.getElementById('pdfNotifyContent'),
    pdfStatusBadge: document.getElementById('pdfStatusBadge'),
    pdfSearchInput: document.getElementById('pdfSearchInput'),
    btnPdfSearchNext: document.getElementById('btnPdfSearchNext'),
    pdfSearchMatchCount: document.getElementById('pdfSearchMatchCount'),
    pdfMatchesDrawer: document.getElementById('pdfMatchesDrawer'),
    pdfMatchesList: document.getElementById('pdfMatchesList'),
    btnCloseMatches: document.getElementById('btnCloseMatches'),

    // Dialogs & Modals
    favDialog: document.getElementById('favDialog'),
    btnOpenFavorites: document.getElementById('btnOpenFavorites'),
    btnCloseFavDialog: document.getElementById('btnCloseFavDialog'),
    btnDoneFav: document.getElementById('btnDoneFav'),
    favListContainer: document.getElementById('favListContainer'),
    favEmptyNotice: document.getElementById('favEmptyNotice'),
    btnClearAllFav: document.getElementById('btnClearAllFav'),
    favCountBadge: document.getElementById('favCount'),

    deployDialog: document.getElementById('deployDialog'),
    btnOpenDeployGuide: document.getElementById('btnOpenDeployGuide'),
    btnCloseDeployDialog: document.getElementById('btnCloseDeployDialog'),
    btnDoneDeploy: document.getElementById('btnDoneDeploy'),

    // Theme & Share
    btnThemeToggle: document.getElementById('btnThemeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    btnShareApp: document.getElementById('btnShareApp'),
    toastBox: document.getElementById('toastBox'),

    // Footer quick links
    footLinkSearch: document.getElementById('footLinkSearch'),
    footLinkPdf: document.getElementById('footLinkPdf'),
    footLinkCulture: document.getElementById('footLinkCulture'),
    footLinkDeploy: document.getElementById('footLinkDeploy')
  };

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  function init() {
    setupTheme();
    generateAlphabetBar();
    renderWordOfTheDay();
    updateFavoritesBadge();
    filterAndRenderWords();
    initEvents();
    
    // Attempt auto-load of default PDF
    tryAutoLoadPdf();

    // Render Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // ==========================================================================
  // THEME MANAGEMENT
  // ==========================================================================
  function setupTheme() {
    const savedTheme = localStorage.getItem('kamus_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('kamus_theme', newTheme);
    updateThemeIcon(newTheme);
  }

  function updateThemeIcon(theme) {
    if (elements.themeIcon) {
      elements.themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
      if (window.lucide) window.lucide.createIcons();
    }
  }

  // ==========================================================================
  // ALPHABET BAR GENERATOR
  // ==========================================================================
  function generateAlphabetBar() {
    const letters = 'ABCDEFGHIJKLMNOPRSTUVW'.split('');
    const fragment = document.createDocumentFragment();

    letters.forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'alpha-btn';
      btn.setAttribute('data-letter', letter);
      btn.textContent = letter;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedLetter = letter;
        filterAndRenderWords();
      });
      fragment.appendChild(btn);
    });

    elements.alphabetBar.appendChild(fragment);

    // Click handler for 'Semua' button in alphabet
    const allBtn = elements.alphabetBar.querySelector('[data-letter="all"]');
    if (allBtn) {
      allBtn.addEventListener('click', () => {
        document.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
        allBtn.classList.add('active');
        state.selectedLetter = 'all';
        filterAndRenderWords();
      });
    }
  }

  // ==========================================================================
  // SEARCH & FILTER ENGINE
  // ==========================================================================
  function filterAndRenderWords() {
    const query = state.searchQuery.trim().toLowerCase();
    const dir = state.searchDirection;
    const cat = state.selectedCategory;
    const letter = state.selectedLetter;

    state.filteredWords = state.allWords.filter(item => {
      // 1. Category Filter
      if (cat !== 'all' && item.kategori !== cat) {
        return false;
      }

      // 2. Alphabet Filter
      if (letter !== 'all') {
        const firstLetter = item.mandar.charAt(0).toUpperCase();
        if (firstLetter !== letter) return false;
      }

      // 3. Search Query Filter
      if (!query) return true;

      const mandarText = item.mandar.toLowerCase();
      const indoText = item.indonesia.toLowerCase();
      const exMandar = (item.contoh_mandar || '').toLowerCase();
      const exIndo = (item.contoh_indo || '').toLowerCase();

      if (dir === 'mandar-id') {
        return mandarText.includes(query) || exMandar.includes(query);
      } else if (dir === 'id-mandar') {
        return indoText.includes(query) || exIndo.includes(query);
      } else {
        // all directions
        return (
          mandarText.includes(query) ||
          indoText.includes(query) ||
          exMandar.includes(query) ||
          exIndo.includes(query)
        );
      }
    });

    renderWordCards();
  }

  function renderWordCards() {
    const total = state.filteredWords.length;
    elements.resultsCount.textContent = `Menampilkan ${total} kosakata bahasa Mandar`;

    if (total === 0) {
      elements.dictionaryGrid.innerHTML = '';
      elements.emptyState.style.display = 'block';
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    elements.emptyState.style.display = 'none';
    elements.dictionaryGrid.innerHTML = '';

    const fragment = document.createDocumentFragment();

    state.filteredWords.forEach(item => {
      const card = createWordCardElement(item);
      fragment.appendChild(card);
    });

    elements.dictionaryGrid.appendChild(fragment);

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function createWordCardElement(item) {
    const card = document.createElement('article');
    card.className = 'word-card';
    const isFav = state.favorites.includes(item.mandar);

    // Category labels map
    const catLabels = {
      sapaan: 'Sapaan & Sosial',
      maritim: 'Maritim & Sandeq',
      budaya: 'Budaya & Saqbe',
      kuliner: 'Kuliner Mandar',
      verba: 'Kata Kerja',
      sifat: 'Kata Sifat',
      angka: 'Angka & Bilangan',
      waktu: 'Waktu & Musim',
      alam: 'Alam & Lingkungan',
      tubuh: 'Anggota Tubuh',
      kehidupan: 'Kehidupan Sehari-hari'
    };

    const catName = catLabels[item.kategori] || item.kategori;

    card.innerHTML = `
      <div class="word-card-header">
        <div class="word-title-group">
          <h3 class="word-title">${escapeHtml(item.mandar)}</h3>
          <div class="word-meta-row">
            ${item.fonetik ? `<span class="word-phonetic">/${escapeHtml(item.fonetik)}/</span>` : ''}
            <span class="word-pos-tag">${escapeHtml(item.pos || 'Kata')}</span>
            <span class="word-category-tag">${escapeHtml(catName)}</span>
          </div>
        </div>
        <button class="btn-card-fav ${isFav ? 'active' : ''}" title="${isFav ? 'Hapus dari Favorit' : 'Simpan ke Favorit'}" data-word="${escapeHtml(item.mandar)}">
          <i data-lucide="bookmark"></i>
        </button>
      </div>

      <p class="word-meaning">${highlightMatch(escapeHtml(item.indonesia), state.searchQuery)}</p>

      ${item.contoh_mandar ? `
        <div class="word-example-card">
          <p class="example-mandar-text">"${highlightMatch(escapeHtml(item.contoh_mandar), state.searchQuery)}"</p>
          <p class="example-indo-text">Artinya: ${highlightMatch(escapeHtml(item.contoh_indo || ''), state.searchQuery)}</p>
        </div>
      ` : ''}

      <div class="word-card-actions">
        <div class="card-action-btn-group">
          <button class="btn-mini-action btn-speak" title="Dengarkan Pengucapan" data-speak="${escapeHtml(item.mandar)}">
            <i data-lucide="volume-2"></i>
          </button>
          <button class="btn-mini-action btn-copy" title="Salin Kosakata" data-word="${escapeHtml(item.mandar)}" data-meaning="${escapeHtml(item.indonesia)}">
            <i data-lucide="copy"></i>
          </button>
          <button class="btn-mini-action btn-share-card" title="Bagikan ke WhatsApp" data-word="${escapeHtml(item.mandar)}" data-meaning="${escapeHtml(item.indonesia)}">
            <i data-lucide="share-2"></i>
          </button>
        </div>
        <button class="btn-jump-pdf" data-search-pdf="${escapeHtml(item.mandar)}" title="Cari kata ini di dokumen PDF asli">
          <i data-lucide="file-search"></i> Cari di PDF
        </button>
      </div>
    `;

    // Event Listeners for Card Actions
    const favBtn = card.querySelector('.btn-card-fav');
    favBtn.addEventListener('click', () => toggleFavorite(item.mandar, favBtn));

    const speakBtn = card.querySelector('.btn-speak');
    speakBtn.addEventListener('click', () => speakWord(item.mandar));

    const copyBtn = card.querySelector('.btn-copy');
    copyBtn.addEventListener('click', () => copyWordToClipboard(item.mandar, item.indonesia));

    const shareBtn = card.querySelector('.btn-share-card');
    shareBtn.addEventListener('click', () => shareWordToWhatsApp(item.mandar, item.indonesia, item.contoh_mandar));

    const pdfBtn = card.querySelector('.btn-jump-pdf');
    pdfBtn.addEventListener('click', () => searchWordInPdfDoc(item.mandar));

    return card;
  }

  // ==========================================================================
  // WORD OF THE DAY (WOTD)
  // ==========================================================================
  function renderWordOfTheDay(forcedItem = null) {
    if (!state.allWords.length) return;

    let item = forcedItem;
    if (!item) {
      // Seed by date
      const today = new Date().toISOString().slice(0, 10);
      let hash = 0;
      for (let i = 0; i < today.length; i++) {
        hash = (hash << 5) - hash + today.charCodeAt(i);
        hash |= 0;
      }
      const index = Math.abs(hash) % state.allWords.length;
      item = state.allWords[index];
    }

    elements.wotdMandar.textContent = item.mandar;
    elements.wotdPhonetic.textContent = item.fonetik ? `/${item.fonetik}/` : '';
    elements.wotdPos.textContent = item.pos || 'Kata';
    elements.wotdMeaning.textContent = item.indonesia;
    elements.wotdExMandar.textContent = item.contoh_mandar ? `"${item.contoh_mandar}"` : '';
    elements.wotdExIndo.textContent = item.contoh_indo ? `Artinya: ${item.contoh_indo}` : '';

    const isFav = state.favorites.includes(item.mandar);
    elements.btnFavWotd.innerHTML = `<i data-lucide="bookmark"></i> ${isFav ? 'Tersimpan' : 'Simpan'}`;

    // Reattach listeners
    elements.btnSpeakWotd.onclick = () => speakWord(item.mandar);
    elements.btnShareWotd.onclick = () => shareWordToWhatsApp(item.mandar, item.indonesia, item.contoh_mandar);
    elements.btnFavWotd.onclick = () => {
      toggleFavorite(item.mandar);
      const nowFav = state.favorites.includes(item.mandar);
      elements.btnFavWotd.innerHTML = `<i data-lucide="bookmark"></i> ${nowFav ? 'Tersimpan' : 'Simpan'}`;
      if (window.lucide) window.lucide.createIcons();
    };

    if (window.lucide) window.lucide.createIcons();
  }

  // ==========================================================================
  // FAVORITES (BOOKMARK)
  // ==========================================================================
  function toggleFavorite(word, btnElement = null) {
    const idx = state.favorites.indexOf(word);
    let added = false;
    if (idx === -1) {
      state.favorites.push(word);
      added = true;
      showToast(`Kata "${word}" disimpan ke Favorit!`);
    } else {
      state.favorites.splice(idx, 1);
      showToast(`Kata "${word}" dihapus dari Favorit.`);
    }

    localStorage.setItem('kamus_mandar_favs', JSON.stringify(state.favorites));
    updateFavoritesBadge();

    if (btnElement) {
      btnElement.classList.toggle('active', added);
    } else {
      filterAndRenderWords();
    }
  }

  function updateFavoritesBadge() {
    if (elements.favCountBadge) {
      elements.favCountBadge.textContent = state.favorites.length;
    }
  }

  function openFavoritesDialog() {
    elements.favListContainer.innerHTML = '';
    
    if (state.favorites.length === 0) {
      elements.favEmptyNotice.style.display = 'block';
    } else {
      elements.favEmptyNotice.style.display = 'none';
      state.favorites.forEach(favWord => {
        const wordObj = state.allWords.find(w => w.mandar.toLowerCase() === favWord.toLowerCase()) || {
          mandar: favWord,
          indonesia: 'Kosakata pilihan'
        };

        const itemEl = document.createElement('div');
        itemEl.className = 'fav-item';
        itemEl.innerHTML = `
          <div class="fav-item-info">
            <h4>${escapeHtml(wordObj.mandar)}</h4>
            <p>${escapeHtml(wordObj.indonesia)}</p>
          </div>
          <button class="btn-remove-fav" title="Hapus" data-fav="${escapeHtml(wordObj.mandar)}">
            <i data-lucide="trash-2"></i>
          </button>
        `;

        itemEl.querySelector('.btn-remove-fav').addEventListener('click', () => {
          toggleFavorite(wordObj.mandar);
          openFavoritesDialog();
        });

        elements.favListContainer.appendChild(itemEl);
      });
    }

    if (window.lucide) window.lucide.createIcons();
    elements.favDialog.showModal();
  }

  // ==========================================================================
  // TEXT TO SPEECH & SHARING
  // ==========================================================================
  function speakWord(text) {
    if (!('speechSynthesis' in window)) {
      showToast('Perangkat tidak mendukung suara ucapan.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.85; // Slightly slower for clear regional dialect articulation
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    showToast(`Memutar ucapan: "${text}"`);
  }

  function copyWordToClipboard(word, meaning) {
    const text = `${word} = ${meaning}\n(Kamus Digital Bahasa Mandar - Boyang Digital)`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Kosakata "${word}" berhasil disalin!`);
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(`Kosakata berhasil disalin!`);
  }

  function shareWordToWhatsApp(word, meaning, example) {
    let msg = `*Kamus Bahasa Mandar - Indonesia*\n\n`;
    msg += `📖 *${word}*\n`;
    msg += `Arti: ${meaning}\n`;
    if (example) {
      msg += `Contoh: "${example}"\n`;
    }
    msg += `\nAyo lestarikan bahasa Mandar! Akses kamus online gratis di:\n${window.location.href}`;

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  }

  function shareApp() {
    const title = 'Kamus Digital Bahasa Mandar - Indonesia (Gratis)';
    const text = 'Akses kamus kosakata bahasa Mandar-Indonesia & baca buku PDF asli secara online dan gratis!';
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {});
    } else {
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${text}\n${url}`)}`;
      window.open(waUrl, '_blank');
    }
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="info"></i> <span>${escapeHtml(message)}</span>`;
    elements.toastBox.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // ==========================================================================
  // PDF.JS VIEWER INTEGRATION
  // ==========================================================================
  const candidatePdfUrls = [
    'Kamus Bahasa Mandar-Indonesia.pdf',
    'Kamus Bahasa Mandar-Indonesia',
    'Kamus-Bahasa-Mandar-Indonesia.pdf',
    'kamus-bahasa-mandar-indonesia.pdf'
  ];

  function tryAutoLoadPdf(index = 0) {
    if (index >= candidatePdfUrls.length) {
      // All candidates tried and not found yet (expected if user hasn't committed the PDF yet)
      showPdfNotice(
        'File PDF belum ditemukan di repositori GitHub',
        `File <strong>"Kamus Bahasa Mandar-Indonesia.pdf"</strong> akan otomatis terbuka di sini setelah Anda mengunggahnya ke repositori GitHub.<br>Anda juga dapat klik tombol <strong>"Buka PDF Lokal"</strong> di kanan atas untuk langsung mengujinya dari HP/Laptop sekarang!`
      );
      elements.pdfSpinner.style.display = 'none';
      elements.pdfStatusBadge.textContent = 'Menunggu PDF';
      elements.pdfStatusBadge.style.background = '#fef3c7';
      elements.pdfStatusBadge.style.color = '#b45309';
      return;
    }

    const testUrl = candidatePdfUrls[index];
    elements.pdfSpinner.style.display = 'flex';

    fetch(testUrl, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          loadPdfFromUrl(testUrl);
        } else {
          tryAutoLoadPdf(index + 1);
        }
      })
      .catch(() => {
        tryAutoLoadPdf(index + 1);
      });
  }

  function loadPdfFromUrl(url) {
    state.pdfFileName = url;
    elements.pdfCurrentFileName.textContent = url;
    elements.btnDownloadPdf.href = url;
    elements.btnDownloadPdf.setAttribute('download', url);

    elements.pdfNotification.style.display = 'none';
    elements.pdfSpinner.style.display = 'flex';

    pdfjsLib.getDocument(url).promise
      .then(doc => {
        onPdfLoaded(doc);
      })
      .catch(err => {
        console.error('PDF Load Error:', err);
        showPdfNotice('Gagal Membuka PDF', 'Terjadi kendala saat membaca file PDF. Silakan coba buka file PDF lokal.');
        elements.pdfSpinner.style.display = 'none';
      });
  }

  function loadPdfFromArrayBuffer(arrayBuffer, filename = 'Dokumen Mandar.pdf') {
    state.pdfFileName = filename;
    elements.pdfCurrentFileName.textContent = filename;
    elements.pdfNotification.style.display = 'none';
    elements.pdfSpinner.style.display = 'flex';

    pdfjsLib.getDocument({ data: arrayBuffer }).promise
      .then(doc => {
        onPdfLoaded(doc);
        showToast(`Berhasil membuka file ${filename}`);
      })
      .catch(err => {
        console.error('ArrayBuffer PDF Error:', err);
        showPdfNotice('File PDF Tidak Valid', 'Pastikan file yang dipilih adalah format PDF yang benar.');
        elements.pdfSpinner.style.display = 'none';
      });
  }

  function onPdfLoaded(pdf) {
    state.pdfDoc = pdf;
    state.pdfTotalPages = pdf.numPages;
    state.pdfPageNum = 1;
    elements.pdfTotalPages.textContent = pdf.numPages;
    elements.pdfPageNumInput.max = pdf.numPages;
    elements.pdfSpinner.style.display = 'none';

    elements.pdfStatusBadge.textContent = `${pdf.numPages} Halaman`;
    elements.pdfStatusBadge.style.background = '#dcfce7';
    elements.pdfStatusBadge.style.color = '#166534';

    // Index text in background for fast in-PDF search
    buildPdfSearchIndex();

    renderPdfPage(state.pdfPageNum);
  }

  function renderPdfPage(num) {
    if (!state.pdfDoc) return;
    state.pdfRendering = true;
    elements.pdfPageNumInput.value = num;

    state.pdfDoc.getPage(num).then(page => {
      const viewport = page.getViewport({ scale: state.pdfScale });
      const canvas = elements.pdfCanvas;
      const ctx = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };

      const renderTask = page.render(renderContext);

      renderTask.promise.then(() => {
        state.pdfRendering = false;
        if (state.pdfPagePending !== null) {
          renderPdfPage(state.pdfPagePending);
          state.pdfPagePending = null;
        }
      });
    });

    // Update button states
    elements.btnPdfPrev.disabled = num <= 1;
    elements.btnPdfNext.disabled = num >= state.pdfTotalPages;
  }

  function queueRenderPage(num) {
    if (state.pdfRendering) {
      state.pdfPagePending = num;
    } else {
      renderPdfPage(num);
    }
  }

  function showPdfNotice(title, htmlContent) {
    elements.pdfNotification.style.display = 'flex';
    elements.pdfNotifyContent.innerHTML = `<strong>${title}:</strong> ${htmlContent}`;
  }

  // In-PDF Text Indexing & Search
  function buildPdfSearchIndex() {
    if (!state.pdfDoc) return;
    state.pdfTextIndex = [];

    const promises = [];
    for (let i = 1; i <= state.pdfDoc.numPages; i++) {
      promises.push(
        state.pdfDoc.getPage(i).then(page => {
          return page.getTextContent().then(textContent => {
            const pageText = textContent.items.map(item => item.str).join(' ');
            return { page: i, text: pageText.toLowerCase() };
          });
        })
      );
    }

    Promise.all(promises).then(results => {
      state.pdfTextIndex = results;
    });
  }

  function searchPdfText(term) {
    if (!term || !state.pdfDoc) return;
    const cleanTerm = term.trim().toLowerCase();
    elements.pdfMatchesList.innerHTML = '';

    const matches = state.pdfTextIndex.filter(entry => entry.text.includes(cleanTerm));
    state.pdfSearchMatches = matches;

    if (matches.length === 0) {
      elements.pdfSearchMatchCount.textContent = 'Tidak ditemukan';
      elements.pdfMatchesDrawer.style.display = 'none';
      showToast(`Kata "${term}" tidak ditemukan di dalam teks PDF.`);
      return;
    }

    elements.pdfSearchMatchCount.textContent = `${matches.length} hal. cocok`;
    elements.pdfMatchesDrawer.style.display = 'block';

    matches.forEach(m => {
      const pageBtn = document.createElement('button');
      pageBtn.className = 'match-page-btn';
      pageBtn.textContent = `Halaman ${m.page}`;
      pageBtn.addEventListener('click', () => {
        state.pdfPageNum = m.page;
        queueRenderPage(m.page);
      });
      elements.pdfMatchesList.appendChild(pageBtn);
    });

    // Jump to first match
    state.pdfPageNum = matches[0].page;
    queueRenderPage(matches[0].page);
    showToast(`Ditemukan pada ${matches.length} halaman di buku PDF!`);
  }

  function searchWordInPdfDoc(word) {
    // Switch to PDF tab
    switchTab('tab-pdf');

    // Fill PDF search input
    elements.pdfSearchInput.value = word;

    if (state.pdfDoc) {
      searchPdfText(word);
    } else {
      showToast('Buku PDF belum dimuat. Silakan upload atau pilih file PDF.');
    }
  }

  // ==========================================================================
  // TAB SWITCHING
  // ==========================================================================
  function switchTab(tabId) {
    elements.tabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
    });

    elements.tabContents.forEach(content => {
      content.classList.toggle('active', content.id === tabId);
    });

    if (window.lucide) window.lucide.createIcons();

    // If switched to PDF and document is loaded, refresh canvas dimensions
    if (tabId === 'tab-pdf' && state.pdfDoc) {
      setTimeout(() => renderPdfPage(state.pdfPageNum), 50);
    }
  }

  // ==========================================================================
  // EVENT LISTENERS BINDING
  // ==========================================================================
  function initEvents() {
    // 1. Tab Navigation
    elements.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        switchTab(target);
      });
    });

    // 2. Search Input typing
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      elements.btnClearSearch.style.display = state.searchQuery ? 'block' : 'none';
      filterAndRenderWords();
    });

    elements.btnClearSearch.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.btnClearSearch.style.display = 'none';
      filterAndRenderWords();
      elements.searchInput.focus();
    });

    // 3. Search Direction Buttons
    elements.dirBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.dirBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.searchDirection = btn.getAttribute('data-dir');
        filterAndRenderWords();
      });
    });

    // 4. Category Pills
    elements.categoryPills.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        elements.categoryPills.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.selectedCategory = pill.getAttribute('data-category');
        filterAndRenderWords();
      });
    });

    // 5. Reset Search Buttons
    elements.btnResetSearch.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      state.selectedCategory = 'all';
      state.selectedLetter = 'all';
      elements.btnClearSearch.style.display = 'none';
      
      // Reset active pills
      elements.categoryPills.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      elements.categoryPills.querySelector('[data-category="all"]').classList.add('active');

      elements.alphabetBar.querySelectorAll('.alpha-btn').forEach(b => b.classList.remove('active'));
      elements.alphabetBar.querySelector('[data-letter="all"]').classList.add('active');

      filterAndRenderWords();
    });

    // Quick jump to PDF search from dictionary header
    elements.btnQuickPdfSearch.addEventListener('click', () => {
      const q = state.searchQuery || 'Mandar';
      searchWordInPdfDoc(q);
    });

    elements.btnEmptySearchPdf.addEventListener('click', () => {
      const q = state.searchQuery || '';
      searchWordInPdfDoc(q);
    });

    // 6. View Mode Toggle
    elements.btnViewGrid.addEventListener('click', () => {
      elements.btnViewGrid.classList.add('active');
      elements.btnViewList.classList.remove('active');
      elements.dictionaryGrid.classList.remove('list-view');
      state.viewMode = 'grid';
    });

    elements.btnViewList.addEventListener('click', () => {
      elements.btnViewList.classList.add('active');
      elements.btnViewGrid.classList.remove('active');
      elements.dictionaryGrid.classList.add('list-view');
      state.viewMode = 'list';
    });

    // 7. Refresh WOTD
    elements.btnRefreshWotd.addEventListener('click', () => {
      const randIdx = Math.floor(Math.random() * state.allWords.length);
      renderWordOfTheDay(state.allWords[randIdx]);
      showToast('Menampilkan kata acak baru.');
    });

    // 8. PDF Navigation Controls
    elements.btnPdfPrev.addEventListener('click', () => {
      if (state.pdfPageNum <= 1) return;
      state.pdfPageNum--;
      queueRenderPage(state.pdfPageNum);
    });

    elements.btnPdfNext.addEventListener('click', () => {
      if (state.pdfPageNum >= state.pdfTotalPages) return;
      state.pdfPageNum++;
      queueRenderPage(state.pdfPageNum);
    });

    elements.pdfPageNumInput.addEventListener('change', (e) => {
      let val = parseInt(e.target.value, 10);
      if (isNaN(val) || val < 1) val = 1;
      if (val > state.pdfTotalPages) val = state.pdfTotalPages;
      state.pdfPageNum = val;
      queueRenderPage(val);
    });

    // 9. PDF Zoom Controls
    elements.btnPdfZoomIn.addEventListener('click', () => {
      state.pdfScale = Math.min(state.pdfScale + 0.25, 3.0);
      elements.pdfZoomText.textContent = `${Math.round(state.pdfScale * 100 / 1.2)}%`;
      renderPdfPage(state.pdfPageNum);
    });

    elements.btnPdfZoomOut.addEventListener('click', () => {
      state.pdfScale = Math.max(state.pdfScale - 0.25, 0.6);
      elements.pdfZoomText.textContent = `${Math.round(state.pdfScale * 100 / 1.2)}%`;
      renderPdfPage(state.pdfPageNum);
    });

    elements.btnPdfFitWidth.addEventListener('click', () => {
      const containerWidth = elements.pdfViewport.clientWidth - 40;
      if (state.pdfDoc) {
        state.pdfDoc.getPage(state.pdfPageNum).then(page => {
          const naturalWidth = page.getViewport({ scale: 1.0 }).width;
          state.pdfScale = Math.max(0.6, containerWidth / naturalWidth);
          elements.pdfZoomText.textContent = `${Math.round(state.pdfScale * 100 / 1.2)}%`;
          renderPdfPage(state.pdfPageNum);
        });
      }
    });

    elements.btnPdfFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        elements.pdfViewport.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // 10. Local PDF File Selector
    elements.localPdfInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (ev) {
        loadPdfFromArrayBuffer(ev.target.result, file.name);
      };
      reader.readAsArrayBuffer(file);
    });

    // 11. PDF In-Doc Search
    elements.btnPdfSearchNext.addEventListener('click', () => {
      searchPdfText(elements.pdfSearchInput.value);
    });

    elements.pdfSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        searchPdfText(elements.pdfSearchInput.value);
      }
    });

    elements.btnCloseMatches.addEventListener('click', () => {
      elements.pdfMatchesDrawer.style.display = 'none';
    });

    // 12. Modals
    elements.btnOpenFavorites.addEventListener('click', openFavoritesDialog);
    elements.btnCloseFavDialog.addEventListener('click', () => elements.favDialog.close());
    elements.btnDoneFav.addEventListener('click', () => elements.favDialog.close());

    elements.btnClearAllFav.addEventListener('click', () => {
      if (confirm('Hapus seluruh daftar kosakata favorit?')) {
        state.favorites = [];
        localStorage.removeItem('kamus_mandar_favs');
        updateFavoritesBadge();
        openFavoritesDialog();
        filterAndRenderWords();
        showToast('Seluruh favorit telah dibersihkan.');
      }
    });

    elements.btnOpenDeployGuide.addEventListener('click', () => elements.deployDialog.showModal());
    elements.btnCloseDeployDialog.addEventListener('click', () => elements.deployDialog.close());
    elements.btnDoneDeploy.addEventListener('click', () => elements.deployDialog.close());

    // 13. Theme & Share
    elements.btnThemeToggle.addEventListener('click', toggleTheme);
    elements.btnShareApp.addEventListener('click', shareApp);

    // 14. Footer Links
    elements.footLinkSearch.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('tab-search');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    elements.footLinkPdf.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('tab-pdf');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    elements.footLinkCulture.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('tab-culture');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    elements.footLinkDeploy.addEventListener('click', (e) => {
      e.preventDefault();
      elements.deployDialog.showModal();
    });
  }

  // ==========================================================================
  // UTILITIES
  // ==========================================================================
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const cleanQ = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${cleanQ})`, 'gi');
    return text.replace(regex, '<mark style="background:#fef08a;color:#0f172a;padding:0 2px;border-radius:2px;">$1</mark>');
  }

  // Service Worker Registration for Offline PWA
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('Service Worker Kamus Mandar terdaftar.'))
        .catch((err) => console.log('SW registration error (normal in local file://):', err));
    });
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);

})();
