// All portfolio copy lives here. Edit this file to update the site —
// no need to touch component code for text changes.

export const profile = {
  name: "Snehan Biswas",
  title: "Senior Consultant, Generative AI",
  tagline: "RAG & Agentic AI Systems",
  location: "Kolkata, India",
  email: "snehan.biswas.1@gmail.com",
  phone: "+91 83340 40110",
  linkedin: "https://www.linkedin.com/in/snehan-biswas-61429a1b4/",
  github: "https://www.github.com/AILucifer99Languages",
  resumeFile: "/resume.pdf",
};

export const hero = {
  headline: "Systems that retrieve, reason, and respond.",
  subhead:
    "I design and ship generative AI applications — retrieval-augmented generation, multi-agent workflows, and cloud-native LLM systems — for enterprise clients on AWS and Azure.",
};

// Canned query -> answer pairs for the hero "retrieval" demo.
// This mimics a RAG pipeline: a query is embedded, matched against a
// knowledge base, and grounds a generated answer — using this site's
// own content as the corpus.
export const retrievalDemo = [
  {
    query: "What does Snehan work on right now?",
    source: "experience · Capgemini India",
    answer:
      "Senior Consultant, Generative AI at Capgemini, building multi-agent AI applications with LangGraph and the Google A2A protocol for a US-based communications client.",
  },
  {
    query: "Has he built RAG systems before?",
    source: "projects · RAG deployments",
    answer:
      "Yes — an AWS-documentation RAG PoC with Gemini, a Video-RAG system on Azure OpenAI, and a codebase-aware adaptive RAG used for faster developer onboarding.",
  },
  {
    query: "What did he build before Capgemini?",
    source: "experience · IEMA Research & Development",
    answer:
      "A full-stack AI platform and tutoring system designed for enterprise learning and automation use cases, covering backend engineering, product delivery, and client-facing ML solutions.",
  },
  {
    query: "What's his core stack?",
    source: "skills · frameworks & cloud",
    answer:
      "LangChain, LangGraph, FastAPI and Streamlit on the framework side; Azure OpenAI, Azure AI Search, and AWS Bedrock/Lambda/S3/DynamoDB on the cloud side.",
  },
];

export const about = {
  paragraphs: [
    "Senior Consultant in Generative AI at Capgemini India with over five years of hands-on experience designing, building, and deploying generative AI applications — with a strong specialisation in Python implementations and cloud services integration.",
    "I've led and contributed to retrieval-augmented generation initiatives for international clients: a RAG proof of concept grounded in AWS service documentation using Google Gemini, and Video-RAG and codebase-aware RAG systems for a US semiconductor design manufacturer, built on Azure OpenAI and Azure AI Search. I'm currently supporting the development of multi-agent AI applications orchestrated with LangGraph and the Google A2A protocol.",
    "Before Capgemini, I was a Senior Systems Analyst at IEMA Research and Development, where I engineered and productised an end-to-end AI software system and delivered AI/ML solutions to clients including the Indian Army, SAIL, and Ericsson.",
  ],
  highlights: [
    { value: "5+", label: "years in applied AI engineering" },
    { value: "2", label: "cloud platforms — AWS & Azure" },
    { value: "6", label: "production GenAI systems shipped" },
  ],
};

export const experience = [
  {
    company: "Capgemini India",
    location: "Kolkata, India",
    role: "Senior Consultant – Generative AI",
    period: "Jun 2026 – Present",
    current: true,
    points: [
      "Supporting a combined offshore/onshore team building a multi-agentic AI application using the Google A2A protocol and LangGraph orchestration for a US communications client.",
    ],
  },
  {
    company: "Capgemini India",
    location: "Kolkata, India",
    role: "Generative AI Consultant",
    period: "Mar 2025 – Jun 2026",
    points: [
      "Designed a RAG proof of concept over AWS service documentation using Google Gemini, LangChain, and FastAPI, on a custom knowledge base built with Lambda, S3, DynamoDB, and Bedrock.",
      "Built a Video-RAG system for a US semiconductor chip-design manufacturer, grounded in Azure OpenAI and Azure AI Search.",
      "Designed a codebase-aware adaptive RAG PoC to speed up developer onboarding, with an Azure inference pipeline delivered via Streamlit.",
      "Contributed to a production GenAI chatbot for employee Travel & Finance queries — ReactJS frontend, LangChain/LangGraph backend exposed through FastAPI.",
      "Conducted applied research with the Capgemini Kolkata Research Desk and the University of Calcutta on efficient RAG development using weighted ensemble vector stores.",
    ],
  },
  {
    company: "IEMA Research and Development Pvt. Ltd.",
    location: "Kolkata, India",
    role: "Senior Systems Analyst",
    period: "Sep 2021 – Mar 2025",
    points: [
      "Engineered an end-to-end AI software platform for organisational workflows and client-facing product delivery.",
      "Built the backend for an AI tutoring module focused on adaptive learning and enterprise knowledge support.",
      "Delivered AI/ML solutions for the Indian Army, SAIL, Ericsson, and the IEM-UEM Group; developed fully offline AI applications in pure Python.",
      "Owned requirements gathering, systems analysis, and data-privacy compliance; mentored junior engineers.",
    ],
  },
];

