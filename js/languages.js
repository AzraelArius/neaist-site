// ===================================
// NEAIST Website - Multilingual Support
// Portuguese & English Translations
// ===================================

const translations = {
    pt: {
        // Navigation
        logo_subtext: "Núcleo de Estudantes Africanos no Instituto Superior Técnico",
        nav_home: "Início",
        nav_about: "Sobre Nós",
        nav_team: "Equipa",
        nav_academic: "Académico",
        nav_study_squads: "Study Squads",
        nav_news: "Notícias",
        nav_gallery: "Galeria",
        nav_resources: "Recursos",
        nav_guide: "Guia do Caloiro",
        nav_mentoring: "Programa Mentorado",
        nav_contact: "Contactos",
        nav_recruitment: "Recrutamento",
        
        // Homepage
        hero_title: "Bem-vindo ao NEAIST",
        hero_subtitle: "Núcleo dos Estudantes Africanos do Instituto Superior Técnico",
        hero_description: "Unidos pela diversidade, crescemos juntos na excelência académica e cultural",
        hero_recruitment_badge: "Recrutamento aberto para colaboradores 2026",
        hero_btn_about: "Conhecer-nos",
        hero_btn_contact: "Contactar",
        // Features
        features_title: "Comunidade africana no Técnico",
        features_subtitle: "Cultura, representação e apoio à integração para estudantes africanos no Instituto Superior Técnico.",
        hero_slide_1_tag: "Evento em destaque",
        hero_slide_1_title: "Dia de África 2026",
        hero_slide_1_desc: "Cartaz oficial e detalhes da celebração no Técnico Innovation Center.",
        hero_slide_2_tag: "Recrutamento",
        hero_slide_2_title: "Colaboradores 2026",
        hero_slide_2_desc: "Junta-te à equipa do NEAIST e participa na organização dos próximos eventos.",
        hero_slide_3_tag: "Arquivo",
        hero_slide_3_title: "Tomada de Posse",
        hero_slide_3_desc: "Momento institucional que marca o início do novo ciclo do núcleo.",
        africa_day_separator_kicker: "Dia de África 2026",
        africa_day_separator_title: "27 de Maio no Técnico Innovation Center",
        africa_day_separator_text: "Uma tarde dedicada à música, cultura, convívio e orgulho africano, com o cartaz oficial já disponível.",
        africa_day_separator_cta: "Ver cartaz e detalhes",

        // Recent Highlights
        highlights_kicker: "Atualidade NEAIST",
        highlights_title: "Notícias e iniciativas do NEAIST",
        highlights_subtitle: "Arquivo vivo com eventos, momentos institucionais, oportunidades atuais e iniciativas da comunidade africana no Técnico.",
        news_preview_button: "Ver Arquivo Completo",
        news_title: "Notícias",
        news_subtitle: "Arquivo de atividades, cerimónias, presença institucional e anúncios do NEAIST.",
        news_archive_intro: "Consulta as notícias mais recentes e usa esta secção para continuar a carregar novos eventos ao longo do ano.",
        news_archive_cta: "Recrutamento em curso",
        news_archive_cta_desc: "Estamos a receber candidaturas para colaboradores. Junta-te à equipa e ajuda a construir a próxima fase do NEAIST.",
        news_archive_cta_btn: "Abrir Formulário",

        feature1_title: "Comunidade",
        feature1_desc: "Criamos um espaço acolhedor para todos os estudantes africanos partilharem experiências e cultura",
        
        feature2_title: "Apoio Académico",
        feature2_desc: "Oferecemos recursos e mentorias para garantir o sucesso académico de todos os membros",
        
        feature3_title: "Eventos Culturais",
        feature3_desc: "Organizamos eventos que celebram a diversidade e riqueza cultural africana",
        
        feature4_title: "Programa Mentorado",
        feature4_desc: "Conectamos novos estudantes com veteranos para facilitar a integração",
        
        // Stats
        stat1_label: "Membros Ativos",
        stat2_label: "Eventos por Ano",
        stat3_label: "Países Representados",
        stat4_label: "Anos de História",
        
        // CTA
        cta_title: "Junta-te a Nós!",
        cta_description: "Faz parte de uma comunidade vibrante e acolhedora no IST",
        cta_btn: "Entra em Contacto",
        
        // Footer
        footer_description: "Núcleo dos Estudantes Africanos do Instituto Superior Técnico",
        footer_quick_links: "Links Rápidos",
        footer_contact: "Contacto",
        footer_tech_label: "Instituto Superior Técnico",
        footer_rights: "Todos os direitos reservados.",
        africa_day_page_title: "Dia de Africa",
        africa_day_page_subtitle: "Celebracao cultural organizada pelo NEAIST no Tecnico Innovation Center.",
        africa_day_kicker: "Evento em destaque",
        africa_day_title: "Dia de Africa no Tecnico",
        africa_day_description: "O NEAIST convida-te para uma celebracao inesquecivel do Dia de Africa no Tecnico.",
        africa_day_body_1: "Prepara-te para uma tarde cheia de boa musica, cultura, diversao, energia positiva, convivio e muito orgulho africano! 🪘🎶",
        africa_day_body_2: "Vai ser o momento perfeito para conhecer pessoas, celebrar a diversidade e viver o verdadeiro espirito africano. 🌍",
        africa_day_body_3: "Marca na agenda, chama os teus amigos e vem fazer parte desta festa incrivel! 🎉🔥 Todos estao convidados! 🙌🏾✨",
        africa_day_date_label: "Data",
        africa_day_date_value: "27 de Maio de 2026",
        africa_day_time_label: "Horario",
        africa_day_time_value: "14h00 as 18h00",
        africa_day_location_label: "Local",
        africa_day_location_value: "Tecnico Innovation Center (TIC)",
        africa_day_news_link: "Voltar as noticias",
        africa_day_agenda_kicker: "Programa",
        africa_day_agenda_title: "Ubuntu: Eu Sou Porque Nos Somos",
        africa_day_agenda_intro: "Agenda completa do Dia de Africa no Tecnico, com o cartaz de programa e o alinhamento horario do evento.",
        africa_day_agenda_meta_title: "27/05/2026 | 14h00 - 18h00 | Tecnico Innovation Center",
        africa_day_agenda_head_time: "Hora",
        africa_day_agenda_head_activity: "Atividade",
        africa_day_agenda_row_1: "Rececao dos participantes",
        africa_day_agenda_row_2: "Sessao de abertura: boas-vindas pelo Presidente do NEAIST",
        africa_day_agenda_row_3: "Intervencao institucional - Prof. Rogerio Colaco / Prof. Luis Castro",
        africa_day_agenda_row_4: "Apresentacao do Professor Sostenes Rego e do seu dicionario",
        africa_day_agenda_row_5: "Intervalo tecnico / troca de palco",
        africa_day_agenda_row_6: "Apresentacao da historiadora Marta Lourenco",
        africa_day_agenda_row_7: "Intervalo e visita a exposicao cultural",
        africa_day_agenda_row_8: "Quem Conta a Historia? - A Perspetiva de Quem Vive e de Quem Preserva",
        africa_day_agenda_row_9: "Perguntas do publico",
        africa_day_agenda_row_10: "Intervalo tecnico / troca de palco",
        africa_day_agenda_row_11: "Ubuntu em Conversa: O Que Nos Une",
        africa_day_agenda_row_12: "Intervalo, exposicao cultural e momento de convivio",
        africa_day_agenda_row_13: "Momento de fotografia",
        africa_day_agenda_row_14: "Encerramento e momento musical",
        africa_day_agenda_row_15: "Sunset Picnic informal / convivio pos-evento",
        africa_day_merch_kicker: "Espaco para merch",
        africa_day_merch_title: "Loja online em preparacao",
        africa_day_merch_intro: "Esta pagina ja mostra algumas pecas de merchandising do NEAIST e fica pronta para receber a loja completa quando quiseres.",
        africa_day_merch_card_1_title: "Garrafa NEAIST",
        africa_day_merch_card_1_desc: "Preview do design da garrafa para a colecao do evento e futuras vendas online.",
        africa_day_merch_card_2_title: "Bone NEAIST",
        africa_day_merch_card_2_desc: "Modelo de bone para o merchandising do Dia de Africa e para a loja do nucleo.",
        africa_day_merch_card_3_title: "Tote Bag NEAIST",
        africa_day_merch_card_3_desc: "Tote bag pronta para integrar a loja com outros produtos e edicoes especiais.",
        africa_day_merch_note: "Quando quiseres avancar para a loja, esta secao pode ser ligada a produtos reais ou a um formulario de encomenda.",
        
        // About Page
        about_title: "Sobre Nós",
        about_subtitle: "Conheça a nossa história, missão e valores",
        about_who_title: "Quem Somos",
        about_who_p1: "O NEAIST (Núcleo dos Estudantes Africanos do Instituto Superior Técnico) é uma associação estudantil que tem como objetivo principal criar um ambiente acolhedor e de apoio para estudantes africanos no IST.",
        about_who_p2: "Fundado há mais de uma década, o NEAIST cresceu para se tornar uma das comunidades mais vibrantes e diversificadas do campus, representando estudantes de mais de 15 países africanos.",
        
        about_mission_title: "Missão",
        about_mission_desc: "Promover a integração, apoio académico e cultural dos estudantes africanos no IST, criando uma rede de suporte que facilita a adaptação e o sucesso académico.",
        
        about_vision_title: "Visão",
        about_vision_desc: "Ser a principal comunidade de referência para estudantes africanos em Portugal, promovendo a excelência académica e a riqueza cultural africana.",
        
        about_values_title: "Valores",
        about_values_desc: "Solidariedade, diversidade cultural, excelência académica, união, respeito mútuo e compromisso com o desenvolvimento da comunidade.",
        
        about_what_title: "O Que Fazemos",
        about_what_subtitle: "As nossas principais atividades e iniciativas",
        
        activity1_title: "Sessões de Estudo",
        activity1_desc: "Organizamos grupos de estudo e sessões de esclarecimento de dúvidas para apoiar o sucesso académico",
        
        activity2_title: "Eventos Culturais",
        activity2_desc: "Celebramos a diversidade africana através de eventos culturais, gastronomia e música",
        
        activity3_title: "Mentoria",
        activity3_desc: "Conectamos novos estudantes com veteranos para facilitar a integração no IST",
        
        activity4_title: "Networking",
        activity4_desc: "Criamos oportunidades de networking com profissionais e alumni africanos",
        
        activity5_title: "Desporto & Lazer",
        activity5_desc: "Organizamos atividades desportivas e sociais para fortalecer os laços da comunidade",
        
        activity6_title: "Palestras & Workshops",
        activity6_desc: "Promovemos palestras sobre temas académicos, profissionais e culturais",
        
        // Contact Page
        contact_title: "Contactos",
        contact_subtitle: "Estamos aqui para ajudar. Entre em contacto connosco!",
        contact_direct_title: "Fala connosco",
        contact_direct_intro: "Para dúvidas, parcerias ou informações sobre as nossas atividades, usa um dos canais abaixo.",
        contact_instagram_title: "Instagram",
        contact_instagram_text: "Envia-nos mensagem direta e acompanha as nossas novidades.",
        contact_email_text: "Escreve-nos diretamente para esclarecimentos, propostas ou contacto institucional.",
        contact_form_title: "Envie-nos uma Mensagem",
        contact_info_title: "Informações de Contacto",
        
        form_name: "Nome Completo",
        form_email: "Email",
        form_subject: "Assunto",
        form_message: "Mensagem",
        form_submit: "Enviar Mensagem",
        
        contact_email_title: "Email",
        contact_location_title: "Localização",
        contact_location_text: "Instituto Superior Técnico",
        contact_location_address: "Av. Rovisco Pais, 1049-001 Lisboa",
        contact_hours_title: "Horário",
        contact_hours_text: "Segunda a Sexta: 10h - 18h",
        contact_hours_weekend: "Fins de semana: Eventos especiais",
        contact_social_title: "Redes Sociais",
        contact_map_title: "Como Chegar",
        contact_map_hint: "Alameda Campus - Av. Rovisco Pais, 1049-001 Lisboa",
        
        // Resources Page
        resources_title: "Recursos",
        resources_subtitle: "Ferramentas e materiais para te ajudar no teu percurso académico",
        
        resource_cat1_title: "Recursos Académicos",
        resource1_1_title: "Apontamentos & Resumos",
        resource1_1_desc: "Materiais de estudo partilhados pela comunidade",
        resource1_2_title: "Tutoriais de Estudo",
        resource1_2_desc: "Guias e técnicas de estudo eficazes",
        resource1_3_title: "Ferramentas de Estudo",
        resource1_3_desc: "Calculadoras, simuladores e apps úteis",
        
        resource_cat2_title: "Recursos Administrativos",
        resource2_1_title: "Documentação Legal",
        resource2_1_desc: "Guias sobre vistos, autorizações de residência, etc.",
        resource2_2_title: "Alojamento",
        resource2_2_desc: "Informações sobre residências e apartamentos",
        resource2_3_title: "Apoios Financeiros",
        resource2_3_desc: "Bolsas, fundos de emergência e apoios disponíveis",
        
        resource_cat3_title: "Viver em Lisboa",
        resource3_1_title: "Transportes",
        resource3_1_desc: "Guia de transportes públicos em Lisboa",
        resource3_2_title: "Restaurantes & Cafés",
        resource3_2_desc: "Melhores sítios para comer em Lisboa",
        resource3_3_title: "Pontos de Interesse",
        resource3_3_desc: "Locais a visitar e atividades de lazer",
        
        resource_cat4_title: "Saúde & Bem-estar",
        resource4_1_title: "Serviços de Saúde",
        resource4_1_desc: "Centros de saúde e hospitais próximos",
        resource4_2_title: "Apoio Psicológico",
        resource4_2_desc: "Serviços de apoio psicológico no IST",
        resource4_3_title: "Desporto & Fitness",
        resource4_3_desc: "Ginásios e instalações desportivas",
        
        useful_links_title: "Links Úteis",
        link1_title: "Fénix",
        link1_desc: "Portal académico do IST",
        link2_title: "IST",
        link2_desc: "Website oficial do Técnico",
        link3_title: "Bibliotecas",
        link3_desc: "Sistema de bibliotecas do IST",
        link4_title: "Carreiras",
        link4_desc: "Serviços de apoio à carreira",
        
        // Guide Page
        guide_title: "Guia do Caloiro",
        guide_subtitle: "Bem-vindo ao IST! Estamos aqui para te ajudar a começar",
        guide_welcome_title: "Bem-vindo ao Instituto Superior Técnico!",
        guide_welcome_p1: "Parabéns por teres ingressado no IST! Este é o início de uma jornada incrível de aprendizagem, crescimento e novas experiências. Este guia foi criado para te ajudar a navegar pelos primeiros passos desta nova etapa da tua vida.",
        guide_docs_kicker: "Guias PDF",
        guide_docs_title: "Documentos de apoio para novos estudantes",
        guide_docs_subtitle: "Acede diretamente aos dois guias preparados para te acompanhar nos primeiros passos no Técnico.",
        guide_doc1_title: "Guia 1 - Primeiros Passos",
        guide_doc1_desc: "Introdução essencial para novos alunos, com orientações iniciais sobre adaptação, organização e vida académica.",
        guide_doc2_title: "Guia 2 - Próximos Passos",
        guide_doc2_desc: "Guia complementar com informação prática para os primeiros tempos no IST e integração no campus.",

        guide_steps_title: "Primeiros Passos",
        guide_step1_title: "Antes de Chegares",
        guide_step2_title: "Primeira Semana",
        guide_step3_title: "Primeiro Mês",
        
        guide_info_title: "Informações Essenciais",
        guide_info1_title: "Sistema Académico",
        guide_info1_desc: "O IST usa o sistema ECTS. Um semestre típico tem 30 ECTS (5-6 cadeiras). Precisas de 180 ECTS para a licenciatura e 120 ECTS para o mestrado.",
        guide_info2_title: "Calendário Académico",
        guide_info2_desc: "O ano académico divide-se em dois semestres: Setembro-Janeiro e Fevereiro-Junho. Há períodos de exames em Janeiro/Fevereiro e Junho/Julho.",
        guide_info3_title: "Métodos de Estudo",
        guide_info3_desc: "O IST é exigente! Organiza o teu tempo, estuda regularmente, participa nas aulas e não hesites em pedir ajuda quando precisares.",
        guide_info4_title: "Apoio Disponível",
        guide_info4_desc: "O IST oferece tutorias, gabinete de apoio ao estudante, serviços de saúde mental e muito mais. O NEAIST também está aqui para ti!",
        
        faq_title: "Perguntas Frequentes",
        
        // Mentoring Page
        mentoring_title: "Programa Mentorado",
        mentoring_subtitle: "Conectamos novos estudantes com veteranos para facilitar a integração",
        mentoring_what_title: "O Que é o Programa Mentorado?",
        mentoring_what_p1: "O Programa Mentorado do NEAIST é uma iniciativa que visa facilitar a integração de novos estudantes africanos no IST, conectando-os com estudantes veteranos que já passaram pelos mesmos desafios.",
        mentoring_what_p2: "Cada caloiro é emparelhado com um mentor que o acompanhará durante o primeiro ano, oferecendo apoio académico, orientação sobre a vida em Lisboa e ajudando na adaptação à cultura universitária portuguesa.",
        
        mentoring_benefits_title: "Benefícios do Programa",
        mentoring_for_mentees: "Para Mentorados",
        mentoring_for_mentors: "Para Mentores",
        
        mentoring_how_title: "Como Funciona?",
        mentoring_step1_title: "Inscrição",
        mentoring_step1_desc: "Caloiros e estudantes veteranos interessados preenchem um formulário de inscrição indicando os seus interesses, curso e disponibilidade.",
        mentoring_step2_title: "Emparelhamento",
        mentoring_step2_desc: "A equipa do NEAIST analisa os perfis e emparelha mentores e mentorados com base em curso, interesses e compatibilidade.",
        mentoring_step3_title: "Primeiro Encontro",
        mentoring_step3_desc: "É organizado um evento de kick-off onde mentores e mentorados se conhecem pessoalmente e recebem orientações sobre o programa.",
        mentoring_step4_title: "Acompanhamento",
        mentoring_step4_desc: "Durante o ano, mentores e mentorados reúnem-se regularmente. O NEAIST organiza eventos e atividades para todos os participantes.",
        
        mentoring_testimonials_title: "O Que Dizem os Participantes",
        mentoring_cta_title: "Quer Participar?",
        mentoring_cta_desc: "Seja como mentor ou mentorado, junta-te ao programa e faz parte desta iniciativa!",
        mentoring_cta_btn1: "Inscrever como Mentorado",
        mentoring_cta_btn2: "Ser Mentor",
    },
    
    en: {
        // Navigation
        logo_subtext: "African Students Association at Instituto Superior Técnico",
        nav_home: "Home",
        nav_about: "About Us",
        nav_team: "Team",
        nav_academic: "Academic",
        nav_study_squads: "Study Squads",
        nav_news: "News",
        nav_gallery: "Gallery",
        nav_resources: "Resources",
        nav_guide: "Freshman Guide",
        nav_mentoring: "Mentoring Program",
        nav_contact: "Contact",
        nav_recruitment: "Recruitment",
        
        // Homepage
        hero_title: "Welcome to NEAIST",
        hero_subtitle: "African Students Association at Instituto Superior Técnico",
        hero_description: "United in diversity, we grow together in academic and cultural excellence",
        hero_recruitment_badge: "Open recruitment for 2026 collaborators",
        hero_btn_about: "Learn More",
        hero_btn_contact: "Contact Us",
        // Features
        features_title: "African student community at Técnico",
        features_subtitle: "Culture, representation and integration support for African students at Instituto Superior Técnico.",
        hero_slide_1_tag: "Featured event",
        hero_slide_1_title: "Africa Day 2026",
        hero_slide_1_desc: "Official poster and event details for the celebration at Tecnico Innovation Center.",
        hero_slide_2_tag: "Recruitment",
        hero_slide_2_title: "Collaborators 2026",
        hero_slide_2_desc: "Join the NEAIST team and help organize the next wave of events.",
        hero_slide_3_tag: "Archive",
        hero_slide_3_title: "Inauguration Ceremony",
        hero_slide_3_desc: "An institutional moment marking the beginning of the association's new cycle.",
        africa_day_separator_kicker: "Africa Day 2026",
        africa_day_separator_title: "May 27 at Tecnico Innovation Center",
        africa_day_separator_text: "An afternoon dedicated to music, culture, community, and African pride, with the official poster now live.",
        africa_day_separator_cta: "View poster and details",

        // Recent Highlights
        highlights_kicker: "NEAIST Updates",
        highlights_title: "NEAIST news and initiatives",
        highlights_subtitle: "A living archive of events, institutional moments, current opportunities and initiatives for African students at Técnico.",
        news_preview_button: "View Full Archive",
        news_title: "News",
        news_subtitle: "Archive of activities, ceremonies, institutional visibility, and announcements from NEAIST.",
        news_archive_intro: "Browse the latest updates and use this section to keep adding new events throughout the year.",
        news_archive_cta: "Recruitment Ongoing",
        news_archive_cta_desc: "We are currently receiving applications for collaborators. Join the team and help shape NEAIST’s next phase.",
        news_archive_cta_btn: "Open Form",

        feature1_title: "Community",
        feature1_desc: "We create a welcoming space for all African students to share experiences and culture",
        
        feature2_title: "Academic Support",
        feature2_desc: "We offer resources and mentoring to ensure academic success for all members",
        
        feature3_title: "Cultural Events",
        feature3_desc: "We organize events that celebrate African diversity and cultural richness",
        
        feature4_title: "Mentoring Program",
        feature4_desc: "We connect new students with veterans to facilitate integration",
        
        // Stats
        stat1_label: "Active Members",
        stat2_label: "Events per Year",
        stat3_label: "Countries Represented",
        stat4_label: "Years of History",
        
        // CTA
        cta_title: "Join Us!",
        cta_description: "Be part of a vibrant and welcoming community at IST",
        cta_btn: "Get in Touch",
        
        // Footer
        footer_description: "African Students Association at Instituto Superior Técnico",
        footer_quick_links: "Quick Links",
        footer_contact: "Contact",
        footer_tech_label: "Instituto Superior Técnico",
        footer_rights: "All rights reserved.",
        africa_day_page_title: "Africa Day",
        africa_day_page_subtitle: "Cultural celebration hosted by NEAIST at Tecnico Innovation Center.",
        africa_day_kicker: "Featured event",
        africa_day_title: "Africa Day at Tecnico",
        africa_day_description: "NEAIST invites you to an unforgettable celebration of Africa Day at Tecnico.",
        africa_day_body_1: "Get ready for an afternoon full of great music, culture, fun, positive energy, socializing, and lots of African pride! 🪘🎶",
        africa_day_body_2: "It will be the perfect moment to meet new people, celebrate diversity, and experience the true African spirit. 🌍",
        africa_day_body_3: "Save the date, invite your friends, and come be part of this amazing celebration! 🎉🔥 Everyone is invited! 🙌🏾✨",
        africa_day_date_label: "Date",
        africa_day_date_value: "May 27, 2026",
        africa_day_time_label: "Time",
        africa_day_time_value: "2:00 PM to 6:00 PM",
        africa_day_location_label: "Location",
        africa_day_location_value: "Tecnico Innovation Center (TIC)",
        africa_day_news_link: "Back to news",
        africa_day_agenda_kicker: "Programme",
        africa_day_agenda_title: "Ubuntu: I Am Because We Are",
        africa_day_agenda_intro: "Full Africa Day at Tecnico schedule, including the programme poster and the event timeline.",
        africa_day_agenda_meta_title: "27/05/2026 | 2:00 PM - 6:00 PM | Tecnico Innovation Center",
        africa_day_agenda_head_time: "Time",
        africa_day_agenda_head_activity: "Activity",
        africa_day_agenda_row_1: "Participant reception",
        africa_day_agenda_row_2: "Opening session: welcome by the NEAIST President",
        africa_day_agenda_row_3: "Institutional address - Prof. Rogerio Colaco / Prof. Luis Castro",
        africa_day_agenda_row_4: "Presentation by Professor Sostenes Rego and his dictionary",
        africa_day_agenda_row_5: "Technical break / stage change",
        africa_day_agenda_row_6: "Presentation by historian Marta Lourenco",
        africa_day_agenda_row_7: "Break and visit to the cultural exhibition",
        africa_day_agenda_row_8: "Who Tells the Story? - The Perspective of Those Who Live It and Those Who Preserve It",
        africa_day_agenda_row_9: "Audience questions",
        africa_day_agenda_row_10: "Technical break / stage change",
        africa_day_agenda_row_11: "Ubuntu in Conversation: What Unites Us",
        africa_day_agenda_row_12: "Break, cultural exhibition, and social moment",
        africa_day_agenda_row_13: "Group photo moment",
        africa_day_agenda_row_14: "Closing and musical moment",
        africa_day_agenda_row_15: "Informal sunset picnic / post-event social gathering",
        africa_day_merch_kicker: "Merch space",
        africa_day_merch_title: "Online shop coming soon",
        africa_day_merch_intro: "This page already shows some NEAIST merchandise pieces and is ready to expand into a full shop later.",
        africa_day_merch_card_1_title: "NEAIST Bottle",
        africa_day_merch_card_1_desc: "Preview of the bottle design for the event collection and future online sales.",
        africa_day_merch_card_2_title: "NEAIST Cap",
        africa_day_merch_card_2_desc: "Cap model for the Africa Day merchandise line and the association shop.",
        africa_day_merch_card_3_title: "NEAIST Tote Bag",
        africa_day_merch_card_3_desc: "Tote bag ready to be part of the shop alongside other products and special editions.",
        africa_day_merch_note: "When you are ready to launch the shop, this section can connect to real products or an order form.",
        
        // About Page
        about_title: "About Us",
        about_subtitle: "Learn about our history, mission and values",
        about_who_title: "Who We Are",
        about_who_p1: "NEAIST (African Students Association at Instituto Superior Técnico) is a student association whose main objective is to create a welcoming and supportive environment for African students at IST.",
        about_who_p2: "Founded over a decade ago, NEAIST has grown to become one of the most vibrant and diverse communities on campus, representing students from over 15 African countries.",
        
        about_mission_title: "Mission",
        about_mission_desc: "To promote the integration, academic and cultural support of African students at IST, creating a support network that facilitates adaptation and academic success.",
        
        about_vision_title: "Vision",
        about_vision_desc: "To be the leading reference community for African students in Portugal, promoting academic excellence and African cultural richness.",
        
        about_values_title: "Values",
        about_values_desc: "Solidarity, cultural diversity, academic excellence, unity, mutual respect and commitment to community development.",
        
        about_what_title: "What We Do",
        about_what_subtitle: "Our main activities and initiatives",
        
        activity1_title: "Study Sessions",
        activity1_desc: "We organize study groups and Q&A sessions to support academic success",
        
        activity2_title: "Cultural Events",
        activity2_desc: "We celebrate African diversity through cultural events, gastronomy and music",
        
        activity3_title: "Mentoring",
        activity3_desc: "We connect new students with veterans to facilitate integration at IST",
        
        activity4_title: "Networking",
        activity4_desc: "We create networking opportunities with African professionals and alumni",
        
        activity5_title: "Sports & Leisure",
        activity5_desc: "We organize sports and social activities to strengthen community bonds",
        
        activity6_title: "Lectures & Workshops",
        activity6_desc: "We promote lectures on academic, professional and cultural topics",
        
        // Contact Page
        contact_title: "Contact",
        contact_subtitle: "We're here to help. Get in touch with us!",
        contact_form_title: "Send Us a Message",
        contact_info_title: "Contact Information",
        
        form_name: "Full Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_submit: "Send Message",
        
        contact_email_title: "Email",
        contact_location_title: "Location",
        contact_location_text: "Instituto Superior Técnico",
        contact_location_address: "Av. Rovisco Pais, 1049-001 Lisbon",
        contact_hours_title: "Hours",
        contact_hours_text: "Monday to Friday: 10am - 6pm",
        contact_hours_weekend: "Weekends: Special events",
        contact_social_title: "Social Media",
        contact_map_title: "How to Get Here",
        contact_map_hint: "Alameda Campus - Av. Rovisco Pais, 1049-001 Lisbon",
        
        // Resources Page
        resources_title: "Resources",
        resources_subtitle: "Tools and materials to help you on your academic journey",
        
        resource_cat1_title: "Academic Resources",
        resource1_1_title: "Notes & Summaries",
        resource1_1_desc: "Study materials shared by the community",
        resource1_2_title: "Study Tutorials",
        resource1_2_desc: "Effective study guides and techniques",
        resource1_3_title: "Study Tools",
        resource1_3_desc: "Calculators, simulators and useful apps",
        
        resource_cat2_title: "Administrative Resources",
        resource2_1_title: "Legal Documentation",
        resource2_1_desc: "Guides on visas, residence permits, etc.",
        resource2_2_title: "Accommodation",
        resource2_2_desc: "Information about residences and apartments",
        resource2_3_title: "Financial Support",
        resource2_3_desc: "Scholarships, emergency funds and available support",
        
        resource_cat3_title: "Living in Lisbon",
        resource3_1_title: "Transportation",
        resource3_1_desc: "Public transportation guide in Lisbon",
        resource3_2_title: "Restaurants & Cafés",
        resource3_2_desc: "Best places to eat in Lisbon",
        resource3_3_title: "Points of Interest",
        resource3_3_desc: "Places to visit and leisure activities",
        
        resource_cat4_title: "Health & Wellbeing",
        resource4_1_title: "Health Services",
        resource4_1_desc: "Nearby health centers and hospitals",
        resource4_2_title: "Psychological Support",
        resource4_2_desc: "Psychological support services at IST",
        resource4_3_title: "Sports & Fitness",
        resource4_3_desc: "Gyms and sports facilities",
        
        useful_links_title: "Useful Links",
        link1_title: "Fénix",
        link1_desc: "IST academic portal",
        link2_title: "IST",
        link2_desc: "Official Técnico website",
        link3_title: "Libraries",
        link3_desc: "IST library system",
        link4_title: "Careers",
        link4_desc: "Career support services",
        
        // Guide Page
        guide_title: "Freshman Guide",
        guide_subtitle: "Welcome to IST! We're here to help you get started",
        guide_welcome_title: "Welcome to Instituto Superior Técnico!",
        guide_welcome_p1: "Congratulations on joining IST! This is the beginning of an incredible journey of learning, growth and new experiences. This guide was created to help you navigate the first steps of this new chapter in your life.",
        guide_docs_kicker: "PDF Guides",
        guide_docs_title: "Support documents for new students",
        guide_docs_subtitle: "Access the two guides prepared to accompany you through your first steps at Técnico.",
        guide_doc1_title: "Guide 1 - First Steps",
        guide_doc1_desc: "Essential introduction for new students, with initial guidance on adaptation, organization, and academic life.",
        guide_doc2_title: "Guide 2 - Next Steps",
        guide_doc2_desc: "Complementary guide with practical information for your first period at IST and integration on campus.",

        guide_steps_title: "First Steps",
        guide_step1_title: "Before Arriving",
        guide_step2_title: "First Week",
        guide_step3_title: "First Month",
        
        guide_info_title: "Essential Information",
        guide_info1_title: "Academic System",
        guide_info1_desc: "IST uses the ECTS system. A typical semester has 30 ECTS (5-6 courses). You need 180 ECTS for a bachelor's degree and 120 ECTS for a master's degree.",
        guide_info2_title: "Academic Calendar",
        guide_info2_desc: "The academic year is divided into two semesters: September-January and February-June. There are exam periods in January/February and June/July.",
        guide_info3_title: "Study Methods",
        guide_info3_desc: "IST is demanding! Organize your time, study regularly, participate in classes and don't hesitate to ask for help when you need it.",
        guide_info4_title: "Available Support",
        guide_info4_desc: "IST offers tutoring, student support office, mental health services and much more. NEAIST is also here for you!",
        
        faq_title: "Frequently Asked Questions",
        
        // Mentoring Page
        mentoring_title: "Mentoring Program",
        mentoring_subtitle: "Connecting new students with veterans to facilitate integration",
        mentoring_what_title: "What is the Mentoring Program?",
        mentoring_what_p1: "NEAIST's Mentoring Program is an initiative aimed at facilitating the integration of new African students at IST by connecting them with veteran students who have already faced the same challenges.",
        mentoring_what_p2: "Each freshman is paired with a mentor who will accompany them during their first year, offering academic support, guidance on life in Lisbon and helping with adaptation to Portuguese university culture.",
        
        mentoring_benefits_title: "Program Benefits",
        mentoring_for_mentees: "For Mentees",
        mentoring_for_mentors: "For Mentors",
        
        mentoring_how_title: "How Does It Work?",
        mentoring_step1_title: "Registration",
        mentoring_step1_desc: "Interested freshmen and veteran students fill out a registration form indicating their interests, course and availability.",
        mentoring_step2_title: "Matching",
        mentoring_step2_desc: "The NEAIST team analyzes the profiles and matches mentors and mentees based on course, interests and compatibility.",
        mentoring_step3_title: "First Meeting",
        mentoring_step3_desc: "A kick-off event is organized where mentors and mentees meet in person and receive guidance about the program.",
        mentoring_step4_title: "Follow-up",
        mentoring_step4_desc: "Throughout the year, mentors and mentees meet regularly. NEAIST organizes events and activities for all participants.",
        
        mentoring_testimonials_title: "What Participants Say",
        mentoring_cta_title: "Want to Participate?",
        mentoring_cta_desc: "Whether as a mentor or mentee, join the program and be part of this initiative!",
        mentoring_cta_btn1: "Register as Mentee",
        mentoring_cta_btn2: "Become a Mentor",
    }
};

