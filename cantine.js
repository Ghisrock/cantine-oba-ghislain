// Données de la commande
let client = "Awa";
let codePlat = 1;
let quantitetext = "3";
let quantite = Number(quantitetext);
let montantVerse = 5000;
let nomPlat = "";
let prixUnitaire = 0;
//Détermination du plat et du prix unitaire) {
if (codePlat === 1) {
    nomPlat = "Attiéké-poisson";
    prixUnitaire = 1500;
} else if (codePlat === 2) {
    nomPlat = "Riz-poulet";
    prixUnitaire = 2000;
} else if (codePlat === 3) {
    nomPlat = "Alloco-oeuff";
    prixUnitaire = 1000;
}else{
    console.log("Code plat invalide");
}
//Fonction pour calculer le montant total de la commande
function calculerMontantTotal(prixUnitaire, quantite) {
    return quantite * prixUnitaire;
}
// appel de la fonction
let total à payer = calculerMontantTotal(prixunitaire,quantité);
// Affichage du récapitulatif
console.log(`Client : ${client}`);
console.log(`Plat commandé : ${nomPlat} (${prixUnitaire} fcfa)`);
console.log(`Quantité : ${quantite}`);
console.log(`Montant total : ${total à payer}`);
console.log(`---détail par portion---`);
// Boucle For pour afficher une ligne de portion commandée
for (let i=1; i<=quantite; i++) {
    console.log(`Portion ${i} : ${nomPlat}-${prixUnitaire} fcfa`); 
}
console.log(`Total à payer : ${total à payer} fcfa`);
//monnaie ou montant manquant
if (montantVerse >= total à payer) {
    let monnaie = montantVerse - total à payer;
    console.log(`Monnaie à rendre : ${monnaie} FCFA`);
} else {
    let montantManquant = total à payer - montantVerse;
    console.log(`Montant manquant : ${montantManquant} FCFA`);
}