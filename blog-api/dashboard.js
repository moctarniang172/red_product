
const listedasboard = async ()=>{
    const res = await request("/dashboard/stats");
       console.log("réponse dashboard :", res);

if (res) {
    // document.getElementById("totalformulaire").textContent = res.totalmessage;
    document.getElementById("total-hotel").textContent = res.totalhotel;
    document.getElementById("user").textContent = res.totaluser;
    document.getElementById("message").textContent = res.totalmessage;
    document.getElementById("email").textContent = res.totalemails;
} else {
    console.error("Erreur dashboard :", res.message);
}
}

// ========== AFFICHER PROFIL ==========
const afficherProfil = async () => {
    const res = await request("/auth/profil", "GET");

    if (res && res.user) {
        const { nom, images } = res.user;

        // Nom dans la sidebar
        const nomEl = document.getElementById("non");
        if (nomEl) nomEl.textContent = nom;

        // Photo sidebar
        const photoSidebar = document.getElementById("photo-sidebar");
        if (photoSidebar && images) photoSidebar.src = images;

        // Photo navbar
        const photoNavbar = document.getElementById("photo-navbar");
        if (photoNavbar && images) photoNavbar.src = images;
    }
};

afficherProfil();

listedasboard()