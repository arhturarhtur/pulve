function calculpression()
{
var pression1=parseFloat(document.getElementById("tab4").elements["pression1"].value);
var debit1=parseFloat(document.getElementById("tab4").elements["debit1"].value);
var debit2=parseFloat(document.getElementById("tab4").elements["debit2"].value);
if (!isNaN (pression1)&& !isNaN(debit1)&& !isNaN(debit2))
{
var pression2= (document.getElementById("tab4").elements["pression1"].value * (document.getElementById("tab4").elements["debit2"].value * document.getElementById("tab4").elements["debit2"].value)) / (document.getElementById("tab4").elements["debit1"].value * document.getElementById("tab4").elements["debit1"].value);
document.getElementById("tab4").elements["pression2"].value=pression2.toFixed(1);
}
}
