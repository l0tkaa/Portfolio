document.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
});

// Smooth Scrolling for Navigation Links
function smoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}
