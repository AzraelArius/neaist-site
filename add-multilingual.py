#!/usr/bin/env python3
"""
Script to add multilingual support (data-i18n attributes) to all HTML pages
"""

import re
import os

# Define pages and their navigation updates
pages = {
    'loja.html': 'Loja',
    'noticias.html': 'Notícias',
    'galeria.html': 'Galeria',
    'sobre-nos.html': 'Sobre Nós',
    'contactos.html': 'Contactos',
    'recursos.html': 'Recursos',
    'guia-caloiro.html': 'Guia do Caloiro',
    'mentoria.html': 'Programa Mentorado',
    'study-squads.html': 'Study Squads'
}

# Navigation menu template with language switcher
nav_template = '''                    <ul class="nav-list">
                        <li class="nav-item"><a href="index.html" class="nav-link{home_active}" data-i18n="nav_home">Início</a></li>
                        <li class="nav-item"><a href="sobre-nos.html" class="nav-link{about_active}" data-i18n="nav_about">Sobre Nós</a></li>
                        <li class="nav-item"><a href="loja.html" class="nav-link{shop_active}" data-i18n="nav_shop">Loja</a></li>
                        <li class="nav-item nav-item-dropdown">
                            <button type="button" class="nav-link nav-dropdown-toggle{academic_active}" data-nav-dropdown aria-expanded="false" aria-haspopup="true">
                                <span data-i18n="nav_academic">Académico</span>
                                <i class="fas fa-chevron-down" aria-hidden="true"></i>
                            </button>
                            <ul class="nav-dropdown-menu">
                                <li><a href="study-squads.html" class="nav-dropdown-link{study_active}" data-i18n="nav_study_squads">Study Squads</a></li>
                                <li><a href="mentoria.html" class="nav-dropdown-link{mentoring_active}" data-i18n="nav_mentoring">Programa Mentorado</a></li>
                                <li><a href="guia-caloiro.html" class="nav-dropdown-link{guide_active}" data-i18n="nav_guide">Guia do Caloiro</a></li>
                                <li><a href="recursos.html" class="nav-dropdown-link{resources_active}" data-i18n="nav_resources">Recursos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="noticias.html" class="nav-link{news_active}" data-i18n="nav_news">Notícias</a></li>
                        <li class="nav-item"><a href="galeria.html" class="nav-link{gallery_active}" data-i18n="nav_gallery">Galeria</a></li>
                        <li class="nav-item"><a href="contactos.html" class="nav-link{contact_active}" data-i18n="nav_contact">Contactos</a></li>
                        <li class="nav-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeaPowt7ku00SvK6ykEAOBPSun59V1UjDE_cMkKSTwUMCJJ-Q/viewform?usp=header" class="nav-link nav-link-cta" target="_blank" rel="noopener" data-i18n="nav_recruitment">Recrutamento</a></li>
                        <li class="nav-item language-switcher">
                            <button class="lang-btn active" data-lang="pt" aria-label="Português">PT</button>
                            <span class="lang-separator">|</span>
                            <button class="lang-btn lang-btn-disabled" data-lang="en" aria-label="English" disabled aria-disabled="true">EN</button>
                        </li>
                    </ul>'''

def update_navigation(filename, content):
    """Update navigation with language switcher and translation attributes"""
    
    # Determine which page is active
    active_flags = {
        'home_active': '',
        'about_active': '',
        'shop_active': '',
        'academic_active': '',
        'study_active': '',
        'news_active': '',
        'gallery_active': '',
        'resources_active': '',
        'guide_active': '',
        'mentoring_active': '',
        'contact_active': ''
    }
    
    if 'index.html' in filename:
        active_flags['home_active'] = ' active'
    elif 'sobre-nos.html' in filename:
        active_flags['about_active'] = ' active'
    elif 'loja.html' in filename:
        active_flags['shop_active'] = ' active'
    elif 'noticias.html' in filename:
        active_flags['news_active'] = ' active'
    elif 'galeria.html' in filename:
        active_flags['gallery_active'] = ' active'
    elif 'recursos.html' in filename:
        active_flags['academic_active'] = ' active'
        active_flags['resources_active'] = ' active'
    elif 'guia-caloiro.html' in filename:
        active_flags['academic_active'] = ' active'
        active_flags['guide_active'] = ' active'
    elif 'mentoria.html' in filename:
        active_flags['academic_active'] = ' active'
        active_flags['mentoring_active'] = ' active'
    elif 'study-squads.html' in filename:
        active_flags['academic_active'] = ' active'
        active_flags['study_active'] = ' active'
    elif 'contactos.html' in filename:
        active_flags['contact_active'] = ' active'
    
    nav = nav_template.format(**active_flags)
    
    # Replace old navigation
    pattern = r'<ul class="nav-list">.*?</ul>'
    content = re.sub(pattern, nav, content, flags=re.DOTALL)
    
    return content

def add_language_script(content):
    """Add languages.js script before main.js"""
    
    if 'languages.js' not in content:
        content = content.replace(
            '<script src="js/main.js">',
            '<script src="js/languages.js"></script>\n    <script src="js/main.js">'
        )
    
    return content

def process_file(filename):
    """Process a single HTML file"""
    
    if not os.path.exists(filename):
        print(f"✗ {filename} not found")
        return
    
    print(f"Processing {filename}...")
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update navigation
    content = update_navigation(filename, content)
    
    # Add language script
    content = add_language_script(content)
    
    # Write back
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {filename} updated")

def main():
    print("Adding multilingual support to all pages...\n")
    
    # Process all pages
    for page in pages.keys():
        process_file(page)
    
    print("\nDone! All pages now have multilingual support.")
    print("\nNext steps:")
    print("1. Review each page and add data-i18n attributes to specific content")
    print("2. Test language switching in the browser")
    print("3. Add more translations to js/languages.js as needed")

if __name__ == '__main__':
    main()
