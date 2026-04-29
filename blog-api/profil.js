// ========== CHARGER LE PROFIL ==========
const chargerProfil = async () => {
    // ========== PROTECTION DE LA PAGE ==========
const tokenUser = localStorage.getItem("token");

if (!tokenUser) {
    window.location.href = "index.html";
}
    const res = await request("/auth/profil", "GET");

    if (res && res.user) {
        const { nom, email, images } = res.user;

        // Remplir les champs
        document.getElementById("nom").value = nom;
        document.getElementById("email").value = email;

        // Afficher nom et email en haut
        document.getElementById("nom-affiche").textContent = nom;
        document.getElementById("email-affiche").textContent = email;

        // Afficher la photo
        if (images) {
            document.getElementById("photo-profil").src = images;
        }
    }
};

// Aperçu image avant upload
document.getElementById("images").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById("photo-profil").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// ========== MODIFIER LE PROFIL ==========
const formProfil = document.getElementById("form-profil");

if (formProfil) {
    formProfil.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const imageFile = document.getElementById("images").files[0];

        // Construire FormData
        const formData = new FormData();
        formData.append("nom", nom);
        formData.append("email", email);
        if (imageFile) {
            formData.append("images", imageFile);
        }

        const res = await request("/auth/profil", "PUT", formData, true);

        if (res && res.user) {
            showToast("Profil mis à jour avec succès", "success");

            // Mettre à jour le nom dans localStorage
            localStorage.setItem("nom_user", res.user.nom);

            // Mettre à jour l'affichage
            document.getElementById("nom-affiche").textContent = res.user.nom;
            document.getElementById("email-affiche").textContent = res.user.email;

            if (res.user.images) {
                document.getElementById("photo-profil").src = res.user.images;
            }
            return;
        }

        showToast(res.message || "Erreur de mise à jour", "error");
    });
}

// Charger le profil au démarrage
chargerProfil();