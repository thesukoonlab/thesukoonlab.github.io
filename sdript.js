// The Sukoon Lab

document.addEventListener("DOMContentLoaded", () => {
    console.log("The Sukoon Lab Loaded");

    const links = document.querySelectorAll(".btn, .links a");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "translateY(-2px)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "translateY(0)";
        });
    });
});
