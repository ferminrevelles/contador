//console.log("funciona");

document.getElementById("count").addEventListener('click',contar);
document.getElementById("count").innerHTML = 0;
var cont=0;
var proceso;
function contar() {
  console.log("contador");
  cont++;
  document.getElementById("count").innerHTML = cont;
  /*proceso = setInterval(function() {
    cont++;
    console.log("El valor es: "+cont);
  
  }, 3000);*/
} 

document.getElementById("stop").addEventListener('click',parar);

function parar() {
  console.log("Parar proceso");
  clearInterval(proceso);
  document.getElementById("time").removeEventListener('click',contar);
 }