const pageCopy = {
    common: {
        pt: {
            footerLocation: "Instituto Superior Técnico, Lisboa",
            footerCopyright: "© 2026 NEAIST. Todos os direitos reservados."
        },
        en: {
            footerLocation: "Instituto Superior Técnico, Lisbon",
            footerCopyright: "© 2026 NEAIST. All rights reserved."
        }
    },
    "index.html": {
        pt: {
            title: "NEAIST — Núcleo de Estudantes Africanos do Instituto Superior Técnico",
            description: "Website oficial do NEAIST, Núcleo de Estudantes Africanos do Instituto Superior Técnico. Comunidade, integração, cultura e apoio académico para estudantes africanos no IST.",
            heroKicker: "NEAIST 2026",
            heroTitle: "NEAIST — Núcleo de Estudantes Africanos do Instituto Superior Técnico",
            heroDescriptions: [
                "Comunidade, integração, cultura e apoio académico para estudantes africanos no IST. O NEAIST promove a representação estudantil, a vida associativa e a ligação entre estudantes africanos no Técnico e em Lisboa.",
                "O NEAIST, também conhecido em inglês como African Students Association at Instituto Superior Técnico, representa e apoia estudantes africanos no IST através de iniciativas culturais, académicas e comunitárias."
            ],
            heroPills: [
                "Integração académica",
                "Eventos culturais",
                "Apoio entre estudantes"
            ],
            heroButtons: [
                "Conhecer a Equipa",
                "Juntar-me ao NEAIST"
            ]
        },
        en: {
            title: "NEAIST — African Students Association at Instituto Superior Técnico",
            description: "Official website of NEAIST, the African Students Association at Instituto Superior Técnico. Community, integration, culture and academic support for African students at IST.",
            heroKicker: "NEAIST 2026",
            heroTitle: "NEAIST — African Students Association at Instituto Superior Técnico",
            heroDescriptions: [
                "Community, integration, culture and academic support for African students at IST. NEAIST promotes student representation, association life, and connection among African students at Técnico and in Lisbon.",
                "NEAIST, also known in Portuguese as Núcleo de Estudantes Africanos do Instituto Superior Técnico, represents and supports African students at IST through cultural, academic, and community initiatives."
            ],
            heroPills: [
                "Academic integration",
                "Cultural events",
                "Peer support"
            ],
            heroButtons: [
                "Meet the Team",
                "Join NEAIST"
            ]
        }
    },
    "contactos.html": {
        pt: {
            title: "Contactos | NEAIST",
            description: "Contacta o NEAIST por email ou Instagram para dúvidas, parcerias e informações sobre a comunidade africana no Técnico.",
            kicker: "Contacto direto",
            directTitle: "Fala connosco",
            directIntro: "Para dúvidas, parcerias ou informações sobre as nossas atividades, usa um dos canais abaixo.",
            infoTexts: [
                "Escreve-nos diretamente para esclarecimentos, propostas ou contacto institucional.",
                "Envia-nos mensagem direta e acompanha as nossas novidades."
            ],
            buttons: ["Enviar email", "Instagram"]
        },
        en: {
            title: "Contact | NEAIST",
            description: "Contact NEAIST by email or Instagram for questions, partnerships, and information about the African student community at Técnico.",
            kicker: "Direct contact",
            directTitle: "Talk to us",
            directIntro: "For questions, partnerships, or information about our activities, use one of the channels below.",
            infoTexts: [
                "Write to us directly for clarifications, proposals, or institutional contact.",
                "Send us a direct message and follow our latest updates."
            ],
            buttons: ["Send email", "Instagram"]
        }
    },
    "sobre-nos.html": {
        pt: {
            title: "Sobre Nós | NEAIST — Núcleo de Estudantes Africanos do IST",
            description: "Conhece o NEAIST, Núcleo de Estudantes Africanos do Instituto Superior Técnico, a sua missão, valores e papel no apoio aos estudantes africanos no IST."
        },
        en: {
            title: "About Us | NEAIST — African Students Association at IST",
            description: "Learn about NEAIST, the African Students Association at Instituto Superior Técnico, its mission, values, and role in supporting African students at IST."
        }
    },
    "guia-caloiro.html": {
        pt: {
            title: "Guia do Caloiro | NEAIST",
            description: "Guia do caloiro NEAIST com primeiros passos, FAQ e apoio para novos estudantes africanos no Instituto Superior Técnico.",
            stepLists: [
                "Confirmar matrícula e inscrição",
                "Organizar alojamento",
                "Tratar de documentação necessária (visto, autorização de residência)",
                "Abrir conta bancária (se possível online)",
                "Juntar-te aos grupos do NEAIST nas redes sociais",
                "Participar na Semana de Receção aos Caloiros",
                "Conhecer o campus e as instalações",
                "Ativar conta Fénix",
                "Fazer o cartão de estudante",
                "Conhecer outros estudantes africanos no NEAIST",
                "Familiarizar-te com o Fénix e os recursos online",
                "Organizar horário de estudo",
                "Explorar Lisboa e os arredores",
                "Participar em eventos do NEAIST",
                "Juntar-te a grupos de estudo"
            ],
            faqQuestions: [
                "Como faço para me inscrever nas cadeiras?",
                "Onde posso encontrar alojamento?",
                "Como funciona o sistema de avaliação?",
                "O NEAIST pode ajudar-me com questões administrativas?"
            ],
            faqAnswers: [
                "A inscrição nas cadeiras é feita através do sistema Fénix durante o período de inscrições. Consulta o calendário académico para as datas exatas.",
                "Podes candidatar-te às residências universitárias através dos Serviços de Ação Social. Também há grupos no Facebook para partilha de apartamentos. O NEAIST pode ajudar-te a conectar com outros estudantes à procura de alojamento.",
                "A avaliação varia por cadeira mas geralmente inclui testes, projetos, trabalhos e exames finais. A nota mínima de aprovação é 9.5 (em 20). Consulta o Fénix para detalhes específicos de cada cadeira.",
                "Sim. O NEAIST está aqui para apoiar estudantes africanos em todas as questões, desde integração académica até questões administrativas como vistos e autorizações de residência. Não hesites em contactar-nos."
            ]
        },
        en: {
            title: "Freshman Guide | NEAIST",
            description: "NEAIST freshman guide with first steps, FAQ, and support for new African students at Instituto Superior Técnico.",
            stepLists: [
                "Confirm enrolment and registration",
                "Arrange accommodation",
                "Handle the necessary documentation (visa, residence permit)",
                "Open a bank account (if possible online)",
                "Join NEAIST groups on social media",
                "Take part in Freshers' Reception Week",
                "Get to know the campus and facilities",
                "Activate your Fénix account",
                "Get your student card",
                "Meet other African students through NEAIST",
                "Become familiar with Fénix and online resources",
                "Set up a study schedule",
                "Explore Lisbon and the surrounding area",
                "Take part in NEAIST events",
                "Join study groups"
            ],
            faqQuestions: [
                "How do I register for courses?",
                "Where can I find accommodation?",
                "How does the assessment system work?",
                "Can NEAIST help me with administrative issues?"
            ],
            faqAnswers: [
                "Course registration is done through the Fénix system during the registration period. Check the academic calendar for the exact dates.",
                "You can apply for university residences through the Social Services. There are also Facebook groups for apartment sharing. NEAIST can help connect you with other students looking for accommodation.",
                "Assessment varies by course but usually includes tests, projects, assignments, and final exams. The minimum passing grade is 9.5 out of 20. Check Fénix for the specific details of each course.",
                "Yes. NEAIST is here to support African students in everything from academic integration to administrative matters such as visas and residence permits. Feel free to contact us."
            ]
        }
    },
    "mentoria.html": {
        pt: {
            title: "Programa Mentorado | NEAIST",
            description: "Programa Mentorado do NEAIST para apoiar a integração de novos estudantes africanos no Instituto Superior Técnico.",
            benefitsMentees: [
                "Integração mais fácil na comunidade IST",
                "Apoio académico personalizado",
                "Orientação sobre vida em Lisboa",
                "Rede de contactos desde o início",
                "Dicas práticas de quem já passou por isso"
            ],
            benefitsMentors: [
                "Desenvolvimento de competências de liderança",
                "Satisfação de ajudar outros estudantes",
                "Fortalecimento da comunidade NEAIST",
                "Reconhecimento no CV",
                "Networking com outros mentores"
            ],
            testimonialTexts: [
                "\"O programa de mentoria foi essencial para a minha adaptação ao IST. O meu mentor ajudou-me com tudo, desde organizar o horário de estudo até conhecer Lisboa!\"",
                "\"Ser mentor foi uma experiência incrível. Ajudar novos estudantes e ver o seu progresso é muito gratificante. Recomendo a todos!\"",
                "\"Através do programa conheci pessoas incríveis que se tornaram grandes amigos. O apoio do meu mentor fez toda a diferença no meu primeiro ano.\""
            ],
            testimonialRoles: [
                "Mentorada 2025 - LEIC",
                "Mentor 2024 - LEGI",
                "Mentorada 2024 - LMAC"
            ],
            squadsKicker: "Study Squads",
            squadsTitle: "Novo projeto de apoio académico",
            squadsSubtitle: "Os Study Squads do NEAIST entram agora na fase de recrutamento de Tutores. A participação de estudantes nos grupos será aberta mais tarde.",
            squadsCardTitle: "Study Squads NEAIST",
            squadsCardText: "Conhece o projeto, o papel do Tutor e o modelo de funcionamento previsto.",
            squadsTutorTitle: "Candidatura a Tutor",
            squadsTutorText: "Formulário para estudantes que queiram integrar a primeira fase do projeto."
        },
        en: {
            title: "Mentoring Program | NEAIST",
            description: "NEAIST Mentoring Program designed to support the integration of new African students at Instituto Superior Técnico.",
            benefitsMentees: [
                "Easier integration into the IST community",
                "Personalized academic support",
                "Guidance on life in Lisbon",
                "A network from the very beginning",
                "Practical tips from someone who has already been through it"
            ],
            benefitsMentors: [
                "Development of leadership skills",
                "The satisfaction of helping other students",
                "Strengthening the NEAIST community",
                "Recognition on your CV",
                "Networking with other mentors"
            ],
            testimonialTexts: [
                "\"The mentoring program was essential for my adaptation to IST. My mentor helped me with everything, from organizing my study schedule to getting to know Lisbon.\"",
                "\"Being a mentor was an incredible experience. Helping new students and seeing their progress is very rewarding. I recommend it to everyone.\"",
                "\"Through the program I met amazing people who became close friends. My mentor's support made all the difference during my first year.\""
            ],
            testimonialRoles: [
                "Mentee 2025 - LEIC",
                "Mentor 2024 - LEGI",
                "Mentee 2024 - LMAC"
            ],
            squadsKicker: "Study Squads",
            squadsTitle: "New academic support project",
            squadsSubtitle: "NEAIST Study Squads are now in the Tutor recruitment phase. Student participation in the groups will open later.",
            squadsCardTitle: "Study Squads NEAIST",
            squadsCardText: "Learn about the project, the Tutor role, and the planned operating model.",
            squadsTutorTitle: "Apply as a Tutor",
            squadsTutorText: "Form for students who want to join the first phase of the project."
        }
    },
    "equipa.html": {
        pt: {
            title: "Equipa 2026 | NEAIST",
            description: "Conhece a direção, o conselho fiscal e a mesa da assembleia geral do NEAIST para o mandato de 2026.",
            pageTitle: "Direção e Equipa NEAIST 2026",
            pageSubtitle: "Conhece a equipa responsável pela coordenação das atividades, projetos e representação do NEAIST durante o mandato de 2026.",
            sectionKickers: ["Direção", "Conselho Fiscal", "Mesa da Assembleia Geral"],
            sectionTitles: [
                "Coordenação do mandato de 2026",
                "Acompanhamento e supervisão",
                "Organização dos trabalhos assembleares"
            ],
            sectionSubtitles: [
                "Estrutura principal responsável pela representação, organização e acompanhamento das iniciativas do núcleo."
            ],
            roles: [
                "Presidência",
                "Vice-Presidência",
                "Tesouraria / Secretariado",
                "Projetos & Parcerias",
                "Assuntos Académicos",
                "Comunicação & Imagem",
                "Comunidade & Cultura",
                "Presidência",
                "Vogal",
                "Vogal",
                "Presidência",
                "Vice-Presidência",
                "Secretariado"
            ],
            namePending: "Nome a confirmar",
            descriptions: [
                "Responsável pela coordenação geral do NEAIST e pela representação institucional do núcleo.",
                "Apoio direto à presidência e acompanhamento da execução das principais atividades do mandato.",
                "Gestão administrativa, financeira e documental das operações do núcleo.",
                "Desenvolvimento de iniciativas estratégicas e articulação com parceiros externos e internos.",
                "Promoção do apoio académico, integração no campus e valorização do percurso estudantil.",
                "Gestão da comunicação do núcleo, identidade visual e presença digital.",
                "Coordenação das iniciativas culturais, do convívio e da ligação entre estudantes.",
                "Responsável pela coordenação da área.",
                "Responsável pela coordenação da área.",
                "Responsável pela coordenação da área.",
                "Responsável pela coordenação da área.",
                "Responsável pela coordenação da área.",
                "Responsável pela coordenação da área."
            ],
            note: "A composição completa da equipa será atualizada em breve."
        },
        en: {
            title: "Team 2026 | NEAIST",
            description: "Meet the NEAIST executive board, supervisory board, and general assembly bureau for the 2026 term.",
            pageTitle: "NEAIST Board and Team 2026",
            pageSubtitle: "Meet the team responsible for coordinating NEAIST activities, projects, and representation during the 2026 term.",
            sectionKickers: ["Executive Board", "Supervisory Board", "General Assembly Bureau"],
            sectionTitles: [
                "Coordination of the 2026 term",
                "Monitoring and oversight",
                "Coordination of assembly work"
            ],
            sectionSubtitles: [
                "Main structure responsible for representation, organization, and follow-up of the association’s initiatives."
            ],
            roles: [
                "President",
                "Vice-President",
                "Treasury / Secretariat",
                "Projects & Partnerships",
                "Academic Affairs",
                "Communication & Image",
                "Community & Culture",
                "Chair",
                "Member",
                "Member",
                "Chair",
                "Vice-Chair",
                "Secretariat"
            ],
            namePending: "Name to be confirmed",
            descriptions: [
                "Responsible for the overall coordination of NEAIST and for the association’s institutional representation.",
                "Direct support to the president and follow-up of the term’s main activities.",
                "Administrative, financial, and documentary management of the association’s operations.",
                "Development of strategic initiatives and coordination with external and internal partners.",
                "Promotion of academic support, campus integration, and student development.",
                "Management of the association’s communication, visual identity, and digital presence.",
                "Coordination of cultural initiatives, community life, and student connections.",
                "Responsible for coordinating this area.",
                "Responsible for coordinating this area.",
                "Responsible for coordinating this area.",
                "Responsible for coordinating this area.",
                "Responsible for coordinating this area.",
                "Responsible for coordinating this area."
            ],
            note: "The full team composition will be updated soon."
        }
    },
    "noticias.html": {
        pt: {
            title: "Notícias | NEAIST — Estudantes Africanos no Técnico",
            description: "Arquivo de notícias, eventos, oportunidades e momentos institucionais do NEAIST no Instituto Superior Técnico.",
            pageTitle: "Notícias e Arquivo NEAIST",
            pageSubtitle: "Acompanha os principais momentos, eventos, oportunidades e iniciativas do NEAIST.",
            kicker: "Arquivo NEAIST",
            archiveTitle: "Momentos institucionais, cultura e oportunidades",
            archiveText: "Explora os destaques mais recentes do núcleo, desde eventos culturais a iniciativas de integração, representação e participação académica.",
            archiveButton: "Recrutamento 2026",
            filters: ["Todos", "Eventos", "Institucional", "Oportunidades", "Arquivo"]
        },
        en: {
            title: "News | NEAIST — African Students at Técnico",
            description: "Archive of NEAIST news, events, opportunities, and institutional moments at Instituto Superior Técnico.",
            pageTitle: "NEAIST News and Archive",
            pageSubtitle: "Follow the main moments, events, opportunities, and initiatives of NEAIST.",
            kicker: "NEAIST Archive",
            archiveTitle: "Institutional moments, culture, and opportunities",
            archiveText: "Explore the association’s most recent highlights, from cultural events to initiatives focused on integration, representation, and academic participation.",
            archiveButton: "Recruitment 2026",
            filters: ["All", "Events", "Institutional", "Opportunities", "Archive"]
        }
    },
    "galeria.html": {
        pt: {
            title: "Galeria | NEAIST",
            description: "Galeria fotográfica do NEAIST com arquivos institucionais, eventos culturais e momentos recentes da comunidade africana no Técnico.",
            pageTitle: "Galeria",
            pageSubtitle: "Arquivo visual do NEAIST com momentos institucionais, eventos culturais, recrutamento e atividades recentes.",
            sectionKickers: ["Arquivo 2024/2025", "Arquivo fotográfico"],
            sectionTitles: [
                "Tomada de Posse - Mandato 2024/2025",
                "Momentos da comunidade NEAIST"
            ],
            sectionSubtitles: [
                "Registo da cerimónia realizada a 17 de fevereiro, com a tomada de posse dos órgãos sociais e momentos de representação institucional do NEAIST.",
                "Explora as imagens já reunidas do mandato de 2026, incluindo cerimónias, eventos, cartazes e materiais visuais do núcleo."
            ],
            captions: [
                "Presidente - Pedro Aguiar",
                "Pres. MAG - Péricles Santos",
                "Tesoureira - Miza Mabunda",
                "Vogal MAG - Auzenda Alberta",
                "Xanthy Silva e Pedro Aguiar",
                "Momento da cerimónia"
            ]
        },
        en: {
            title: "Gallery | NEAIST",
            description: "NEAIST photo gallery with institutional archives, cultural events, and recent moments from the African student community at Técnico.",
            pageTitle: "Gallery",
            pageSubtitle: "NEAIST’s visual archive with institutional moments, cultural events, recruitment, and recent activities.",
            sectionKickers: ["2024/2025 Archive", "Photo archive"],
            sectionTitles: [
                "Inauguration Ceremony - 2024/2025 Term",
                "Moments from the NEAIST community"
            ],
            sectionSubtitles: [
                "Record of the ceremony held on February 17, with the inauguration of the association’s governing bodies and institutional representation moments.",
                "Explore the images already gathered from the 2026 term, including ceremonies, events, posters, and visual materials from the association."
            ],
            captions: [
                "President - Pedro Aguiar",
                "General Assembly Chair - Péricles Santos",
                "Treasurer - Miza Mabunda",
                "General Assembly Member - Auzenda Alberta",
                "Xanthy Silva and Pedro Aguiar",
                "Ceremony moment"
            ]
        }
    },
    "recursos.html": {
        pt: {
            title: "Recursos Académicos | NEAIST",
            description: "Documentos, guias e recursos académicos do NEAIST, incluindo Study Squads, apoio institucional e repositórios por curso.",
            introKicker: "Apoio académico e institucional",
            introTitle: "Documentos, guias e recursos por curso",
            introText: "Reunimos nesta página os principais documentos do NEAIST, guias para novos estudantes, materiais de mentoria e ligações úteis para apoio académico no Técnico.",
            introButton: "Candidatura a Tutor",
            sectionLabels: ["NEAIST", "Apoio Académico", "Apoio por Curso"],
            sectionTitles: ["Destaques NEAIST", "Apoio Institucional", "Recursos por Curso"],
            sectionTexts: [
                "Os principais documentos, projetos e pontos de entrada académicos do núcleo, reunidos numa secção mais direta e fácil de consultar.",
                "Serviços e plataformas do Técnico que ajudam na vida académica, integração no campus e acesso a apoio institucional.",
                "Repositórios e bibliotecas úteis organizados por área, com uma apresentação mais limpa e consistente para consulta rápida."
            ],
            featureTags: ["Projeto académico", "Oportunidade", "Documento", "PDF", "Caloiros", "Caloiros"],
            featureTitles: [
                "Study Squads NEAIST",
                "Candidatura a Tutor",
                "Estatutos do NEAIST",
                "Projeto Study Squads",
                "Guia 1 - Primeiros Passos",
                "Guia 2 - Próximos Passos"
            ],
            featureTexts: [
                "Conhece a iniciativa de grupos de estudo criada para reforçar a aprendizagem colaborativa ao longo do semestre.",
                "Formulário para estudantes que queiram integrar a primeira fase do projeto Study Squads como Tutores.",
                "Consulta institucional dos estatutos do núcleo em formato PDF.",
                "Documento complementar com o enquadramento, objetivos e estrutura base da iniciativa.",
                "Documento de apoio inicial para novos alunos do Técnico, com orientações essenciais para começar.",
                "Continuação do guia de integração, com informação prática para os primeiros tempos no IST."
            ],
            supportTitles: [
                "Fénix",
                "Técnico",
                "Associação de Estudantes / AEIST",
                "NAPE",
                "NDA",
                "Serviços de Saúde",
                "Residências e Alojamento",
                "Bolsas e Apoio Financeiro",
                "Mobilidade / Núcleo de Mobilidade e Cooperação Internacional"
            ],
            supportTexts: [
                "Portal académico principal para inscrições, notas, horários e unidades curriculares.",
                "Website oficial do Instituto Superior Técnico com informação institucional e académica.",
                "Portal da associação de estudantes com apoio institucional, associativo e académico.",
                "Apoio ao estudante, integração, acompanhamento e serviços úteis ao longo do percurso académico.",
                "Núcleo de Desenvolvimento Académico com orientação e recursos para organização do estudo.",
                "Acesso aos serviços de saúde associados ao Técnico e apoio em bem-estar estudantil.",
                "Informação sobre residências do Técnico e opções de apoio ligadas ao alojamento estudantil.",
                "Informação sobre apoios financeiros, bolsas e acompanhamento social para estudantes.",
                "Mobilidade, programas internacionais e oportunidades de intercâmbio académico."
            ],
            supportTags: ["Portal", "Institucional", "Associação", "Apoio", "Académico", "Saúde", "Residências", "Bolsas", "Mobilidade"],
            courseTitles: [
                "LEAer e MEAer",
                "LEBiom e MEBiom",
                "LEEC e MEEC",
                "LEIC e MEIC — Eden Box",
                "LEIC e MEIC — Dropbox",
                "LEIC e MEIC — Dropbox Shelf LEIC",
                "LEIC e MEIC — Resumos LEIC-A",
                "LEIC e MEIC — LEIC My Box",
                "LENO e MENO",
                "LETI e METI",
                "LMAC e MMAC"
            ],
            courseTexts: [
                "Repositório de apoio para estudantes de engenharia aeroespacial.",
                "Materiais académicos organizados para engenharia biomédica.",
                "Recursos úteis para engenharia eletrotécnica e de computadores.",
                "Repositório de materiais académicos para estudantes de informática.",
                "Biblioteca partilhada com materiais de apoio e ficheiros de estudo.",
                "Arquivo complementar para estudantes de LEIC com materiais de várias cadeiras.",
                "Coleção de resumos de apoio para estudantes de LEIC-A.",
                "Biblioteca adicional de materiais académicos para informática.",
                "Recursos de apoio para engenharia naval e oceânica.",
                "Materiais partilhados para telecomunicações e informática.",
                "Recursos e repositórios para matemática aplicada e computação."
            ],
            courseTags: ["Repositório", "Repositório", "Repositório", "Repositório", "Dropbox", "Biblioteca", "Resumo", "Biblioteca", "Repositório", "Repositório", "Repositório"]
        },
        en: {
            title: "Academic Resources | NEAIST",
            description: "NEAIST documents, guides, and academic resources, including Study Squads, institutional support, and course repositories.",
            introKicker: "Academic and institutional support",
            introTitle: "Documents, guides, and course resources",
            introText: "This page brings together NEAIST’s main documents, guides for new students, mentoring materials, and useful links for academic support at Técnico.",
            introButton: "Apply as a Tutor",
            sectionLabels: ["NEAIST", "Academic Support", "Support by Course"],
            sectionTitles: ["NEAIST Highlights", "Institutional Support", "Resources by Course"],
            sectionTexts: [
                "The association’s main documents, projects, and academic entry points, gathered in a more direct and easier-to-browse section.",
                "Técnico services and platforms that support academic life, campus integration, and access to institutional support.",
                "Useful repositories and libraries organized by area, with a cleaner and more consistent presentation for quick consultation."
            ],
            featureTags: ["Academic project", "Opportunity", "Document", "PDF", "Freshmen", "Freshmen"],
            featureTitles: [
                "Study Squads NEAIST",
                "Apply as a Tutor",
                "NEAIST Statutes",
                "Study Squads Project",
                "Guide 1 - First Steps",
                "Guide 2 - Next Steps"
            ],
            featureTexts: [
                "Learn about the study-group initiative created to strengthen collaborative learning throughout the semester.",
                "Form for students who want to join the first phase of the Study Squads project as Tutors.",
                "Institutional PDF version of the association’s statutes.",
                "Complementary document with the initiative’s framework, goals, and core structure.",
                "Introductory support document for new Técnico students, with essential guidance to get started.",
                "Continuation of the integration guide, with practical information for the first weeks at IST."
            ],
            supportTitles: [
                "Fénix",
                "Técnico",
                "Students' Union / AEIST",
                "NAPE",
                "NDA",
                "Health Services",
                "Residences and Accommodation",
                "Scholarships and Financial Support",
                "Mobility / International Mobility and Cooperation Office"
            ],
            supportTexts: [
                "Main academic portal for registration, grades, schedules, and course information.",
                "Official Instituto Superior Técnico website with institutional and academic information.",
                "Students’ union portal with institutional, associative, and academic support.",
                "Student support, integration, follow-up, and useful services throughout the academic journey.",
                "Academic development office with guidance and resources for study organization.",
                "Access to Técnico-related health services and student wellbeing support.",
                "Information about Técnico residences and support options related to student housing.",
                "Information on financial support, scholarships, and social support for students.",
                "Mobility, international programmes, and academic exchange opportunities."
            ],
            supportTags: ["Portal", "Institutional", "Association", "Support", "Academic", "Health", "Housing", "Scholarships", "Mobility"],
            courseTitles: [
                "LEAer and MEAer",
                "LEBiom and MEBiom",
                "LEEC and MEEC",
                "LEIC and MEIC — Eden Box",
                "LEIC and MEIC — Dropbox",
                "LEIC and MEIC — Dropbox Shelf LEIC",
                "LEIC and MEIC — LEIC-A Summaries",
                "LEIC and MEIC — LEIC My Box",
                "LENO and MENO",
                "LETI and METI",
                "LMAC and MMAC"
            ],
            courseTexts: [
                "Support repository for aerospace engineering students.",
                "Academic materials organized for biomedical engineering.",
                "Useful resources for electrical and computer engineering.",
                "Academic materials repository for computer science students.",
                "Shared library with support materials and study files.",
                "Complementary archive for LEIC students with materials from multiple courses.",
                "Collection of support summaries for LEIC-A students.",
                "Additional library of academic materials for computer science.",
                "Support resources for naval and ocean engineering.",
                "Shared materials for telecommunications and informatics.",
                "Resources and repositories for applied mathematics and computation."
            ],
            courseTags: ["Repository", "Repository", "Repository", "Repository", "Dropbox", "Library", "Summary", "Library", "Repository", "Repository", "Repository"]
        }
    },
    "study-squads.html": {
        pt: {
            title: "Study Squads | Apoio Académico NEAIST",
            description: "Study Squads NEAIST: apoio académico e grupos de estudo para estudantes do Técnico, com candidaturas abertas para Tutores.",
            heroSubtitle: "Candidaturas abertas para Tutores",
            heroTitle: "Study Squads NEAIST",
            heroTexts: [
                "Os Study Squads são grupos de estudo organizados pelo NEAIST para promover a aprendizagem colaborativa, o apoio entre colegas e hábitos de estudo mais consistentes ao longo do semestre.",
                "Nesta primeira fase, estamos à procura de Tutores: estudantes responsáveis, disponíveis e com vontade de apoiar colegas numa ou mais disciplinas."
            ],
            heroButton: "Candidatar-me a Tutor",
            heroNote: "As inscrições para estudantes interessados em participar nos grupos serão abertas numa fase seguinte, após a seleção dos tutores e definição das disciplinas disponíveis.",
            documentTitle: "Projeto Study Squads NEAIST",
            documentText: "Consulta o documento base do projeto para conhecer melhor o enquadramento, os objetivos e a estrutura pensada para esta iniciativa académica.",
            documentButton: "Abrir PDF do Projeto",
            sectionKickers: [
                "Projeto académico",
                "Tutoria",
                "Perfil procurado",
                "Disciplinas previstas",
                "Funcionamento"
            ],
            sectionTitles: [
                "O que são os Study Squads?",
                "O papel do Tutor",
                "Quem pode candidatar-se?",
                "Áreas inicialmente consideradas",
                "Como será o funcionamento?"
            ],
            sectionSubtitles: [
                "Os Study Squads são pequenos grupos de estudo por disciplina, criados para tornar o estudo mais regular, colaborativo e acessível. O objetivo é criar um espaço informal e produtivo onde estudantes possam partilhar dúvidas, resolver exercícios e preparar avaliações em conjunto.",
                "Os Tutores são estudantes que acompanham e orientam os Study Squads. Não substituem professores nem aulas formais. O seu papel é facilitar a organização do grupo, apoiar na discussão de dúvidas, incentivar a participação e ajudar a manter uma rotina de estudo consistente.",
                "Procuramos estudantes responsáveis, disponíveis e com vontade de apoiar colegas no seu percurso académico. Não precisas de saber tudo, mas deves sentir-te confortável com a disciplina, comunicar bem e ter espírito de entreajuda.",
                "As disciplinas poderão ser ajustadas conforme a procura dos estudantes e a disponibilidade dos tutores selecionados.",
                "Durante o semestre, os Study Squads terão sessões regulares de estudo. Em época de avaliações, poderão existir sessões de reforço. O formato poderá ser presencial, online ou híbrido, dependendo da disponibilidade dos tutores e participantes."
            ],
            roleCards: [
                "Organizar sessões de estudo",
                "Facilitar a discussão de exercícios",
                "Apoiar colegas com dúvidas",
                "Promover regularidade",
                "Criar um ambiente seguro e colaborativo",
                "Encaminhar dúvidas mais complexas quando necessário"
            ],
            badges: [
                "Disponibilidade semanal",
                "Conforto com a disciplina",
                "Boa comunicação",
                "Responsabilidade",
                "Espírito de entreajuda"
            ],
            disciplines: [
                "Cálculo II",
                "Programação",
                "Física",
                "Termodinâmica",
                "Probabilidade e Estatística"
            ],
            operationCards: [
                "Durante o semestre: sessões regulares",
                "Época de avaliações: reforço",
                "Formato: presencial, online ou híbrido",
                "Horários definidos conforme disponibilidade"
            ],
            ctaTitle: "Queres ser Tutor?",
            ctaText: "Se gostas de ajudar colegas, tens facilidade numa disciplina e queres contribuir para uma comunidade académica mais colaborativa, candidata-te.",
            posterAlt: "Study Squads NEAIST — grupos de estudo com apoio de tutores"
        },
        en: {
            title: "Study Squads | NEAIST Academic Support",
            description: "NEAIST Study Squads: academic support and study groups for Técnico students, with Tutor applications now open.",
            heroSubtitle: "Applications open for Tutors",
            heroTitle: "Study Squads NEAIST",
            heroTexts: [
                "Study Squads are study groups organized by NEAIST to promote collaborative learning, peer support, and more consistent study habits throughout the semester.",
                "In this first phase, we are looking for Tutors: responsible students who are available and willing to support peers in one or more courses."
            ],
            heroButton: "Apply as a Tutor",
            heroNote: "Registration for students interested in joining the groups will open later, after tutors are selected and the available courses are defined.",
            documentTitle: "NEAIST Study Squads Project",
            documentText: "Read the project document to better understand the framework, objectives, and structure designed for this academic initiative.",
            documentButton: "Open Project PDF",
            sectionKickers: [
                "Academic project",
                "Tutoring",
                "Who can apply",
                "Planned subjects",
                "How it will work"
            ],
            sectionTitles: [
                "What are Study Squads?",
                "The Tutor role",
                "Who can apply?",
                "Areas initially considered",
                "How will it work?"
            ],
            sectionSubtitles: [
                "Study Squads are small study groups by subject, created to make studying more regular, collaborative, and accessible. The goal is to create an informal yet productive space where students can share questions, solve exercises, and prepare assessments together.",
                "Tutors are students who accompany and guide the Study Squads. They do not replace professors or formal classes. Their role is to help organize the group, support discussion of questions, encourage participation, and help maintain a consistent study routine.",
                "We are looking for responsible, available students who are willing to support peers in their academic journey. You do not need to know everything, but you should feel comfortable with the subject, communicate well, and have a spirit of mutual support.",
                "The subjects may be adjusted according to student demand and the availability of the selected tutors.",
                "Throughout the semester, Study Squads will have regular study sessions. During assessment periods, there may be additional reinforcement sessions. The format may be in person, online, or hybrid, depending on the availability of tutors and participants."
            ],
            roleCards: [
                "Organize study sessions",
                "Facilitate exercise discussions",
                "Support classmates with questions",
                "Promote regularity",
                "Create a safe and collaborative environment",
                "Refer more complex questions when needed"
            ],
            badges: [
                "Weekly availability",
                "Comfort with the subject",
                "Good communication",
                "Responsibility",
                "Peer-support mindset"
            ],
            disciplines: [
                "Calculus II",
                "Programming",
                "Physics",
                "Thermodynamics",
                "Probability and Statistics"
            ],
            operationCards: [
                "During the semester: regular sessions",
                "Assessment season: reinforcement",
                "Format: in person, online, or hybrid",
                "Schedules defined by availability"
            ],
            ctaTitle: "Do you want to be a Tutor?",
            ctaText: "If you enjoy helping peers, feel confident in a subject, and want to contribute to a more collaborative academic community, apply now.",
            posterAlt: "Study Squads NEAIST — study groups supported by tutors"
        }
    },
    "dia-de-africa.html": {
        pt: {
            title: "Dia de África no Técnico | NEAIST",
            description: "Página do Dia de África no Técnico organizada pelo NEAIST, com cartaz, programa e informação do evento de 27 de maio de 2026.",
            kicker: "Evento em destaque",
            subtitle: "Celebração cultural organizada pelo NEAIST no Técnico Innovation Center.",
            pageTitle: "Dia de África no Técnico",
            descriptions: [
                "O NEAIST convida toda a comunidade académica para uma celebração especial do Dia de África no Técnico.",
                "Prepara-te para uma tarde de música, cultura, partilha, convívio e orgulho africano, pensada para aproximar estudantes, convidados e toda a comunidade do Técnico.",
                "Será um momento de celebração da diversidade, reflexão sobre identidade e valorização da presença africana no espaço académico.",
                "Marca na agenda, convida os teus colegas e vem participar num encontro aberto, acolhedor e representativo do espírito do NEAIST."
            ],
            metaLabels: ["Data", "Horário", "Local"],
            metaValues: ["27 de Maio de 2026", "14h00 às 20h00", "Técnico Innovation Center (TIC)"],
            supportNote: "O programa principal decorre até às 18h00, seguido de um momento informal pós-evento entre as 18h00 e as 20h00.",
            buttons: ["Voltar às notícias", "Instagram"],
            agendaKicker: "Programa",
            agendaTitle: "Ubuntu: Eu Sou Porque Nós Somos",
            agendaSubtitle: "Consulta o alinhamento completo do Dia de África no Técnico, incluindo o programa principal e o momento informal de encerramento.",
            agendaHeaders: ["Hora", "Atividade"],
            agendaRows: [
                "Receção dos participantes",
                "Sessão de abertura: boas-vindas pelo Presidente do NEAIST",
                "Intervenção institucional — Prof. Rogério Colaço / Prof. Luís Castro",
                "Apresentação do Professor Sóstenes Rego e do seu dicionário",
                "Intervalo técnico / troca de palco",
                "Apresentação da historiadora Marta Lourenço",
                "Intervalo e visita à exposição cultural",
                "Quem Conta a História? — A Perspetiva de Quem Vive e de Quem Preserva",
                "Perguntas do público",
                "Intervalo técnico / troca de palco",
                "Ubuntu em Conversa: O Que Nos Une",
                "Intervalo, exposição cultural e momento de convívio",
                "Momento de fotografia",
                "Encerramento e momento musical",
                "Momento informal pós-evento / Sunset Picnic"
            ],
            merchKicker: "Merchandising",
            merchTitle: "Artigos NEAIST",
            merchSubtitle: "Em breve, esta secção poderá incluir artigos oficiais do NEAIST e produtos associados aos nossos eventos.",
            merchTitles: ["Garrafa NEAIST", "Boné NEAIST", "Tote Bag NEAIST"],
            merchTexts: [
                "Uma peça pensada para acompanhar atividades do núcleo e reforçar a identidade visual do NEAIST.",
                "Uma proposta simples e versátil para representar o núcleo em eventos, encontros e atividades no campus.",
                "Um artigo prático e institucional que poderá integrar futuras edições de merchandising do NEAIST."
            ],
            merchNote: "A oferta completa de merchandising será divulgada em breve, em articulação com as próximas iniciativas do núcleo."
        },
        en: {
            title: "Africa Day at Técnico | NEAIST",
            description: "Africa Day at Técnico page organized by NEAIST, with poster, programme, and event information for May 27, 2026.",
            kicker: "Featured event",
            subtitle: "Cultural celebration organized by NEAIST at Técnico Innovation Center.",
            pageTitle: "Africa Day at Técnico",
            descriptions: [
                "NEAIST invites the entire academic community to a special celebration of Africa Day at Técnico.",
                "Get ready for an afternoon of music, culture, exchange, community, and African pride, designed to bring together students, guests, and the wider Técnico community.",
                "It will be a moment to celebrate diversity, reflect on identity, and highlight the African presence within the academic space.",
                "Save the date, invite your colleagues, and come take part in an open, welcoming, and representative gathering that reflects the spirit of NEAIST."
            ],
            metaLabels: ["Date", "Time", "Location"],
            metaValues: ["May 27, 2026", "2:00 PM to 8:00 PM", "Técnico Innovation Center (TIC)"],
            supportNote: "The main programme runs until 6:00 PM, followed by an informal post-event moment between 6:00 PM and 8:00 PM.",
            buttons: ["Back to news", "Instagram"],
            agendaKicker: "Programme",
            agendaTitle: "Ubuntu: I Am Because We Are",
            agendaSubtitle: "See the full Africa Day at Técnico schedule, including the main programme and the informal closing moment.",
            agendaHeaders: ["Time", "Activity"],
            agendaRows: [
                "Participant reception",
                "Opening session: welcome by the NEAIST President",
                "Institutional address — Prof. Rogério Colaço / Prof. Luís Castro",
                "Presentation by Professor Sóstenes Rego and his dictionary",
                "Technical break / stage change",
                "Presentation by historian Marta Lourenço",
                "Break and visit to the cultural exhibition",
                "Who Tells the Story? — The Perspective of Those Who Live It and Those Who Preserve It",
                "Audience questions",
                "Technical break / stage change",
                "Ubuntu in Conversation: What Unites Us",
                "Break, cultural exhibition, and social moment",
                "Group photo moment",
                "Closing and musical moment",
                "Informal post-event moment / Sunset Picnic"
            ],
            merchKicker: "Merchandising",
            merchTitle: "NEAIST items",
            merchSubtitle: "Soon, this section may include official NEAIST items and products linked to our events.",
            merchTitles: ["NEAIST Bottle", "NEAIST Cap", "NEAIST Tote Bag"],
            merchTexts: [
                "A piece designed to accompany association activities and strengthen NEAIST’s visual identity.",
                "A simple and versatile option to represent the association at events, gatherings, and campus activities.",
                "A practical and institutional item that may become part of future NEAIST merchandise releases."
            ],
            merchNote: "The full merchandising offer will be announced soon, together with the association’s upcoming initiatives."
        }
    },
    "noticia-tomada-posse-2026.html": {
        pt: {
            title: "Tomada de Posse da Direção 2026 | NEAIST",
            description: "Notícia institucional do NEAIST sobre a tomada de posse da direção 2026 e o início de um novo ciclo de representação e compromisso no Técnico.",
            heroMeta: "Institucional · 23 de Março de 2026",
            heroTitle: "Tomada de Posse da Direção 2026",
            heroIntro: "No dia 23 de Março, reunimo-nos para celebrar a tomada de posse da nova direção do NEAIST, dando início a um novo ciclo de trabalho, representação e compromisso com a comunidade africana no Instituto Superior Técnico.",
            heroButtons: ["Voltar às notícias", "Instagram do NEAIST"],
            articleTitles: [
                "Um novo ciclo para o NEAIST",
                "Representação, união e continuidade",
                "Agradecimento à comunidade"
            ],
            articleParagraphs: [
                "No dia 23 de Março, reunimo-nos para celebrar a tomada de posse da nova direção do NEAIST — um momento que marcou o início de um novo ciclo de representação, compromisso e serviço à nossa comunidade no Instituto Superior Técnico.",
                "Esta cerimónia foi mais do que uma formalidade. Foi um momento de afirmação do nosso propósito: representar, unir e inspirar os estudantes africanos no IST, garantindo que ninguém percorre este caminho sozinho.",
                "Deixamos um agradecimento especial à direção cessante, em particular ao Presidente cessante, Pedro Aguiar, pelo trabalho desenvolvido, pela dedicação ao NEAIST e pela passagem de testemunho.",
                "Agradecemos também ao Vice-Reitor, Prof. Luís Castro, ao Presidente da AEIST, António Jarmela, e à AEIST pelo apoio e presença neste momento tão importante para o nosso núcleo.",
                "O nosso agradecimento estende-se ainda aos Núcleos de Estudantes Africanos que estiveram presentes, reforçando os laços entre comunidades estudantis africanas, bem como a todos os estudantes do Técnico, colegas e amigos que se juntaram a nós para celebrar este novo ciclo.",
                "A vossa presença reforçou aquilo que o NEAIST procura construir todos os dias: uma comunidade mais próxima, mais representada e mais unida.",
                "Juntos, lembramo-nos do porquê de existirmos. Esta família vai muito além das paredes do IST."
            ],
            socialEyebrow: "Redes sociais",
            socialTitle: "Momentos partilhados pelo NEAIST",
            socialText: "Consulta as publicações oficiais relacionadas com a tomada de posse e o convite lançado à comunidade antes da cerimónia.",
            socialCardTitles: ["Publicação oficial", "Convite à comunidade"],
            socialCardTexts: [
                "Registo da cerimónia e do início do novo mandato, partilhado após este momento institucional.",
                "Convite partilhado antes da cerimónia, convocando estudantes e parceiros para o início do novo mandato."
            ],
            quote: "Gostaríamos de avisar que a tomada de posse da nova lista já tem data marcada!<br><br>Será um momento importante para darmos início a este novo ciclo, e contamos com a presença de todos para tornar este momento ainda mais especial.<br><br>Apareçam para dar as boas-vindas à nova equipa e celebrar este início connosco!",
            socialLink: "Ver publicação no Instagram"
        },
        en: {
            title: "Inauguration of the 2026 Board | NEAIST",
            description: "Institutional NEAIST article about the inauguration of the 2026 board and the beginning of a new cycle of representation and commitment at Técnico.",
            heroMeta: "Institutional · March 23, 2026",
            heroTitle: "Inauguration of the 2026 Board",
            heroIntro: "On March 23, we gathered to celebrate the inauguration of the new NEAIST board, opening a new cycle of work, representation, and commitment to the African community at Instituto Superior Técnico.",
            heroButtons: ["Back to news", "NEAIST Instagram"],
            articleTitles: [
                "A new cycle for NEAIST",
                "Representation, unity, and continuity",
                "Thanks to the community"
            ],
            articleParagraphs: [
                "On March 23, we gathered to celebrate the inauguration of the new NEAIST board — a moment that marked the beginning of a new cycle of representation, commitment, and service to our community at Instituto Superior Técnico.",
                "This ceremony was more than a formality. It was a moment that affirmed our purpose: to represent, unite, and inspire African students at IST, ensuring that no one goes through this journey alone.",
                "We leave a special word of thanks to the outgoing board, in particular to the outgoing President, Pedro Aguiar, for the work carried out, for his dedication to NEAIST, and for the handover of responsibilities.",
                "We also thank the Vice-Rector, Prof. Luís Castro, the President of AEIST, António Jarmela, and AEIST for their support and presence at such an important moment for our association.",
                "Our thanks also extend to the African Student Associations that were present, strengthening the ties between African student communities, as well as to all Técnico students, colleagues, and friends who joined us to celebrate this new cycle.",
                "Your presence reinforced what NEAIST seeks to build every day: a community that is closer, better represented, and more united.",
                "Together, we remember why we exist. This family goes far beyond the walls of IST."
            ],
            socialEyebrow: "Social media",
            socialTitle: "Moments shared by NEAIST",
            socialText: "See the official posts related to the inauguration ceremony and the invitation shared with the community beforehand.",
            socialCardTitles: ["Official post", "Community invitation"],
            socialCardTexts: [
                "Record of the ceremony and the beginning of the new term, shared after this institutional moment.",
                "Invitation shared before the ceremony, calling students and partners to the start of the new term."
            ],
            quote: "We would like to let you know that the inauguration of the new list already has a confirmed date.<br><br>It will be an important moment to begin this new cycle, and we are counting on everyone’s presence to make it even more special.<br><br>Come welcome the new team and celebrate this beginning with us.",
            socialLink: "View post on Instagram"
        }
    }
};

