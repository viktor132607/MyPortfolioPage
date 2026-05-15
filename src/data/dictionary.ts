export type Lang = "bg" | "en";

export type NavItem = {
  href: string;
  label: string;
};

export function normalizeLang(lang?: string): Lang {
  return lang === "bg" ? "bg" : "en";
}

export const content = {
  bg: {
    profile: {
      name: "Viktor Iliev",
      role: "",
      headline: "Виктор Илиев - Full-stack developer с опит в счетоводство, одит и финансов контрол.",
      summary:
        "Здравейте и добре дошли в моето портфолио! Аз съм Виктор Илиев, full-stack developer с професионален опит в счетоводството, одита и финансовия контрол. Комбинирам практически опит в счетоводството с активно обучение по софтуерно инженерство, което ми дава уникална перспектива за изграждане на дигитални продукти, които са не само технически стабилни, но и отговарят на бизнес нуждите и процесите. В моето портфолио ще намерите проекти, които демонстрират моя подход към чист код, функционален дизайн и практическо прилагане на технологии като ASP.NET Core, Next.js и TypeScript. Благodarя Ви, че отделихте време да разгледате моята работа!",
      email: "iliev132607@gmail.com",
      phone: "+359 899564288",
      location: "Varna / Bulgaria",
      github: "https://github.com/viktor132607",
      linkedin: "https://www.linkedin.com/in/viktor-iliev-90061b279/",
      cvUrl: "/cv.pdf"
    },
    navItems: [
      { href: "#about", label: "За мен" },
      { href: "#experience", label: "Опит" },
      { href: "#projects", label: "Проекти" },
      { href: "#skills", label: "Умения" },
      { href: "#education", label: "Образование" },
      { href: "#certificates", label: "Сертификати" },
      { href: "#contact", label: "Контакт" }
    ],
    buttons: {
      portfolio: "Portfolio",
      downloadCv: "Изтегли CV",
      contact: "Контакт",
      viewExperience: "Виж опита",
      viewProjects: "Виж проектите"
    },
    heroCard: {
      eyebrow: "В момента",
      text: "Фокус върху full-stack development, accounting operations, portfolio проекти и развитие в ASP.NET Core, Next.js и TypeScript.",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Локация"
    },
    highlights: [
      {
        value: "2+",
        label: "професионални роли",
        text: "Опит в accounting operations, Fixed Assets, CAPEX, financial reporting и audit procedures."
      },
      {
        value: "3+",
        label: "web проекта",
        text: "Практически portfolio и business-oriented web решения с frontend, backend и database логика."
      },
      {
        value: "10+",
        label: "завършени обучения",
        text: "SoftUni курсове в C#, databases, ASP.NET, HTML, CSS, JavaScript и frontend development."
      },
      {
        value: "2",
        label: "университетски степени",
        text: "Bachelor’s degree in Accounting and Audit и Master’s degree in Accounting and Control."
      }
    ],
    sections: {
      results: {
        eyebrow: "Резултати",
        title: "Доказателства за работа, структура и реално изпълнение.",
        text:
          "Професионален и академичен опит в одит, счетоводство, reporting, reconciliations, software development и full-stack portfolio проекти.",
        items: [
          "Audit procedures",
          "Fixed Assets and CAPEX",
          "Financial reporting",
          "Full-stack projects",
          "Database-backed applications",
          "Technical documentation"
        ],
        itemText:
          "Опит, изграден чрез client-facing audit work, accounting operations, структурирано software обучение и практически web development проекти."
      },
      about: {
        eyebrow: "За мен",
        title: "Профил, който комбинира финанси и софтуерно инженерство",
        text:
          "Имам професионален опит в accounting, audit и financial control, комбиниран с активно software development обучение и full-stack проектна работа. Това ми дава практическо разбиране за бизнес процеси, точност на данните, документация и техническо изпълнение."
      },
      experience: {
        eyebrow: "Опит",
        title: "Професионален път",
        text:
          "Опит във freelance full-stack development, general accounting, Fixed Assets, CAPEX, month-end close, reconciliations, financial reporting, audit procedures и client-facing documentation work."
      },
      projects: {
        eyebrow: "Проекти / Deep Dives",
        title: "Практически проекти",
        text:
          "Проекти с фокус върху frontend структура, backend логика, database design, admin workflows, multilingual UI и deployment-ready web решения.",
        labels: {
          context: "Контекст",
          solution: "Решение",
          role: "Роля",
          result: "Резултат"
        }
      },
      skills: {
        eyebrow: "Умения / Технологии",
        title: "Технологичен стек и професионални умения",
        text:
          "Фокус върху full-stack development технологии, frontend и backend разработка, бази данни, deployment инструменти и професионални умения за работа по реални software проекти."
      },
      education: {
        eyebrow: "Образование",
        title: "Образование и професионално развитие.",
        text:
          "Комбинация от software development обучение, икономическо образование и професионална основа в accounting, audit и financial control."
      },
      certificates: {
        eyebrow: "Сертификати",
        title: "Software development курсове и сертификати.",
        text:
          "Завършени SoftUni курсове в C#, databases, ASP.NET, HTML, CSS, JavaScript и frontend development."
      },
      philosophy: {
        eyebrow: "Инженерна философия",
        title: "Принципи, които правят работата по-ясна и поддържана."
      },
      current: {
        eyebrow: "В момента",
        title: "Текущ фокус между accounting operations, software development и portfolio проекти."
      },
      personal: {
        eyebrow: "Извън работата",
        title: "Лична секция за интереси, характер и контекст.",
        text:
          "Интерес към технологии, практическо учене, web development и изграждане на структурирани дигитални продукти.",
        items: ["Technology", "Web development", "Continuous learning"],
        itemText: "Фокус върху подобряване на техническите умения чрез реални проекти и структурирано обучение."
      },
      recommendations: {
        eyebrow: "Препоръки / Социално доверие",
        title: "Trust signals, базирани на реален опит и проверима работа.",
        text:
          "Професионален опит, образование, сертификати, GitHub проекти и portfolio работа изграждат основните trust signals.",
        body:
          "Професионален background в accounting и audit, комбиниран със software development обучение и практически full-stack portfolio проекти."
      },
      contact: {
        eyebrow: "Контакт",
        title: "Ако идеята е важна, свържете се.",
        text: "Отворен съм към software development, IT, finance-technology и full-stack project възможности.",
        email: "Имейл",
        phone: "Телефон"
      }
    },
    aboutCards: [
      {
        number: "01",
        title: "Системно мислене",
        text:
          "Разбирам задачите като комбинация от бизнес цел, техническа структура, точни данни и ясно потребителско изживяване."
      },
      {
        number: "02",
        title: "Full-stack подход",
        text:
          "Мога да свързвам UI, API, database и deployment логика в работеща и поддържана цялост."
      },
      {
        number: "03",
        title: "Finance + Tech профил",
        text:
          "Комбинирам accounting и audit опит със software development умения, което е полезно за системи, данни, reporting и business workflows."
      }
    ],
    experience: [
      {
        period: "2025 - до момента",
        title: "Freelance Full Stack Developer",
        company: "Self-employed / Personal Projects",
        text:
          "Разработвам и поддържам web проекти с фокус върху чисти frontend интерфейси, backend логика, database структура, multilingual съдържание и deployment-ready изпълнение.",
        bullets: [
          "Изграждане на business-oriented web проекти с Next.js, React, TypeScript, TailwindCSS и ASP.NET Core.",
          "Работа по responsive layouts, multilingual UI, reusable components и ясни user flows.",
          "Имплементиране на backend логика, database модели, API integration и admin-oriented workflows за portfolio и business сайтове."
        ],
        stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "ASP.NET Core", "PostgreSQL", "GitHub", "Deployment"]
      },
      {
        period: "December 2025 - до момента",
        title: "GA Expert Accountant",
        company: "Coca-Cola Hellenic Business Services Organization EOOD, Varna",
        text:
          "Участвам в general accounting дейности с фокус върху Fixed Assets и CAPEX, подпомагайки month-end close, financial reporting, reconciliations и спазване на IFRS и вътрешни политики.",
        bullets: [
          "Подпомагане на Fixed Assets и CAPEX счетоводни дейности като част от general accounting operations.",
          "Работа по month-end close, reconciliations и financial reporting задачи.",
          "Фокус върху точност, качествена документация и съответствие с IFRS и вътрешни политики."
        ],
        stack: ["Fixed Assets", "CAPEX", "Reconciliations", "Financial Reporting", "IFRS", "Month-end Close"]
      },
      {
        period: "May 2023 - May 2024",
        title: "Audit Assistant",
        company: "KPMG Bulgaria, Varna",
        text:
          "Изпълнявах audit procedures, включително substantive testing, analytical reviews и walkthroughs of internal controls, като работех директно с finance teams на клиенти.",
        bullets: [
          "Изпълнение на substantive testing на financial statement line items и analytical reviews.",
          "Работа с client finance teams за събиране на документация, reconciliations и идентифициране на discrepancies.",
          "Прилагане на audit methodology с фокус върху точност, професионализъм и спазване на кратки срокове."
        ],
        stack: ["Audit", "Substantive Testing", "Analytical Reviews", "Internal Controls", "IFRS", "Client Documentation"]
      }
    ],
    projects: [
      {
        number: "01",
        title: "Photography Business Platform",
        context:
          "Платформа за фотографски бизнес с публично портфолио, категории, албуми, admin управление и основа за client galleries.",
        solution:
          "Изградена е full-stack структура с отделяне на публична част, admin зона, portfolio modules, authentication логика и подготвени data models за бъдещо разширяване.",
        role:
          "Full-stack developer с фокус върху UI структура, backend логика, database модели, admin CRUD flow и връзка между frontend и API.",
        stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "ASP.NET Core", "PostgreSQL"],
        result:
          "Готова portfolio основа за реален фотографски бизнес, с ясна публична презентация, admin управление и посока за private client galleries.",
        previewUrl: "https://dgvisionstudio.com/"
      },
      {
        number: "02",
        title: "Accounting Website",
        context:
          "Multilingual corporate site за счетоводна услуга с публично представяне, услуги, contact секции и clean professional branding.",
        solution:
          "Компонентна структура с BG/EN съдържание, responsive layout, theme switcher, reusable UI patterns и deployment-ready frontend код.",
        role:
          "Frontend developer с фокус върху UX, visual consistency, responsive поведение, езикови версии и поддържана структура на компонентите.",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "i18n", "Responsive UI"],
        result:
          "Професионален уебсайт с ясна структура, двуезично съдържание и production-ready frontend основа.",
        previewUrl: "https://nhalachev.com/"
      },
      {
        number: "03",
        title: "PaladinHub",
        context: "Placeholder за бъдещ project preview, докато реалният сайт или live demo стане наличен.",
        solution:
          "Секцията е подготвена за landing page preview, product concept, feature overview, tech stack и live линк, когато проектът бъде публикуван.",
        role:
          "Full-stack / frontend developer. Реалното описание ще бъде добавено след уточняване на scope, архитектура и функционалности.",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "Placeholder"],
        result: "Preview coming soon — място за бъдещ live demo, screenshots или case study.",
        previewUrl: ""
      }
    ],
    skills: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript", "Responsive UI"]
      },
      {
        title: "Backend",
        items: ["C#", "ASP.NET Core", "Web API", "Entity Framework", "REST APIs", "Server-side web applications"]
      },
      {
        title: "Databases",
        items: ["MS SQL", "PostgreSQL", "SQL"]
      },
      {
        title: "Tools & Deployment",
        items: ["Git", "GitHub", "Docker", "Render", "Version control", "Deployment workflows"]
      },
      {
        title: "Development practices",
        items: ["Clean code", "Reusable components", "API integration", "Responsive design", "Debugging", "Technical documentation"]
      },
      {
        title: "Professional skills",
        items: [
          "Problem-solving",
          "Attention to detail",
          "Communication",
          "Time management",
          "Adaptability",
          "Teamwork",
          "Work ethic",
          "Quick learner"
        ]
      }
    ],
    techStack: [
      {
        title: "Backend",
        badges: [
          { name: "C#", className: "bg-[#68217A] text-white" },
          { name: ".NET", className: "bg-[#512BD4] text-white" },
          { name: "ASP.NET Core", className: "bg-[#5C2D91] text-white" },
          { name: "Entity Framework", className: "bg-[#6DB33F] text-white" },
          { name: "Web API", className: "bg-[#2563EB] text-white" }
        ]
      },
      {
        title: "Frontend",
        badges: [
          { name: "HTML5", className: "bg-[#E34F26] text-white" },
          { name: "CSS3", className: "bg-[#1572B6] text-white" },
          { name: "JavaScript", className: "bg-[#F7DF1E] text-black" },
          { name: "TypeScript", className: "bg-[#3178C6] text-white" },
          { name: "React", className: "bg-[#20232A] text-[#61DAFB]" },
          { name: "Next.js", className: "bg-black text-white" },
          { name: "Tailwind CSS", className: "bg-[#38BDF8] text-slate-950" }
        ]
      },
      {
        title: "Databases",
        badges: [
          { name: "MS SQL", className: "bg-[#CC2927] text-white" },
          { name: "PostgreSQL", className: "bg-[#336791] text-white" }
        ]
      },
      {
        title: "Tools & Deployment",
        badges: [
          { name: "Git", className: "bg-[#F05032] text-white" },
          { name: "GitHub", className: "bg-[#181717] text-white" },
          { name: "Docker", className: "bg-[#2496ED] text-white" },
          { name: "Render", className: "bg-[#46E3B7] text-slate-950" }
        ]
      }
    ],
    education: [
      {
        title: "Software University (SoftUni)",
        period: "September 2024 – December 2025",
        degree: "Software Development",
        text:
          "Структурирана software development програма с практическа насоченост към реални технологии, project-based learning и писане на clean, maintainable code.",
        details: [
          "Завършени курсове в Programming Fundamentals, Object-Oriented Programming, Databases и Web Development.",
          "Практика с C#, ASP.NET, HTML, CSS, JavaScript, databases и backend web application development.",
          "Фокус върху dynamic server-side web applications, APIs и практически full-stack solutions."
        ]
      },
      {
        title: "University of Economics – Varna",
        period: "September 2023 – January 2026",
        degree: "Master’s degree, Accounting and Control",
        text:
          "Магистърска степен с фокус върху financial control, financial analysis, financial accounting, international accounting standards, risk analysis, auditing, taxation и financial reporting.",
        details: [
          "Развити аналитични умения и разбиране на financial control и reporting processes.",
          "Знания в international accounting standards, risk analysis, auditing и taxation.",
          "Полезна основа за работа с financial data, reconciliations, reporting и структурирани business processes."
        ]
      },
      {
        title: "University of Economics – Varna",
        period: "September 2019 – June 2023",
        degree: "Bachelor’s degree, Accounting and Audit",
        text:
          "Бакалавърска степен с фокус върху financial accounting, auditing, taxation и corporate finance.",
        details: [
          "Изградени analytical и problem-solving умения чрез coursework и applied projects.",
          "Изучавани economics, financial analysis и business management.",
          "Силна основа за audit, accounting, documentation и accuracy-focused work."
        ]
      },
      {
        title: "Vocational High School of Economics and Management – Ruse",
        period: "2014 – 2019",
        degree: "Professional degree, Operational Accounting",
        text:
          "Професионална подготовка по operational accounting с ранна основа в accounting logic, business documents и financial operations.",
        details: [
          "Формирана дисциплина за работа с детайли, документи и числова информация.",
          "Ранна основа в accounting и business administration.",
          "Подготовка за последващо развитие в accounting, audit и financial control."
        ]
      }
    ],
    certificates: [
      {
        title: "Programming Basics",
        provider: "SoftUni",
        date: "January 2022",
        issueDate: "28/02/2022",
        area: "Programming foundations",
        status: "Completed",
        level: "Basics",
        url: "https://softuni.bg/Certificates/Details/126807/9701379a",
        previewImage: "/certificates/programming-basics.jpg"
      },
      {
        title: "Programming Fundamentals with C#",
        provider: "SoftUni",
        date: "September 2024",
        issueDate: "02/12/2024",
        area: "C# / Fundamentals",
        status: "Completed",
        level: "Fundamentals",
        url: "https://softuni.bg/Certificates/Details/230998/a57bfca2",
        previewImage: "/certificates/programming-fundamentals-csharp.jpg"
      },
      {
        title: "C# Advanced",
        provider: "SoftUni",
        date: "September 2024",
        issueDate: "28/10/2024",
        area: "C# / Advanced",
        status: "Completed",
        level: "Advanced",
        url: "https://softuni.bg/Certificates/Details/227830/7a343207",
        previewImage: "/certificates/csharp-advanced.jpg"
      },
      {
        title: "C# OOP",
        provider: "SoftUni",
        date: "February 2025",
        issueDate: "11/04/2025",
        area: "Object-Oriented Programming",
        status: "Completed",
        level: "OOP",
        url: "https://softuni.bg/Certificates/Details/241949/90010164",
        previewImage: "/certificates/csharp-oop.jpg"
      },
      {
        title: "MS SQL",
        provider: "SoftUni",
        date: "January 2025",
        issueDate: "08/04/2025",
        area: "Databases",
        status: "Completed",
        level: "Database",
        url: "https://softuni.bg/Certificates/Details/241650/4935c3eb",
        previewImage: "/certificates/ms-sql.jpg"
      },
      {
        title: "Entity Framework Core",
        provider: "SoftUni",
        date: "October 2025",
        issueDate: "05/12/2025",
        area: "ORM / Data access",
        status: "Completed",
        level: "Backend",
        url: "https://softuni.bg/certificates/details/255097/84846a53",
        previewImage: "/certificates/entity-framework-core.jpeg"
      },
      {
        title: "ASP.NET Fundamentals",
        provider: "SoftUni",
        date: "May 2025",
        issueDate: "20/08/2025",
        area: "Web development",
        status: "Completed",
        level: "Backend",
        url: "https://softuni.bg/Certificates/Details/249703/cec828da",
        previewImage: "/certificates/aspnet-fundamentals.jpg"
      },
      {
        title: "ASP.NET Advanced",
        provider: "SoftUni",
        date: "June 2025",
        issueDate: "18/08/2025",
        area: "Web applications / APIs",
        status: "Completed",
        level: "Advanced",
        url: "https://softuni.bg/Certificates/Details/249207/e8011257",
        previewImage: "/certificates/aspnet-advanced.jpg"
      },
      {
        title: "HTML & CSS",
        provider: "SoftUni",
        date: "May 2025",
        issueDate: "30/06/2025",
        area: "Frontend",
        status: "Completed",
        level: "Frontend",
        url: "https://softuni.bg/Certificates/Details/245897/84d07a84",
        previewImage: "/certificates/html-css.jpg"
      },
      {
        title: "JS Front-End",
        provider: "SoftUni",
        date: "June 2025",
        issueDate: "12/08/2025",
        area: "JavaScript frontend",
        status: "Completed",
        level: "Frontend",
        url: "https://softuni.bg/Certificates/Details/248756/3a11b30a",
        previewImage: "/certificates/js-front-end.jpg"
      },
      {
        title: "IT Career Booster",
        provider: "SoftUni",
        date: "October 2024",
        issueDate: "20/12/2024",
        area: "IT career preparation",
        status: "Completed",
        level: "Career",
        url: "https://softuni.bg/Certificates/Details/234252/503cc1db",
        previewImage: "/certificates/it-career-booster.jpg"
      }
    ],
    principles: [
      {
        number: "01",
        title: "Яснота пред шум",
        text: "Кодът, процесите и комуникацията трябва да намаляват сложността, не да я крият."
      },
      {
        number: "02",
        title: "Практична архитектура",
        text: "Структурата има смисъл само ако прави системата по-лесна за развитие и поддръжка."
      },
      {
        number: "03",
        title: "Delivery с качество",
        text: "Скоростта е полезна, когато крайният резултат остава стабилен, проверим и разбираем."
      }
    ],
    currentFocus: [
      "Развитие в full-stack development с Next.js, TypeScript и ASP.NET Core.",
      "Прилагане на finance и accounting background в технически и data-oriented решения.",
      "Полиране на portfolio проекти, UI структура, backend logic и deployment workflows.",
      "Събиране на реални project details, screenshots и case studies за portfolio."
    ]
  },
  en: {
    profile: {
      name: "Viktor Iliev",
      role: "",
      headline: "Viktor Iliev - Full-stack developer with a background in accounting, audit and financial control.",
      summary:
        "I combine software development training with real professional experience in accounting, audit, fixed assets, CAPEX, reconciliations and financial reporting. My portfolio focuses on practical web solutions, clean UI, backend logic, databases and structured delivery.",
      email: "iliev132607@gmail.com",
      phone: "+359 899564288",
      location: "Varna / Bulgaria",
      github: "https://github.com/viktor132607",
      linkedin: "https://www.linkedin.com/in/viktor-iliev-90061b279/",
      cvUrl: "/cv.pdf"
    },
    navItems: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#education", label: "Education" },
      { href: "#certificates", label: "Certificates" },
      { href: "#contact", label: "Contact" }
    ],
    buttons: {
      portfolio: "Portfolio",
      downloadCv: "Download CV",
      contact: "Contact",
      viewExperience: "View experience",
      viewProjects: "View projects"
    },
    heroCard: {
      eyebrow: "Current focus",
      text: "Focus on full-stack development, accounting operations, portfolio projects and growth in ASP.NET Core, Next.js and TypeScript.",
      github: "GitHub",
      linkedin: "LinkedIn",
      location: "Location"
    },
    highlights: [
      {
        value: "2+",
        label: "professional roles",
        text: "Experience in accounting operations, Fixed Assets, CAPEX, financial reporting and audit procedures."
      },
      {
        value: "3+",
        label: "web projects",
        text: "Practical portfolio and business-oriented web solutions with frontend, backend and database logic."
      },
      {
        value: "10+",
        label: "completed trainings",
        text: "SoftUni courses in C#, databases, ASP.NET, HTML, CSS, JavaScript and frontend development."
      },
      {
        value: "2",
        label: "university degrees",
        text: "Bachelor’s degree in Accounting and Audit and Master’s degree in Accounting and Control."
      }
    ],
    sections: {
      results: {
        eyebrow: "Results",
        title: "Proof of work, structure and practical execution.",
        text:
          "Professional and academic experience across audit, accounting, reporting, reconciliations, software development and full-stack portfolio projects.",
        items: [
          "Audit procedures",
          "Fixed Assets and CAPEX",
          "Financial reporting",
          "Full-stack projects",
          "Database-backed applications",
          "Technical documentation"
        ],
        itemText:
          "Experience built through client-facing audit work, accounting operations, structured software training and practical web development projects."
      },
      about: {
        eyebrow: "About",
        title: "A profile that combines finance and software development",
        text:
          "I have a background in accounting, audit and financial control, combined with active software development training and full-stack project work. This gives me a practical understanding of business processes, data accuracy, documentation and technical delivery."
      },
      experience: {
        eyebrow: "Experience",
        title: "Professional path",
        text:
          "Experience across freelance full-stack development, general accounting, Fixed Assets, CAPEX, month-end close, reconciliations, financial reporting, audit procedures and client-facing documentation work."
      },
      projects: {
        eyebrow: "Projects / Deep Dives",
        title: "Selected case studies for real and portfolio-based technical problems.",
        text:
          "Projects focused on frontend structure, backend logic, database design, admin workflows, multilingual UI and deployment-ready web solutions.",
        labels: {
          context: "Context",
          solution: "Solution",
          role: "Role",
          result: "Result"
        }
      },
      skills: {
        eyebrow: "Skills / Technologies",
        title: "Tech stack and professional skills",
        text:
          "Focused on full-stack development technologies, frontend and backend development, databases, deployment tools and professional skills for real software projects."
      },
      education: {
        eyebrow: "Education",
        title: "Education and professional development.",
        text:
          "A combination of software development training, economics education and a professional foundation in accounting, audit and financial control."
      },
      certificates: {
        eyebrow: "Certificates",
        title: "Software development courses and certificates.",
        text: "Completed SoftUni courses covering C#, databases, ASP.NET, HTML, CSS, JavaScript and frontend development."
      },
      philosophy: {
        eyebrow: "Engineering philosophy",
        title: "Principles that make work clearer and easier to maintain."
      },
      current: {
        eyebrow: "Currently",
        title: "Current focus across accounting operations, software development and portfolio projects."
      },
      personal: {
        eyebrow: "Outside work",
        title: "A personal section for interests, character and context.",
        text: "Interest in technology, practical learning, web development and building structured digital products.",
        items: ["Technology", "Web development", "Continuous learning"],
        itemText: "Focused on improving technical skills through real projects and structured learning."
      },
      recommendations: {
        eyebrow: "Recommendations / Social proof",
        title: "Trust signals based on real experience and verifiable work.",
        text:
          "Professional experience, education, certificates, GitHub projects and portfolio work provide the core trust signals.",
        body:
          "Professional background in accounting and audit, combined with software development training and practical full-stack portfolio projects."
      },
      contact: {
        eyebrow: "Contact",
        title: "If the idea matters, let’s talk.",
        text: "Available for software development, IT, finance-technology and full-stack project opportunities.",
        email: "Email",
        phone: "Phone"
      }
    },
    aboutCards: [
      {
        number: "01",
        title: "Systems thinking",
        text:
          "I understand tasks as a combination of business goal, technical structure, accurate data and clear user experience."
      },
      {
        number: "02",
        title: "Full-stack approach",
        text: "I can connect UI, API, database and deployment logic into a working and maintainable whole."
      },
      {
        number: "03",
        title: "Finance + Tech profile",
        text:
          "I combine accounting and audit experience with software development skills, which is useful for systems, data, reporting and business workflows."
      }
    ],
    experience: [
      {
        period: "2025 - Present",
        title: "Freelance Full Stack Developer",
        company: "Self-employed / Personal Projects",
        text:
          "Developing and maintaining web projects with a focus on clean frontend interfaces, backend logic, database structure, multilingual content and deployment-ready implementation.",
        bullets: [
          "Built business-oriented web projects using Next.js, React, TypeScript, TailwindCSS and ASP.NET Core.",
          "Worked on responsive layouts, multilingual UI, reusable components and clean user flows.",
          "Implemented backend logic, database models, API integration and admin-oriented workflows for portfolio and business websites."
        ],
        stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "ASP.NET Core", "PostgreSQL", "GitHub", "Deployment"]
      },
      {
        period: "December 2025 - Present",
        title: "GA Expert Accountant",
        company: "Coca-Cola Hellenic Business Services Organization EOOD, Varna",
        text:
          "Involved in general accounting activities with a focus on Fixed Assets and CAPEX, supporting month-end close, financial reporting, reconciliations and compliance with IFRS and internal company policies.",
        bullets: [
          "Support Fixed Assets and CAPEX accounting activities as part of general accounting operations.",
          "Work on month-end close, reconciliations and financial reporting tasks.",
          "Ensure accuracy, documentation quality and compliance with IFRS and internal company policies."
        ],
        stack: ["Fixed Assets", "CAPEX", "Reconciliations", "Financial Reporting", "IFRS", "Month-end Close"]
      },
      {
        period: "May 2023 - May 2024",
        title: "Audit Assistant",
        company: "KPMG Bulgaria, Varna",
        text:
          "Performed audit procedures including substantive testing, analytical reviews and walkthroughs of internal controls while working directly with client finance teams.",
        bullets: [
          "Performed substantive testing of financial statement line items and analytical reviews.",
          "Worked with client finance teams to gather documentation, reconcile accounts and identify discrepancies.",
          "Applied audit methodology while maintaining accuracy, professionalism and strict deadline discipline."
        ],
        stack: ["Audit", "Substantive Testing", "Analytical Reviews", "Internal Controls", "IFRS", "Client Documentation"]
      }
    ],
    projects: [
      {
        number: "01",
        title: "Photography Business Platform",
        context:
          "A platform for a photography business with public portfolio, categories, albums, admin management and a foundation for client galleries.",
        solution:
          "Built as a full-stack structure separating the public website, admin area, portfolio modules, authentication logic and data models prepared for future extension.",
        role:
          "Full-stack developer focused on UI structure, backend logic, database models, admin CRUD flow and frontend-to-API integration.",
        stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "ASP.NET Core", "PostgreSQL"],
        result:
          "A clear portfolio foundation for a real photography business, with public presentation, admin management and direction for private client galleries.",
        previewUrl: "https://dgvisionstudio.com/"
      },
      {
        number: "02",
        title: "Accounting Website",
        context:
          "A multilingual corporate website for an accounting service with public presentation, services, contact sections and clean professional branding.",
        solution:
          "Component-based structure with BG/EN content, responsive layout, theme switcher, reusable UI patterns and deployment-ready frontend code.",
        role:
          "Frontend developer focused on UX, visual consistency, responsive behavior, language versions and maintainable component structure.",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "i18n", "Responsive UI"],
        result: "A professional website with clear structure, bilingual content and a production-ready frontend foundation.",
        previewUrl: "https://nhalachev.com/"
      },
      {
        number: "03",
        title: "PaladinHub",
        context: "Placeholder for a future project preview until the real website or live demo becomes available.",
        solution:
          "This section is prepared for a landing page preview, product concept, feature overview, tech stack and live link once the project is published.",
        role:
          "Full-stack / frontend developer. The real description will be added after the scope, architecture and features are finalized.",
        stack: ["Next.js", "TypeScript", "TailwindCSS", "Placeholder"],
        result: "Preview coming soon — reserved space for a future live demo, screenshots or case study.",
        previewUrl: ""
      }
    ],
    skills: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "TailwindCSS", "HTML", "CSS", "JavaScript", "Responsive UI"]
      },
      {
        title: "Backend",
        items: ["C#", "ASP.NET Core", "Web API", "Entity Framework", "REST APIs", "Server-side web applications"]
      },
      {
        title: "Databases",
        items: ["MS SQL", "PostgreSQL", "SQL"]
      },
      {
        title: "Tools & Deployment",
        items: ["Git", "GitHub", "Docker", "Render", "Version control", "Deployment workflows"]
      },
      {
        title: "Development practices",
        items: ["Clean code", "Reusable components", "API integration", "Responsive design", "Debugging", "Technical documentation"]
      },
      {
        title: "Professional skills",
        items: [
          "Problem-solving",
          "Attention to detail",
          "Communication",
          "Time management",
          "Adaptability",
          "Teamwork",
          "Work ethic",
          "Quick learner"
        ]
      }
    ],
    techStack: [
      {
        title: "Backend",
        badges: [
          { name: "C#", className: "bg-[#68217A] text-white" },
          { name: ".NET", className: "bg-[#512BD4] text-white" },
          { name: "ASP.NET Core", className: "bg-[#5C2D91] text-white" },
          { name: "Entity Framework", className: "bg-[#6DB33F] text-white" },
          { name: "Web API", className: "bg-[#2563EB] text-white" }
        ]
      },
      {
        title: "Frontend",
        badges: [
          { name: "HTML5", className: "bg-[#E34F26] text-white" },
          { name: "CSS3", className: "bg-[#1572B6] text-white" },
          { name: "JavaScript", className: "bg-[#F7DF1E] text-black" },
          { name: "TypeScript", className: "bg-[#3178C6] text-white" },
          { name: "React", className: "bg-[#20232A] text-[#61DAFB]" },
          { name: "Next.js", className: "bg-black text-white" },
          { name: "Tailwind CSS", className: "bg-[#38BDF8] text-slate-950" }
        ]
      },
      {
        title: "Databases",
        badges: [
          { name: "MS SQL", className: "bg-[#CC2927] text-white" },
          { name: "PostgreSQL", className: "bg-[#336791] text-white" }
        ]
      },
      {
        title: "Tools & Deployment",
        badges: [
          { name: "Git", className: "bg-[#F05032] text-white" },
          { name: "GitHub", className: "bg-[#181717] text-white" },
          { name: "Docker", className: "bg-[#2496ED] text-white" },
          { name: "Render", className: "bg-[#46E3B7] text-slate-950" }
        ]
      }
    ],
    education: [
      {
        title: "Software University (SoftUni)",
        period: "September 2024 – December 2025",
        degree: "Software Development",
        text:
          "Structured software development program focused on real-world skills, practical technologies, project-based learning and writing clean, maintainable code.",
        details: [
          "Completed courses in Programming Fundamentals, Object-Oriented Programming, Databases and Web Development.",
          "Hands-on experience with C#, ASP.NET, HTML, CSS, JavaScript, databases and backend web application development.",
          "Focused on building dynamic server-side web applications, APIs and practical full-stack solutions."
        ]
      },
      {
        title: "University of Economics – Varna",
        period: "September 2023 – January 2026",
        degree: "Master’s degree, Accounting and Control",
        text:
          "Master’s degree covering advanced topics in financial control, financial analysis, financial accounting, international accounting standards, risk analysis, auditing, taxation and financial reporting.",
        details: [
          "Developed stronger analytical thinking and understanding of financial control and reporting processes.",
          "Built knowledge in international accounting standards, risk analysis, auditing and taxation.",
          "Useful foundation for work with financial data, reconciliations, reporting and structured business processes."
        ]
      },
      {
        title: "University of Economics – Varna",
        period: "September 2019 – June 2023",
        degree: "Bachelor’s degree, Accounting and Audit",
        text:
          "Bachelor’s degree focused on financial accounting, auditing, taxation and corporate finance.",
        details: [
          "Developed analytical and problem-solving skills through coursework and applied projects.",
          "Studied economics, financial analysis and business management.",
          "Strong base for audit, accounting, documentation and accuracy-focused work."
        ]
      },
      {
        title: "Vocational High School of Economics and Management – Ruse",
        period: "2014 – 2019",
        degree: "Professional degree, Operational Accounting",
        text:
          "Professional training in operational accounting with an early foundation in accounting logic, business documents and financial operations.",
        details: [
          "Built discipline for working with details, documents and numerical information.",
          "Developed an early foundation in accounting and business administration.",
          "Prepared for later education in accounting, audit and financial control."
        ]
      }
    ],
    certificates: [
      {
        title: "Programming Basics",
        provider: "SoftUni",
        date: "January 2022",
        issueDate: "28/02/2022",
        area: "Programming foundations",
        status: "Completed",
        level: "Basics",
        url: "https://softuni.bg/Certificates/Details/126807/9701379a",
        previewImage: "/certificates/programming-basics.jpg"
      },
      {
        title: "Programming Fundamentals with C#",
        provider: "SoftUni",
        date: "September 2024",
        issueDate: "02/12/2024",
        area: "C# / Fundamentals",
        status: "Completed",
        level: "Fundamentals",
        url: "https://softuni.bg/Certificates/Details/230998/a57bfca2",
        previewImage: "/certificates/programming-fundamentals-csharp.jpg"
      },
      {
        title: "C# Advanced",
        provider: "SoftUni",
        date: "September 2024",
        issueDate: "28/10/2024",
        area: "C# / Advanced",
        status: "Completed",
        level: "Advanced",
        url: "https://softuni.bg/Certificates/Details/227830/7a343207",
        previewImage: "/certificates/csharp-advanced.jpg"
      },
      {
        title: "C# OOP",
        provider: "SoftUni",
        date: "February 2025",
        issueDate: "11/04/2025",
        area: "Object-Oriented Programming",
        status: "Completed",
        level: "OOP",
        url: "https://softuni.bg/Certificates/Details/241949/90010164",
        previewImage: "/certificates/csharp-oop.jpg"
      },
      {
        title: "MS SQL",
        provider: "SoftUni",
        date: "January 2025",
        issueDate: "08/04/2025",
        area: "Databases",
        status: "Completed",
        level: "Database",
        url: "https://softuni.bg/Certificates/Details/241650/4935c3eb",
        previewImage: "/certificates/ms-sql.jpg"
      },
      {
        title: "Entity Framework Core",
        provider: "SoftUni",
        date: "October 2025",
        issueDate: "05/12/2025",
        area: "ORM / Data access",
        status: "Completed",
        level: "Backend",
        url: "https://softuni.bg/certificates/details/255097/84846a53",
        previewImage: "/certificates/entity-framework-core.jpeg"
      },
      {
        title: "ASP.NET Fundamentals",
        provider: "SoftUni",
        date: "May 2025",
        issueDate: "20/08/2025",
        area: "Web development",
        status: "Completed",
        level: "Backend",
        url: "https://softuni.bg/Certificates/Details/249703/cec828da",
        previewImage: "/certificates/aspnet-fundamentals.jpg"
      },
      {
        title: "ASP.NET Advanced",
        provider: "SoftUni",
        date: "June 2025",
        issueDate: "18/08/2025",
        area: "Web applications / APIs",
        status: "Completed",
        level: "Advanced",
        url: "https://softuni.bg/Certificates/Details/249207/e8011257",
        previewImage: "/certificates/aspnet-advanced.jpg"
      },
      {
        title: "HTML & CSS",
        provider: "SoftUni",
        date: "May 2025",
        issueDate: "30/06/2025",
        area: "Frontend",
        status: "Completed",
        level: "Frontend",
        url: "https://softuni.bg/Certificates/Details/245897/84d07a84",
        previewImage: "/certificates/html-css.jpg"
      },
      {
        title: "JS Front-End",
        provider: "SoftUni",
        date: "June 2025",
        issueDate: "12/08/2025",
        area: "JavaScript frontend",
        status: "Completed",
        level: "Frontend",
        url: "https://softuni.bg/Certificates/Details/248756/3a11b30a",
        previewImage: "/certificates/js-front-end.jpg"
      },
      {
        title: "IT Career Booster",
        provider: "SoftUni",
        date: "October 2024",
        issueDate: "20/12/2024",
        area: "IT career preparation",
        status: "Completed",
        level: "Career",
        url: "https://softuni.bg/Certificates/Details/234252/503cc1db",
        previewImage: "/certificates/it-career-booster.jpg"
      }
    ],
    principles: [
      {
        number: "01",
        title: "Clarity over noise",
        text: "Code, workflows and communication should reduce complexity, not hide it."
      },
      {
        number: "02",
        title: "Practical architecture",
        text: "Structure matters only when it makes the system easier to evolve and maintain."
      },
      {
        number: "03",
        title: "Quality delivery",
        text: "Speed is useful when the final result remains stable, verifiable and understandable."
      }
    ],
    currentFocus: [
      "Developing full-stack skills with Next.js, TypeScript and ASP.NET Core.",
      "Applying finance and accounting background to technical and data-oriented solutions.",
      "Polishing portfolio projects, UI structure, backend logic and deployment workflows.",
      "Collecting real project details, screenshots and case studies for the portfolio."
    ]
  }
} as const;

export const dictionary = content;