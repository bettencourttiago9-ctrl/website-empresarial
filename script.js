
// MENU DE NAVEGAÇÃO

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// FECHAR MENU AO ESCOLHER UMA PÁGINA

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("year").textContent =
    new Date().getFullYear();


// VALIDAÇÃO INICIAL DO FORMULÁRIO

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        formStatus.textContent =
            "Preencha todos os campos.";

        return;
    }

    formStatus.textContent =
        "Formulário validado! Ainda falta configurar o envio ao servidor.";

    contactForm.reset();

});
