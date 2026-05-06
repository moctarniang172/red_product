const params = new URLSearchParams(window.location.search);
const hotelID = params.get("id");

const detail = async () => {
  try {
    const hotel = await request(`/hotels/${hotelID}`);

    const html = `
<div class="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full grid md:grid-cols-2">
    
    <div>
      <img src="${hotel.images}" 
           alt="hotel"
           class="w-full h-full object-cover">
    </div>

    <div class="p-6 flex flex-col justify-between">
      
      <div>
        <h2 class="text-2xl font-bold mb-2">${hotel.nom}</h2>
        <p class="text-gray-600 mb-4">${hotel.adresse}</p>

        <p class="text-lg font-semibold text-green-600 mb-2">
          Prix : ${hotel.prix} ${hotel.devise}
        </p>

        <p class="text-sm text-gray-500">
          Téléphone : ${hotel.telephone}
        </p>
      </div>

      <div class="flex gap-4 mt-6">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onclick="updateHotel('${hotel._id}')">
          Modifier
        </button>

        <a href="ajouter_produits.html" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          ">
          Retour
        </a>
      </div>

    </div>
</div>
`;

    document.getElementById("detail").innerHTML = html;

  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
};

detail();