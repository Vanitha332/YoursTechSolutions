document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Smooth scrolling
    // ==============================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ==============================
    // Scroll reveal animation
    // ==============================

    const revealElements = document.querySelectorAll(
        ".service-card, .portfolio-card, .about-content, .about-image, .section-title"
    );

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    // ==============================
    // Portfolio image protection
    // ==============================

    document.querySelectorAll(".portfolio-image img").forEach(function (image) {

        image.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

    });


    // ==============================
    // Current year
    // ==============================

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

});