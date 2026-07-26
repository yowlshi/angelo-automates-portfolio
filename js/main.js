const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

function initializeRevealAnimations() {

    document.querySelectorAll(".reveal").forEach(element => {

        observer.observe(element);

    });

}

initializeRevealAnimations();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

        setTimeout(() => {

            replayRevealAnimations(target);

        }, 300);

    });

});

function replayRevealAnimations(section) {

    const reveals = section.querySelectorAll(".reveal");

    reveals.forEach(element => {

        element.classList.remove("active");

    });

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            reveals.forEach(element => {

                element.classList.add("active");

            });

        });

    });

}

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0

    });

});