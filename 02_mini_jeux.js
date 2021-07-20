/**L'ordianteur va choisir un nombre au hazard entre 1 et 10.
 * 3 essais pour trouver le nombre mystère.
 * Si tu trouves la bonne réponse alors afficher "Félicitations" + numéro mystère.
 * Sinon afficher "pas de chance " = numéro non trouvé et réitérer la demande */



let chiffreATrouver = getRandomInt(10);
console.log(chiffreATrouver);

let nombre = [
    3, 6, 9
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }

for(let i = 0; i<nombre.length; i++) {
    console.log(nombre[i]);
    if (chiffreATrouver === nombre[i]) {     
        console.log(`Félicitations ! Tu l'as trouvé en ${i+1} de fois`);
        break;
    }
    else {
        console.log("Recommencer");
    }
}
console.log(`Le nombre était ${chiffreATrouver}.`)