let tabProduits = []
let stockagePhoto;
rechargement()

document.getElementById("image").addEventListener("change",function(){
    let fichier = this.files[0];
    if(!fichier){
        return
    }
    let file = new FileReader()
    file.readAsDataURL(fichier)
    
    file.onload = function(){
        stockagePhoto = file.result;
        let apercu = document.getElementById("apercu");
        apercu.src = stockagePhoto
        apercu.classList.remove("hidden")
    }

})
let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", function(event){
    event.preventDefault()

    let nom = document.getElementById("nom").value.trim();
    let adresse = document.getElementById("adresse").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let tel = document.getElementById("telephone").value.trim();
    let prix = document.getElementById("prix").value.trim()

    if(nom && adresse && mail && tel && prix && stockagePhoto){
         tabProduits.push({nom: nom, adresse: adresse, mail: mail, telephone: tel, prix: prix, image: stockagePhoto})
    alert("hotel ajouter avec succes !")
    afficherProduit(tabProduits)
    souvgarder()
        
    }else{
    alert("remplis tous les chanmps !");
        return 
    }
    document.getElementById("formulaire").classList.add("hidden")
     document.getElementById("nom").value ="";
     document.getElementById("adresse").value = "";
     document.getElementById("mail").value = "";
     document.getElementById("telephone").value ="";
     document.getElementById("prix").value = ""
     document.getElementById("image").value = ""
    stockagePhoto = null;
   
    
   

})

// function afficherProduit(tab){
//     if(tab.length === 0){
//         document.getElementById("liste").innerHTML = `<p class="text-center text-red-500">liste des hotels est vide </p>`
//         return;

//     }else{
//    let parcourire = tab.map(function(information){
//    return `<div class="bg-[#fafafa] rounded-xl overflow-hidden shadow">
//       <img src="${information.image}" class="w-full h-[200px] object-cover">

//       <div class="p-4">
//         <p class="text-[#9b6150] text-sm">${information.adresse}</p>
//         <h1 class="font-bold text-xl">${information.nom}</h1>
//         <h1 class="font-bold text-xl">${information.telephone}</h1>
//         <p class="pt-2">${information.prix}/ nuit</p>
//       </div>
//     </div>`
//    });
//     document.getElementById("liste").innerHTML = parcourire.join("");
// }
// }
function souvgarder(){
    localStorage.setItem("produit", JSON.stringify(tabProduits))
    
}
function rechargement(){
    let data = JSON.parse(localStorage.getItem("produit")) ||[]
    tabProduits = data // chaque fois on recharger la page, il faudra mis a jour les donnees du tableau
 afficherProduit(tabProduits);
}
function afficher(){
    document.getElementById("formulaire").classList.remove("hidden")
}
function fermer(){
    //  document.getElementById("formulaire").classList.add("hidden")
     document.getElementById("nom").value ="";
     document.getElementById("adresse").value = "";
     document.getElementById("mail").value = "";
     document.getElementById("telephone").value ="";
     document.getElementById("prix").value = ""
     document.getElementById("image").value = ""
     document.getElementById("apercu").value = ""
     stockagePhoto;
    document.getElementById("formulaire").classList.add("hidden")
}




    // document.getElementById("user").innerHTML = tabProduits.length()
 function clique(){
    document.getElementById("sidbare").classList.remove("hidden")
 }

 function effacer(){
    localStorage.clear("produit")
 }
 function fermer2(){
    document.getElementById("sidbare").classList.add("hidden")
 }
 
//  enligne()
 
    function logout() {
    localStorage.removeItem("token"); // 
    window.location.href = "index.html"; 
}