function getCurrentPageName() {
    const pageName = window.location.pathname.split("/").pop();
    return pageName || "index.html";
}

function getTranslationValue(key) {
    return translations[currentLanguage]?.[key] ?? translations.pt?.[key] ?? "";
}

function getPageCopy(pageName) {
    const pageData = pageCopy[pageName];
    if (!pageData) {
        return null;
    }

    return pageData[currentLanguage] || pageData.pt || null;
}

function applyText(selector, value) {
    const element = document.querySelector(selector);
    if (element && value != null) {
        element.textContent = value;
    }
}

function applyHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element && value != null) {
        element.innerHTML = value;
    }
}

function applyAttr(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element && value != null) {
        element.setAttribute(attribute, value);
    }
}

function applyTextList(selector, values) {
    if (!Array.isArray(values)) {
        return;
    }

    document.querySelectorAll(selector).forEach((element, index) => {
        if (values[index] != null) {
            element.textContent = values[index];
        }
    });
}

function applyHTMLList(selector, values) {
    if (!Array.isArray(values)) {
        return;
    }

    document.querySelectorAll(selector).forEach((element, index) => {
        if (values[index] != null) {
            element.innerHTML = values[index];
        }
    });
}

function applyCommonTranslations() {
    const commonCopy = pageCopy.common[currentLanguage] || pageCopy.common.pt;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        const value = getTranslationValue(key);

        if (!value) {
            return;
        }

        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        const value = getTranslationValue(key);

        if (value) {
            element.innerHTML = value;
        }
    });

    applyTextList(".footer-heading", [
        getTranslationValue("footer_quick_links"),
        getTranslationValue("footer_contact")
    ]);
    applyTextList(".footer-links a", [
        getTranslationValue("nav_home"),
        getTranslationValue("nav_about"),
        getTranslationValue("nav_team"),
        getTranslationValue("nav_news"),
        getTranslationValue("nav_gallery"),
        getTranslationValue("nav_resources"),
        getTranslationValue("nav_contact")
    ]);
    applyHTMLList(".footer-contact li", [
        `<i class="fas fa-envelope"></i> neaist.sa@aeist.pt`,
        `<i class="fas fa-map-marker-alt"></i> ${commonCopy.footerLocation}`
    ]);
    applyText(".footer-bottom p", commonCopy.footerCopyright);
    applyText(".footer-description", getTranslationValue("footer_description"));
}

