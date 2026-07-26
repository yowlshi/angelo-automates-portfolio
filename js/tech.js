const technologies = [

    {
        name:"n8n",
        category:"Automation",
        logo: "assets/logos/n8n.svg"
    },

    {
        name:"Zapier",
        category:"Automation",
        logo: "assets/logos/zapier.svg"
    },

    {
        name:"GoHighLevel",
        category:"CRM",
        logo: "assets/logos/gohighlevel.png"
    },

    {
        name:"OpenAI",
        category:"AI",
        logo: "assets/logos/openai.svg"
    },

    {
        name:"Claude",
        category:"AI",
        logo: "assets/logos/claude.svg"
    },

    {
        name:"Gemini",
        category:"AI",
        logo: "assets/logos/google-gemini.svg"
    },

    {
        name:"Vapi",
        category:"AI",
        logo: "assets/logos/vapi.svg"
    },

    {
        name:"Meta",
        category:"Messaging Platform",
        logo: "assets/logos/meta.svg"
    },

    {
        name:"Telegram",
        category:"Messaging Platform",
        logo: "assets/logos/telegram.svg"
    },

    {
        name: "Asana",
        category: "Project Management",
        logo: "assets/logos/asana.svg"
    },
    
    {
        name: "Facebook Page",
        category: "Social Media Platform",
        logo: "assets/logos/facebook.svg"
    },

    {
        name: "LinkedIn",
        category: "Professional Platform",
        logo: "assets/logos/linkedin.svg"
    },

    {
        name:"Supabase",
        category:"Database",
        logo: "assets/logos/supabase.svg"
    },

    {
        name:"PostgreSQL",
        category:"Database",
        logo: "assets/logos/postgresql.svg"
    },

    {
        name:"Python",
        category:"Programming",
        logo: "assets/logos/python.svg"
    },

    {
        name:"JavaScript",
        category:"Programming",
        logo: "assets/logos/javascript.svg"
    },

    {
        name:"Raspberry Pi",
        category:"Hardware",
        logo: "assets/logos/raspberry-pi.svg"
    },

    {
        name:"Git",
        category:"Version Control",
        logo: "assets/logos/git.svg"
    },

    {
        name:"GitHub",
        category:"Collaboration",
        logo: "assets/logos/github.svg"
    },

    {
        name:"REST API",
        category:"Integration"
    },

    {
        name:"Docker",
        category:"DevOps",
        logo: "assets/logos/docker.svg"
    },

    {
        name:"Google Workspace",
        category:"Cloud Productivity",
        logo: "assets/logos/google-workspace.svg"
    },
    
    {
        name:"Airtable",
        category:"Database",
        logo: "assets/logos/airtable.svg"
    },

    {
        name:"Slack",
        category:"Collaboration",
        logo: "assets/logos/slack.svg"
    }

];

const techGrid = document.getElementById("techGrid");

const logoRow = document.getElementById("logoRow");


technologies.forEach(tech => {

    // Tech Stack Cards
    techGrid.innerHTML += `

        <div class="tech-card reveal">

            <span class="tech-category">

                ${tech.category}

            </span>

            <h3>

                ${tech.name}

            </h3>

        </div>

    `;

    // Technology Ribbon Logos
    if (tech.logo) {

        logoRow.innerHTML += `

            <div class="logo-item">

                <img
                    src="${tech.logo}"
                    alt="${tech.name}"
                    title="${tech.name}"
                >

            </div>

        `;

    }

});

