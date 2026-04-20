const fs = require("fs");
//writefileSync nous permet de creer un ficher et son contenue.
//readefileSync nous permet de lire un le contenu d'un fichier.

fs.writeFileSync("test.txt","mon premier test en node js")
console.log("le fichier test.txt a ete creer avec succes")

//lire le contenu de ce fichier
const filecontent = fs.readFileSync("test.txt","utf-8");
if(filecontent){
    console.log(filecontent)
}
console.log("le fichier n'est pas trouver !")