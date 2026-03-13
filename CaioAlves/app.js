const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sidebarLinks = Array.from(document.querySelectorAll('.sidebar a'));


const hoverSign = document.querySelector('.hover-sign');
const languageButtons = Array.from(document.querySelectorAll('[data-set-lang]'));

const translations = {
    pt: {
        'meta.title': 'Caio Alves',
        'nav.about': 'Sobre mim',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.certs': 'Certificações',
        'nav.contact': 'Contato',
        'hero.role': 'Engenheiro de ML',
        'hero.title': 'Apaixonado por <span class="gradient">IA</span> e por tudo o que ela é capaz de <span class="gradient">transformar</span>.',
        'hero.description': 'Sou um profissional dedicado com habilidades em aprendizado de máquina. Tenho uma capacidade notável para aprender rapidamente e aplicar novos conhecimentos. Minha abordagem é marcada por esforço e dedicação fora do comum, procurando sempre evoluir em cada fase da minha vida.',
        'common.contact': 'Entre em contato',
        'about.title': 'Prezado, olá!👋',
        'about.card1.title': 'Eu sou o Caio!',
        'about.card1.desc': 'Tenho experiência como desenvolvedor Ruby on Rails e busco me aperfeiçoar cada vez mais. Estou finalizando a graduação em Sistemas de Informação e, em seguida, pretendo iniciar uma pós-graduação em Engenharia de IA.',
        'about.card2.title': 'Certificado pela AWS',
        'about.card2.desc': 'Conto com certificação AWS, reforçando minha base em soluções de IA na cloud e minha dedicação ao aprendizado contínuo.',
        'about.card3.title': 'Tenho flexibilidade com fusos horários e localidade',
        'about.card3.desc': 'Moro em Araras, São Paulo, e estou disponível para trabalho remoto no mundo todo.',
        'about.card4.title': 'Minha Paixão por Programação',
        'about.card4.desc': 'Eu amo resolver problemas e construir coisas por meio do código. Programar não é apenas minha profissão, é minha paixão. Gosto de explorar novas tecnologias e aprimorar minhas habilidades.',
        'certs.title': 'Certificações profissionais',
        'certs.subtitle': 'Clique no badge para validar no Credly.',
        'certs.badge1.title': 'AWS Cloud Practitioner',
        'certs.badge1.meta': 'Credly - Badge oficial',
        'certs.viewCredential': 'Ver credencial',
        'projects.title': 'Alguns projetos e estudos 👨‍💻',
        'projects.card1.title': 'Projeto <span class="gradient">Solaria</span>',
        'projects.card1.desc': 'Plataforma web desenvolvida para auxiliar empresas que desejam investir em fontes de energia renovável. O sistema permite realizar simulações com base em dados como localização geográfica, área disponível e perfil de consumo energético, entre outros fatores. Além disso, conta com chatbots, análise de imagens com OCR para extração de informações de contas de energia e uso de Inteligência Artificial para calcular e comparar valores de diferentes fontes de energia sustentável.',
        'projects.card2.title': 'Modelos <span class="gradient">Sagemaker</span>',
        'projects.card2.desc': 'Neste repositório de estudos, explorei na prática processos de transformação e análise de dados, criação de modelos preditivos, aplicação de boas práticas de segurança, além de deploy e monitoramento de modelos com AWS SageMaker.',
        'projects.card3.title': 'Análise de <span class="gradient">Regressões</span>',
        'projects.card3.desc': 'Possuo sólidos conhecimentos em análise de regressões, métricas, ajustes e visualização de previsões, incluindo regressão logística, polinomial e múltipla, além de estatística descritiva.',
        'projects.link': 'Link',
        'skills.title': 'Minhas Habilidades',
        'skills.left.title': 'Ruby on Rails & Python',
        'skills.left.desc': 'Tenho experiência como desenvolvedor Ruby on Rails e também me especializando em Python para análise de dados e automação.',
        'skills.right.title': 'AWS & IA',
        'skills.right.desc': 'Tenho foco em soluções de IA na AWS, com experiência e estudos em serviços como SageMaker, Bedrock, Glue e Data Wrangler, entre outros. Busco evolução constante por meio de projetos e certificações.',
        'contact.title': 'Vamos conversar!',
        'contact.intro': 'Pronto para desenvolver novas soluções, me aprimorar e transformar ideias em projetos reais com IA e cloud.',
        'contact.fullName': 'Nome completo',
        'contact.placeholderName': 'Seu nome',
        'contact.email': 'Endereço de Email',
        'contact.placeholderEmail': 'Seu Email',
        'contact.message': 'Sua mensagem',
        'contact.placeholderMessage': 'Escreva sua mensagem...',
        'contact.send': 'Enviar mensagem',
        'contact.subject': 'Nova mensagem do portfólio'
    },
    en: {
        'meta.title': 'Caio Alves',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.certs': 'Certifications',
        'nav.contact': 'Contact',
        'hero.role': 'ML Engineer',
        'hero.title': 'Passionate about <span class="gradient">AI</span> and everything it can <span class="gradient">transform</span>.',
        'hero.description': 'I am a dedicated professional with machine learning skills. I learn quickly and apply new knowledge in practice. My approach is driven by consistency, effort, and constant growth in every stage of life.',
        'common.contact': 'Get in touch',
        'about.title': 'Hello there!👋',
        'about.card1.title': 'I am Caio!',
        'about.card1.desc': 'I have experience as a Ruby on Rails developer and I keep improving through projects and certifications. I am finishing my Information Systems degree and planning to start a postgraduate program in AI Engineering.',
        'about.card2.title': 'AWS Certified',
        'about.card2.desc': 'I hold an AWS certification, strengthening my foundation in cloud AI solutions and my commitment to continuous learning.',
        'about.card3.title': 'Flexible with time zones and location',
        'about.card3.desc': 'I live in Araras, São Paulo, and I am available for remote work worldwide.',
        'about.card4.title': 'My Passion for Programming',
        'about.card4.desc': 'I love solving problems and building things through code. Programming is not just my profession, it is my passion. I enjoy exploring new technologies and constantly improving my skills.',
        'certs.title': 'Professional Certifications',
        'certs.subtitle': 'Click the badge to validate it on Credly.',
        'certs.badge1.title': 'AWS Cloud Practitioner',
        'certs.badge1.meta': 'Credly - Official badge',
        'certs.viewCredential': 'View credential',
        'projects.title': 'Some projects and studies 👨‍💻',
        'projects.card1.title': '<span class="gradient">Solaria</span> Project',
        'projects.card1.desc': 'A web platform built to help companies invest in renewable energy. The system runs simulations based on geolocation, available area, and energy consumption profile. It also includes chatbots, OCR image analysis for utility bills, and AI to calculate and compare costs across sustainable energy sources.',
        'projects.card2.title': '<span class="gradient">SageMaker</span> Models',
        'projects.card2.desc': 'In this study repository, I explored data transformation and analysis, predictive model development, security best practices, and model deployment and monitoring with AWS SageMaker.',
        'projects.card3.title': '<span class="gradient">Regression</span> Analysis',
        'projects.card3.desc': 'I have strong knowledge in regression analysis, metrics, tuning, and prediction visualization, including logistic, polynomial, and multiple regression, as well as descriptive statistics.',
        'projects.link': 'Link',
        'skills.title': 'My Skills',
        'skills.left.title': 'Ruby on Rails & Python',
        'skills.left.desc': 'I have experience as a Ruby on Rails developer and I am also specializing in Python for data analysis and automation.',
        'skills.right.title': 'AWS & AI',
        'skills.right.desc': 'My focus is AI solutions on AWS, with hands-on experience and studies in services such as SageMaker, Bedrock, Glue, and Data Wrangler. I continuously evolve through projects and certifications.',
        'contact.title': "Let's talk!",
        'contact.intro': 'Ready to build new solutions, improve continuously, and turn ideas into real AI and cloud projects.',
        'contact.fullName': 'Full name',
        'contact.placeholderName': 'Your name',
        'contact.email': 'Email address',
        'contact.placeholderEmail': 'Your email',
        'contact.message': 'Your message',
        'contact.placeholderMessage': 'Write your message...',
        'contact.send': 'Send message',
        'contact.subject': 'New portfolio message'
    }
};

