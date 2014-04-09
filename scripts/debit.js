function calculdebit()
{
var volume=parseFloat(document.getElementById("tab2").elements["volume"].value);
var largeur=parseFloat(document.getElementById("tab2").elements["largeur"].value);
var rangs=parseFloat(document.getElementById("tab2").elements["rangs"].value);
var vitesse=parseFloat(document.getElementById("tab2").elements["vitesse"].value);
var coef=600;
if (!isNaN (volume)&& !isNaN(largeur)&& !isNaN(rangs)&& !isNaN(vitesse))
{
var debit= document.getElementById("tab2").elements["volume"].value * document.getElementById("tab2").elements["largeur"].value * document.getElementById("tab2").elements["rangs"].value * document.getElementById("tab2").elements["vitesse"].value / coef;
document.getElementById("tab2").elements["debit"].value=debit;
}
}
