// Export de la fonction d'initialisation de la section "login"
export function loginInit () {
    // Récupération du bouton "login"
    const loginNav = document.getElementById("loginNav");
    // Ajout d'un écouteur d'évènements "click" sur le bouton "login"
    loginNav.addEventListener("click", function () {
        // Ajout de la classe "activeNav" au bouton "login"
        loginNav.classList.add("activeNav");
        // Récupération de la balise main et suppression de son contenu
        const main = document.querySelector("main");
        main.innerHTML = "";
        // Création de la section "login"
        const login = document.createElement("section");
        login.id = "login";
        // Création du titre "Log In"
        const loginTitle = document.createElement("h2");
        loginTitle.innerText = "Log In";
        // Création du formulaire "loginForm"
        const loginForm = document.createElement("form");
        loginForm.action = "#";
        loginForm.method = "post";
        loginForm.id = "loginForm";
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
        // Création du paragraphe "forgot"
        const forgot = document.createElement("p");
        forgot.classList.add("forgot");
        // Création du lien "Mot de passe oublié"
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

// Export de la fonction d'authentification
export function signIn () {
    // Ajout d'un écouteur d'évènements "submit" sur le formulaire "loginForm"
    loginForm.addEventListener("submit", async function (event) {
        // Annulation du comportement par défaut du formulaire
        event.preventDefault();
        // Récupération du contenu des champs dans un objet
        const details = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=password]").value
        };
        // Envoi des données sous forme de chaînes de caractères
        await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(details)
        })
        // Récupération du résultat de la promesse
        .then(async function (response) {
            // Récupération du paragraphe "error"
            let error = document.querySelector(".error");
            /* Si connexion ok: vérification de la réponse,
            sinon si aucun paragraphe "error": ajout du paragraphe */
            if (response.ok) {
                // Vérification de la réponse
                // console.log(response.statusText);
                // Récupération de l'objet JSON avec un comportement asynchrone
                const object = await response.json();
                // Récupération du paramètre token de l'objet JSON
                const token = object.token;
                // Vérification du contenu de token
                console.log(token);
                // Redirection vers la page index.html
                window.location.href = "./index.html";
            } else if(!error) {
                // Vérification de la réponse
                // console.log(response.statusText);
                // Création et ajout du paragraphe "error"
                error = document.createElement("p");
                error.classList.add("error");
                error.innerText = "Erreur dans l’identifiant ou le mot de passe";
                login.appendChild(error);
            }
        });
    });
}