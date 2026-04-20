// creer un fonction pour sadbare pour rendre nom code modulaire
    function sidbare() {
  let bare = `
  <div class="flex-1 w-full md:flex gap-4 mt-2 px-4 text-white">
    <i class="fa-solid fa-xmark pr-[15%] text-white md:hidden cursor-pointer" onclick="fermer2()"></i>
    <div class="m-4 flex justify-center gap-2 text-white">
      <span class="inline-block w-[22px] h-[26px] bg-white mr-2 
      [clip-path:polygon(0%_0%,100%_0%,100%_100%,50%_78%,0%_100%)]"></span>
      <h1>RED PRODUCT</h1>
    </div>
  </div>

  <ul class="w-full">
    <li class="text-xl text-black hover:bg-white hover:text-black rounded overflow-hidden">
  <a href="dashboard.html" class="nav-link flex items-center gap-2 w-full px-4 py-2">
  <img src="images/Vector.png" alt="image"> 
    
    Dashboard
  </a>
</li>

<li class="text-xl text-white hover:bg-white hover:text-black rounded overflow-hidden">
  <a href="ajouter_produits.html" class="nav-link flex items-center gap-2 w-full px-4 py-2">
  <img src="images/list.png" alt="image"> 
    
    Liste des hotels
  </a>
</li>
  </ul>
   <div class="mt-[240%] flex items-center gap-3 justify-center">
  <div class="relative ">
        <div class="flex items-center gap-3">
         <i class="fa-solid fa-circle-user text-4xl text-white"></i>
        <img src="images/moctar.jpg" alt="photo" 
       class="absolute inset-0 w-10 h-10 rounded-full object-cover">
      <div>
        <p class="text-sm font-semibold text-white">Moctar Niang</p>
        <div class="flex items-center gap-1">
          <span class="w-2 h-2 bg-green-400 rounded-full"></span>
          <p class="text-xs text-green-400">en ligne</p>
        </div>
      </div>
    </div>
   </div>`    

  document.getElementById("sidbare").innerHTML = bare

  let links = document.querySelectorAll(".nav-link")
  let lien = window.location.pathname.toLocaleLowerCase()

  links.forEach(link => {
    let href = link.getAttribute("href").toLocaleLowerCase()
    if (lien.includes(href)) {
      link.parentElement.classList.add('bg-white', 'text-black')
    }
  })
}
//    function enligne() {
//   document.getElementById("enligne").innerHTML = `
//     <div class="flex items-center gap-3">
//       <div class="relative">
//         <img src="avatar.jpg" alt="photo" class="w-10 h-10 rounded-full object-cover">
//         <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#4c5053]"></span>
//       </div>
//       <div class="text-white">
//         <p class="text-sm font-semibold">Moctar Niang</p>
//         <p class="text-xs text-green-400">● en ligne</p>
//       </div>
//       <div>salut</div>

//     </div>
//   `
// }
 
// enligne()

sidbare();
function fermer2(){
    document.getElementById("sidbare").classList.add("hidden")
 }
 

