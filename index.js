
function afficher(){
    document.getElementById("formulaire").classList.remove("hidden")
}




 function fermer(){
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