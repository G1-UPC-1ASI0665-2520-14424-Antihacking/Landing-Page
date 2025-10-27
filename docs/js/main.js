(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const navHeader = document.querySelector('.site-header');
  const langButtons = document.querySelectorAll('.lang-btn');
  const THEME_KEY = 'pentguin-theme';
  const LANG_KEY = 'pentguin-lang';
  const backToTopBtn = document.getElementById('backToTop');

  let currentLang = localStorage.getItem(LANG_KEY) || 'es';
  let translations = {};
  const translationCache = {};
  let myGlobe = null;

  const FALLBACK_TRANSLATIONS = {
    es: {
      seo: {
        pageTitle: 'PentGuin | Consultora de Ciberseguridad',
        metaDescription:
          'PentGuin protege a las PyMEs con pentesting, seguridad de APIs y metodologías ágiles. Agenda una evaluación ofensiva 360°.'
      },
      ui: {
        darkMode: 'Modo oscuro',
        lightMode: 'Modo claro',
        themeToggleAria: 'Cambiar tema'
      },
      nav: {
        services: 'Servicios',
        methodology: 'Metodología',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      hero: {
        kicker: 'Consultora ofensiva',
        title: 'Protegemos el futuro de tu PyME contra amenazas digitales.',
        description:
          'Servicios especializados de Hacking Ético y Pentesting para identificar y mitigar vulnerabilidades críticas en tus sistemas.',
        cta: 'Solicitar una Evaluación',
        note: 'Respuesta inicial en menos de 24 horas.',
        metrics: [
          { value: '+120', label: 'Pentests empresariales entregados' },
          { value: '72h', label: 'Primeros hallazgos críticos' },
          { value: '24/7', label: 'Cobertura LATAM & remota' }
        ],
        trust: { title: 'Confían en PentGuin' },
        glow: {
          primaryTitle: 'Zero-Day Watchlist',
          primaryItem1: 'OWASP Top 10',
          primaryItem2: 'MITRE ATT&CK',
          primaryItem3: 'CVSS 4.0 Ready',
          secondaryTitle: 'Live Monitoring',
          secondaryStat: '+3.4M eventos/mes',
          secondarySub: 'Telemetría ofensiva 24/7'
        }
      },
      services: {
        kicker: 'Servicios',
        title: 'Nuestros Servicios de Seguridad Ofensiva',
        subtitle: 'Cobertura integral con pruebas manuales y automatizadas, adaptadas a tu madurez digital.',
        cards: [
          {
            title: 'Pentesting de Aplicaciones Web',
            description: 'Análisis profundo bajo metodología OWASP Top 10.'
          },
          {
            title: 'Seguridad de APIs',
            description: 'Evaluación de endpoints REST/SOAP para prevenir fugas de datos.'
          },
          {
            title: 'Análisis de Aplicaciones Móviles',
            description: 'Identificación de vulnerabilidades en tus apps iOS/Android.'
          },
          {
            title: 'Auditoría de Redes y Servidores',
            description: 'Escaneo y pruebas controladas de tu infraestructura de red.'
          }
        ]
      },
      methodology: {
        kicker: 'Cómo trabajamos',
        title: 'Un Proceso Transparente y Eficaz',
        subtitle:
          'Integramos herramientas líderes y ceremonias ágiles para que tengas visibilidad completa de cada hallazgo.',
        steps: [
          {
            title: 'Planificación y Alcance',
            description: 'Definimos juntos el alcance (Rules of Engagement).'
          },
          {
            title: 'Reconocimiento y Escaneo',
            description: 'Usamos herramientas líderes (Nmap, Nessus).'
          },
          {
            title: 'Análisis y Explotación Controlada',
            description: 'Simulamos ataques reales (Metasploit, Burp Suite).'
          },
          {
            title: 'Reporte y Mitigación',
            description: 'Entregamos un informe ejecutivo y técnico detallado.'
          }
        ]
      },
      team: {
        kicker: 'El equipo',
        title: 'Conoce a Nuestros Expertos',
        subtitle:
          'Mentores certificados OSCP, arquitectos Zero Trust y analistas DevSecOps listos para acompañarte sprint a sprint.',
        videoCaption: 'Video: cultura de PentGuin detrás del laboratorio ofensivo.',
        roles: [
          'Líder de Consultora (PO)',
          'Scrum Master',
          'Pentester Web Sr.',
          'Arquitecto de Seguridad Zero Trust',
          'Analista DevSecOps'
        ]
      },
      reasons: {
        kicker: 'Diferenciales',
        title: 'Por Qué Elegirnos',
        items: [
          {
            title: 'Enfoque 100% Ético',
            description: 'Operamos bajo contratos claros y trazabilidad completa.'
          },
          {
            title: 'Reportes Accionables (CVSS)',
            description: 'Priorizamos hallazgos por severidad con guías de remediación.'
          },
          {
            title: 'Metodología Ágil (Sprints)',
            description: 'Iteramos contigo cada semana para validar avances.'
          },
          {
            title: 'Cumplimiento Académico (Supervisión UPC)',
            description: 'Respaldamos la calidad bajo estándares académicos.'
          }
        ]
      },
      contact: {
        kicker: 'Contacto',
        title: '¿Listo para empezar?',
        description: 'Comparte tus objetivos y agenda una sesión con nuestro equipo de PentGuin.',
        form: {
          nameLabel: 'Nombre',
          namePlaceholder: 'Ingresa tu nombre',
          emailLabel: 'Email de la Empresa',
          emailPlaceholder: 'nombre@empresa.com',
          messageLabel: 'Mensaje',
          messagePlaceholder: 'Cuéntanos sobre tus sistemas, plazos y objetivos',
          button: 'Enviar Solicitud',
          note: 'Firmamos NDA y compartimos propuesta técnica en 72 horas.'
        }
      },
      footer: {
        terms: 'Términos y Condiciones del Servicio',
        contactLabel: 'Contacto Rápido'
      },
      chat: {
        title: 'IA PentGuin',
        subtitle: 'Chat en vivo (beta)',
        initial: 'Hola, soy PentGuin IA. ¿En qué puedo ayudarte con la seguridad de tu PyME?',
        placeholder: 'Escribe tu consulta',
        button: 'Enviar',
        closeLabel: 'Cerrar chat',
        openLabel: 'Abrir chat'
      },
      backToTop: {
        label: 'Subir al inicio',
        aria: 'Volver al encabezado'
      }
    },
    en: {
      seo: {
        pageTitle: 'PentGuin | Cybersecurity Consultancy',
        metaDescription:
          'Offensive security for SMEs: pentesting, API protection and agile reports by PentGuin. Request a tailored cyber assessment.'
      },
      ui: {
        darkMode: 'Dark mode',
        lightMode: 'Light mode',
        themeToggleAria: 'Toggle theme'
      },
      nav: {
        services: 'Services',
        methodology: 'Methodology',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        kicker: 'Offensive consultancy',
        title: 'We safeguard the future of your SMB from digital threats.',
        description:
          'Ethical Hacking and Pentesting services that uncover and mitigate critical vulnerabilities across your platforms.',
        cta: 'Request an Assessment',
        note: 'First response in under 24 hours.',
        metrics: [
          { value: '+120', label: 'Enterprise pentests delivered' },
          { value: '72h', label: 'First critical findings' },
          { value: '24/7', label: 'LATAM & remote coverage' }
        ],
        trust: { title: 'Trusted by tech leaders' },
        glow: {
          primaryTitle: 'Zero-Day Watchlist',
          primaryItem1: 'OWASP Top 10',
          primaryItem2: 'MITRE ATT&CK',
          primaryItem3: 'CVSS 4.0 Ready',
          secondaryTitle: 'Live Monitoring',
          secondaryStat: '+3.4M events/month',
          secondarySub: 'Offensive telemetry 24/7'
        }
      },
      services: {
        kicker: 'Services',
        title: 'Our Offensive Security Services',
        subtitle: 'Hybrid manual + automated testing tailored to your digital maturity.',
        cards: [
          {
            title: 'Web Application Pentesting',
            description: 'Deep analysis aligned to OWASP Top 10.'
          },
          {
            title: 'API Security',
            description: 'REST/SOAP endpoint testing to stop data leakage.'
          },
          {
            title: 'Mobile Application Analysis',
            description: 'Vulnerability discovery across your iOS/Android apps.'
          },
          {
            title: 'Network & Server Audits',
            description: 'Controlled scans and exploits across your infrastructure.'
          }
        ]
      },
      methodology: {
        kicker: 'How we work',
        title: 'A Transparent and Effective Process',
        subtitle: 'Tooling plus agile ceremonies give you end-to-end visibility for every finding.',
        steps: [
          {
            title: 'Planning & Scope',
            description: 'We define the Rules of Engagement together.'
          },
          {
            title: 'Recon & Scanning',
            description: 'We rely on leading tools such as Nmap and Nessus.'
          },
          {
            title: 'Analysis & Controlled Exploitation',
            description: 'We simulate real attacks with Metasploit and Burp Suite.'
          },
          {
            title: 'Reporting & Mitigation',
            description: 'Executive plus technical reports ready for remediation.'
          }
        ]
      },
      team: {
        kicker: 'The team',
        title: 'Meet Our Experts',
        subtitle: 'OSCP-certified mentors, Zero Trust architects and DevSecOps analysts supporting each sprint.',
        videoCaption: 'Video: the PentGuin culture behind our offensive lab.',
        roles: [
          'Consulting Lead (PO)',
          'Scrum Master',
          'Senior Web Pentester',
          'Zero Trust Security Architect',
          'DevSecOps Analyst'
        ]
      },
      reasons: {
        kicker: 'Advantages',
        title: 'Why Choose Us',
        items: [
          {
            title: '100% Ethical Approach',
            description: 'Clear contracts plus full traceability.'
          },
          {
            title: 'Actionable CVSS Reports',
            description: 'We prioritize severity and remediation guidance.'
          },
          {
            title: 'Agile Sprints',
            description: 'Weekly iterations keep you in the loop.'
          },
          {
            title: 'Academic Compliance (UPC)',
            description: 'Quality backed by university supervision.'
          }
        ]
      },
      contact: {
        kicker: 'Contact',
        title: 'Ready to get started?',
        description: 'Share your goals and book a session with the PentGuin crew.',
        form: {
          nameLabel: 'Name',
          namePlaceholder: 'Enter your name',
          emailLabel: 'Business Email',
          emailPlaceholder: 'name@company.com',
          messageLabel: 'Message',
          messagePlaceholder: 'Tell us about systems, timelines, and objectives',
          button: 'Send Request',
          note: 'We sign an NDA and ship a technical proposal within 72 hours.'
        }
      },
      footer: {
        terms: 'Service Terms & Conditions',
        contactLabel: 'Quick Contact'
      },
      chat: {
        title: 'PentGuin AI',
        subtitle: 'Live chat (beta)',
        initial: 'Hi! I\'m PentGuin AI. How can I help secure your business today?',
        placeholder: 'Type your question',
        button: 'Send',
        closeLabel: 'Close chat',
        openLabel: 'Open chat'
      },
      backToTop: {
        label: 'Back to top',
        aria: 'Return to the header'
      }
    }
  };

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    applyTheme(prefersDark.matches ? 'dark' : 'light', false);
  }

  const handleThemeChange = (event) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(event.matches ? 'dark' : 'light', false);
    }
  };

  if (typeof prefersDark.addEventListener === 'function') {
    prefersDark.addEventListener('change', handleThemeChange);
  } else if (typeof prefersDark.addListener === 'function') {
    prefersDark.addListener(handleThemeChange);
  }

  themeToggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    applyTheme(isLight ? 'dark' : 'light', true);
  });

  function applyTheme(mode, persist = true) {
    if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
      mode = 'dark';
    }
    if (persist) {
      localStorage.setItem(THEME_KEY, mode);
    }
    updateThemeLabel();
  }

  function getThemeLabelText(mode) {
    if (translations?.ui) {
      return mode === 'light' ? translations.ui.lightMode : translations.ui.darkMode;
    }
    if (currentLang === 'en') {
      return mode === 'light' ? 'Light mode' : 'Dark mode';
    }
    return mode === 'light' ? 'Modo claro' : 'Modo oscuro';
  }

  function updateThemeLabel() {
    if (!themeLabel) return;
    const isLight = root.getAttribute('data-theme') === 'light';
    themeLabel.textContent = getThemeLabelText(isLight ? 'light' : 'dark');
    const icon = document.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = isLight ? '☀️' : '🌙';
    }
    themeToggle?.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  }

  function setActiveLangButton(lang) {
    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function changeLanguage(lang, persist = true) {
    if (!lang) return;
    if (lang === currentLang && persist) return;
    currentLang = lang;
    if (persist) {
      localStorage.setItem(LANG_KEY, lang);
    }
    setActiveLangButton(lang);
    loadTranslations(lang);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => changeLanguage(btn.dataset.lang));
  });

  changeLanguage(currentLang, false);

  async function loadTranslations(lang) {
    if (translationCache[lang]) {
      translations = translationCache[lang];
      applyTranslations();
      return;
    }

    const useFallback = () => {
      if (FALLBACK_TRANSLATIONS[lang]) {
        translationCache[lang] = FALLBACK_TRANSLATIONS[lang];
        translations = translationCache[lang];
        applyTranslations();
        return true;
      }
      return false;
    };

    if (window.location.protocol === 'file:' && useFallback()) {
      return;
    }

    try {
      const response = await fetch(`i18n/${lang}.json?v=${Date.now()}`);
      if (!response.ok) throw new Error('No se pudo cargar i18n');
      const data = await response.json();
      translationCache[lang] = data;
      translations = data;
      applyTranslations();
    } catch (error) {
      console.warn('Fallo al cargar traducciones remotas, usando fallback local.', error);
      if (!useFallback()) {
        console.error('No hay fallback disponible para', lang);
      }
    }
  }

  function resolveKey(path, obj) {
    return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.body?.setAttribute('data-lang', currentLang);
    if (translations?.seo) {
      document.title = translations.seo.pageTitle;
      document.getElementById('metaDescription')?.setAttribute('content', translations.seo.metaDescription);
      document.getElementById('ogTitle')?.setAttribute('content', translations.seo.pageTitle);
      document.getElementById('ogDescription')?.setAttribute('content', translations.seo.metaDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const text = resolveKey(el.dataset.i18n, translations);
      if (typeof text === 'string') {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const text = resolveKey(el.dataset.i18nPlaceholder, translations);
      if (typeof text === 'string') {
        el.setAttribute('placeholder', text);
      }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const text = resolveKey(el.dataset.i18nAriaLabel, translations);
      if (typeof text === 'string') {
        el.setAttribute('aria-label', text);
      }
    });

    updateThemeLabel();
  }

  window.addEventListener('scroll', () => {
    if (navHeader) {
      navHeader.classList.toggle('scrolled', window.scrollY > 10);
    }
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    }
  });

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    document.body.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  // Smart AI Chatbot (Local - No API Required)
  const chatPanel = document.getElementById('chatPanel');
  const chatToggle = document.getElementById('chatToggle');
  const chatClose = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatBody = document.getElementById('chatBody');
  const chatMessage = document.getElementById('chatMessage');
  const conversation = [];
  let isSendingMessage = false;

  // AI Knowledge Base
  const knowledgeBase = {
    es: {
      greetings: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'saludos', 'que tal', 'como estas'],
      services: ['servicio', 'pentesting', 'pentest', 'hacking', 'seguridad', 'auditoria', 'prueba', 'evaluacion', 'owasp', 'api', 'web', 'movil', 'red'],
      pricing: ['precio', 'costo', 'cuanto', 'cotizacion', 'presupuesto', 'pagar', 'cobran', 'tarifa'],
      contact: ['contacto', 'email', 'correo', 'telefono', 'whatsapp', 'hablar', 'comunicar', 'reunion'],
      time: ['tiempo', 'cuanto tarda', 'duracion', 'plazo', 'demora', 'cuando'],
      methodology: ['metodologia', 'proceso', 'como trabajan', 'pasos', 'como hacen', 'procedimiento'],
      team: ['equipo', 'quien', 'expertos', 'certificaciones', 'experiencia'],
      benefits: ['ventaja', 'beneficio', 'por que', 'diferencial', 'mejor'],
      thanks: ['gracias', 'thank', 'excelente', 'perfecto', 'ok', 'vale']
    },
    en: {
      greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
      services: ['service', 'pentesting', 'pentest', 'hacking', 'security', 'audit', 'test', 'assessment', 'owasp', 'api', 'web', 'mobile', 'network'],
      pricing: ['price', 'cost', 'how much', 'quote', 'budget', 'pay', 'charge', 'fee'],
      contact: ['contact', 'email', 'phone', 'whatsapp', 'talk', 'communicate', 'meeting'],
      time: ['time', 'how long', 'duration', 'deadline', 'when'],
      methodology: ['methodology', 'process', 'how do you work', 'steps', 'procedure'],
      team: ['team', 'who', 'experts', 'certifications', 'experience'],
      benefits: ['advantage', 'benefit', 'why', 'differential', 'better'],
      thanks: ['thanks', 'thank you', 'excellent', 'perfect', 'ok', 'great']
    }
  };

  const responses = {
    es: {
      greeting: '👋 ¡Hola! Soy el asistente virtual de PentGuin 🐧\n\n🛡️ Estoy aquí para ayudarte con información sobre nuestros servicios de ciberseguridad.\n\n¿En qué puedo ayudarte hoy? 😊',
      services: '🎯 Ofrecemos 4 servicios principales:\n\n🕸️ Pentesting de Aplicaciones Web\n   → Análisis profundo bajo OWASP Top 10\n\n🔗 Seguridad de APIs\n   → Evaluación REST/SOAP para prevenir fugas\n\n📱 Análisis de Apps Móviles\n   → Vulnerabilidades en iOS y Android\n\n🛡️ Auditoría de Redes y Servidores\n   → Infraestructura completa\n\n💡 ¿Te gustaría saber más sobre alguno?',
      pricing: '💰 Nuestros precios varían según el alcance y complejidad del proyecto.\n\n✨ Te ofrecemos:\n\n✓ Evaluación inicial GRATUITA 🎁\n✓ Propuesta técnica en 72 horas ⚡\n✓ Precios competitivos para PyMEs 💼\n✓ Planes flexibles de pago 💳\n\n📋 ¿Te gustaría solicitar una cotización personalizada?',
      contact: '📞 Puedes contactarnos de las siguientes formas:\n\n📧 Email: contacto@pentguin.com\n📱 Teléfono: +51 987 654 321\n⏰ Respuesta inicial: <24 horas\n🌎 Cobertura 24/7 LATAM\n\n💬 También puedes usar el formulario de contacto en esta página.',
      time: '⏱️ Nuestros tiempos típicos son:\n\n⚡ Respuesta inicial: <24 horas\n🔍 Primeros hallazgos críticos: 72 horas\n📊 Informe completo: 1-2 semanas\n🔄 Validación de remediación: 3-5 días\n\n🚀 Trabajamos con metodología ágil en sprints para máxima transparencia.',
      methodology: '🔬 Nuestro proceso consta de 4 fases:\n\n1️⃣ Planificación y Alcance\n   → Definimos juntos el scope (RoE)\n\n2️⃣ Reconocimiento y Escaneo\n   → Herramientas: Nmap, Nessus, Nikto\n\n3️⃣ Análisis y Explotación Controlada\n   → Metasploit, Burp Suite, exploits manuales\n\n4️⃣ Reporte y Mitigación\n   → Informe ejecutivo + técnico (CVSS)\n\n📈 Todo con ceremonias ágiles para visibilidad total.',
      team: '👥 Nuestro equipo incluye:\n\n👨‍💼 Lucía Andrade - Líder de Consultora (PO)\n🎯 Miguel Choque - Scrum Master\n🔒 Valeria Ríos - Pentester Web Sr. (OSCP)\n🏗️ Renzo Aguilar - Arquitecto Zero Trust\n⚙️ Sofía Ibáñez - Analista DevSecOps\n\n🏆 Todos con experiencia en proyectos empresariales y certificaciones internacionales.',
      benefits: '🌟 Nuestros diferenciales:\n\n✅ 100% Ético - Contratos claros y NDA\n✅ Reportes Accionables (CVSS 4.0)\n✅ Metodología Ágil (Sprints semanales)\n✅ Supervisión Académica UPC 🎓\n✅ Cobertura 24/7 LATAM 🌎\n\n📊 +120 pentests empresariales entregados\n⭐ 98% de satisfacción del cliente',
      thanks: '😊 ¡De nada! Estoy aquí para ayudarte.\n\n💡 Si tienes más preguntas sobre nuestros servicios de ciberseguridad, no dudes en preguntar.\n\n📝 También puedes solicitar una evaluación usando el formulario de contacto.\n\n🐧 ¡PentGuin está para protegerte!',
      default: '🤔 Entiendo tu consulta. Te puedo ayudar con información sobre:\n\n💼 Servicios de pentesting\n💰 Precios y cotizaciones\n🔬 Metodología de trabajo\n👥 Nuestro equipo\n⏱️ Tiempos de entrega\n📞 Contacto y ubicación\n\n¿Sobre qué te gustaría saber más? 😊'
    },
    en: {
      greeting: '👋 Hello! I\'m PentGuin\'s virtual assistant 🐧\n\n🛡️ I\'m here to help you with information about our cybersecurity services.\n\nHow can I help you today? 😊',
      services: '🎯 We offer 4 main services:\n\n🕸️ Web Application Pentesting\n   → Deep analysis aligned to OWASP Top 10\n\n🔗 API Security\n   → REST/SOAP endpoint testing to stop data leakage\n\n📱 Mobile Application Analysis\n   → Vulnerability discovery in iOS & Android apps\n\n🛡️ Network & Server Audits\n   → Complete infrastructure assessment\n\n💡 Would you like to know more about any specific service?',
      pricing: '💰 Our prices vary depending on project scope and complexity.\n\n✨ We offer:\n\n✓ FREE initial assessment 🎁\n✓ Technical proposal in 72 hours ⚡\n✓ Competitive prices for SMBs 💼\n✓ Flexible payment plans 💳\n\n📋 Would you like to request a personalized quote?',
      contact: '📞 You can contact us through:\n\n📧 Email: contacto@pentguin.com\n📱 Phone: +51 987 654 321\n⏰ Initial response: <24 hours\n🌎 24/7 LATAM Coverage\n\n💬 You can also use the contact form on this page.',
      time: '⏱️ Our typical timelines:\n\n⚡ Initial response: <24 hours\n🔍 First critical findings: 72 hours\n📊 Complete report: 1-2 weeks\n🔄 Remediation validation: 3-5 days\n\n🚀 We work with agile sprints for maximum transparency.',
      methodology: '🔬 Our process consists of 4 phases:\n\n1️⃣ Planning & Scope\n   → We define the scope together (RoE)\n\n2️⃣ Reconnaissance & Scanning\n   → Tools: Nmap, Nessus, Nikto\n\n3️⃣ Analysis & Controlled Exploitation\n   → Metasploit, Burp Suite, manual exploits\n\n4️⃣ Reporting & Mitigation\n   → Executive + technical report (CVSS)\n\n📈 All with agile ceremonies for full visibility.',
      team: '👥 Our team includes:\n\n👨‍💼 Lucía Andrade - Consulting Lead (PO)\n🎯 Miguel Choque - Scrum Master\n🔒 Valeria Ríos - Senior Web Pentester (OSCP)\n🏗️ Renzo Aguilar - Zero Trust Architect\n⚙️ Sofía Ibáñez - DevSecOps Analyst\n\n🏆 All with enterprise project experience and international certifications.',
      benefits: '🌟 Our advantages:\n\n✅ 100% Ethical - Clear contracts & NDA\n✅ Actionable Reports (CVSS 4.0)\n✅ Agile Methodology (Weekly Sprints)\n✅ UPC Academic Supervision 🎓\n✅ 24/7 LATAM Coverage 🌎\n\n📊 +120 enterprise pentests delivered\n⭐ 98% client satisfaction',
      thanks: '😊 You\'re welcome! I\'m here to help.\n\n💡 If you have more questions about our cybersecurity services, feel free to ask.\n\n📝 You can also request an assessment using the contact form.\n\n🐧 PentGuin is here to protect you!',
      default: '🤔 I understand your question. I can help you with information about:\n\n💼 Pentesting services\n💰 Pricing and quotes\n🔬 Work methodology\n👥 Our team\n⏱️ Delivery times\n📞 Contact & location\n\nWhat would you like to know more about? 😊'
    }
  };

  function analyzeIntent(message, lang) {
    const msg = message.toLowerCase();
    const kb = knowledgeBase[lang];

    for (const [intent, keywords] of Object.entries(kb)) {
      if (keywords.some(keyword => msg.includes(keyword))) {
        return intent;
      }
    }
    return 'default';
  }

  function generateResponse(message) {
    const intent = analyzeIntent(message, currentLang);
    const responseSet = responses[currentLang];
    return responseSet[intent] || responseSet.default;
  }

  chatToggle?.addEventListener('click', () => {
    chatPanel?.classList.add('open');
    chatToggle.style.display = 'none';
    chatMessage?.focus();
  });

  chatClose?.addEventListener('click', () => {
    chatPanel?.classList.remove('open');
    chatToggle.style.display = 'block';
  });

  chatForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (isSendingMessage) return;
    const text = chatMessage?.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    conversation.push({ role: 'user', content: text });
    chatMessage.value = '';
    isSendingMessage = true;
    setChatInputsDisabled(true);
    const typingBubble = appendTypingIndicator();

    setTimeout(() => {
      if (typingBubble) typingBubble.remove();
      const reply = generateResponse(text);
      appendMessage(reply, 'bot');
      conversation.push({ role: 'assistant', content: reply });
      setChatInputsDisabled(false);
      isSendingMessage = false;
    }, 800 + Math.random() * 600);
  });

  function appendMessage(text, sender = 'bot') {
    if (!chatBody) return;
    const bubble = document.createElement('div');
    bubble.className = `message ${sender}`;
    bubble.textContent = text;
    chatBody.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function setChatInputsDisabled(isDisabled) {
    if (chatMessage) chatMessage.disabled = isDisabled;
    const submitBtn = chatForm?.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = isDisabled;
  }

  function appendTypingIndicator() {
    if (!chatBody) return null;
    const bubble = document.createElement('div');
    bubble.className = 'message bot typing';
    bubble.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(bubble);
    chatBody.scrollTop = chatBody.scrollHeight;
    return bubble;
  }

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact Form Handler (Frontend only - no backend)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;

      // Validación simple
      if (!nombre || !email || !mensaje) {
        showNotification(
          currentLang === 'es' ? 'Por favor completa todos los campos' : 'Please fill all fields',
          'error'
        );
        return;
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showNotification(
          currentLang === 'es' ? 'Por favor ingresa un email válido' : 'Please enter a valid email',
          'error'
        );
        return;
      }

      // Simular envío (en una app real, aquí irían servicios como EmailJS, Formspree, etc.)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
      submitBtn.style.opacity = '0.6';

      // Simular delay de envío
      setTimeout(() => {
        showNotification(
          currentLang === 'es'
            ? `¡Gracias ${nombre}! Tu mensaje ha sido recibido. Te contactaremos a ${email} pronto.`
            : `Thank you ${nombre}! Your message has been received. We'll contact you at ${email} soon.`,
          'success'
        );

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        submitBtn.style.opacity = '1';

        // Log para desarrollo (en producción esto se guardaría en un servicio)
        console.log('📧 Formulario enviado:', { nombre, email, mensaje });
      }, 1000);
    });
  }

  function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      font-weight: 600;
      animation: slideInRight 0.3s ease;
      max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Remover después de 5 segundos
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 5000);
  }

  // Agregar estilos de animación para las notificaciones
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  function initGlobe() {
    const globeContainer = document.getElementById('globeViz');
    if (!globeContainer || typeof window.Globe === 'undefined') return;

    const arcsData = [
      { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: '#4ad0ff' },
      { startLat: 51.5074, startLng: -0.1278, endLat: 35.6762, endLng: 139.6503, color: '#1b74ff' },
      { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, color: '#4ad0ff' },
      { startLat: -33.8688, startLng: 151.2093, endLat: -12.0464, endLng: -77.0428, color: '#6366f1' },
      { startLat: -12.0464, startLng: -77.0428, endLat: 40.7128, endLng: -74.0060, color: '#4ad0ff' },
      { startLat: 40.7128, startLng: -74.0060, endLat: 1.3521, endLng: 103.8198, color: '#1b74ff' },
      { startLat: 1.3521, startLng: 103.8198, endLat: 55.7558, endLng: 37.6173, color: '#4ad0ff' },
      { startLat: 55.7558, startLng: 37.6173, endLat: 52.5200, endLng: 13.4050, color: '#6366f1' },
      { startLat: 52.5200, startLng: 13.4050, endLat: -23.5505, endLng: -46.6333, color: '#4ad0ff' },
      { startLat: -23.5505, startLng: -46.6333, endLat: 19.4326, endLng: -99.1332, color: '#1b74ff' },
      { startLat: 19.4326, startLng: -99.1332, endLat: 37.7749, endLng: -122.4194, color: '#4ad0ff' },
      { startLat: 37.7749, startLng: -122.4194, endLat: 22.3193, endLng: 114.1694, color: '#6366f1' }
    ];

    const pointsData = [
      { lat: 40.7128, lng: -74.0060, size: 0.8, color: '#4ad0ff', label: 'New York' },
      { lat: 51.5074, lng: -0.1278, size: 0.7, color: '#4ad0ff', label: 'London' },
      { lat: 35.6762, lng: 139.6503, size: 0.8, color: '#1b74ff', label: 'Tokyo' },
      { lat: -33.8688, lng: 151.2093, size: 0.6, color: '#4ad0ff', label: 'Sydney' },
      { lat: -12.0464, lng: -77.0428, size: 1.0, color: '#6366f1', label: 'Lima' },
      { lat: 1.3521, lng: 103.8198, size: 0.7, color: '#4ad0ff', label: 'Singapore' },
      { lat: 55.7558, lng: 37.6173, size: 0.6, color: '#1b74ff', label: 'Moscow' },
      { lat: -23.5505, lng: -46.6333, size: 0.8, color: '#4ad0ff', label: 'São Paulo' },
      { lat: 19.4326, lng: -99.1332, size: 0.7, color: '#1b74ff', label: 'Mexico City' }
    ];

    myGlobe = window.Globe()
      (globeContainer)
      .globeImageUrl('https://unpkg.com/three-globe@2.30.0/example/img/earth-night.jpg')
      .backgroundColor('rgba(0,0,0,0)')
      .width(globeContainer.offsetWidth)
      .height(globeContainer.offsetHeight)
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(3000)
      .arcStroke(0.6)
      .pointsData(pointsData)
      .pointAltitude(0.02)
      .pointRadius('size')
      .pointColor('color')
      .pointsMerge(true)
      .atmosphereColor('#4ad0ff')
      .atmosphereAltitude(0.2);

    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 0.6;
    myGlobe.controls().enableZoom = false;
    myGlobe.controls().enablePan = false;

    myGlobe.pointOfView({ lat: 10, lng: 0, altitude: 2.2 }, 0);

    window.addEventListener('resize', () => {
      if (myGlobe && globeContainer) {
        myGlobe.width(globeContainer.offsetWidth);
        myGlobe.height(globeContainer.offsetHeight);
      }
    });

    const isDarkTheme = root.getAttribute('data-theme') !== 'light';
    updateGlobeTheme(isDarkTheme);
  }

  function updateGlobeTheme(isDark) {
    if (!myGlobe) return;
    const imageUrl = isDark
      ? 'https://unpkg.com/three-globe@2.30.0/example/img/earth-night.jpg'
      : 'https://unpkg.com/three-globe@2.30.0/example/img/earth-blue-marble.jpg';
    myGlobe.globeImageUrl(imageUrl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobe);
  } else {
    initGlobe();
  }

  const originalApplyTheme = applyTheme;
  applyTheme = function(mode, persist = true) {
    originalApplyTheme(mode, persist);
    const isDark = mode === 'dark';
    updateGlobeTheme(isDark);
  };
})();
