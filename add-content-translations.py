#!/usr/bin/env python3
"""
Add data-i18n attributes to all page content
"""

import re

def add_translations_to_recursos():
    """Add translations to recursos.html"""
    
    file_path = 'recursos.html'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    replacements = [
        # Page header
        (r'<h1 class="page-title fade-in-up">Recursos</h1>',
         '<h1 class="page-title fade-in-up" data-i18n="resources_title">Recursos</h1>'),
        (r'<p class="page-subtitle fade-in-up delay-1">Ferramentas e materiais para te ajudar no teu percurso académico</p>',
         '<p class="page-subtitle fade-in-up delay-1" data-i18n="resources_subtitle">Ferramentas e materiais para te ajudar no teu percurso académico</p>'),
        
        # Category titles
        (r'<h2>Recursos Académicos</h2>',
         '<h2 data-i18n="resource_cat1_title">Recursos Académicos</h2>'),
        (r'<h4>Apontamentos & Resumos</h4>',
         '<h4 data-i18n="resource1_1_title">Apontamentos & Resumos</h4>'),
        (r'<p>Materiais de estudo partilhados pela comunidade</p>',
         '<p data-i18n="resource1_1_desc">Materiais de estudo partilhados pela comunidade</p>', 1),
        (r'<h4>Tutoriais de Estudo</h4>',
         '<h4 data-i18n="resource1_2_title">Tutoriais de Estudo</h4>'),
        (r'<p>Guias e técnicas de estudo eficazes</p>',
         '<p data-i18n="resource1_2_desc">Guias e técnicas de estudo eficazes</p>', 1),
        (r'<h4>Ferramentas de Estudo</h4>',
         '<h4 data-i18n="resource1_3_title">Ferramentas de Estudo</h4>'),
        (r'<p>Calculadoras, simuladores e apps úteis</p>',
         '<p data-i18n="resource1_3_desc">Calculadoras, simuladores e apps úteis</p>', 1),
        
        # Administrative Resources
        (r'<h2>Recursos Administrativos</h2>',
         '<h2 data-i18n="resource_cat2_title">Recursos Administrativos</h2>'),
        (r'<h4>Documentação Legal</h4>',
         '<h4 data-i18n="resource2_1_title">Documentação Legal</h4>'),
        (r'<p>Guias sobre vistos, autorizações de residência, etc.</p>',
         '<p data-i18n="resource2_1_desc">Guias sobre vistos, autorizações de residência, etc.</p>', 1),
        (r'<h4>Alojamento</h4>',
         '<h4 data-i18n="resource2_2_title">Alojamento</h4>'),
        (r'<p>Informações sobre residências e apartamentos</p>',
         '<p data-i18n="resource2_2_desc">Informações sobre residências e apartamentos</p>', 1),
        (r'<h4>Apoios Financeiros</h4>',
         '<h4 data-i18n="resource2_3_title">Apoios Financeiros</h4>'),
        (r'<p>Bolsas, fundos de emergência e apoios disponíveis</p>',
         '<p data-i18n="resource2_3_desc">Bolsas, fundos de emergência e apoios disponíveis</p>', 1),
        
        # Living in Lisbon
        (r'<h2>Viver em Lisboa</h2>',
         '<h2 data-i18n="resource_cat3_title">Viver em Lisboa</h2>'),
        (r'<h4>Transportes</h4>',
         '<h4 data-i18n="resource3_1_title">Transportes</h4>'),
        (r'<p>Guia de transportes públicos em Lisboa</p>',
         '<p data-i18n="resource3_1_desc">Guia de transportes públicos em Lisboa</p>', 1),
        (r'<h4>Restaurantes & Cafés</h4>',
         '<h4 data-i18n="resource3_2_title">Restaurantes & Cafés</h4>'),
        (r'<p>Melhores sítios para comer em Lisboa</p>',
         '<p data-i18n="resource3_2_desc">Melhores sítios para comer em Lisboa</p>', 1),
        (r'<h4>Pontos de Interesse</h4>',
         '<h4 data-i18n="resource3_3_title">Pontos de Interesse</h4>'),
        (r'<p>Locais a visitar e atividades de lazer</p>',
         '<p data-i18n="resource3_3_desc">Locais a visitar e atividades de lazer</p>', 1),
        
        # Health & Wellbeing
        (r'<h2>Saúde & Bem-estar</h2>',
         '<h2 data-i18n="resource_cat4_title">Saúde & Bem-estar</h2>'),
        (r'<h4>Serviços de Saúde</h4>',
         '<h4 data-i18n="resource4_1_title">Serviços de Saúde</h4>'),
        (r'<p>Centros de saúde e hospitais próximos</p>',
         '<p data-i18n="resource4_1_desc">Centros de saúde e hospitais próximos</p>', 1),
        (r'<h4>Apoio Psicológico</h4>',
         '<h4 data-i18n="resource4_2_title">Apoio Psicológico</h4>'),
        (r'<p>Serviços de apoio psicológico no IST</p>',
         '<p data-i18n="resource4_2_desc">Serviços de apoio psicológico no IST</p>', 1),
        (r'<h4>Desporto & Fitness</h4>',
         '<h4 data-i18n="resource4_3_title">Desporto & Fitness</h4>'),
        (r'<p>Ginásios e instalações desportivas</p>',
         '<p data-i18n="resource4_3_desc">Ginásios e instalações desportivas</p>', 1),
        
        # Useful Links
        (r'<h2 class="section-title">Links Úteis</h2>',
         '<h2 class="section-title" data-i18n="useful_links_title">Links Úteis</h2>'),
        (r'<h4>Fénix</h4>',
         '<h4 data-i18n="link1_title">Fénix</h4>'),
        (r'<p>Portal académico do IST</p>',
         '<p data-i18n="link1_desc">Portal académico do IST</p>', 1),
        (r'<h4>IST</h4>',
         '<h4 data-i18n="link2_title">IST</h4>'),
        (r'<p>Website oficial do Técnico</p>',
         '<p data-i18n="link2_desc">Website oficial do Técnico</p>', 1),
        (r'<h4>Bibliotecas</h4>',
         '<h4 data-i18n="link3_title">Bibliotecas</h4>'),
        (r'<p>Sistema de bibliotecas do IST</p>',
         '<p data-i18n="link3_desc">Sistema de bibliotecas do IST</p>', 1),
        (r'<h4>Carreiras</h4>',
         '<h4 data-i18n="link4_title">Carreiras</h4>'),
        (r'<p>Serviços de apoio à carreira</p>',
         '<p data-i18n="link4_desc">Serviços de apoio à carreira</p>', 1),
    ]
    
    for pattern, replacement, *count in replacements:
        if count:
            content = re.sub(pattern, replacement, content, count=count[0])
        else:
            content = re.sub(pattern, replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {file_path} updated with translations")

if __name__ == '__main__':
    add_translations_to_recursos()
    print("Done!")
