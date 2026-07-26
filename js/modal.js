const modal = document.getElementById("projectModal");
const modalWindow = modal.querySelector(".modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.querySelector(".modal-close");

function openProject(id){

    const project = projects.find(p => p.id === id);

    if(!project) return;

    modalContent.innerHTML = `

    <img
        src="${project.image}"
        alt="${project.title}"
        class="modal-image"
    >

    <div class="modal-header">

        <span class="${statusClass(project.status)}">
            ${project.status}
        </span>

        <span class="project-category">
            ${project.category}
        </span>

    </div>

    <h2 class="modal-title">

        ${project.title}

    </h2>

    <div class="modal-section">

        <h3>Overview</h3>

        <p>

            ${project.overview}

        </p>

    </div>

    <div class="modal-section">

        <h3>The Problem</h3>

        <p>

            ${project.problem}

        </p>

    </div>

    <div class="modal-section">

        <h3>The Solution</h3>

        <p>

            ${project.solution}

        </p>

    </div>

    <div class="modal-section">

    <h3>Workflow Architecture</h3>

    <div class="workflow-card">

        <img
            src="${project.workflow.image}"
            alt="${project.title} Workflow"
            class="workflow-image"
        >

        <p class="workflow-description">

            ${project.workflow.description}

        </p>

    </div>

</div>

    <div class="modal-section">

        <h3>Key Features</h3>

        <ul class="feature-list">

            ${project.features.map(feature => `

                <li>${feature}</li>

            `).join("")}

        </ul>

    </div>

    <div class="modal-section">

        <h3>Technology Stack</h3>

        <div class="project-tags">

            ${project.technologies.map(tech => `

                <span>${tech}</span>

            `).join("")}

        </div>

    </div>

    <div class="modal-section">

        <h3>Challenges Encountered</h3>

        <ul class="feature-list">

            ${project.challenges.map(challenge => `

                <li>${challenge}</li>

            `).join("")}

        </ul>

    </div>

    <div class="modal-section">

        <h3>Lessons Learned</h3>

        <ul class="feature-list">

            ${project.lessons.map(lesson => `

                <li>${lesson}</li>

            `).join("")}

        </ul>

    </div>

    <div class="modal-section">

        <h3>Project Gallery</h3>

        <div class="gallery-grid">

            ${project.screenshots.map(image => `

                <img
                    src="${image}"
                    alt="${project.title}"
                >

            `).join("")}

        </div>

    </div>

    <div class="modal-actions">

        ${project.github ? `

            <a
                href="${project.github}"
                target="_blank"
                class="btn btn-secondary">

                GitHub

            </a>

        ` : ""}

        ${project.demo ? `

            <a
                href="${project.demo}"
                target="_blank"
                class="btn btn-primary">

                Live Demo

            </a>

        ` : ""}

    </div>

`;

    modalWindow.scrollTop = 0;

    modal.classList.add("active");

    document.body.style.overflow="hidden";

}

function hideModal(){

    modal.classList.remove("active");

    modalWindow.scrollTop = 0;

    document.body.style.overflow="";

}

closeModal.addEventListener("click",hideModal);

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        hideModal();

    }

});

window.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        hideModal();

    }

});