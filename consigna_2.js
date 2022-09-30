//ARMAR EL ALGORITMO PARA UN CAJERO DE BANCO ESTE POSEE BILLETES DE: 50, 20, 10, 5 Y 1
//ACEPTAR UN MONTO DE ENTRADA, QUE REPRESENTA EL MONTO A RETIRAR 
//CALCULAR Y MOSTRAR CUANTOS BILLETES DE CADA MONTO ENTREGA EN TOTAL

let billete_50 = 50;
let billete_20 = 20;
let billete_10 = 10;
let billete_5 = 5;
let billete_1 = 1;

function desglosar(plata){
    let B50= Math.round(plata/50);
    let resto50=plata%billete_50;

    let B20 = Math.round(resto50/20);
    let resto20 = resto50%billete_20;

    let B10 = Math.round(resto20/10);
    let resto10 = resto20%billete_10;

    let B5 = Math.round(resto10/5);
    let resto5 = resto10%billete_5;

    let B1 = Math.round(resto5/1);


    console.log("Cantidad de dinero: "+ plata);
    console.log("Billetes de $50: "+ B50);
    console.log("Billetes de $20: "+ B20);
    console.log("Billetes de $10: "+ B10);
    console.log("Billetes de $5: "+ B5);
    console.log("Billetes de $1: "+ B1);
    console.log("*******************************************************************************")
}
desglosar(221);
desglosar(200);
desglosar(50);