// ========== INSCRIPTION ==========
const register = document.getElementById("register");

if (register) {
    register.addEventListener("submit", async function(event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const res = await request("/auth/inscription", "POST",{ nom, email, password });

        if (res) { 
            showToast("Inscription réussie", "success");
            setTimeout(() => { window.location.href = "index.html"; }, 1000);
            return;
        }
        showToast(res.message || "Erreur d'inscription", "error");
    });
}

// ========== CONNEXION ==========
const connexion = document.getElementById("connexion");

if (connexion) {
    connexion.addEventListener("submit", async function(event) { 
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password  = document.getElementById("password").value.trim();

        const res = await request("/auth/connexion", "POST", { email, password });

        if (res && res.token) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("id_user", res.id)
            localStorage.setItem("nom_user", res.nom);
            showToast("Connexion réussie", "success");
            setTimeout(() => {
                 window.location.href = "dashboard.html"; 
                }, 1000);
            return;
        }
        showToast(res.message || "Erreur de connexion", "error");
    });
}

// recuperation de mot de passe
const mdpForm = document.getElementById("mdp");

if (mdpForm) {
    mdpForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();

        const res = await request("/password", "POST", { email });
          sessionStorage.setItem("resetEmail", email);

        alert(res.message);

        window.location.href = "code.html";
    });
};
                //code envoyer via email
const codeForm = document.getElementById("codeForm");
if (codeForm) {
  codeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const code = document.getElementById("code").value;
    const email = sessionStorage.getItem("email");

    const res = await request("/password/code", "POST", { email, code });
    sessionStorage.setItem("resetToken", res.resetToken)

    window.location.href = "newpassword.html";
  });
};


                        // new password 
const newpasswordForm = document.getElementById("newpasswordForm");
if (newpasswordForm) {
  newpasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const token = sessionStorage.getItem("resetToken");
    // const email = sessionStorage.getItem("email");

    await request("/password/reset", "POST", { token, password });

    sessionStorage.clear();
    alert("mot de passe a ete modifier avec succe")

    window.location.href = "index.html";
  });
}


