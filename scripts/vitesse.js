function calculvitesse()
{
var distance=parseFloat(document.getElementById("tab1").elements["distance"].value);
var temps=parseFloat(document.getElementById("tab1").elements["temps"].value);
var coef=3.6;
if (!isNaN (distance)&& !isNaN(temps))
{
var vitesse= document.getElementById("tab1").elements["distance"].value * coef / document.getElementById("tab1").elements["temps"].value;
document.getElementById("tab1").elements["vitesse"].value=vitesse;
}
}
