// import { request } from "./api.js";

// ========== AJOUT HOTEL ==========
const hotel = document.getElementById("hotel");

if (hotel) {
    hotel.addEventListener("submit", async function(event) {
        event.preventDefault();

        const btn = document.getElementById("btn-submit");
        btn.disabled = true;
        btn.textContent = "Enregistrement en cours...";

        const formData = new FormData();
        formData.append("nom", document.getElementById("nom").value.trim());
        formData.append("adresse", document.getElementById("adresse").value.trim());
        formData.append("email", document.getElementById("email").value.trim());
        formData.append("telephone", document.getElementById("telephone").value.trim());
        formData.append("prix", document.getElementById("prix").value.trim());
        formData.append("devise", document.getElementById("devise").value.trim());
        
        const imageFile = document.getElementById("images").files[0];
        if (imageFile) {
            formData.append("images", imageFile);
           
        }

        const res = await request("/hotels", "POST", formData, true);

        if (res.hotel) {
            alert("Hôtel ajouté avec succès");
            window.location.href = "ajouter_produits.html";
            return;
        }
        alert(res.message || "Erreur lors de l'ajout");
    });
} 

// ========== AFFICHAGE HOTELS ==========
const affichage = async () => {
    const hotels = await request("/hotels");

    if (!hotels || hotels.length === 0) {
        document.getElementById("liste").innerHTML = "<p>Aucun hôtel trouvé.</p>";
        return;
    }

    const parcourir = hotels.map(function(element) {
        return `
        <div class="bg-[#fafafa] rounded-xl overflow-hidden shadow">
            <img src="${element.images}" class="w-full h-[200px] object-cover" alt="${element.nom}">
            <div class="p-4">
                <h1 class="font-bold text-xl">${element.nom}</h1>
                <p>${element.adresse}</p>
                <p>${element.email}</p>
                <p class="pt-2">${element.prix} ${element.devise}</p>
            </div>
        </div>
        `;
    });

    document.getElementById("liste").innerHTML = parcourir.join("");
};

if (document.getElementById("liste")) {
    affichage(); 
}