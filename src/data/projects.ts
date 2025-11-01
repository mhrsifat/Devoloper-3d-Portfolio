// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  gradient: string;
  fullDescription: string;
  featuredImage: string;
  additionalImages: {
    url: string; caption: string
  }[];
  tags: string[];
  technologies: string[];
  date: string;
  role: string;
  teamSize?: string;
  liveUrl?: string;
  githubUrl?: string;
  stats?: {
    label: string; value: string
  }[];
}

export const projects: Project[] = [{
  title: "AppliHub",
  description: "Service management & order/invoice platform with real-time chat and role-based dashboards",
  gradient: 'radial-gradient(circle at 30% 30%, #00D4FF, #1A1F4B, #4A1F6B)',
  fullDescription:
  "AppliHub is a full-featured service management system built for small businesses and service teams. It provides two role-based portals (Admin and Employee), real-time chat for customer and internal support powered by Pusher, and a complete lifecycle workflow for orders and invoices. The system supports secure online payments via SSL Commerz and includes automated payment callbacks. The frontend is built with React 19, Redux Toolkit, Tailwind CSS, and Material UI components with Dark Mode support. The backend uses Laravel Blade templates for server-side rendering, process flows, and webhook integrations. AppliHub is optimized for quick deployment on Vercel (frontend) and standard hosting (backend), offering a clean dashboard, quick-pay invoice flow, and exportable business reports.",

  featuredImage: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_1.png",

  additionalImages: [{
    url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_2.png",
    caption: "Dashboard overview with orders, invoices, and quick actions"
  },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_3.png",
      caption: "Real-time chat panel for support and internal notes"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_11.png",
      caption: "Exportable reports and detailed dashboards"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_4.png",
      caption: "Invoice creation with quick-pay session integration"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_5.png",
      caption: "Dark mode UI across dashboard components"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_6.png",
      caption: "Order details with timeline and assignment workflow"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_7.png",
      caption: "Invoice history and status tracking"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_8.png",
      caption: "Payment confirmation and SSL Commerz integration"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_9.png",
      caption: "Analytics overview and performance metrics"
    },
    {
      url: "https://raw.githubusercontent.com/mhrsifat/AppliHub/main/Screenshot/Screenshot_10.png",
      caption: "Employee management panel with assignments"
    }],

  tags: [
    "Service Management",
    "Real-time Messaging",
    "Payment Integration",
    "Invoice System",
    "Business Dashboard"
  ],

  technologies: [
    "React 19",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Laravel",
    "Pusher",
    "Axios",
    "SSL Commerz"
  ],

  date: "Oct 2024",
  role: "Lead Full-Stack Developer",
  teamSize: "Solo-maintained",

  liveUrl: "https://appli-hub.vercel.app",
  githubUrl: "https://github.com/mhrsifat/AppliHub",

  stats: [{
    label: "User Roles",
    value: "Admin / Employee"
  },
    {
      label: "Admin Credentials",
      value: `Username: admin@gmail.com <br/> Password: 12345678 <br /> <a href="https://appli-hub.vercel.app/login">AdminUrl: /login </a>`
    },
    {
      label: "Theme",
      value: "Light & Dark Mode"
    },
    {
      label: "Chat",
      value: "Real-Time (Pusher)"
    }]
},
  {
    title: "SmartAgro",
    description: "AI-powered agro advisory platform offering crop, fertilizer, pesticide and disease suggestions",
    gradient: 'radial-gradient(circle at 70% 30%, #00FFC4, #4A1F6B, #0A0E2A)',
    fullDescription: `SmartAgro is an AI-driven agricultural advisory platform that helps farmers and agronomists make data-driven decisions. Core tools include:

    - Crop Planner (plant suggestion)
    - Fertilizer Suggestor
    - Pesticide Suggestor
    - Disease Scan (image-based)

    All modules provide actionable recommendations based on crop type, soil data, and local conditions. The platform bundles research articles, impact stories, and success-case workflows. The UI is multilingual (English, বাংলা, العربية) and the backend is optimized for light deployment on modest infrastructure.

    I led architecture, integration of AI suggestion modules via Google AI Studio, and frontend UX for quick actionable tools and research content.`,
    featuredImage: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_1.png",
    additionalImages: [ {
      url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_1.png",
      caption: "Crop planner / plant suggestion tool (interactive)"
    },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_2.png",
        caption: "Disease scan tool"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_3.png",
        caption: "Fertilizer suggestor tool"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_4.png",
        caption: "Pesticide suggestion tool"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_5.png",
        caption: "Research articles & impact stories"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_6.png",
        caption: "Success workflow dashboard"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_7.png",
        caption: "Multilingual interface"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_8.png",
        caption: "Crop planning overview"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_9.png",
        caption: "Disease scan result details"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_10.png",
        caption: "Fertilizer recommendation details"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/smartAgro/main/Screenshot/Screenshot_11.png",
        caption: "Admin dashboard overview"
      }],
    tags: ["AgTech",
      "AI Advisory",
      "Crop Planning",
      "Farming Tools",
      "Smart Agriculture"],
    technologies: ["Laravel (PHP)",
      "Blade",
      "Tailwind CSS",
      "MariaDB",
      "Docker",
      "Google AI Studio"],
    date: "Sep 2025",
    role: "Full-Stack Developer",
    teamSize: "Solo",
    liveUrl: "https://smartagro.mhrsifat.xyz/",
    githubUrl: "https://github.com/mhrsifat/smartAgro",
    stats: [ {
      label: "Quick Tools",
      value: "Crop Planner • Pesticide • Fertilizer • Disease Scan"
    },
      {
        label: "Multilingual",
        value: "English / বাংলা / العربية"
      },
      {
        label: "Deploy",
        value: "Docker-ready"
      },
      {
        label: "Admin Credentials",
        value: `Username: admin@gmail.com <br/> Password: 12345678`
      },
      {
        label: "AI Powered",
        value: "Google AI Studio"
      }]
  },
  {
    title: "LogiTrack",
    description: "Professional fleet & vehicle booking system for logistics—customers book trucks/pickups, drivers manage offers/fleet, and admins oversee it all.",
    gradient: 'radial-gradient(circle at 50% 50%, #7B4B8B, #1A1F4B, #00D4FF)',
    fullDescription: `LogiTrack is a full-featured fleet and vehicle booking platform built for logistics businesses, delivery services, and anyone managing a fleet of trucks or pickups. The system is designed with three main user roles:

    1. **Customers** – can browse available vehicles, book trucks or pickups, and receive real-time updates on their bookings.
    2. **Drivers** – can manage their vehicles, view incoming booking requests, submit offers, and update availability.
    3. **Admins** – have full control over the system, including user management, vehicle registration, bookings overview, support ticket monitoring, and document verification.

    Key functionalities include:

    - Multi-role authentication with separate dashboards
    - Vehicle registration and fleet management (upload licenses, insurance, and other documents)
    - Booking system with dynamic driver offers and price adjustments
    - Email notifications for booking confirmations, status updates, and reminders
    - Simple support ticket system for communication between users and admins
    - Admin dashboard to monitor all activities, generate reports, and manage users and vehicles efficiently
    - Real-time notifications to keep everyone informed of updates

    Technically, LogiTrack is built with **React.js** on the frontend using **Tailwind CSS** for styling and **React Router** for navigation. The backend is a **custom PHP API** with **MySQL/MariaDB** database support. Frontend communicates with the backend via **Axios** and uses session-based authentication to maintain secure interactions.

    LogiTrack is primarily a learning and demo project, designed to showcase full-stack development practices including multi-role user management, real-time data handling, and modular code organization. While many features are production-ready, some are simplified to make the project easier to understand and extend.

    Whether you're a developer exploring full-stack workflows or a logistics enthusiast experimenting with fleet management systems, LogiTrack offers a solid foundation to build upon and customize.`,
    featuredImage: "https://raw.githubusercontent.com/mhrsifat/LogiTrack/main/Screenshot/Screenshot_1.png",
    additionalImages: [{
      url: "https://raw.githubusercontent.com/mhrsifat/LogiTrack/main/Screenshot/Screenshot_2.png",
      caption: "User booking flow"
    },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/LogiTrack/main/Screenshot/Screenshot_3.png",
        caption: "Driver offer management"
      },
      {
        url: "https://raw.githubusercontent.com/mhrsifat/LogiTrack/main/Screenshot/Screenshot_4.png",
        caption: "Admin fleet dashboard"
      }],
    tags: ["Logistics",
      "Fleet Tracking",
      "B2B",
      "SaaS",
      'Learning Project'],
    technologies: ["PHP",
      "React.js",
      "Tailwind CSS",
      "MySQL/MariaDB"],
    date: "July 2025",
    role: "Full‑Stack Developer",
    teamSize: "Solo (designed & implemented core features)",
    liveUrl: "https://logitrack.mhrsifat.xyz/",
    githubUrl: "https://github.com/mhrsifat/LogiTrack",
    stats: [{
      label: "Active Fleets",
      value: "120+"
    },
      {
        label: "Admin Credentials",
        value: `Username: noman <br/> Password: 123456`
      },
      {
        label: "Driver Credentials",
        value: `Username: driver <br/> Password: 123456`
      },
      {
        label: "User Credentials",
        value: `Username: mhrsifat <br/> Password: 123456`
      }]
  },
  {
    title: 'Sunlight Blog Theme',
    description: 'Modern, lightweight WordPress theme built for speed, clarity, and seamless publishing.',
    gradient: 'radial-gradient(circle at 30% 70%, #00D4FF, #00FFC4, #1A1F4B)',
    fullDescription: `Sunlight is a handcrafted WordPress theme designed for bloggers, writers, and publishers who prefer elegance with performance.
    It's fully responsive, SEO-friendly, and compatible with both Gutenberg and Classic editors.

    Built using BootStrap 5 CSS and modern PHP standards, Sunlight emphasizes readability, accessibility, and clean code architecture.
    The theme offers flexible layout options, built-in dark mode, and easy customization via WordPress Customizer.

    Optimized for performance and scalability, Sunlight delivers fast loading times and works perfectly with caching and CDN plugins.
    It's ready for production use on personal blogs or content-heavy editorial sites.`,
    featuredImage: 'https://placehold.co/600x400/3a3a3a/3a3a3a',
    additionalImages: [],
    tags: ['WordPress',
      'Theme',
      'BootStrap 5',
      'Responsive',
      'SEO',
      'Learning Project'],
    technologies: ['PHP',
      'WordPress',
      'Bootstrap 5'],
    date: 'June 2025',
    role: 'Theme Developer',
    teamSize: 'Solo',
    liveUrl: 'https://sunlight.mhrsifat.xyz/',
    githubUrl: 'https://github.com/mhrsifat/sunlight-blog-theme',
    stats: [{
      label: 'PageSpeed Score',
      value: '95+'
    },
      {
        label: 'Theme Size',
        value: '<300KB'
      },
      {
        label: 'Version',
        value: 'v1.0.0'
      }]
  },
  {
    title: 'SandaChat',
    description: 'Lightweight real-time chat app with simple auth, file sharing, and a clean Bootstrap 5 UI.',
    gradient: 'radial-gradient(circle at 30% 20%, #0EA5E9, #7C3AED, #EC4899)',
    fullDescription: `SandaChat is a compact chat application built with plain PHP, MySQL and a touch of JavaScript for polling.
    It offers simple registration and login, one-to-one and group messaging, and file upload support (images, documents).
    The frontend uses Bootstrap 5 for a responsive layout. Messages are fetched via AJAX polling for near real-time updates without needing WebSockets,
    keeping the stack small and easy to understand — perfect for learning backend + frontend basics and handling file uploads securely.`,
    featuredImage: 'https://placehold.co/600x400/1a1a2e/ffffff?text=SandaChat+Preview',
    additionalImages: [],
    tags: [
      'Chat',
      'PHP',
      'Bootstrap 5',
      'AJAX',
      'File Upload',
      'Learning Project'
    ],
    technologies: [
      'PHP',
      'MySQL',
      'JavaScript (AJAX polling)',
      'Bootstrap 5'
    ],
    date: 'Oct 2025',
    role: 'Full Stack (Solo)',
    teamSize: 'Solo',
    liveUrl: '',
    githubUrl: 'https://github.com/mhrsifat/SandaChat',
    stats: [{
      label: 'Active Users',
      value: 'Local / Small'
    },
      {
        label: 'Message Throughput',
        value: 'Light (polling-based)'
      },
      {
        label: 'Response Time',
        value: '<200ms (local)'
      },
      {
        label: 'Version',
        value: 'v0.1.0'
      }]
  },
  {
    title: 'Weather Forecast App',
    description: 'Real-time weather forecasting application with intuitive interface and accurate data.',
    gradient: 'radial-gradient(circle at 30% 70%, #FFD700, #FFF5B7, #FFFBEA)',
    fullDescription: `Weather Forecast is a modern web application that provides users with real-time weather updates for any location.
    It integrates with open weather APIs to deliver accurate forecasts, temperature, humidity, wind speed, and weather conditions.

    The app features a clean, responsive design optimized for mobile and desktop devices. Users can search cities, view hourly and weekly forecasts, and toggle between Celsius and Fahrenheit.

    Built with a focus on performance and usability, it leverages modern JavaScript frameworks, component-based architecture, and lightweight styling to ensure fast load times.`,
    featuredImage: 'https://placehold.co/600x400/3a3a3a/3a3a3a',
    additionalImages: [],
    tags: ['Weather',
      'Forecast',
      'Web App',
      'Responsive',
      'API',
      'Learning Project'],
    technologies: ['JavaScript',
      'Bootstrap 5',
      'OpenWeather API'],
    date: 'Mar 2025',
    role: 'Frontend Developer',
    teamSize: 'Solo',
    liveUrl: 'https://weather.mhrsifat.xyz/',
    githubUrl: 'https://github.com/mhrsifat/WeatherForecast',
    stats: [{
      label: 'API Requests/Day',
      value: '50K+'
    },
      {
        label: 'Response Time',
        value: '<100ms'
      },
      {
        label: 'Locations Supported',
        value: 'Worldwide'
      },
      {
        label: 'Version',
        value: 'v1.0.0'
      }]
  }];