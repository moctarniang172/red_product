// function sidbare() {
   

//     // Correction de la fonction : on utilise une variable pour stocker le HTML
//     const statutHTML = (nomAffiche !== "Utilisateur") 
//         ? `<span class="w-2 h-2 bg-green-400 rounded-full"></span>
//            <p class="text-xs text-green-400">en ligne</p>`
//         : `<span class="w-2 h-2 bg-gray-500 rounded-full"></span>
//            <p class="text-xs text-gray-400">hors ligne</p>`;

//     let bare = `
//     <div class="flex-1 w-full md:flex gap-4 mt-2 px-4 text-white">
//         <i class="fa-solid fa-xmark pr-[15%] text-white md:hidden cursor-pointer" onclick="fermer2()"></i>
//         <div class="m-4 flex justify-center gap-2 text-white">
//             <img src="images/Link → SVG.png" alt="image">
//             <h1>RED PRODUCT</h1>
//         </div>
//     </div>
//     <ul class="w-full">
//         <li class="text-xl text-black hover:bg-white hover:text-black rounded overflow-hidden">
//             <a href="dashboard.html" class="nav-link flex items-center gap-2 w-full px-4 py-2">
//                 <img src="images/Vector.png" alt="image"> Dashboard
//             </a>
//         </li>
//         <li class="text-xl text-white hover:bg-white hover:text-black rounded overflow-hidden">
//             <a href="ajouter_produits.html" class="nav-link flex items-center gap-2 w-full px-4 py-2">
//                 <img src="images/list.png" alt="image" class="w-5 h-5 group-hover:brightness-0 "> Liste des hotels
//             </a>
//         </li>
//     </ul>
//     <div class="mt-[205%] flex items-center gap-3 justify-center">
//         <div class="relative ">
//             <div class="flex items-center gap-3">
//                 <i class="fa-solid fa-circle-user text-4xl text-white"></i>
//                 <img src="images/moctar.jpg" alt="photo" class="absolute inset-0 w-10 h-10 rounded-full object-cover">
//                 <div>
//                     <p class="text-sm font-semibold text-white">${nomAffiche}</p>
//                     <div class="flex items-center gap-1">
//                         ${statutHTML}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>`;

//     document.getElementById("sidbare").innerHTML = bare;

//     // Gestion des liens actifs
//     let links = document.querySelectorAll(".nav-link");
//     let lien = window.location.pathname.toLowerCase();
    
//     links.forEach(link => {
//         let href = link.getAttribute("href").toLowerCase();
//         if (lien.includes(href)) {
//             link.parentElement.classList.add('bg-white', 'text-black');
//             link.classList.remove('text-white'); // Sécurité pour le texte
//         }
//     });
// }

// sidbare();

function fermer2(){
    document.getElementById("sidbare").classList.add("hidden");
}
 function profile(){
     const nomAffiche = localStorage.getItem("nom_user") || "Utilisateur";
     if (nomAffiche !== "Utilisateur") {
        document.getElementById("non").innerText = nomAffiche;
        document.getElementById("ligne").innerHTML = `
            <span class="w-2 h-2 bg-green-400 rounded-full"></span>
            <p class="text-xs text-green-400">en ligne</p>`;
    } else {
        document.getElementById("non").innerText = "Utilisateur";
        document.getElementById("ligne").innerHTML = `
            <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
            <p class="text-xs text-gray-400">hors ligne</p>`;
    }
 }
 function setActive(element, section) {
    // 1. Sélectionner tous les liens de navigation
    const links = document.querySelectorAll('.nav-link');
    
    // 2. Retirer la classe de fond actif de tous les liens
    links.forEach(link => {
        link.classList.remove('bg-white','w-full', 'font-bold');
    });

    // 3. Ajouter la classe au lien sur lequel on a cliqué
    element.classList.add('bg-white/20','w-full', 'font-bold', 'text-black');

    // 4. Appeler votre fonction show() existante
    show(section);
}
// À mettre en bas de votre page
window.onload = function() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if(link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('bg-white','text-black');
        }
    });
}




  
 profile();