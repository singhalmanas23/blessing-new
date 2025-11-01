// ML (Machine Learning) Page Constants
// Content extracted from Figma design (node-id=655-3007)

export const ML_CONTENT = {
  // Hero Section
  hero: {
    navigation: [
      { label: "Our Services", href: "#services" },
      { label: "Products", href: "#products" },
      { label: "Why Choose Us?", href: "#why-choose-us" },
      { label: "Industries", href: "#industries" },
    ],
    title: "AI & Machine Learning Solutions",
    scrollText: "Scroll",
  },

  // Description Section
  description: {
    headline: "Harness the power of artificial intelligence to revolutionize your operations.",
    body: "Our AI & ML solutions cover advanced analytics, predictive modeling, natural language processing, computer vision, and intelligent automation.",
    cta: {
      text: "Discover How",
      href: "#contact",
    },
  },

  // Business Value Section
  businessValue: {
    label: "BUSINESS VALUE",
    quote: "AI drives smarter decisions and new efficiencies, giving you a competitive edge.",
    description:
      "We start by understanding your business goals and data, then develop custom AI models that deliver real ROI – from automating customer service with chatbots to optimizing supply chains with predictive insights.",
    statistic: {
      prefix: "Companies embracing AI see huge payoffs; Gartner predicts",
      highlight: "50% of Enterprises",
      suffix:
        "will deploy AI orchestration platforms by 2025 (up from <10% in 2020), reflecting how fast AI is becoming essential.",
    },
    teamCommitment:
      "Our team ensures you're ahead of this curve, implementing AI ethically and at scale.",
    cta: {
      text: "Discover How",
      href: "#contact",
    },
  },

  // Technical Execution Section
  technicalExecution: {
    title: "Technical Execution:",
    content: [
      "We build and train models using cloud-based ML tools (AWS SageMaker, Azure ML, TensorFlow, etc.), ensuring scalability and security.",
      "Our data scientists follow MLOps best practices for continuous improvement and integrate AI insights into your existing systems (like feeding predictions into your Salesforce CRM or ERP) via robust APIs.",
      "This seamless integration means AI augments your current workflows rather than disrupting them.",
    ],
    tools: [
      { name: "AWS\nSageMaker" },
      { name: "TensorFlow" },
      { name: "Azure ML" },
    ],
    cta: {
      text: "Discover How",
      href: "#contact",
    },
  },

  // Use Cases Section
  useCases: {
    title: "AI & ML Use Cases",
    cases: [
      {
        id: "01",
        title: "Predict & Personalize",
        description:
          "Use ML to predict customer churn and deliver personalized marketing campaigns that boost retention.",
      },
      {
        id: "02",
        title: "Detect Anomalies in Real-Time",
        description:
          "Prevent fraud and risks by catching suspicious activity instantly with anomaly detection.",
      },
      {
        id: "03",
        title: "Smarter Manufacturing",
        description:
          "Apply computer vision for quality control, reducing errors and ensuring product consistency.",
      },
      {
        id: "04",
        title: "Automate Document Intelligence",
        description:
          "Use NLP to process claims, contracts, or forms automatically — cutting time and cost.",
      },
    ],
    cta: {
      text: "Discover How",
      href: "#contact",
    },
  },

  // Why BST Section
  whyBst: {
    title: "Why Blessing SoftTech for AI?",
    benefits: [
      {
        icon: "research", // Placeholder - will use actual SVG/icon component
        title: "Research Meets Real-World",
        description:
          "A research-driven approach backed by practical industry expertise.",
      },
      {
        icon: "impact", // Placeholder - will use actual SVG/icon component
        title: "Proven Business Impact",
        description:
          "Delivered 30% cost reduction for clients through intelligent process automation.",
      },
      {
        icon: "trust", // Placeholder - will use actual SVG/icon component
        title: "Trust & Compliance",
        description:
          "AI you can trust, with built-in governance and explainability to ensure compliance.",
      },
    ],
    footer: {
      title: "AI Powers Most Businesses Today",
    },
  },

  // Contact Section
  contact: {
    title: "Lets Create Something",
    subtitle: ["Awesome", "together"],
    form: {
      fields: [
        {
          name: "fullName",
          label: "Full Name",
          placeholder: "Ex: Ravi Verma",
          type: "text",
        },
        {
          name: "email",
          label: "Email ID",
          placeholder: "Ex: raviverma@gmail.com",
          type: "email",
        },
        {
          name: "phone",
          label: "Phone Number",
          placeholder: "Ex: 98456 38716",
          type: "tel",
        },
        {
          name: "company",
          label: "Company Name",
          placeholder: "Ex: Oracle, JP Morgan Chase",
          type: "text",
        },
      ],
      serviceLabel: "Select Service",
      services: [
        "AI/ML Solutions",
        "Software Development",
        "Web Development",
        "App Development",
        "Software Testing",
        "UI/UX Design",
        "Data Analytics",
        "SEO Optimisation",
        "Digital Marketing",
      ],
      submitButton: "Schedule Call",
    },
  },

  // Footer (using existing Footer component)
  footer: {
    brandName: "Blessing SoftTech",
    tagline: "Professional IT Services",
    navigation: {
      columns: [
        {
          title: "Services",
          links: [
            { label: "Web Development", href: "/services/web-development" },
            { label: "App Development", href: "/services/app-development" },
            { label: "AL/ML Solutions", href: "/services/ml" },
            { label: "AR/VR Development", href: "/services/ar-vr" },
            { label: "Cloud Services", href: "/services/cloud" },
            { label: "Data Analytics", href: "/services/data-analytics" },
            { label: "UI/UX Design", href: "/services/ui-ux" },
          ],
        },
        {
          title: "Products",
          links: [
            { label: "CyberSecurity", href: "/products/cybersecurity" },
            { label: "Mediclaim Pro", href: "/products/mediclaim-pro" },
          ],
        },
        {
          title: "Why Choose Us?",
          links: [
            { label: "Unique Advantage", href: "/why-us" },
          ],
        },
        {
          title: "Industries",
          links: [
            { label: "Unique Advantage", href: "/industries" },
          ],
        },
      ],
    },
    copyright: "© 2025 Blessing SoftTech. All rights reserved.",
    legal: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookies Policy", href: "/cookies" },
    ],
  },
} as const;

export type MLContent = typeof ML_CONTENT;