function applyPageSpecificTranslations() {
    const pageName = getCurrentPageName();
    const copy = getPageCopy(pageName);

    if (!copy) {
        return;
    }

    applyText("title", copy.title);
    applyAttr('meta[name="description"]', "content", copy.description);

    if (pageName === "index.html") {
        applyText(".hero-kicker", copy.heroKicker);
        applyText(".hero-title", copy.heroTitle);
        applyTextList(".hero-copy .hero-description", copy.heroDescriptions);
        applyTextList(".hero-pill-card span", copy.heroPills);
        applyTextList(".hero-buttons .btn", copy.heroButtons);
        return;
    }

    if (pageName === "contactos.html") {
        applyText(".contact-direct-copy .section-kicker", copy.kicker);
        applyText(".contact-direct-copy h2", copy.directTitle);
        applyText(".contact-direct-copy > p", copy.directIntro);
        applyTextList(".contact-info .info-content > p:last-child", copy.infoTexts);
        applyTextList(".contact-action-row .btn", copy.buttons);
        return;
    }

    if (pageName === "sobre-nos.html") {
        return;
    }

    if (pageName === "guia-caloiro.html") {
        applyTextList(".timeline-content li", copy.stepLists.map((item) => `✓ ${item}`));
        document.querySelectorAll(".timeline-content li").forEach((element, index) => {
            if (copy.stepLists[index]) {
                element.innerHTML = `<i class="fas fa-check"></i> ${copy.stepLists[index]}`;
            }
        });
        applyTextList(".faq-question h4", copy.faqQuestions);
        applyTextList(".faq-answer p", copy.faqAnswers);
        return;
    }

    if (pageName === "mentoria.html") {
        applyTextList(".benefit-card:first-child li", copy.benefitsMentees.map((item) => `• ${item}`));
        applyTextList(".benefit-card:last-child li", copy.benefitsMentors.map((item) => `• ${item}`));
        document.querySelectorAll(".benefit-card:first-child li").forEach((element, index) => {
            if (copy.benefitsMentees[index]) {
                element.innerHTML = `<i class="fas fa-check-circle"></i> ${copy.benefitsMentees[index]}`;
            }
        });
        document.querySelectorAll(".benefit-card:last-child li").forEach((element, index) => {
            if (copy.benefitsMentors[index]) {
                element.innerHTML = `<i class="fas fa-check-circle"></i> ${copy.benefitsMentors[index]}`;
            }
        });
        applyTextList(".testimonial-text", copy.testimonialTexts);
        applyTextList(".testimonial-author span", copy.testimonialRoles);
        applyText(".useful-links .section-kicker", copy.squadsKicker);
        applyText(".useful-links .section-title", copy.squadsTitle);
        applyText(".useful-links .section-subtitle", copy.squadsSubtitle);
        applyText(".useful-links .link-card:first-child h4", copy.squadsCardTitle);
        applyText(".useful-links .link-card:first-child p", copy.squadsCardText);
        applyText(".useful-links .link-card:last-child h4", copy.squadsTutorTitle);
        applyText(".useful-links .link-card:last-child p", copy.squadsTutorText);
        return;
    }

    if (pageName === "equipa.html") {
        applyText(".page-header .page-title", copy.pageTitle);
        applyText(".page-header .page-subtitle", copy.pageSubtitle);
        applyTextList(".team-section .section-kicker", copy.sectionKickers);
        applyTextList(".team-section .section-title", copy.sectionTitles);
        applyTextList(".team-section .section-subtitle", copy.sectionSubtitles);
        applyTextList(".team-role-label", copy.roles);
        applyTextList(".team-card h3", Array.from({ length: 13 }, () => copy.namePending));
        applyTextList(".team-card p", copy.descriptions);
        applyText(".team-note p", copy.note);
        return;
    }

    if (pageName === "noticias.html") {
        applyText(".page-header .page-title", copy.pageTitle);
        applyText(".page-header .page-subtitle", copy.pageSubtitle);
        applyText(".archive-intro-card .section-kicker", copy.kicker);
        applyText(".archive-intro-card .section-title", copy.archiveTitle);
        applyText(".archive-intro-card p", copy.archiveText);
        applyText(".archive-intro-card .btn", copy.archiveButton);
        applyTextList(".news-filter-btn", copy.filters);
        return;
    }

    if (pageName === "galeria.html") {
        applyText(".page-header .page-title", copy.pageTitle);
        applyText(".page-header .page-subtitle", copy.pageSubtitle);
        applyTextList(".gallery-section .section-kicker", copy.sectionKickers);
        applyTextList(".gallery-section .section-title", copy.sectionTitles);
        applyTextList(".gallery-section .section-subtitle", copy.sectionSubtitles);
        applyTextList(".gallery-feature-card p", copy.captions);
        return;
    }

    if (pageName === "recursos.html") {
        applyText(".archive-intro-card .section-kicker", copy.introKicker);
        applyText(".archive-intro-card .section-title", copy.introTitle);
        applyText(".archive-intro-card p", copy.introText);
        applyText(".archive-intro-card .btn", copy.introButton);
        applyTextList(".resource-section-label", copy.sectionLabels);
        applyTextList(".resource-section-heading h2", copy.sectionTitles);
        applyTextList(".resource-section-heading p", copy.sectionTexts);
        applyTextList("#destaques .resource-feature-card .resource-tag", copy.featureTags);
        applyTextList("#destaques .resource-feature-card h3", copy.featureTitles);
        applyTextList("#destaques .resource-feature-card p", copy.featureTexts);
        applyTextList("#apoio-institucional .resource-course-card h3", copy.supportTitles);
        applyTextList("#apoio-institucional .resource-course-card p", copy.supportTexts);
        applyTextList("#apoio-institucional .resource-course-card .resource-tag", copy.supportTags);
        applyTextList("#recursos-por-curso .resource-course-card h3", copy.courseTitles);
        applyTextList("#recursos-por-curso .resource-course-card p", copy.courseTexts);
        applyTextList("#recursos-por-curso .resource-course-card .resource-tag", copy.courseTags);
        return;
    }

    if (pageName === "study-squads.html") {
        applyText(".study-hero-subtitle", copy.heroSubtitle);
        applyText(".study-hero-copy .page-title", copy.heroTitle);
        applyTextList(".study-hero-text", copy.heroTexts);
        applyText(".study-hero-actions .btn", copy.heroButton);
        applyText(".study-note", copy.heroNote);
        applyAttr(".study-hero-visual img", "alt", copy.posterAlt);
        applyText(".study-document-card h3", copy.documentTitle);
        applyText(".study-document-card p", copy.documentText);
        applyText(".study-document-card .btn", copy.documentButton);
        applyTextList(".study-section .section-kicker", copy.sectionKickers);
        applyTextList(".study-section .section-title", copy.sectionTitles);
        applyTextList(".study-section .section-subtitle", copy.sectionSubtitles);
        applyTextList(".study-card-grid:not(.study-card-grid-compact) .study-card h3", copy.roleCards);
        const requirementGroups = document.querySelectorAll(".study-requirements");
        if (requirementGroups[0]) {
            requirementGroups[0].querySelectorAll(".study-badge").forEach((element, index) => {
                if (copy.badges[index]) {
                    element.textContent = copy.badges[index];
                }
            });
        }
        if (requirementGroups[1]) {
            requirementGroups[1].querySelectorAll(".study-badge").forEach((element, index) => {
                if (copy.disciplines[index]) {
                    element.textContent = copy.disciplines[index];
                }
            });
        }
        applyTextList(".study-card-grid-compact .study-card h3", copy.operationCards);
        applyText(".study-cta .cta-title", copy.ctaTitle);
        applyText(".study-cta .cta-description", copy.ctaText);
        applyText(".study-cta .btn", copy.heroButton);
        return;
    }

    if (pageName === "dia-de-africa.html") {
        applyText(".event-hero .section-kicker", copy.kicker);
        applyText(".event-hero .page-subtitle", copy.subtitle);
        applyText(".event-hero .page-title", copy.pageTitle);
        applyTextList(".event-hero .event-description, .event-hero .event-copy > p:not(.page-subtitle):not(.event-support-note):not(.event-description)", copy.descriptions);
        applyTextList(".event-meta-label", copy.metaLabels);
        applyTextList(".event-meta-value", copy.metaValues);
        applyText(".event-support-note", copy.supportNote);
        applyTextList(".event-actions .btn", copy.buttons);
        applyText(".schedule-section .section-kicker", copy.agendaKicker);
        applyText(".schedule-section .section-title", copy.agendaTitle);
        applyText(".schedule-section .section-subtitle", copy.agendaSubtitle);
        applyTextList(".agenda-table thead th", copy.agendaHeaders);
        applyTextList(".agenda-table tbody td:nth-child(2)", copy.agendaRows);
        applyText(".merch-preview .section-kicker", copy.merchKicker);
        applyText(".merch-preview .section-title", copy.merchTitle);
        applyText(".merch-preview .section-subtitle", copy.merchSubtitle);
        applyTextList(".merch-card h3", copy.merchTitles);
        applyTextList(".merch-card p", copy.merchTexts);
        applyText(".merch-note", copy.merchNote);
        return;
    }

    if (pageName === "noticia-tomada-posse-2026.html") {
        applyText(".article-category-pill", currentLanguage === "en" ? "Institutional" : "Institucional");
        applyText(".article-meta", copy.heroMeta);
        applyText(".article-hero .page-title", copy.heroTitle);
        applyText(".article-intro", copy.heroIntro);
        applyTextList(".article-actions .btn", copy.heroButtons);
        applyTextList(".article-content h2", copy.articleTitles);
        applyText(".article-lead", copy.articleParagraphs[0]);
        applyTextList(".article-content p:not(.article-lead)", copy.articleParagraphs.slice(1));
        applyText(".social-section .eyebrow", copy.socialEyebrow);
        applyText(".social-section .section-heading h2", copy.socialTitle);
        applyText(".social-section .section-heading p", copy.socialText);
        applyTextList(".social-card h3", copy.socialCardTitles);
        applyTextList(".social-card > p:not(.article-quote)", copy.socialCardTexts);
        applyHTML(".article-quote", copy.quote);
        applyTextList(".social-link", [copy.socialLink, copy.socialLink]);
    }
}

