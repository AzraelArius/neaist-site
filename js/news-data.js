// ===================================
// NEAIST Website - News Data & Rendering
// Add new images to /images/news and a new item to NEWS_ITEMS.
// ===================================

const NEWS_ITEMS = [
    {
        slug: 'dia-de-africa-2026',
        date: '2026-05-23',
        image: 'images/news/dia-de-africa-poster.jpeg',
        category: {
            pt: 'Evento',
            en: 'Event'
        },
        title: {
            pt: 'Dia de Africa no Tecnico',
            en: 'Africa Day at Tecnico'
        },
        excerpt: {
            pt: 'No dia 27 de maio, o NEAIST celebra o Dia de Africa no Tecnico Innovation Center com musica, cultura, convivio e orgulho africano.',
            en: 'On May 27, NEAIST celebrates Africa Day at Tecnico Innovation Center with music, culture, community, and African pride.'
        },
        cta: {
            pt: 'Ver evento',
            en: 'View event'
        },
        url: 'dia-de-africa.html'
    },
    {
        slug: 'recruitment-2026',
        date: '2026-05-22',
        image: 'images/news/collaboradores-2026.png',
        category: {
            pt: 'Recrutamento',
            en: 'Recruitment'
        },
        title: {
            pt: 'Recrutamento Aberto para Colaboradores',
            en: 'Open Recruitment for Collaborators'
        },
        excerpt: {
            pt: 'O NEAIST está a reforçar a equipa. Procuramos colaboradores com vontade de contribuir para eventos, comunicação, apoio à comunidade e crescimento do núcleo.',
            en: 'NEAIST is expanding its team. We are looking for collaborators ready to contribute to events, communication, community support, and the growth of the association.'
        },
        cta: {
            pt: 'Candidatar-me',
            en: 'Apply Now'
        },
        mediaFit: 'contain',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSeaPowt7ku00SvK6ykEAOBPSun59V1UjDE_cMkKSTwUMCJJ-Q/viewform?usp=header',
        external: true
    },
    {
        slug: 'rtp-africa-30-anos',
        date: '2026-04-12',
        image: 'images/news/rtp-30-years.jpeg',
        category: {
            pt: 'Representação',
            en: 'Representation'
        },
        title: {
            pt: 'RTP África 30 Anos na Gulbenkian',
            en: 'RTP África 30 Years at Gulbenkian'
        },
        excerpt: {
            pt: 'Participação do núcleo num evento de forte projeção pública, reforçando as pontes entre estudantes, cultura africana e instituições parceiras em Lisboa.',
            en: 'The association took part in a high-visibility public event, strengthening ties between students, African culture, and partner institutions in Lisbon.'
        }
    },
    {
        slug: 'tomada-de-posse-2026',
        date: '2026-03-27',
        image: 'images/news/tomada-posse-2026-2.jpeg',
        category: {
            pt: 'Institucional',
            en: 'Institutional'
        },
        title: {
            pt: 'Tomada de Posse dos Órgãos Sociais do NEAIST',
            en: 'NEAIST Inauguration Ceremony'
        },
        excerpt: {
            pt: 'A nova direção assume funções num momento importante para a continuidade do trabalho associativo, com foco em representação, integração e programação cultural.',
            en: 'The new board takes office in an important moment for the continuity of NEAIST’s work, with a focus on representation, integration, and cultural programming.'
        }
    }
];

function getNewsLanguage() {
    return window.currentLanguage || 'pt';
}

function sortNewsItems() {
    return [...NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date));
}

function formatNewsDate(dateString, language) {
    const locale = language === 'en' ? 'en-GB' : 'pt-PT';
    return new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(new Date(`${dateString}T12:00:00`));
}

function renderNewsCard(item, language, showButton) {
    const title = item.title[language] || item.title.pt;
    const category = item.category[language] || item.category.pt;
    const excerpt = item.excerpt[language] || item.excerpt.pt;
    const cta = item.cta ? (item.cta[language] || item.cta.pt) : null;
    const href = item.url || `noticias.html#${item.slug}`;
    const target = item.external ? ' target="_blank" rel="noopener"' : '';

    return `
        <article class="highlight-card ${showButton ? '' : 'highlight-card-compact'} fade-in-up" id="${item.slug}">
            <div class="highlight-media ${item.mediaFit === 'contain' ? 'highlight-media-contain' : ''}">
                <img src="${item.image}" alt="${title}">
            </div>
            <div class="highlight-body">
                <span class="highlight-tag">${category}</span>
                <p class="news-date">${formatNewsDate(item.date, language)}</p>
                <h3 class="highlight-title">${title}</h3>
                <p class="highlight-description">${excerpt}</p>
                ${showButton && cta ? `<a class="news-card-link" href="${href}"${target}>${cta}</a>` : ''}
            </div>
        </article>
    `;
}

function renderNewsSections() {
    const language = getNewsLanguage();
    const items = sortNewsItems();

    const homeContainer = document.getElementById('homeNewsPreview');
    if (homeContainer) {
        homeContainer.innerHTML = items.slice(0, 3).map((item, index) => {
            const markup = renderNewsCard(item, language, Boolean(item.cta));
            return markup.replace('fade-in-up', `fade-in-up${index ? ` delay-${index}` : ''}`);
        }).join('');
    }

    const archiveContainer = document.getElementById('newsArchive');
    if (archiveContainer) {
        archiveContainer.innerHTML = items.map((item, index) => {
            const markup = renderNewsCard(item, language, Boolean(item.cta));
            return markup.replace('fade-in-up', `fade-in-up${index % 3 ? ` delay-${index % 3}` : ''}`);
        }).join('');
    }
}

window.renderNewsSections = renderNewsSections;

document.addEventListener('DOMContentLoaded', renderNewsSections);
