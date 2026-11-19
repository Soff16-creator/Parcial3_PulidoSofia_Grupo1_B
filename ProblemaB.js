/* 
Sofia Pulido Riveros
Grupo 1
Problema B: Simulador de compra en cuotas con tarjeta de crédito
*/


const cuotasPermitidas = 0
const cuotas1 = 0
const cuotas2 = 1.9
const cuotas3 = 2.1


let valorCompra = 0
let cupo = 0
let cuotas = 0
let numeroCuotas = 1
let numeroCuotas2 = 0
let numeroCuotas3 = 0





ingresarDatos = prompt("ingrese el valor de la compra, el numero de cuotas y el cupo de su tarjeta")


if (valorCompra > 0 && cupo > 0 && cuotas <=36) {
}

else {
  alert("No se puede procesar la compra. Verifique que los datos ingresados sean correctos.");
}





if (valorCompra > cupo) {
  alert("El valor de la compra supera el cupo disponible, no puede continuar.");
}
else {
    alert("Puede continuar")
 }






