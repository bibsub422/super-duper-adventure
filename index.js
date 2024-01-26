const mobile_nav = document.querySelector(".menu");
const nav_header = document.querySelector(".header");
const contact = document.querySelector("#contact-btn");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}

const scrollDownToFooter = () => {
    const footer = document.querySelector("footer");
    footer.scrollIntoView({ behavior: "smooth" });
}

contact.addEventListener('click', scrollDownToFooter);
mobile_nav.addEventListener('click', toggleNavbar);

