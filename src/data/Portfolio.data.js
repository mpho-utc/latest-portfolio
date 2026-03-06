export const portfolioData  = {
  "meta": {
    "owner": {
      "name": "Mpho Shabalala",
      "role": "Full‑Stack Software Developer",
      "tagline": "Building scalable, user‑centric systems from interface to infrastructure",
      contacts: {
        phone: "+27 73 912 7333",
        email: "mphog3401@gmail.com"
      }
    }
  },

  "navigation": {
    "header": [
      { "name": "Home", "path": "/" },
      { "name": "About", "path": "/about" },
      { "name": "Projects", "path": "/projects" },
      { "name": "Blogs", "path": "/blogs" }
    ],
    "full": [
      { "name": "Home", "path": "/" },
      { "name": "About Me", "path": "/about" },
      { "name": "Projects", "path": "/projects" },
      { "name": "Skills", "path": "/skills" },
      { "name": "Experience", "path": "/experience" },
      { "name": "Education", "path": "/education" },
      { "name": "Certifications", "path": "/certifications" },
      { "name": "Blog", "path": "/blog" },
      { "name": "Contact", "path": "/contacts" },
      { "name": "Resume", "path": "/resume" }
    ]
  },

  "socialLinks": [
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/mpho-shabalala-88b126362/",
      "icon": "linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/mpho-shabalala",
      "icon": "github"
    },
    {
      "name": "email",
      "url": "mailto:mphog3401@gmail.com",
      "icon": "email"
    }
  ],

  "whatIDo": [
    {
      "id": "frontend",
      "title": "UX / UI (Frontend)",
      "points": [
        "Focus on user‑centric experience and usability",
        "Build responsive interfaces across devices and viewports",
        "Integrate frontend systems with cloud infrastructure for faster delivery"
      ]
    },
    {
      "id": "api",
      "title": "API Design & Development",
      "points": [
        "Design and build secure, scalable API endpoints",
        "Deliver consistent, structured JSON responses",
        "Build database‑agnostic APIs adaptable to multiple systems",
        "Implement real‑world validation, email, and phone workflows",
        "Centralized error handling with testable service layers",
        "Clear separation of concerns for maintainable codebases"
      ]
    },
    {
      "id": "database",
      "title": "Database Design & Development",
      "points": [
        "Design scalable, modular database architectures",
        "Build with error transparency and failure resilience",
        "Abstract query layers for clean API consumption",
        "Decouple database logic from business logic",
        "Prioritize security and performance by design"
      ]
    }
  ],

  "journey": [
    {
      "type": "degree",
      "title": "BSc Computer Science & IT",
      "institution": "University of Johannesburg",
      "timeframe": "2020 – 2023"
    },
    {
      "type": "course",
      "title": "Web Development (HTML & CSS)",
      "institution": "Udemy",
      "timeframe": "2022 – 2023"
    },
    {
      "type": "course",
      "title": "JavaScript",
      "institution": "Udemy",
      "timeframe": "2022 – 2023"
    },
    {
      "type": "course",
      "title": "ReactJS & TailwindCSS",
      "institution": "Udemy",
      "timeframe": "2023 – 2024"
    },
    {
      "type": "course",
      "title": "NodeJS, MySQL & MongoDB",
      "institution": "Udemy",
      "timeframe": "2023 – present"
    },
    {
      "type": "bootcamp",
      "title": "Full‑Stack Web Development",
      "institution": "FNB App Academy",
      "timeframe": "2025"
    },
    {
      "type": "course",
      "title": "System Design",
      "institution": "Udemy",
      "timeframe": "2025 – present"
    }
  ],

  projects: [
  {
    id:"authentication-project",
    title: "Authentication",
    category: "Backend API",
    url: "/projects/authentication",
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.p8sjAcdqnXxnJ4GNhSVEVwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Designed and developed a NodeJS scalable, adaptive authentication API...",
    demo: '',
    github: 'https://github.com/mpho-shabalala/standalone-jwt-authentication',
    // WHY THIS PROJECT EXISTS
    problemStatement: "Most authentication systems become rigid early and are hard to extend or audit securely.",
    
    // ENGINEERING THINKING
    methodology: {
      architecturalStyle: "Layered architecture with separation of concerns",
      patternsUsed: [
        "JWT-based authentication",
        "Middleware-driven request handling",
        "Token lifecycle management"
      ],
      designPrinciples: [
        "Single Responsibility Principle",
        "Fail-safe defaults",
        "Input-agnostic controllers"
      ]
    },

    // TRADE-OFFS & CONSTRAINTS
    tradeoffs: [
      "JWT statelessness vs token revocation complexity",
      "Security verbosity vs developer ergonomics"
    ],
    constraints: [
      "Must support future role-based access control",
      "No framework-specific auth abstractions"
    ],

    // SCALABILITY & FUTURE PATHS
    scalingPaths: [
      "Refresh token rotation",
      "Distributed token blacklisting",
      "Microservice-compatible auth gateway"
    ]
  },

  {
  id:"dealership-project",
    title: "Dealership",
    category: "e-Commerce",
    url: "/projects/dealership",
    imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20241007/pngtree-a-sleek-silver-sports-car-is-on-display-in-modern-dealership-image_16327830.jpg",
    description: "Designed and developed a full-stack dealership application...",
    demo: '',
    github: 'https://github.com/mpho-shabalala/car-dealership-full-stack-project',
    problemStatement: "Generic e-commerce platforms fail to model real dealership workflows and inventory logic.",

    methodology: {
      architecturalStyle: "Full-stack modular architecture",
      patternsUsed: [
        "Domain-driven data modeling",
        "Client–server separation",
        "Reusable UI components"
      ],
      designPrinciples: [
        "Scalability-first data design",
        "Explicit state transitions",
        "Business-logic isolation"
      ]
    },

    tradeoffs: [
      "Custom system flexibility vs faster SaaS solutions",
      "Manual workflow modeling vs automation complexity"
    ],
    constraints: [
      "Inventory logic tied to real-world availability",
      "Extensible pricing and financing models"
    ],

    scalingPaths: [
      "Multi-dealership support",
      "Role-based dashboards (admin, sales, customer)",
      "Payment gateway integration"
    ]
  },

  {
    id:"adapter-project",
    title: "Mongo Database Adapter",
    category: "Database",
    url: "/projects/database-adapter",
    imageUrl: "https://media.istockphoto.com/id/1393858554/photo/relational-database-tables-with-server-room-and-datacenter-background-concept-of-database.jpg?s=612x612&w=0&k=20&c=UH75wLOwSjNEtpyXUcQn1Dkin2mkQ0YmYMEbhB3WOG8=",
    description: "Designed and developed a MongoDB database abstraction layer...",
    demo: '',
    github: 'https://github.com/mpho-shabalala/standalone-mongodb-adapter',
    problemStatement: "Direct database usage couples business logic tightly to persistence technology.",

    methodology: {
      architecturalStyle: "Adapter / abstraction layer",
      patternsUsed: [
        "Repository pattern",
        "Configuration-driven connections",
        "Centralized query handling"
      ],
      designPrinciples: [
        "Loose coupling",
        "Replaceable persistence layer",
        "Predictable data access"
      ]
    },

    tradeoffs: [
      "Abstraction overhead vs flexibility",
      "Generic API vs database-specific optimizations"
    ],
    constraints: [
      "Must remain database-agnostic",
      "Minimal performance penalty"
    ],

    scalingPaths: [
      "Support for multiple databases",
      "Connection pooling strategies",
      "Caching layer integration"
    ]
  },

  {
    id:"dom-project",
    title: "Dummy-Dom Library",
    category: "Library",
    url: "/projects/dummy-dom",
    imageUrl: "https://geekflare.com/wp-content/uploads/2023/03/What-is-a-JavaScript-Library.png",
    description: "Designed and developed a DOM manipulation library...",
    demo: '',
    github: 'https://github.com/mpho-shabalala/dummy-dom',
    problemStatement: "Native DOM APIs are verbose and repetitive for common UI operations.",

    methodology: {
      architecturalStyle: "Utility-based library design",
      patternsUsed: [
        "Method chaining",
        "DOM abstraction",
        "Minimal API surface"
      ],
      designPrinciples: [
        "Developer ergonomics",
        "Explicit behavior over magic",
        "Small, composable utilities"
      ]
    },

    tradeoffs: [
      "Lightweight abstraction vs feature completeness",
      "Custom API vs established libraries"
    ],
    constraints: [
      "Zero dependencies",
      "Must remain framework-agnostic"
    ],

    scalingPaths: [
      "Plugin system",
      "Virtual DOM experimentation",
      "Type definitions for safety"
    ]
  }
],


  "techStack": [
    {
      "id": "js",
      "title": "Vanilla JavaScript",
      "description": "Core foundation for building object‑oriented web applications.",
      "icon": "js"
    },
    {
      "id": "react",
      "title": "ReactJS",
      "description": "Framework for building scalable frontend applications with TailwindCSS.",
      "icon": "react"
    },
    {
      "id": "firebase",
      "title": "Firebase",
      "description": "Cloud infrastructure for real‑time databases and hosted services.",
      "icon": "firebase"
    },
    {
      "id": "material",
      "title": "Material UI",
      "description": "Rapid, accessible UI components for modern interfaces.",
      "icon": "material"
    },
    {
      "id": "mongodb",
      "title": "MongoDB",
      "description": "Flexible, document‑based database for scalable systems.",
      "icon": "mongodb"
    },
    {
      "id": "node",
      "title": "NodeJS",
      "description": "Runtime for building scalable backend APIs with Express.",
      "icon": "node"
    }
  ]
}