export const skills = [
  {
    group: "Generative AI",
    items: ["RAG", "Adaptive RAG", "Video-RAG", "Multi-agent systems", "Google A2A protocol", "Prompt engineering"],
  },
  {
    group: "Frameworks",
    items: ["LangChain", "LangGraph", "FastAPI", "Streamlit", "Hugging Face", "Ollama"],
  },
  {
    group: "Vector stores",
    items: ["ChromaDB", "FAISS", "Azure AI Search", "Ensemble vector stores"],
  },
  {
    group: "Cloud",
    items: ["Azure OpenAI", "Azure AI Search", "AWS Bedrock", "AWS Lambda", "AWS DynamoDB", "AWS EC2"],
  },
  {
    group: "Engineering",
    items: ["Python", "Backend API design", "Multi-threading", "ReactJS integration", "PowerShell automation"],
  },
];

export const projects = [
  {
    title: "AWS Documentation RAG",
    tag: "Retrieval-Augmented Generation",
    description:
      "A RAG proof of concept for a communications client, grounded in AWS service documentation and powered by Google Gemini via LangChain and FastAPI.",
    stack: ["LangChain", "FastAPI", "Gemini", "AWS Bedrock", "S3", "DynamoDB"],
  },
  {
    title: "Video-RAG for Chip Design",
    tag: "Multimodal Retrieval",
    description:
      "A Video-RAG system for a US semiconductor manufacturer, letting engineers interact with video data through retrieval grounded in Azure LLMs.",
    stack: ["Azure OpenAI", "Azure AI Search"],
  },
  {
    title: "Codebase-Aware Adaptive RAG",
    tag: "Developer Tooling",
    description:
      "An adaptive RAG over a vector store built from an entire project codebase, cutting the time it takes new developers to ramp up.",
    stack: ["Azure", "Streamlit", "Vector search"],
  },
  {
    title: "Travel & Finance GenAI Assistant",
    tag: "Production Chatbot",
    description:
      "A production chatbot answering employee Travel and Finance queries, from design through deployment.",
    stack: ["ReactJS", "LangChain", "LangGraph", "FastAPI"],
  },
  {
    title: "Multi-Agent Orchestration",
    tag: "Agentic AI",
    description:
      "A multi-agentic AI application for a communications client, using the Google A2A protocol for inter-agent communication and LangGraph for workflow orchestration.",
    stack: ["LangGraph", "Google A2A"],
  },
  {
    title: "AI Platform Delivery",
    tag: "Product Engineering",
    description:
      "End-to-end AI software platform engineered from the ground up, including a tutoring module for adaptive learning and operational automation.",
    stack: ["Python", "Backend APIs", "Offline AI"],
  },
];

export const education = [
  {
    degree: "B.Tech, Electrical, Electronics & Communications Engineering",
    institution: "University of Engineering and Management, Kolkata",
    period: "2021",
  },
  {
    degree: "ISC — Physics, Chemistry, Mathematics, Computer Science",
    institution: "The Modern Academy, Kolkata",
    period: "2017",
  },
  {
    degree: "ICSE — Science",
    institution: "Ram Mohan Mission High School, Kolkata",
    period: "2015",
  },
];

export const awards = [
  "Vice-Chancellor's Award for Best Techno Wiz — University of Engineering and Management (2017–2021)",
  "First Prize, Internal Performance — ISC Examination (2017)",
];

export const languages = [
  { name: "English", level: "C2 · Proficient" },
  { name: "Bengali", level: "C2 · Proficient" },
  { name: "Hindi", level: "C1 · Advanced" },
];
