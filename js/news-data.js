// ===================================
// NEAIST Website - News Data & Archive
// Shared source for homepage previews and the archive page.
// ===================================

const NEWS_ITEMS = [
    {
        slug: 'dia-de-africa-2026',
        date: '2026-05-23',
        categoryId: 'eventos',
        category: 'Eventos',
        image: 'images/news/dia-de-africa-poster.jpeg',
        title: 'Dia de África no Técnico',
        excerpt: 'Uma celebração da cultura, identidade e comunidade africana no Técnico Innovation Center.',
        cta: 'Ler mais',
        url: 'dia-de-africa.html'
    },
    {
        slug: 'recrutamento-colaboradores-2026',
        date: '2026-05-22',
        categoryId: 'oportunidades',
        category: 'Oportunidades',
        image: 'images/news/collaboradores-2026.png',
        mediaFit: 'contain',
        title: 'Recrutamento de Colaboradores 2026',
        excerpt: 'Estão abertas as inscrições para estudantes que queiram colaborar com o NEAIST.',
        cta: 'Ler mais',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSeaPowt7ku00SvK6ykEAOBPSun59V1UjDE_cMkKSTwUMCJJ-Q/viewform?usp=header',
        external: true
    },
    {
        slug: 'faist-2026',
        date: '2026-05-16',
        categoryId: 'institucional',
        category: 'Institucional',
        placeholderLabel: 'FAIST',
        title: 'Participação no FAIST',
        excerpt: 'O NEAIST participou no Fórum Associativo do IST, reforçando a sua presença no associativismo estudantil.',
        cta: 'Ler mais',
        url: 'noticias.html#faist-2026'
    },
    {
        slug: 'semana-de-africa-ulisboa',
        date: '2026-05-09',
        categoryId: 'eventos',
        category: 'Eventos',
        image: 'images/news/semana-de-africa-ulisboa.jpg',
        title: 'Semana de África / ULisboa',
        excerpt: 'Participação e colaboração em iniciativas ligadas à Semana de África na Universidade de Lisboa.',
        cta: 'Ler mais',
        url: 'https://www.ulisboa.pt/evento/sem-margem-semana-de-africa-da-ulisboa',
        external: true
    },
    {
        slug: 'rtp-africa-30-anos',
        date: '2026-04-12',
        categoryId: 'arquivo',
        category: 'Arquivo',
        image: 'images/news/rtp-30-years.jpeg',
        title: 'RTP África 30 Anos na Gulbenkian',
        excerpt: 'Participação do NEAIST num momento de visibilidade pública e representação estudantil ligado aos 30 anos da RTP África.',
        cta: 'Ler mais',
        url: 'noticias.html#rtp-africa-30-anos'
    },
    {
        slug: 'tomada-de-posse-2026',
        date: '2026-03-27',
        categoryId: 'institucional',
        category: 'Institucional',
        image: 'images/news/tomada-posse-2026-2.jpeg',
        title: 'Tomada de Posse da Direção 2026',
        excerpt: 'O NEAIST iniciou um novo ciclo de trabalho com a tomada de posse dos seus órgãos sociais para 2026.',
        cta: 'Ler mais',
        url: 'noticias.html#tomada-de-posse-2026'
    },
    {
        slug: 'game-afternoon',
        date: '2026-02-18',
        categoryId: 'eventos',
        category: 'Eventos',
        placeholderLabel: 'Game Afternoon',
        title: 'Game Afternoon',
        excerpt: 'Um momento informal de convívio, integração e comunidade entre estudantes.',
        cta: 'Ler mais',
        url: 'noticias.html#game-afternoon'
    }
];

let activeNewsFilter = 'todos';

function sortNewsItems() {
    return [...NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date));
}

function formatNewsDate(dateString) {
    return new Intl.DateTimeFormat('pt-PT', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(`${dateString}T12:00:00`));
}

function renderNewsMedia(item) {
    if (item.image) {
        return `
            <div class="highlight-media ${item.mediaFit === 'contain' ? 'highlight-media-contain' : ''}">
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;
    }

    return `
        <div class="highlight-media highlight-media-placeholder">
            <span class="placeholder-pill">${item.category}</span>
            <strong>${item.placeholderLabel || 'NEAIST'}</strong>
            <p>${item.title}</p>
        </div>
    `;
}

function renderNewsCard(item, showButton = true) {
    const href = item.url || `noticias.html#${item.slug}`;
    const target = item.external ? ' target="_blank" rel="noopener"' : '';

    return `
        <article class="highlight-card ${showButton ? '' : 'highlight-card-compact'} fade-in-up" id="${item.slug}" data-category="${item.categoryId}">
            ${renderNewsMedia(item)}
            <div class="highlight-body">
                <span class="highlight-tag">${item.category}</span>
                <p class="news-date">${formatNewsDate(item.date)}</p>
                <h3 class="highlight-title">${item.title}</h3>
                <p class="highlight-description">${item.excerpt}</p>
                ${showButton ? `<a class="news-card-link" href="${href}"${target}>${item.cta || 'Ler mais'}</a>` : ''}
            </div>
        </article>
    `;
}

function renderHomepageNews() {
    const homeContainer = document.getElementById('homeNewsPreview');

    if (!homeContainer) {
        return;
    }

    const items = sortNewsItems().slice(0, 3);
    homeContainer.innerHTML = items.map((item, index) => {
        const markup = renderNewsCard(item, true);
        return markup.replace('fade-in-up', `fade-in-up${index ? ` delay-${index}` : ''}`);
    }).join('');
}

function renderArchiveNews() {
    const archiveContainer = document.getElementById('newsArchive');

    if (!archiveContainer) {
        return;
    }

    const items = sortNewsItems().filter((item) => {
        return activeNewsFilter === 'todos' || item.categoryId === activeNewsFilter;
    });

    archiveContainer.innerHTML = items.map((item, index) => {
        const markup = renderNewsCard(item, true);
        return markup.replace('fade-in-up', `fade-in-up${index % 3 ? ` delay-${index % 3}` : ''}`);
    }).join('');
}

function initNewsFilters() {
    const filterButtons = document.querySelectorAll('.news-filter-btn');

    if (!filterButtons.length) {
        return;
    }

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            activeNewsFilter = button.getAttribute('data-filter') || 'todos';

            filterButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            renderArchiveNews();
        });
    });
}

function renderNewsSections() {
    renderHomepageNews();
    renderArchiveNews();
}

window.renderNewsSections = renderNewsSections;

document.addEventListener('DOMContentLoaded', () => {
    renderNewsSections();
    initNewsFilters();
});
