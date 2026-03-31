// ════════════════════════════════════════════════
//  app.js — Logique principale
// ════════════════════════════════════════════════

// ── State ────
let allCards    = [...window.allCards];
let deck        = [];
let currentIndex = 0;
let isFlipped   = false;
let wrongCards  = [];
let session     = { learned: 0, wrong: 0 };
let activeModule = 1;          // default module
let activeMode  = 'learn';     // 'learn' | 'quiz'

// ── DOM Refs ────
const card           = document.getElementById('card');
const cardContainer  = document.getElementById('card-container');
const frontQuestion  = document.getElementById('front-question');
const frontType      = document.getElementById('front-type');
const backAnswer     = document.getElementById('back-answer');
const backDetail     = document.getElementById('back-detail');
const moduleTag      = document.getElementById('module-tag');
const moduleLabel    = document.getElementById('module-label');
const progressFill   = document.getElementById('progress-fill');
const progressText   = document.getElementById('progress-text');
const progressPct    = document.getElementById('progress-pct');
const prevBtn        = document.getElementById('prev-btn');
const nextBtn        = document.getElementById('next-btn');
const flipBtn        = document.getElementById('flip-btn');
const shuffleBtn     = document.getElementById('shuffle-btn');
const wrongBtn       = document.getElementById('wrong-btn');
const correctBtn     = document.getElementById('correct-btn');
const endScreen      = document.getElementById('end-screen');
const finalScore     = document.getElementById('final-score');
const scoreSub       = document.getElementById('score-sub');
const restartBtn     = document.getElementById('restart-btn');
const reviewWrongBtn = document.getElementById('review-wrong-btn');
const statLearned    = document.getElementById('stat-learned');
const statWrong      = document.getElementById('stat-wrong');
const statRemaining  = document.getElementById('stat-remaining');
const resultsBreakdown = document.getElementById('results-breakdown');
const sidebar        = document.getElementById('sidebar');
const menuBtn        = document.getElementById('menu-btn');
const sidebarClose   = document.getElementById('sidebar-close');
const learnView      = document.getElementById('learn-view');
const quizView       = document.getElementById('quiz-view');
const pageTitle      = document.getElementById('page-title');
const sessionStats   = document.getElementById('session-stats');
const modeBtns       = document.querySelectorAll('.mode-btn');

// ── Helpers ────────────────────────────────────────────────────
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function updateModuleCounts() {
    [1,2,3,4,5,6].forEach(m => {
        const el = document.getElementById(`count-${m}`);
        if (el) el.textContent = allCards.filter(c => c.module === m).length;
    });
}

function setActiveModuleBtn(moduleId) {
    document.querySelectorAll('.module-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`btn-${moduleId}`);
    if (btn) btn.classList.add('active');
}

// ── Mode Switching ──────────────────────────────────────────────
function switchMode(mode) {
    activeMode = mode;
    modeBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));

    if (mode === 'learn') {
        learnView.style.display = 'block';
        quizView.style.display = 'none';
        shuffleBtn.style.display = 'none';
        sessionStats.style.display = 'none';
        pageTitle.textContent = 'Apprentissage';
        renderLearn(activeModule);
    } else {
        learnView.style.display = 'none';
        quizView.style.display = 'block';
        shuffleBtn.style.display = '';
        sessionStats.style.display = 'block';
        pageTitle.textContent = 'Révision';
        loadDeck(activeModule);
    }
}

// ── Learn View ──────────────────────────────────────────────────
function renderLearn(moduleId) {
    const m = window.learnModules[moduleId];
    if (!m) return;

    moduleLabel.textContent = m.title;
    learnView.innerHTML = window.renderLearnModule(moduleId);
    lucide.createIcons();

    // Scroll to top
    learnView.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // "Test this module" button
    const goQuizBtn = document.getElementById('go-quiz-btn');
    if (goQuizBtn) {
        goQuizBtn.addEventListener('click', () => {
            switchMode('quiz');
            // Toggle mode buttons
            modeBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === 'quiz'));
        });
    }
}

// ── Quiz / Deck ─────────────────────────────────────────────────
function loadDeck(moduleId) {
    deck = allCards.filter(c => c.module === parseInt(moduleId));
    shuffle(deck);
    currentIndex = 0;
    session = { learned: 0, wrong: 0 };
    wrongCards = [];
    isFlipped = false;
    card.classList.remove('flipped');
    endScreen.classList.remove('visible');

    const m = window.learnModules[moduleId];
    moduleLabel.textContent = m ? m.title : 'Révision';

    updateCard();
    updateProgress();
    updateStats();
}

function updateCard(animate = false) {
    if (!deck.length) return;
    const item = deck[currentIndex];

    const doUpdate = () => {
        frontQuestion.textContent = item.question;
        frontType.textContent     = item.type;
        backAnswer.textContent    = item.answer;
        backDetail.textContent    = item.detail;
        moduleTag.textContent     = item.moduleLabel;
        isFlipped = false;
        card.classList.remove('flipped');
    };

    if (animate) {
        card.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.96)';
        setTimeout(() => {
            doUpdate();
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
            setTimeout(() => { card.style.transition = ''; }, 200);
        }, 150);
    } else {
        doUpdate();
    }
}

