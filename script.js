//Ingresando los datos del colaborador




alert("Binvenido al BSC del Centro de Distribuicion")



let ID = prompt("Ingrese su usuario");


function pedirContrasena(){
    let contrasena= prompt("Ingrese Contraseña");
    while(contrasena!= "ali123"){
        alert("clave incorrecta");
        break;
    }
}

pedirContrasena();

let nombre = prompt("Ingrese nombre de colaborador");
alert("Usted evaluara a  : "+ nombre);


// Ingresar los resultados del mes

let tardanza= prompt("Ingrese numero de tardanzas en el mes");
let falta=prompt("Ingrese numeros de faltas del mes");
let picking=prompt("Ingrese productividad de picking");
let despacho = prompt("Ingrese productivdad de despacho");

//declarando min y max por puntaje

let minTardanza= 4 ; let maxTarzanda= 0; pesosTardanza=20;
let minFalta=2; let maxFalta=0; pesofalta=20;
let minpicking=22; let maxpicking=30; pesospick=30;
let mindespacho=45; let maxdespacho=60; pesosdesp=30;



// Calculando porcejate de cumplimiento por item
// tardanza tiene un 20% de cumplimineto teniendo como minimo 3 tardanzas y maximo 0 
// falta tiene un 20% de cumplimineto teniendo como minimo 3 tardanzas y maximo 0 
// productividad de picking tiene un 30% de cumplimineto teniendo como minimo 22 pedidos/hora y maximo 30 pedidos/hora
// productividad de despacho tiene un 30% de cumplimineto teniendo como minimo 45 pedidos/hora y maximo 60 pedidos/hora




// haciendo la funcion del calculo inversamente proporcional (faltas + tardanzas)

function calculoInverso(min,max,pesos,numero) {

    let puntaje;

    if (numero>=min){
        puntaje=0;
    } 
    else if (numero <=max) {
        puntaje=pesos;
    }
    else if (numero>max && numero<min) {
        puntaje= (numero-min)*(100/(max-min))/100*pesos;
    }
    return puntaje
}

let puntajeTardanza= calculoInverso(minTardanza,maxTarzanda,pesosTardanza,tardanza);
let puntajeFalta= calculoInverso(minFalta,maxFalta,pesofalta,falta);



console.log(puntajeTardanza);
console.log(puntajeFalta);

// funcion calculo directo (productividad de picking y despacho)

function calculoDirecto(min,max,pesos,numero) {

    let puntaje;

    if (numero>=max){
        puntaje=pesos;
    } 
    else if (numero<=min) {
        puntaje=0;
    }
    // else if (numero>min && numero>max) {
    else{
        puntaje= ((pesos)/(max-min))*(numero-min);
    }
       
    
    return puntaje
}

let puntajePicking= calculoDirecto(minpicking,maxpicking,pesospick,picking);
let puntajeDespacho= calculoDirecto(mindespacho,maxdespacho,pesosdesp,despacho);



console.log(puntajePicking);
console.log(puntajeDespacho);

// Resultado


resultadoFinal= puntajeDespacho+puntajePicking+puntajeTardanza+puntajeFalta;

function recomendacion(resultado){
    let comentario
    if (resultado>90){

        comentario= "Sobresaliente, Recibe bono de S/100";
    }

    else if (resultado>80 && resultado <=90){
        comentario="Regular, Recibe bonificacion de S/50 ";
    }

    else if (resultado>60 && resultado<=80){
        comentario="En progreso, Evaluar renovacion de contrato";
    }

    else {
        comentario="No renovar contrato";
    }

    return comentario
}

let comnetariofinal = recomendacion(resultadoFinal)

alert("Su puntaje es " + resultadoFinal +" ,como comentario final, el colaborador es   " + comnetariofinal);






