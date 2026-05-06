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
        const apercu = document.getElementById("apercu");
                apercu.src = imageFile; // ✔ image réelle
                apercu.classList.remove("hidden");
        if (imageFile) {
             
            formData.append("images", imageFile);
           
        }

        const res = await request("/hotels", "POST", formData, true);

        if (res.hotel) {
         showToast("hotel ajouter avec succee", "success");
        window.location.href = "ajouter_produits.html";
        return;
        }
        showToast(res.message || "Erreur lors de l'ajout");
    });
};


     //===============filtre hotel====================

// ========== FILTRE HOTEL ==========
const input = document.getElementById("inpute");

if (input) {
    input.addEventListener("input", async function () {

        const value = input.value.toLowerCase();

        // récupérer les hôtels
        const hotels = await request("/hotels");

        // filtrer les hôtels
        const resultats = hotels.filter(function (hotel) {
            return hotel.nom.toLowerCase().includes(value);
        });

        // afficher les résultats filtrés
        const html = resultats.map(function (element) {
           return `
    <div class="bg-[#fafafa] rounded-xl overflow-hidden shadow relative hover:scale-105 transition">

        <!-- Image cliquable -->
        <div onclick="window.location.href='detail.html?id=${element._id}'" class="cursor-pointer">
            <img src="${element.images}" class="w-full h-[200px] object-cover" alt="${element.nom}">
        </div>

        <div class="p-4">
            <h1 class="font-bold text-xl">${element.nom}</h1>
            <p>${element.adresse}</p>
            <p>${element.email}</p>
            <p class="pt-2">${element.prix} ${element.devise}</p>
        </div>

        <!-- Boutons -->
        <div class="absolute top-2 right-2 flex gap-2">

            <!-- Modifier -->
            <button 
                onclick="event.stopPropagation(); editHotel('${element._id}')"
                class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow">
                <i class="fa-solid fa-pencil"></i>
            </button>

            <!-- Supprimer -->
            <button 
                onclick="event.stopPropagation(); deleteHotel('${element._id}')"
                class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>

    </div>
    `;
        });

        document.getElementById("liste").innerHTML = html.join("");
    });
}   

// ========== AFFICHAGE HOTELS ==========
const affichage = async () => {
    const hotels = await request("/hotels");

    if (!hotels || hotels.length === 0) {
        document.getElementById("liste").innerHTML = "<p>Aucun hôtel trouvé.</p>";
        return;
    }

    const parcourir = hotels.map(function (element) {
    return `
    <div class="bg-[#fafafa] rounded-xl overflow-hidden shadow relative hover:scale-105 transition">

        <!-- Image cliquable -->
        <div onclick="window.location.href='detail.html?id=${element._id}'" class="cursor-pointer">
            <img src="${element.images}" class="w-full h-[200px] object-cover" alt="${element.nom}">
        </div>

        <div class="p-4">
            <h1 class="font-bold text-xl">${element.nom}</h1>
            <p>${element.adresse}</p>
            <p>${element.email}</p>
            <p class="pt-2">${element.prix} ${element.devise}</p>
        </div>

        <!-- Boutons -->
        <div class="absolute top-2 right-2 flex gap-2">

            <!-- Modifier -->
            <button 
                onclick="editHotel('${element._id}')"
                class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow">
                <i class="fa-solid fa-pencil"></i>
            </button>

            <!-- Supprimer -->
            <button 
                onclick="deleteHotel('${element._id}')"
                class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow">
                <i class="fa-solid fa-trash"></i>
            </button>

        </div>

    </div>
    `;
});

    document.getElementById("liste").innerHTML = parcourir.join("");
};

//----------------------fonction pour modifier 

const editHotel = async (id) => {
    try {
        // afficher le formulaire
        document.getElementById("modifier").classList.remove("hidden");

        // récupérer UN seul hôtel
        const hotel = await request(`/hotels/${id}`);

        if (!hotel) return;

        // remplir les champs
        document.getElementById("nom").value = hotel.nom || "";
        document.getElementById("adresse").value = hotel.adresse || "";
        document.getElementById("email").value = hotel.email || "";
        document.getElementById("telephone").value = hotel.telephone || "";
        document.getElementById("prix").value = hotel.prix || "";
        document.getElementById("devise").value = hotel.devise || "";

        if (hotel.images) {
    const apercu = document.getElementById("apercu");

    apercu.src = hotel.images; // ✔ image réelle
    apercu.classList.remove("hidden");
}
document.getElementById("images").addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
        const apercu = document.getElementById("apercu");

        apercu.src = URL.createObjectURL(file);
        apercu.classList.remove("hidden");
        apercu.style.width = "100%"
    }
});


        // stocker l'id pour update
        document.getElementById("formUpdate").dataset.id = id;

    } catch (error) {
        console.error("Erreur edit :", error);
    }
};

//faire la modification

const up = document.getElementById("btn-submit-edit");
if(up){
    up.addEventListener("submit", async function(e){
        e.preventDefault();


        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const adresse = document.getElementById("adresse").trim();
        const telephone = document.getElementById("telephone").trim();
        const prix = document.getElementById("prix").trim();
        const devise = document.getElementById("devise").trim();
        const imagefile = document.getElementById("images").files[0];

        const fromdata = new FormData();
        fromdata.append("nom",nom);
        fromdata.append("adresse",adresse);
        fromdata.append("email",email);
        fromdata.append("telepohone",telephone);
        fromdata.append("prix",prix);
        fromdata.append("devise",devise);

        if(imageFile) {
            fromdata.append("images",imagefile);
        }
        const res = await request("/hotels", "PUT", fromdata);
        if(res){
         showToast("hotel mis à jour avec succès", "success");

        }









    })
}


const fermerEdit = ()=>{
    document.getElementById("modifier").classList.add("hidden")

}


//---------------fonction pour supprimer
const deleteHotel = async (id)=>{
    const res = await request(`/hotels/${id}`,"DELETE");
    if(res){
        window.location.href = 'ajouter_produits.html'
        showToast("hotel supprimer", "success");

    }
   
    }



 


if (document.getElementById("liste")) {
    affichage(); 
}




