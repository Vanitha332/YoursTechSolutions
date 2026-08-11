document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    if (!header) return;


    // ==============================
    // Navbar scroll effect
    // ==============================

    function handleNavbarScroll() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    // ==============================
    // Active navigation link
    // ==============================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    document.querySelectorAll(".nav-links a").forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop();


        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });

});