document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (name && email && message) {
        status.textContent = "Merci, " + name + " ! Ton message a bien été envoyé.";
        status.style.color = "#58a6ff";
        this.reset();
    } else {
        status.textContent = "Veuillez remplir tous les champs.";
        status.style.color = "red";
    }
});
