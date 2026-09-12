export const projects = [
  {
    number: "01",
    title: "DG Vision Studio — Photography Website",
    context:
      "Status: Real project. Public website for a photography studio focused on business presentation, portfolio content, services and client contact.",
    solution:
      "Built as a real business website with clear information architecture, responsive frontend, reusable UI sections and structured content for photography services.",
    features: [
      "Homepage with clear business presentation",
      "Portfolio sections for visual work showcase",
      "Service-oriented content blocks",
      "Contact section with a clear contact flow",
      "Responsive layout for mobile, tablet and desktop",
      "Reusable UI sections for easier maintenance",
      "Clean navigation and content hierarchy",
      "SEO-friendly page structure",
      "Deployment-ready frontend architecture",
      "Real public project used for business presence"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Responsive UI", "Deployment"],
    previewType: "iframe",
    previewUrl: "https://dgvisionstudio.com/",
    repositoryUrl: "https://github.com/viktor132607/DGVisionStudio.client",
    backendRepositoryUrl: "https://github.com/viktor132607/DGVisionStudio.Server"
  },
  {
    number: "02",
    title: "Nikola Halachev — Accounting Website",
    context:
      "Status: Real project. Corporate website for an accounting professional with service presentation, bilingual content and a structure focused on client inquiries.",
    solution:
      "Built as a professional presentation website focused on trust, service presentation and clear business communication to potential clients.",
    features: [
      "BG/EN bilingual content",
      "Accounting service presentation",
      "Professional visual hierarchy",
      "Clean navigation and service sections",
      "Responsive frontend structure",
      "Contact-oriented corporate layout"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "i18n", "Responsive UI", "Deployment"],
    previewType: "iframe",
    previewUrl: "https://nhalachev.com/",
    repositoryUrl: "https://github.com/viktor132607/HalachevAccounting.Client",
    backendRepositoryUrl: "https://github.com/viktor132607/HalachevAccounting.Server"
  },
  {
    number: "03",
    title: "HygiaTrade — E-commerce Platform",
    context:
      "Status: Live full-stack project. A production-deployed commerce platform for hygiene and cleaning products with a Next.js/React storefront, ASP.NET Core REST API, PostgreSQL persistence and a protected operational back office.",
    solution:
      "Built as a layered client-server system covering the complete flow from product discovery to post-order administration. The application combines customer accounts, catalog search and filtering, product comparison, wishlist and reviews, cart and checkout, VAT-aware retail and wholesale pricing, stock validation and deduction, inventory receipts, order status workflows, product and brand administration, GDPR account tools, management reporting and role-based security. The backend is separated into API, Domain, Data, Core and Common projects with repository abstractions, Entity Framework Core migrations, centralized exception handling and automated unit tests.",
    features: [
      "Product catalog with categories, brands, search, filtering, pagination and detailed product pages",
      "Product comparison, wishlist and customer review functionality",
      "Authenticated cart and checkout with delivery details, consent validation and stock checks",
      "Retail, discounted and quantity-based wholesale pricing with per-product VAT calculations",
      "Order lifecycle with customer history and administrative status management",
      "Automatic inventory deduction on checkout and administrator stock receipts linked to invoice numbers",
      "Admin dashboard for products, categories, brands, users, orders, stock and operational reporting",
      "Reporting for revenue, sold units, received stock, low-stock and out-of-stock products",
      "JWT access tokens, refresh tokens, password hashing, role-based authorization and protected routes",
      "Forgot/reset password flow with pluggable email notification delivery",
      "GDPR personal-data export and account deletion functionality",
      "Stored product images, product active/inactive state and new-product status management",
      "Redux Toolkit state management, bilingual UI and responsive frontend",
      "Layered ASP.NET Core architecture with repositories, domain services and centralized error handling",
      "PostgreSQL persistence with Entity Framework Core migrations and soft-delete support",
      "Backend unit tests for services, repositories, JWT configuration and database connection handling",
      "Docker/Render deployment configuration and GitHub deployment checks"
    ],
    stack: ["ASP.NET Core Web API", "C#", ".NET", "Next.js", "React", "TypeScript", "Redux Toolkit", "TailwindCSS", "PostgreSQL", "Entity Framework Core", "JWT", "REST API", "Docker", "Render", "xUnit"],
    previewType: "iframe",
    previewUrl: "https://higiatrade-client.onrender.com/",
    repositoryUrl: "https://github.com/viktor132607/HigiaTrade.Client",
    backendRepositoryUrl: "https://github.com/viktor132607/HigiaTrade.Server",
    sleepNotice: "Free Render hosting may take up to 60 seconds to start."
  },
  {
    number: "04",
    title: "Orisia — Folk Community Platform",
    context:
      "Status: Active full-stack project. A bilingual platform centered around Bulgarian folk dance, community updates, events and cultural content.",
    solution:
      "Built as a separated Next.js frontend and ASP.NET Core Web API backend with PostgreSQL persistence. The application combines public cultural content with account and administration functionality in a reusable client-server architecture.",
    features: [
      "News and community feed",
      "Events and calendar sections",
      "Horoteka dance library for Bulgarian dances and rhythms",
      "Gallery and cultural content sections",
      "BG/EN bilingual interface",
      "Account and login flows",
      "Administrative content management areas",
      "Responsive Next.js frontend",
      "ASP.NET Core Web API backend",
      "PostgreSQL persistence with Entity Framework Core"
    ],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "ASP.NET Core Web API", "C#", ".NET", "PostgreSQL", "Entity Framework Core", "REST API", "Docker", "Render"],
    previewType: "iframe",
    previewUrl: "https://orisia-client.onrender.com/",
    repositoryUrl: "https://github.com/viktor132607/Orisia.Client",
    backendRepositoryUrl: "https://github.com/viktor132607/Orisia.Server",
    sleepNotice: "Free Render hosting may take up to 60 seconds to start."
  },
  {
    number: "05",
    title: "Elenski Balkandzii — Full-Stack Platform",
    context:
      "Status: Live hosted WIP project. Client-server application split into dedicated Next.js frontend and ASP.NET Core Web API backend repositories, with the frontend deployed on Render.",
    solution:
      "Built with a responsive Next.js and TypeScript frontend plus a .NET 10 ASP.NET Core Web API backend using Entity Framework Core and PostgreSQL. The frontend now includes reusable navigation, footer, core pages and a clean responsive presentation layer and is deployed as a static Render site.",
    features: [
      "Live frontend hosting on Render",
      "Dedicated Next.js frontend repository",
      "Responsive desktop, tablet and mobile layout",
      "Reusable navbar, footer and core page structure",
      "TypeScript App Router structure",
      "Reusable API client configuration",
      "ASP.NET Core Web API backend",
      ".NET 10 solution structure",
      "Domain and Data projects",
      "Entity Framework Core",
      "PostgreSQL connection setup",
      "Scalar/OpenAPI API documentation",
      "Docker Compose PostgreSQL setup"
    ],
    stack: ["Next.js", "React", "TypeScript", "Responsive UI", "ASP.NET Core Web API", "C#", ".NET 10", "PostgreSQL", "Entity Framework Core", "Scalar", "Docker", "Render"],
    previewType: "iframe",
    previewUrl: "https://elenskibalkandzii-client.onrender.com/",
    repositoryUrl: "https://github.com/viktor132607/ElenskiBalkandzii.Client",
    backendRepositoryUrl: "https://github.com/viktor132607/ElenskiBalkandzii.Server"
  },
  {
    number: "06",
    title: "GabiCraft — Full-Stack Project",
    context:
      "Status: Live hosted WIP project. Full-stack application organized as a single repository with separate Next.js frontend and ASP.NET Core Web API backend projects, with the frontend deployed on Render.",
    solution:
      "Built with a responsive Next.js and TypeScript client plus a .NET 10 ASP.NET Core Web API server, Entity Framework Core data layer and PostgreSQL development environment. The frontend includes reusable navigation, footer, core pages and a clean responsive UI and is deployed as a static Render site.",
    features: [
      "Live frontend hosting on Render",
      "Next.js frontend project",
      "Responsive desktop, tablet and mobile layout",
      "Reusable navbar, footer and core page structure",
      "TypeScript App Router structure",
      "Reusable Axios API client",
      "ASP.NET Core Web API backend",
      ".NET 10 solution structure",
      "Separated Domain and Data projects",
      "Entity Framework Core",
      "PostgreSQL configuration",
      "Scalar/OpenAPI API documentation",
      "Docker Compose PostgreSQL environment"
    ],
    stack: ["Next.js", "React", "TypeScript", "Axios", "Responsive UI", "ASP.NET Core Web API", "C#", ".NET 10", "PostgreSQL", "Entity Framework Core", "Scalar", "Docker", "Render"],
    previewType: "iframe",
    previewUrl: "https://gabicraft.onrender.com/",
    repositoryUrl: "https://github.com/viktor132607/GabiCraft"
  },
  {
    number: "07",
    title: "PaladinHub 1.0",
    context:
      "Status: Portfolio project. Community platform for the World of Warcraft Paladin audience, built as a .NET 8 MVC application with an account system, content modules and a Talent Tree Builder.",
    solution:
      "Portfolio full-stack project demonstrating ASP.NET Core MVC, Razor, identity flow, database work, domain modules and real application structure.",
    features: [
      "ASP.NET Core MVC architecture",
      "Razor-based UI layer",
      "Identity authentication and account system",
      "PostgreSQL database",
      "Entity Framework Core data access",
      "Talent Tree Builder module",
      "Content and discussion modules",
      "Admin-oriented workflows",
      "Docker / Render deployment setup",
      "Modular structure for easier extension"
    ],
    stack: [
      "ASP.NET Core MVC",
      ".NET 8",
      "Razor",
      "C#",
      "Entity Framework Core",
      "PostgreSQL",
      "Identity",
      "Docker",
      "Render"
    ],
    previewType: "iframe",
    previewUrl: "https://paladinhub-api-d4ta.onrender.com",
    repositoryUrl: "https://github.com/viktor132607/PaladinHub",
    sleepNotice: "Free Render hosting may take up to 60 seconds to start."
  },
  {
    number: "08",
    title: "PaladinHub 2.0",
    context:
      "Status: WIP portfolio project. Planned modernization of PaladinHub into a separated ASP.NET Core Web API backend and standalone Next.js frontend.",
    solution:
      "WIP full-stack architecture with cleaner separation between backend and frontend, aimed at a more modern, scalable and maintainable version of the platform.",
    features: [
      "ASP.NET Core Web API backend",
      "Next.js frontend architecture",
      "TypeScript UI layer",
      "PostgreSQL persistence",
      "Entity Framework Core data layer",
      "Authentication flow",
      "REST API structure",
      "Docker-ready setup",
      "Deployment preparation",
      "Cleaner separation of concerns than the MVC version"
    ],
    stack: ["ASP.NET Core Web API", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Entity Framework Core", "Docker", "Render"],
    previewType: "iframe",
    previewUrl: "https://paladinhubv2-client.onrender.com/",
    repositoryUrl: "https://github.com/viktor132607/PaladinhubV2.Client",
    backendRepositoryUrl: "https://github.com/viktor132607/PaladinhubV2.Server",
    sleepNotice: "Free Render hosting may take up to 60 seconds to start."
  }
] as const;
