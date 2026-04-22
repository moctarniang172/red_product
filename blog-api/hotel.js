const hotel = document.getElementById("hotel");

if (hotel) {
    hotel.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("nom", document.getElementById("nom").value.trim());
        formData.append("adresse", document.getElementById("adresse").value.trim());
        formData.append("email", document.getElementById("email").value.trim());
        formData.append("telephone", document.getElementById("telephone").value.trim());
        formData.append("prix", document.getElementById("prix").value.trim());
        formData.append("devise", document.getElementById("devise").value.trim());
        formData.append("images", document.getElementById("images").files[0]);

        const res = await request("/hotels", "POST", formData, true); 

        if (res.success) {
            showToast("Hôtel ajouté avec succès", "success");
            setTimeout(() => { window.location.href = "index.html"; }, 1000);
            return;
        }
        showToast(res.message || "Erreur lors de l'ajout", "error");
    });
}

//affichage de hotel 

const affichage = async ()=>{
    const hotels = await request("/hotels");

if (!hotels || hotels.length === 0) {
    document.getElementById("liste").innerHTML = "<p>Aucun hôtel trouvé.</p>";
} else {
  const parcourir = hotels.map(function(element) {
    return `
    <div class="bg-[#fafafa] rounded-xl overflow-hidden shadow">
        <img src="${element.images}" class="w-full h-[200px] object-cover" alt="${element.nom}">
        <div class="p-4">
            <h1 class="font-bold text-xl">${element.nom}</h1>
            <h1 class="font-bold text-xl">${element.adresse}</h1>
            <p>${element.email}</p>
            <p class="pt-2">${element.prix} ${element.devise}</p>
        </div>
    </div>
    `;
});

    document.getElementById("liste").innerHTML = parcourir.join("");
}
}
affichage()