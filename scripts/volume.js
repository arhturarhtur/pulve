function calculvolume()
{
var debit=parseFloat(document.getElementById("tab3").elements["debit"].value);
var largeur=parseFloat(document.getElementById("tab3").elements["largeur"].value);
var rangs=parseFloat(document.getElementById("tab3").elements["rangs"].value);
var vitesse=parseFloat(document.getElementById("tab3").elements["vitesse"].value);
var coef=600;
if (!isNaN (debit)&& !isNaN(largeur)&& !isNaN(rangs)&& !isNaN(vitesse))
{
var volume= (document.getElementById("tab3").elements["debit"].value * coef) / (document.getElementById("tab3").elements["largeur"].value * document.getElementById("tab3").elements["rangs"].value * document.getElementById("tab3").elements["vitesse"].value);
document.getElementById("tab3").elements["volume"].value=volume;
}
}