const applyLanguage = function (lang) {
    const chosenLang = lang === 'en' ? 'en' : 'pt';
    const dictionary = translations[chosenLang];

    document.documentElement.lang = chosenLang === 'en' ? 'en' : 'pt-BR';
    document.title = dictionary['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
        const key = element.dataset.i18nHtml;
        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) {
        const key = element.dataset.i18nPlaceholder;
        if (dictionary[key]) {
            element.setAttribute('placeholder', dictionary[key]);
        }
    });

    document.querySelectorAll('[data-i18n-subject]').forEach(function (element) {
        element.value = dictionary['contact.subject'];
    });

    languageButtons.forEach(function (button) {
        button.classList.toggle('is-active', button.dataset.setLang === chosenLang);
    });

    localStorage.setItem('portfolioLanguage', chosenLang);
};

languageButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        applyLanguage(button.dataset.setLang);
    });
});

const savedLanguage = localStorage.getItem('portfolioLanguage');
applyLanguage(savedLanguage === 'en' ? 'en' : 'pt');

const videoList =[video1, video2, video3].filter(Boolean);

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        if (hoverSign) {
            hoverSign.classList.add("active")
        }
    })
    video.addEventListener("mouseout", function(){
        video.pause();
        if (hoverSign) {
            hoverSign.classList.remove("active")
        }
})
})

