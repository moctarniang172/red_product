
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

listedasboard()