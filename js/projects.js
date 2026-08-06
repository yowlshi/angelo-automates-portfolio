const projects = [

    {

    id: 1,

    title: "AI Sales Analytics Assistant",

    filter: "portfolio",

    status: "Portfolio Project",

    category: "n8n",

    image: "assets/images/AI Sales Analytics Assistant_modal hero.png",

    overview:
        "Built an AI-powered analytics assistant that enables users to query sales data using natural language.",

    problem:
        "Business users often depend on technical teams to generate SQL reports, making data analysis slow and less accessible.",

    solution:
        "Developed an AI-powered analytics assistant using OpenAI, n8n, PostgreSQL, and Supabase that converts natural language questions into meaningful sales insights.",
    
    workflow: {
    image: "assets/images/AI Sales Analytics Assistant_wa.png",
    description:
        "The workflow receives a natural language question, processes it using OpenAI, queries PostgreSQL through n8n, and returns conversational insights."
},

challenges: [
    "Designed prompts that consistently generated accurate SQL queries.",
    "Handled conversational context to improve follow-up questions.",
    "Structured the workflow for maintainability and scalability."
],

lessons: [
    "Prompt engineering significantly affects SQL generation quality.",
    "Breaking workflows into modular nodes improves debugging.",
    "Combining AI with automation platforms enables powerful business applications."
],

    features: [

        "Natural language sales queries",

        "AI-generated business insights",

        "PostgreSQL database integration",

        "Supabase backend",

        "Conversation memory"

    ],

    technologies: [

        "n8n",

        "OpenAI",

        "Supabase",

        "PostgreSQL"

    ],

    screenshots: [

        "assets/images/AI Sales Analytics Assistant.jpg",


    ],

    github: href="",

    demo: href="https://drive.google.com/file/d/1C35anRxbbnb36Dz8n1Pm0LIHx8sZbrUS/view?usp=sharing"

},

    {

    id: 2,

    title: "AI Dental Appointment Setter",

    filter: "portfolio",

    status: "Portfolio Project",

    category: "n8n",

    image: "assets/images/AI Dental Appointment Setter_modal hero.png",

    overview:
        "Designed a voice-enabled AI assistant that automates dental appointment scheduling.",

    problem:
        "Manual appointment scheduling requires staff time and often results in delayed responses for patients.",

    solution:
        "Built a voice AI workflow using Vapi.ai, n8n, Airtable, and calendar integrations to automate appointment booking and reduce manual scheduling.",

    workflow: {
    image: "assets/images/AI Dental Appointment Setter_wa.png",
    description:
        "The workflow receives a natural language question, processes it using OpenAI, queries PostgreSQL through n8n, and returns conversational insights."
},

challenges: [
    "Designed prompts that consistently generated accurate SQL queries.",
    "Handled conversational context to improve follow-up questions.",
    "Structured the workflow for maintainability and scalability."
],

lessons: [
    "Prompt engineering significantly affects SQL generation quality.",
    "Breaking workflows into modular nodes improves debugging.",
    "Combining AI with automation platforms enables powerful business applications."
],

    features: [

        "Voice AI conversations",

        "Calendar integration",

        "Automated booking",

        "Airtable database",

        "n8n workflow automation"

    ],

    technologies: [

        "n8n",

        "Vapi",

        "Airtable",

        "Google Calendar"

    ],

    screenshots: [

        "assets/images/AI Dental Appointment Setter_g1.png"

    ],

    github: href="",

    demo: href="https://drive.google.com/file/d/14XY2mK7uQPuPhWIXZlSuV3kY2nKOIayI/view?usp=sharing"

},

    {

    id: 3,

    title: "RAG Employee Handbook Assistant",

    filter: "portfolio",
    
    status: "Portfolio Project",

    category: "RAG",

    image: "assets/images/RAG-Powered Employee Handbook Assistant_modal hero.png",

    overview:
        "Developed a Retrieval-Augmented Generation assistant for company knowledge.",

    problem:
        "Employees spend time searching lengthy handbook documents for policies and procedures.",

    solution:
        "Implemented a RAG-based chatbot that retrieves relevant handbook information using embeddings, vector search, and OpenAI.",

    workflow: {
    image: "assets/images/RAG Employee Handbook Assistant_wa.png",
    description:
        "The workflow receives a natural language question, processes it using OpenAI, queries PostgreSQL through n8n, and returns conversational insights."
},

challenges: [
    "Designed prompts that consistently generated accurate SQL queries.",
    "Handled conversational context to improve follow-up questions.",
    "Structured the workflow for maintainability and scalability."
],

lessons: [
    "Prompt engineering significantly affects SQL generation quality.",
    "Breaking workflows into modular nodes improves debugging.",
    "Combining AI with automation platforms enables powerful business applications."
],

    features: [

        "Semantic search",

        "Vector embeddings",

        "Natural language Q&A",

        "Supabase Vector Store",

        "OpenAI integration"

    ],

    technologies: [

        "n8n",

        "OpenAI",

        "Supabase",

        "Embeddings",

        "Google Drive"

        

    ],

    screenshots: [

        "assets/images/RAG-Powered Employee Handbook Assitant.png",


    ],

    github: href= "",

    demo: href="https://drive.google.com/file/d/1s-6Cvgi6wNuXmzTxRQbe76H00jxNMUrb/view?usp=sharing"

},

{
    id: 4,

    filter: "portfolio",

    title: "Full Context AI Assistant (Prompt-Based)",

    status: "Portfolio Project",

    category: "AI Assistant",

    image: "assets/images/Full Context AI Assistant (Prompt-Based)_modal hero.png",

    overview:
        "Developed an AI assistant that leverages the entire content of uploaded documents through prompt-based context injection, enabling users to receive comprehensive and context-aware responses without Retrieval-Augmented Generation (RAG).",

    problem:
        "Traditional AI assistants often lack sufficient context, resulting in incomplete or generic responses when working with lengthy documents.",

    solution:
        "Designed a prompt-based approach that injects the complete document into the AI model, allowing it to reason over the entire knowledge source while maintaining conversation continuity.",

    workflow: {
        image: "assets/images/Full Context AI Assistant (Prompt-Based)_wa.png",

        description:
            "Users upload documents that are processed and inserted directly into the AI prompt. The language model analyzes the complete context before generating accurate and relevant responses."
    },

    challenges: [
        "Managing prompt size limitations.",
        "Maintaining coherent responses across long conversations.",
        "Optimizing prompts for context retention."
    ],

    lessons: [
        "Prompt engineering significantly affects AI response quality.",
        "Full-context prompting is effective for small-to-medium knowledge bases.",
        "Well-structured prompts improve consistency."
    ],

    features: [
        "Full document context",
        "Conversational AI",
        "Context-aware responses",
        "Prompt engineering",
        "Knowledge-based question answering"
    ],

    technologies: [
        "n8n",
        "OpenAI",
        "Prompt Engineering"
    ],

    screenshots: [
        "assets/images/Full Context AI Assistant (Prompt-Based)_gallery.png"
    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1y00Vgwb4m_Bk-oID_X-5OkaAqoNa_bpp/view?usp=sharing"
},

{
    id: 5,

    filter: "portfolio",

    title: "Full Context AI Assistant (Prompt-Based: Flexible)",

    status: "Portfolio Project",

    category: "AI Assistant",

    image: "assets/images/Full Context AI Assistant Prompt-Based Flexible_modal hero.png",

    overview:
        "Enhanced the prompt-based AI assistant by enabling flexible document selection, allowing users to dynamically choose one or multiple knowledge sources during conversations.",

    problem:
        "Static prompt-based assistants cannot easily switch between different knowledge sources without modifying the workflow.",

    solution:
        "Implemented a flexible prompting workflow where selected documents are injected dynamically, allowing customized AI responses depending on user needs.",

    workflow: {
        image: "assets/images/Full Context AI Assistant (Prompt-Based Flexible)_wa.png",

        description:
            "Users choose specific documents to include in the prompt before interacting with the AI assistant, enabling customized knowledge retrieval."
    },

    challenges: [
        "Managing multiple document selections.",
        "Reducing unnecessary prompt tokens.",
        "Maintaining response quality."
    ],

    lessons: [
        "Dynamic prompts improve usability.",
        "Token optimization is critical.",
        "Flexible architectures are easier to maintain."
    ],

    features: [
        "Flexible document selection",
        "Prompt-based AI",
        "Knowledge customization",
        "Conversation memory"
    ],

    technologies: [
        "n8n",
        "OpenAI",
        "Prompt Engineering",
        "Google Docs"
    ],

    screenshots: [
    
        "assets/images/Full Context AI Assistant (Prompt-Based Flexible)_gallery.png"
    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1gf2h73vgWXjWWq47j_q9kQFewaON7UfD/view?usp=sharing"
},

{
    id: 6,

    filter: "portfolio",

    title: "Full Context AI Assistant (Tool-Based)",

    status: "Portfolio Project",

    category: "AI Assistant",

    image: "assets/images/Full Context AI Assistant Tool-Based_modal hero.png",

    overview:
        "Developed a tool-based AI assistant that retrieves document context through connected tools instead of embedding the entire knowledge base directly into prompts.",

    problem:
        "Embedding all knowledge into prompts becomes inefficient as document size increases.",

    solution:
        "Created a modular AI workflow where the language model accesses external tools to retrieve relevant document content during conversations.",

    workflow: {
        image: "assets/images/Full Context AI Assistant (Tool-Based)_wa.png",

        description:
            "The AI agent invokes connected tools to retrieve contextual information before generating responses, improving scalability and reducing prompt size."
    },

    challenges: [
        "Designing reliable tool execution.",
        "Maintaining context consistency.",
        "Reducing retrieval latency."
    ],

    lessons: [
        "Tool-based architectures scale better than static prompting.",
        "Modular workflows improve maintainability.",
        "Separating reasoning from retrieval improves performance."
    ],

    features: [
        "Tool calling",
        "Context retrieval",
        "AI agent workflow",
        "Scalable architecture"
    ],

    technologies: [
        "n8n",
        "OpenAI",
        "AI Agent",
        "Google Docs"
    ],

    screenshots: [
       
        "assets/images/Full Context AI Assistant (Tool-Based)_gallery.png"
    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1ZvORo79RuPMjzWWytG6Hdf6403eyIF3O/view?usp=sharing"
},

{
    id: 7,

    filter: "portfolio",

    title: "Facebook Messenger AI Inquiry Assistant",

    status: "Portfolio Project",

    category: "AI Agent",

    image: "assets/images/Facebook Messenger AI Inquiry Assistant_modal hero.png",

    overview:
        "Built an AI-powered Facebook Messenger assistant capable of answering customer inquiries, explaining services, pricing, onboarding requirements, FAQs, and company information using a centralized knowledge base.",

    problem:
        "Businesses spend significant time responding to repetitive inquiries, leading to slower response times and inconsistent customer support.",

    solution:
        "Designed an AI-powered Messenger assistant that automates customer interactions by retrieving business information from a structured knowledge base while maintaining natural conversations.",

    workflow: {
        image: "assets/images/Facebook Messenger AI Inquiry Assistant_wa.png",

        description:
            "Customer messages received through Facebook Messenger trigger an AI workflow that retrieves business information, generates context-aware responses, and replies automatically."
    },

    challenges: [
        "Structuring a comprehensive knowledge base.",
        "Handling diverse customer questions.",
        "Maintaining conversational accuracy."
    ],

    lessons: [
        "Well-organized knowledge bases improve AI accuracy.",
        "Prompt engineering significantly affects customer experience.",
        "AI automation reduces repetitive support tasks."
    ],

    features: [
        "Automated customer inquiries",
        "FAQ assistance",
        "Service recommendations",
        "Business information retrieval",
        "Context-aware conversations"
    ],

    technologies: [
        "n8n",
        "Facebook Messenger",
        "OpenAI",
        "Google Docs"
    ],

    screenshots: [

        "assets/images/Facebook Messenger AI Inquiry Assistant_g1.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/18OKBxVZsRCFrzGMZt-CisnYN8rHSNkjn/view?usp=sharing"
},

{
    id: 8,

    filter: "portfolio",

    title: "AI Sales Data Assistant",

    status: "Portfolio Project",

    category: "AI Assistant",

    image: "assets/images/AI Sales Data Assistant_modal hero.png",

    overview:
        "Developed an AI-powered sales analytics assistant capable of answering natural language questions about online sales data stored in an n8n Data Table, enabling business users to retrieve insights without writing SQL queries.",

    problem:
        "Business users often struggle to analyze sales data because retrieving information requires SQL knowledge or manual report generation.",

    solution:
        "Built an AI assistant that translates natural language questions into SQL queries, executes them against the sales dataset, and returns accurate analytical insights through a conversational interface.",

    workflow: {

        image: "assets/images/AI Sales Data Assistant_wa.png",

        description:
            "User questions trigger an AI agent that generates SQL queries, retrieves data from the n8n Data Table, analyzes the results, and returns conversational responses."

    },

    challenges: [

        "Designing reliable SQL generation.",

        "Preventing invalid SQL queries.",

        "Handling different analytical question formats."

    ],

    lessons: [

        "LLMs can effectively bridge the gap between business users and structured databases.",

        "Clear tool descriptions improve SQL generation accuracy.",

        "Providing schema information significantly enhances AI reliability."

    ],

    features: [

        "Natural language SQL queries",

        "Sales analytics",

        "Revenue reporting",

        "Database querying",

        "Conversational analytics"

    ],

    technologies: [

        "n8n",

        "OpenAI",

        "SQL",

        "Data Tables"

    ],

    screenshots: [

        "assets/images/AI Sales Data Assistant_g1.png",

        "assets/images/AI Sales Data Assistant_g2.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1DXfl4su5Fu9cqSiXezmeplKnAm_3Am7J/view?usp=sharing"

},

{
    id: 9,

    filter: "portfolio",

    title: "AI-Powered Invoice Management Agent Through Telegram",

    status: "Portfolio Project",

    category: "AI Agent",

    image: "assets/images/AI-Powered Invoice Management Agent Through Telegram_modal hero.png",

    overview:
        "AI-powered invoice processing workflow that extracts invoice data using OCR and GPT-4o, validates duplicate records before insertion, stores structured data in Google Sheets, uploads invoice images to Google Drive, and sends automated invoice summaries through Telegram.",

    problem:
        "Processing invoices manually is repetitive, time-consuming, and prone to data entry errors.",

    solution:
        "Developed an AI workflow that automatically extracts invoice details from uploaded files, organizes structured information, and responds to users through Telegram.",

    workflow: {

        image: "assets/images/AI-Powered Invoice Management Agent Through Telegram_wa.png",

        description:
            "Users upload invoices through Telegram. AI extracts invoice details, formats structured data, and sends a summarized response back while preparing the information for storage."

    },

    challenges: [

        "Handling different invoice formats.",

        "Improving extraction consistency.",

        "Structuring AI output for downstream processing."

    ],

    lessons: [

        "Prompt engineering greatly improves extraction quality.",

        "Structured outputs simplify workflow automation.",

        "AI agents reduce repetitive administrative work."

    ],

    features: [

        "Invoice extraction",

        "Telegram chatbot",

        "AI document processing",

        "Structured invoice summaries",

        "Automated responses"

    ],

    technologies: [

        "n8n",

        "Telegram",

        "OpenAI",

        "Google Drive",

        "Google Sheet"

    ],

    screenshots: [

        "assets/images/AI-Powered Invoice Management Agent Through Telegram.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1_SsZO4HXM1bJ1yxYLVe-lE5l6Yd6nXLs/view?usp=sharing"

},

{
    id: 10,

    filter: "portfolio",

    title: "Zapier-Asana CRM Automation",

    status: "Portfolio Project",

    category: "Workflow Automation",

    image: "assets/images/Zapier-Asana CRM Automation_model hero.png",

    overview:
        "Designed a CRM automation workflow integrating Zapier and Asana to automate project management, lead follow-ups, welcome emails, folder creation, and sales pipeline activities.",

    problem:
        "Managing customer onboarding and sales follow-ups manually leads to inconsistent processes and unnecessary administrative work.",

    solution:
        "Implemented a multi-step Zapier workflow that automatically creates tasks, organizes client folders, schedules follow-ups, and sends customer communications throughout the sales process.",

    workflow: {

        image: "assets/images/Zapier-Asana CRM Automation_wa.png",

        description:
            "Task created in Asana trigger Zapier automations that create Asana sub-tasks, organize project folders, schedule reminders, and automate customer communications."

    },

    challenges: [

        "Coordinating multiple workflow branches.",

        "Managing conditional automation paths.",

        "Ensuring consistent CRM synchronization."

    ],

    lessons: [

        "Automation significantly reduces repetitive administrative work.",

        "Well-structured workflows improve scalability.",

        "CRM consistency improves customer experience."

    ],

    features: [

        "Task automation",

        "CRM workflow",

        "Welcome email automation",

        "Quote follow-up automation",

        "Lead management"

    ],

    technologies: [

        "Zapier",

        "Asana",

        "Google Email",

        "Email Automation"

    ],

    screenshots: [

        "assets/images/Zapier-Asana CRM Automation_g1.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1VB9jg6RRYsq28QfBfjxH1NgPJupWu6Hd/view?usp=sharing"

},

{
    id: 11,

    filter: "portfolio",

    title: "Zapier AI-Powered Lead Qualification & Outreach Automation",

    status: "Portfolio Project",

    category: "Workflow Automation",

    image: "assets/images/Zapier AI-Powered Lead Qualification & Outreach Automation_modal hero.png",

    overview:
        "Built an AI-powered lead qualification workflow that enriches prospect information, scores leads, stores qualified prospects in a database, notifies the sales team, and generates personalized outreach emails.",

    problem:
        "Sales teams spend significant time manually researching, qualifying, and prioritizing leads before initiating outreach.",

    solution:
        "Created an automated workflow that enriches lead data using Apollo, evaluates lead quality with AI, stores results in a SQL database, alerts sales representatives, and drafts personalized outreach emails.",

    workflow: {

        image: "assets/images/Zapier AI-Powered Lead Qualification & Outreach Automation_wa.png",

        description:
            "Lead submissions trigger enrichment through Apollo API, AI qualification, database storage, Slack notifications, and personalized email generation."

    },

    challenges: [

        "Integrating multiple third-party services.",

        "Designing meaningful lead scoring logic.",

        "Generating personalized AI outreach messages."

    ],

    lessons: [

        "AI can significantly accelerate sales qualification.",

        "Data enrichment improves personalization.",

        "Workflow orchestration simplifies complex business processes."

    ],

    features: [

        "Lead enrichment",

        "AI lead scoring",

        "Slack notifications",

        "Personalized email generation",

        "Automated outreach"

    ],

    technologies: [

        "Zapier",

        "GeminiAI",

        "Apollo API",

        "Slack",

        "Supabase REST API"

    ],

    screenshots: [

        "assets/images/Zapier AI-Powered Lead Qualification & Outreach Automation_g1.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1YWyBSpUzBgu9uuTpUSNi1EjPrPN1vrWH/view?usp=sharing"

},

{
    id: 12,

    filter: "portfolio",

    title: "Zapier AI Content Repurposing Workflow",

    status: "Portfolio Project",

    category: "Workflow Automation",

    image: "assets/images/Zapier AI Content Repurposing Workflow_modal hero.png",

    overview:
        "Developed an AI-powered content repurposing workflow that automatically transforms uploaded audio recordings into blog articles and social media content, significantly reducing manual content creation time.",

    problem:
        "Creating multiple forms of content from a single recording requires repetitive manual writing and publishing across different platforms.",

    solution:
        "Designed a Zapier automation that transcribes uploaded audio, generates multiple AI-written blog articles, publishes content to social media platforms, and tracks processing status automatically.",

    workflow: {

        image: "assets/images/Zapier AI Content Repurposing Workflow_wa.png",

        description:
            "When an audio file is uploaded to Google Drive, Zapier transcribes the recording, generates AI-written blog articles, publishes content to Facebook and LinkedIn, and updates the processing status in Google Sheets."

    },

    challenges: [

        "Working around transcription limitations within Zapier.",

        "Maintaining content quality across multiple AI-generated outputs.",

        "Coordinating multiple publishing automations."

    ],

    lessons: [

        "AI significantly accelerates content production workflows.",

        "Automation reduces repetitive publishing tasks.",

        "Well-designed workflows improve marketing efficiency."

    ],

    features: [

        "Automatic transcription",

        "AI blog generation",

        "Facebook publishing",

        "LinkedIn publishing",

        "Google Sheets tracking"

    ],

    technologies: [

        "Zapier",

        "GeminiAI",

        "Google Drive",

        "Google Sheets",

        "Facebook",

        "LinkedIn"

    ],

    screenshots: [

        "assets/images/Zapier AI Content Repurposing Workflow_g1.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1iSVVdoDAqk8LOzP0zlfbYyAH-lp7_-hN/view?usp=sharing"

},

{
    id: 13,

    filter: "portfolio",

    title: "Automated Car Insurance Sales",

    status: "Portfolio Project",

    category: "CRM Automation",

    image: "assets/images/Automated Car Insurance Sales_model hero.png",

    overview:
        "Designed an automated sales workflow for a car insurance business that streamlines lead capture, customer follow-ups, appointment scheduling, and sales pipeline management.",

    problem:
        "Manual lead management caused delayed responses, inconsistent follow-ups, and missed sales opportunities.",

    solution:
        "Implemented an automated CRM workflow that captures leads, nurtures prospects through automated follow-ups, schedules appointments, and tracks each customer throughout the sales pipeline.",

    workflow: {

        image: "assets/images/Automated Car Insurance Sales_wa.png",

        description:
            "Customer inquiries enter the CRM, triggering automated follow-up messages, appointment scheduling, pipeline updates, and sales notifications until policy conversion."

    },

    challenges: [

        "Designing effective follow-up sequences.",

        "Preventing duplicate customer records.",

        "Automating pipeline progression."

    ],

    lessons: [

        "Consistent follow-ups improve conversion rates.",

        "CRM automation increases operational efficiency.",

        "Well-designed sales pipelines improve customer experience."

    ],

    features: [

        "Lead capture",

        "Automated follow-ups",

        "Appointment scheduling",

        "Sales pipeline management",

        "CRM automation"

    ],

    technologies: [

        "GoHighLevel",

        "Google Email",

        "Email Automation"

    ],

    screenshots: [

        "assets/images/CI 01.png",

        "assets/images/CI 02.png",

        "assets/images/CI 03.png",

        "assets/images/CI 04.png"

    ],

    github: "",

    demo: ""

},

{
    id: 14,

    filter: "portfolio",

    title: "Hybrid Salon CRM & Client Retention Pipeline",

    status: "Portfolio Project",

    category: "CRM Automation",

    image: "assets/images/Hybrid Salon CRM & Client Retention Pipeline_modal hero.png",

    overview:
        "Developed a hybrid CRM and client retention automation system for a salon business, improving appointment management, customer engagement, and repeat bookings.",

    problem:
        "The salon relied on manual appointment tracking and inconsistent customer follow-ups, resulting in missed opportunities for repeat business.",

    solution:
        "Built an automated CRM pipeline that manages appointments, customer communications, follow-up campaigns, and retention strategies throughout the customer lifecycle.",

    workflow: {

        image: "assets/images/Hybrid Salon CRM & Client Retention Pipeline_wa.png",

        description:
            "Customer bookings automatically enter the CRM, triggering appointment reminders, post-service follow-ups, promotional campaigns, and customer retention workflows."

    },

    challenges: [

        "Coordinating multiple customer journeys.",

        "Designing personalized follow-up campaigns.",

        "Managing appointment lifecycle automation."

    ],

    lessons: [

        "Customer retention automation strengthens long-term relationships.",

        "Personalized communication improves engagement.",

        "CRM workflows reduce administrative overhead."

    ],

    features: [

        "Appointment reminders",

        "Customer follow-ups",

        "Retention campaigns",

        "CRM pipeline",

        "Promotional automation"

    ],

    technologies: [

        "GoHighLevel",

        "Google Email",

        "Email Automation"

    ],

    screenshots: [

        "assets/images/SLA 01.png",

        "assets/images/SLA 02.png",

        "assets/images/SLA 03.png",

        "assets/images/SLA 04.png"

    ],

    github: "",

    demo: ""

},

{
    id: 15,

    filter: "portfolio",

    title: "Medical Clinic Workflow Automation",

    status: "Portfolio Project",

    category: "Workflow Automation",

    image: "assets/images/Medical Clinic Workflow Automation_modal hero.png",

    overview:
        "Developed an end-to-end workflow automation system for a medical clinic to streamline patient inquiries, appointment booking, follow-ups, and internal administrative processes.",

    problem:
        "The clinic relied heavily on manual appointment scheduling, patient follow-ups, and administrative coordination, resulting in slower response times and increased staff workload.",

    solution:
        "Designed an automated workflow that manages patient inquiries, schedules appointments, sends reminders, updates CRM records, and automates follow-up communications throughout the patient journey.",

    workflow: {

        image: "assets/images/Medical Clinic Workflow Automation_wa.png",

        description:
            "Patient inquiries trigger automated workflows that qualify leads, schedule appointments, update CRM records, send reminders, and notify clinic staff for successful patient management."

    },

    challenges: [

        "Designing workflows that accommodate multiple patient scenarios.",

        "Maintaining accurate appointment scheduling.",

        "Reducing manual administrative workload while preserving patient experience."

    ],

    lessons: [

        "Healthcare workflows require reliable automation with minimal failure points.",

        "CRM automation significantly improves operational efficiency.",

        "Automated reminders help reduce missed appointments."

    ],

    features: [

        "Appointment scheduling",

        "Patient reminders",

        "Lead qualification",

        "CRM synchronization",

        "Automated follow-ups"

    ],

    technologies: [

        "GoHighLevel",

        "Google Email",

        "Email Automation"

    ],

    screenshots: [

        "assets/images/NCMC 01.png",

        "assets/images/NCMC 02.png",

        "assets/images/NCMC 02.1.png",

        "assets/images/NCMC 03.png",

        "assets/images/NCMC 04.png"

    ],

    github: "",

    demo: ""

},

{
    id: 16,

    filter: "portfolio",

    title: "Automated Client Acquisition & Lead Nurturing Pipeline",

    status: "Portfolio Project",

    category: "CRM Automation",

    image: "assets/images/Automated Client Acquisition & Lead Nurturing Pipeline_modal hero.png",

    overview:
        "Designed a fully automated lead acquisition and nurturing system that captures prospects, qualifies leads, manages CRM records, and delivers personalized follow-up sequences to improve conversion rates.",

    problem:
        "Businesses often lose potential customers due to delayed responses, inconsistent follow-ups, and manually managed sales pipelines.",

    solution:
        "Created a multi-stage automation pipeline that captures leads, scores prospects, assigns pipeline stages, schedules follow-ups, and automates customer engagement throughout the sales journey.",

    workflow: {

        image: "assets/images/Automated Client Acquisition & Lead Nurturing Pipeline_wa.png",

        description:
            "Lead submissions automatically enter the CRM, triggering qualification workflows, follow-up sequences, sales notifications, and pipeline progression based on customer engagement."

    },

    challenges: [

        "Designing scalable sales automation.",

        "Preventing duplicate lead records.",

        "Managing multiple customer journeys simultaneously."

    ],

    lessons: [

        "Automation improves sales consistency.",

        "Personalized nurturing increases customer engagement.",

        "Structured pipelines simplify sales management."

    ],

    features: [

        "Lead capture",

        "Lead qualification",

        "Pipeline automation",

        "Automated nurturing",

        "CRM management"

    ],

    technologies: [

        "GoHighLevel",

        "Google Email",

        "Email Automation"

    ],

    screenshots: [

        "assets/images/GBA 01.png",

        "assets/images/GBA 02.png",

        "assets/images/GBA 03.png",

        "assets/images/GBA 04.png"

    ],

    github: "",

    demo: ""

},

{

    id: 17,

    filter: "intern",

    title: "Employee Daily Time Record System",

    status: "Internship Project",

    category: "Web Application",

    image: "assets/images/Employee Daily Time Record (DTR) System_modal hero.png",

    overview:
        "Developed a web-based Employee Daily Time Record (DTR) System for the Quezon City Public Library to streamline employee attendance monitoring and record management.",

    problem:
        "The library relied on manual attendance recording, making it time-consuming to monitor employee attendance, generate reports, and maintain accurate daily time records.",

    solution:
        "Built a centralized web application that digitizes employee time-in and time-out records, automates attendance tracking, and simplifies record management through an intuitive administrative dashboard.",

    workflow: {

        image: "assets/images/Employee Daily Time Record System_wa.png",

        description:
            "Employees record their attendance through the web application. The system validates entries, stores them in the database, and allows administrators to monitor attendance, search records, and generate reports from a centralized dashboard."

    },

    challenges: [

        "Designed a user-friendly interface for both employees and administrators.",

        "Ensured accurate attendance recording and validation.",

        "Structured the database to efficiently manage employee records and attendance history."

    ],

    lessons: [

        "Building administrative systems requires balancing usability and data integrity.",

        "Well-designed database relationships simplify report generation.",

        "User feedback during development greatly improves the overall user experience."

    ],

    features: [

        "Employee time-in and time-out recording",

        "Attendance history management",

        "Employee information management",

        "Administrative dashboard",

        "Search and filtering",

        "Attendance report generation"

    ],

    technologies: [

        "PHP",

        "MySQL",

        "JavaScript",

        "HTML",

        "CSS"

    ],

    screenshots: [

        "assets/images/qcpl_g1.png",

        "assets/images/qcpl_g2.png",

        "assets/images/qcpl_g3.png",

        "assets/images/qcpl_g4.png",

        "assets/images/qcpl_g5.png",

        "assets/images/qcpl_g6.png",

        "assets/images/qcpl_g7.png",

        "assets/images/qcpl_g8.png",

        "assets/images/qcpl_g9.png",

        "assets/images/qcpl_g10.png",

        "assets/images/qcpl_g11.png"

    ],

    github: "",

    demo: href="https://drive.google.com/file/d/1an3JMRnnHkYTiQXwkyTReW-z0If3ioRM/view?usp=sharing"

},

{
    id: 18,

    filter: "thesis",

    title: "Deep Learning-Based Rebar Column Measurement System for Cement Mixture Estimation",

    status: "Thesis",

    category: "Artificial Intelligence",

    image: "assets/images/Deep Learning-Based Rebar Column Measurement System for Cement Mixture Estimation_modal hero.png",

    overview:
        "Designed and developed a deep learning-based web application that automatically detects reinforcing steel bars (rebars), estimates their measurements, and recommends cement mixture quantities for reinforced concrete column construction using computer vision techniques.",

    problem:
        "Estimating rebar measurements and determining appropriate cement mixtures are traditionally performed manually, making the process time-consuming, labor-intensive, and susceptible to human error during construction planning.",

    solution:
        "Developed an intelligent web application utilizing Mask R-CNN for instance segmentation to automatically detect rebars from images, estimate measurements, and generate cement mixture recommendations based on the detected reinforcement configuration.",

    workflow: {

        image: "assets/images/Deep Learning-Based Rebar Column Measurement System for Cement Mixture Estimation_wa.png",

        description:
            "Users upload an image of a reinforced concrete column. The deep learning model performs instance segmentation to detect individual rebars, calculates measurements, estimates reinforcement dimensions, and recommends the appropriate cement mixture through an interactive web interface."

    },

    challenges: [

        "Collecting and annotating high-quality training datasets.",

        "Training and optimizing the Mask R-CNN model for accurate rebar detection.",

        "Improving measurement accuracy under varying lighting conditions and image perspectives.",

        "Integrating deep learning inference into a responsive web application."

    ],

    lessons: [

        "Dataset quality directly impacts computer vision performance.",

        "Careful hyperparameter tuning significantly improves model accuracy.",

        "Combining deep learning with practical engineering applications creates real-world value.",

        "User-centered interface design is equally important as model performance."

    ],

    features: [

        "Automatic rebar detection",

        "Instance segmentation using Mask R-CNN",

        "Automated rebar measurement",

        "Cement mixture recommendation",

        "Image upload interface",

        "Interactive web application"

    ],

    technologies: [

        "Python",

        "Raspberry Pi",

        "TensorFlow",

        "Mask R-CNN",

        "Flask",

        "JavaScript",

        "HTML",

        "CSS"

    ],

    screenshots: [

        "assets/images/thesis_g1.png",

        "assets/images/thesis_g2.png",

        "assets/images/thesis_g3.png",

        "assets/images/thesis_g4.png",

        "assets/images/thesis_g5.png",

        "assets/images/thesis_g6.png",

        "assets/images/thesis_g7.png"

    ],

    github: "",

    demo: href="https://youtu.be/rX7x1xQxlAQ"

},

];

const projectsGrid = document.getElementById("projectsGrid");

let visibleProjects = 6;
const PROJECTS_PER_LOAD = 6;

function renderProjects(filter = "all") {

    projectsGrid.innerHTML = "";

    console.log("Current Filter:", filter);

    const filtered =
        filter === "all"
            ? projects
            : projects.filter(project => {
                console.log(project.title, "=>", project.filter);

                return project.filter === filter;
            });
    
    console.log(filtered);

    const visibleList = filtered.slice(0, visibleProjects);

    console.log("visibleProjects:", visibleProjects);
    console.log("visibleList:", visibleList);

    let html = "";

    visibleList.forEach(project => {

        const techHTML = project.technologies
            .map(tech => `<span>${tech}</span>`)
            .join("");

        html += `

<article class="project-card active">

    <div class="project-top">

        <span class="project-category">

            ${project.category}

        </span>

        <span class="${statusClass(project.status)}">

            ${project.status}

        </span>

    </div>

    <h3>

        ${project.title}

    </h3>

    <p>

        ${project.overview}

    </p>

    <div class="project-tags">

        ${techHTML}

    </div>

    <button
        class="project-btn"
        data-id="${project.id}">

        View More Details →

    </button>

</article>

`;

    });

    projectsGrid.innerHTML = html;

// Make dynamically rendered project cards visible immediately
projectsGrid.querySelectorAll(".reveal").forEach(card => {

    card.classList.add("active");

});

const loadMoreBtn = document.getElementById("loadMoreProjects");

    if (!loadMoreBtn) return;

    if (filtered.length <= PROJECTS_PER_LOAD) {

        loadMoreBtn.style.display = "none";
        return;

    }

    loadMoreBtn.style.display = "inline-flex";

    const remaining = filtered.length - visibleProjects;

    if (remaining > 0) {

        loadMoreBtn.textContent =
            `View ${Math.min(PROJECTS_PER_LOAD, remaining)} More Projects`;

    } else {

        loadMoreBtn.textContent = "Show Less";

    }

}

function statusClass(status){

    if(status==="Portfolio Project"){

        return "status portfolio";

    }

    if(status==="Internship Project"){

        return "status intern";

    }

    return "status thesis";

}

renderProjects("all");      

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        visibleProjects = PROJECTS_PER_LOAD;

        renderProjects(button.dataset.filter);

    });

});

const loadMoreBtn = document.getElementById("loadMoreProjects");

loadMoreBtn.addEventListener("click", () => {

    const activeFilter =
        document.querySelector(".filter-btn.active")?.dataset.filter || "all";

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter(project => project.filter === activeFilter);

    if (visibleProjects >= filtered.length) {

        visibleProjects = PROJECTS_PER_LOAD;

    } else {

        visibleProjects += PROJECTS_PER_LOAD;

    }

    renderProjects(activeFilter);

});

// ==========================================
// PROJECT CARD CLICK
// ==========================================

projectsGrid.addEventListener("click", (event) => {

    const button = event.target.closest(".project-btn");

    if (!button) return;

    const id = Number(button.dataset.id);

    openProject(id);

});