// Sidebar elements //
const openSidebar = function () {
    if (!sideBar) return;
    sideBar.classList.remove('close-sidebar');
    sideBar.classList.add('open-sidebar');
    document.body.classList.add('sidebar-open');
};

const closeSidebar = function () {
    if (!sideBar) return;
    sideBar.classList.remove('open-sidebar');
    sideBar.classList.add('close-sidebar');
    document.body.classList.remove('sidebar-open');
};

if (menu) {
    menu.addEventListener('click', openSidebar);
}

if (closeIcon) {
    closeIcon.addEventListener('click', closeSidebar);
}

sidebarLinks.forEach(function (link) {
    link.addEventListener('click', closeSidebar);
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 960) {
        closeSidebar();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeSidebar();
    }
});

const revealElements = Array.from(document.querySelectorAll('.autoBlur, .autoDisplay, .fadein-left'));

if (revealElements.length && 'IntersectionObserver' in window) {
    document.body.classList.add('reveal-enabled');

    const markVisibleIfNeeded = function (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.9) {
            element.classList.add('is-visible');
        }
    };

    revealElements.forEach(markVisibleIfNeeded);

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
    });

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });
}

const certificationCards = Array.from(document.querySelectorAll('.certification-card'));

if (certificationCards.length) {
    let certificationTimeouts = [];

    const clearCertificationTimeouts = function () {
        certificationTimeouts.forEach(function (timeoutId) {
            clearTimeout(timeoutId);
        });
        certificationTimeouts = [];
    };

    const resetBadgeAnimation = function () {
        clearCertificationTimeouts();
        certificationCards.forEach(function (card) {
            const badgeImage = card.querySelector('img');
            if (!badgeImage) return;
            badgeImage.classList.remove('cert-badge-drop-in');
            void badgeImage.offsetWidth;
        });
    };

    const playBadgeAnimation = function () {
        certificationCards.forEach(function (card, index) {
            const badgeImage = card.querySelector('img');
            if (!badgeImage) return;
            const timeoutId = setTimeout(function () {
                badgeImage.classList.add('cert-badge-drop-in');
            }, index * 260);
            certificationTimeouts.push(timeoutId);
        });
    };

    if ('IntersectionObserver' in window) {
        const certificationsSection = document.querySelector('#certificacoes');
        if (certificationsSection) {
            const certObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        resetBadgeAnimation();
                        playBadgeAnimation();
                    } else {
                        resetBadgeAnimation();
                    }
                });
            }, { threshold: 0.45 });

            certObserver.observe(certificationsSection);
        } else {
            resetBadgeAnimation();
            playBadgeAnimation();
        }
    } else {
        resetBadgeAnimation();
        playBadgeAnimation();
    }
}
