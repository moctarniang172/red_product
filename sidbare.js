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