function enableLanguageButtons() {
    document.querySelectorAll('.lang-btn[data-lang="en"]').forEach((button) => {
        button.disabled = false;
        button.removeAttribute("disabled");
        button.removeAttribute("aria-disabled");
        button.classList.remove("lang-btn-disabled");
    });
}

// Language management
const savedLanguage = localStorage.getItem("language");
let currentLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : "pt";
window.currentLanguage = currentLanguage;

function setLanguage(lang) {
    if (!translations[lang]) {
        return;
    }

    currentLanguage = lang;
    window.currentLanguage = currentLanguage;
    localStorage.setItem("language", lang);
    updatePageLanguage();
    updateLanguageButton();
}

function updatePageLanguage() {
    window.currentLanguage = currentLanguage;
    document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-PT";

    applyCommonTranslations();
    applyPageSpecificTranslations();

    if (typeof window.renderNewsSections === "function") {
        window.renderNewsSections();
    }

    if (typeof window.renderGallery === "function") {
        window.renderGallery();
    }
}

function updateLanguageButton() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((button) => {
        const isActive = button.getAttribute("data-lang") === currentLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    enableLanguageButtons();
    updatePageLanguage();
    updateLanguageButton();

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const lang = button.getAttribute("data-lang");
            setLanguage(lang);
        });
    });
});
