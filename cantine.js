// Données de la commande
let client = "Awa";
let codePlat = 3;
let quantitetext = "4";
let quantite = Number(quantitetext);
let montantVersé = 4000;
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
    nomPlat = "Alloco-oeuf";
    prixUnitaire = 1000;
}else{
    console.log("Code plat invalide");
}
//Fonction pour calculer le montant total de la commande
function calculerMontantTotal(prixUnitaire, quantite) {
    return quantite * prixUnitaire;
}
// appel de la fonction
let totalpayer = calculerMontantTotal(prixUnitaire, quantite);
// Affichage du récapitulatif
console.log(`Client : ${client}`);
console.log(`Plat commandé : ${nomPlat} (${prixUnitaire} fcfa)`);
console.log(`Quantité : ${quantite}`);
console.log(`Montant total : ${totalpayer}`);
console.log(`---détail par portion---`);
// Boucle For pour afficher une ligne de portion commandée
for (let i=1; i<=quantite; i++) {
    console.log(`Portion ${i} : ${nomPlat}-${prixUnitaire} fcfa`); 
}
console.log(`Total à payer : ${totalpayer} fcfa`);
console.log(`montant versé : ${montantVersé} fcfa`);
//monnaie ou montant manquant
if (montantVersé >= totalpayer) {
    let monnaie = montantVersé - totalpayer;
    console.log(`Monnaie à rendre : ${monnaie} FCFA`);
} else {
    let montantManquant = totalpayer - montantVersé;
    console.log(`Montant manquant : ${montantManquant} FCFA`);
}