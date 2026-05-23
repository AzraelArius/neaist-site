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
        nav_news: "Notícias",
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
        features_title: "O Que Fazemos",
        features_subtitle: "Apoiamos a comunidade de estudantes africanos no IST",
        hero_slide_1_tag: "Evento em destaque",
        hero_slide_1_title: "Dia de Africa 2026",
        hero_slide_1_desc: "Cartaz oficial e detalhes da celebracao no Tecnico Innovation Center.",
        hero_slide_2_tag: "Recrutamento",
        hero_slide_2_title: "Colaboradores 2026",
        hero_slide_2_desc: "Junta-te a equipa do NEAIST e participa na organizacao dos proximos eventos.",
        hero_slide_3_tag: "Arquivo",
        hero_slide_3_title: "Tomada de Posse",
        hero_slide_3_desc: "Momento institucional que marca o inicio do novo ciclo do nucleo.",
        africa_day_separator_kicker: "Dia de Africa 2026",
        africa_day_separator_title: "27 de Maio no Tecnico Innovation Center",
        africa_day_separator_text: "Uma tarde dedicada a musica, cultura, convivio e orgulho africano com o cartaz oficial ja disponivel.",
        africa_day_separator_cta: "Ver cartaz e detalhes",

        // Recent Highlights
        highlights_kicker: "Atualidade NEAIST",
        highlights_title: "Últimas Notícias",
        highlights_subtitle: "Arquivo vivo com eventos, momentos institucionais e oportunidades atuais do núcleo.",
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
        logo_subtext: "African Students at Técnico",
        nav_home: "Home",
        nav_about: "About Us",
        nav_news: "News",
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
        features_title: "What We Do",
        features_subtitle: "Supporting the African student community at IST",
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
        highlights_title: "Latest News",
        highlights_subtitle: "A living archive of events, institutional moments, and current opportunities within the association.",
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
        footer_tech_label: "Instituto Superior Tecnico",
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

// Language management
let currentLanguage = localStorage.getItem('language') || 'pt';
window.currentLanguage = currentLanguage;

function setLanguage(lang) {
    currentLanguage = lang;
    window.currentLanguage = currentLanguage;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageButton();
}

function updatePageLanguage() {
    window.currentLanguage = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    if (typeof window.renderNewsSections === 'function') {
        window.renderNewsSections();
    }
}

function updateLanguageButton() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updatePageLanguage();
    updateLanguageButton();
    
    // Add language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
