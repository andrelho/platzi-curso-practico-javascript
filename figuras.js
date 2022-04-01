// Codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
         return lado * 4;
} 
//console.log("El perimetro del cuadrado es:"  + perimetroCuadrado);

//const areaCuadrado = ladoCuadrado * ladoCuadrado + " cm^2";
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es:"  + areaCuadrado);
console.groupEnd();

// Codigo del Triangulo 

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + " cm"
//     );

    // const alturaTriangulo = 5.5;
    // console.log("La altura del Triangulo es de: " + alturaTriangulo + " cm");


function perimetroTriangulo(lado1, lado2, base){
          return lado1 + lado2 + base;
}  
// console.log("El perimetro del triangulo es " + perimetroTriangulo + " cm ") ;

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Codigo del Circulo

console.group("Circulo");

// Radio
// const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm") ;

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es igual a: "  + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area

function areaCirculo(radio) {
      return (radio * radio) * PI;
}

console.groupEnd();