function updateProgress() {
    if (!deck.length) return;
    const progress = ((currentIndex + 1) / deck.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Carte ${currentIndex + 1} sur ${deck.length}`;
    progressPct.textContent  = `${Math.round(progress)}% parcouru`;
}

function updateStats() {
    statLearned.textContent   = session.learned;
    statWrong.textContent     = session.wrong;
    statRemaining.textContent = Math.max(0, deck.length - currentIndex - 1);
}

function nextCard() {
    if (currentIndex < deck.length - 1) {
        currentIndex++;
        updateCard(true);
        updateProgress();
        updateStats();
    } else {
        showEndScreen();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard(true);
        updateProgress();
        updateStats();
    }
}

function handleMastered(isCorrect) {
    if (isCorrect) session.learned++;
    else { session.wrong++; wrongCards.push(deck[currentIndex]); }
    updateStats();
    nextCard();
}

function showEndScreen() {
    const total = session.learned + session.wrong;
    const pct   = total > 0 ? Math.round((session.learned / total) * 100) : 0;
    finalScore.textContent = `${pct}%`;

    scoreSub.textContent =
        pct === 100 ? 'Parfait ! Toutes les cartes maîtrisées 🎉' :
        pct >= 70   ? 'Très bien ! Encore quelques cartes à revoir.' :
                      'Continue tes révisions — utilise "Revoir les ratées".';

    resultsBreakdown.innerHTML = `
        <div class="breakdown-item green">
            <span class="breakdown-val">${session.learned}</span>
            Maîtrisées ✅
        </div>
        <div class="breakdown-item red">
            <span class="breakdown-val">${session.wrong}</span>
            À revoir ❌
        </div>`;

    reviewWrongBtn.style.display = wrongCards.length > 0 ? 'flex' : 'none';
    endScreen.classList.add('visible');
}

function restart() {
    session = { learned: 0, wrong: 0 };
    wrongCards = [];
    currentIndex = 0;
    shuffle(deck);
    updateCard();
    updateProgress();
    updateStats();
    endScreen.classList.remove('visible');
}

function reviewWrongOnly() {
    if (!wrongCards.length) return;
    deck = [...wrongCards];
    shuffle(deck);
    wrongCards = [];
    currentIndex = 0;
    session = { learned: 0, wrong: 0 };
    updateCard();
    updateProgress();
    updateStats();
    endScreen.classList.remove('visible');
}

// ── Event Listeners ─────────────────────────────────────────────

// Mode toggle
document.getElementById('mode-learn').addEventListener('click', () => switchMode('learn'));
document.getElementById('mode-quiz').addEventListener('click',  () => switchMode('quiz'));

// Module buttons
document.querySelectorAll('.module-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        activeModule = parseInt(btn.dataset.module);
        setActiveModuleBtn(activeModule);
        sidebar.classList.remove('open');
        if (activeMode === 'learn') renderLearn(activeModule);
        else loadDeck(activeModule);
    });
});

// Card flip
cardContainer.addEventListener('click', (e) => {
    if (e.target.closest('.btn-mastery')) return;
    isFlipped = !isFlipped;
    card.classList.toggle('flipped');
});

flipBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    card.classList.toggle('flipped');
});

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);
wrongBtn.addEventListener('click',   (e) => { e.stopPropagation(); handleMastered(false); });
correctBtn.addEventListener('click', (e) => { e.stopPropagation(); handleMastered(true); });
shuffleBtn.addEventListener('click', () => { shuffle(deck); currentIndex = 0; updateCard(true); updateProgress(); });

restartBtn.addEventListener('click',    restart);
reviewWrongBtn.addEventListener('click', reviewWrongOnly);

menuBtn.addEventListener('click',     () => sidebar.classList.add('open'));
sidebarClose.addEventListener('click', () => sidebar.classList.remove('open'));

// Keyboard
document.addEventListener('keydown', (e) => {
    if (activeMode !== 'quiz') return;
    if (e.key === 'ArrowRight' || e.key === 'l') nextCard();
    if (e.key === 'ArrowLeft'  || e.key === 'h') prevCard();
    if (e.key === ' ') { e.preventDefault(); isFlipped = !isFlipped; card.classList.toggle('flipped'); }
    if (e.key === 'ArrowUp'   || e.key === 'k') handleMastered(true);
    if (e.key === 'ArrowDown' || e.key === 'j') handleMastered(false);
});

// ── Init ────────────────────────────────────────────────────────
function init() {
    updateModuleCounts();
    setActiveModuleBtn(1);
    switchMode('learn');   // Start in learn mode
    lucide.createIcons();
}

window.addEventListener('DOMContentLoaded', init);
