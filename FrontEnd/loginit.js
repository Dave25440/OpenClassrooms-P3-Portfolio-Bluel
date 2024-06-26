// Export de la fonction d'initialisation de la section "login"
export function logInit () {
    // Récupération du bouton "login"
    const loginNav = document.getElementById("login-nav");
    // Ajout d'un écouteur d'évènements "click" sur le bouton "login"
    loginNav.addEventListener("click", function () {
        // Ajout de la classe "active-nav" au bouton "login"
        loginNav.classList.add("active-nav");
        // Récupération de la balise main et suppression de son contenu
        const main = document.querySelector("main");
        main.innerHTML = "";
        // Création de la section "login"
        const login = document.createElement("section");
        login.id = "login";
        // Création du titre "Log In"
        const loginTitle = document.createElement("h2");
        loginTitle.innerText = "Log In";
        // Création du formulaire "login-form"
        const loginForm = document.createElement("form");
        loginForm.action = "#";
        loginForm.method = "post";
        loginForm.id = "login-form";
        // Création du label "email"
        const mailLabel = document.createElement("label");
        mailLabel.htmlFor = "email";
        mailLabel.innerText = "E-mail";
        // Création du champ "email"
        const mailInput = document.createElement("input");
        mailInput.type = "email";
        mailInput.name = "email";
        mailInput.id = "email";
        mailInput.classList.add("details");
        // Création du label "password"
        const passLabel = document.createElement("label");
        passLabel.htmlFor = "password";
        passLabel.innerText = "Mot de passe";
        // Création du champ "password"
        const passInput = document.createElement("input");
        passInput.type = "password";
        passInput.name = "password";
        passInput.id = "password";
        passInput.classList.add("details");
        // Création du bouton "Se connecter"
        const signInput = document.createElement("input");
        signInput.type = "submit";
        signInput.value = "Se connecter";
        // Création du paragraphe "Mot de passe oublié"
        const forgot = document.createElement("p");
        forgot.classList.add("forgot");
        // Ajout du lien au paragraphe "Mot de passe oublié"
        const forgotLink = document.createElement("a");
        forgotLink.href = "#";
        forgotLink.innerText = "Mot de passe oublié";
        // Ajout de la section "login" et ses enfants à la balise main
        main.appendChild(login);
        login.appendChild(loginTitle);
        login.appendChild(loginForm);
        loginForm.appendChild(mailLabel);
        loginForm.appendChild(mailInput);
        loginForm.appendChild(passLabel);
        loginForm.appendChild(passInput);
        loginForm.appendChild(signInput);
        login.appendChild(forgot);
        forgot.appendChild(forgotLink);
    });
}