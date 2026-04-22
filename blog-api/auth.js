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

        if (res.token) {
            localStorage.setItem("token", res.token);
            showToast("Connexion réussie", "success");
            setTimeout(() => {
                 window.location.href = "dashboard.html"; 
                }, 1000);
            return;
        }
        showToast(res.message || "Erreur de connexion", "error");
    });
}