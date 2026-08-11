document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Floating hero animation
    // ==============================

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) {

        let position = 0;
        let direction = 1;

        function floatAnimation() {

            position += 0.15 * direction;

            if (position > 10) {
                direction = -1;
            }

            if (position < -10) {
                direction = 1;
            }

            heroImage.style.transform =
                `translateY(${position}px)`;

            requestAnimationFrame(floatAnimation);

        }

        floatAnimation();

    }


    // ==============================
    // Card hover effect
    // ==============================

    const cards = document.querySelectorAll(
        ".service-card, .portfolio-card"
    );


    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (e) {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    // ==============================
    // Button click animation
    // ==============================

    document.querySelectorAll(
        ".btn-primary, .btn-secondary, .about-btn"
    ).forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.add("button-click");

            setTimeout(function () {

                button.classList.remove("button-click");

            }, 250);

        });

    });

});