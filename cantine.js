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
function calculerMontantTotal() {
    return quantite * prixUnitaire;
}