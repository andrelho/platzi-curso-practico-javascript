// Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
         return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es:"  + areaCuadrado);
console.groupEnd();

// Codigo del Triangulo 

console.group("Triangulo");



function perimetroTriangulo(lado1, lado2, base){
          return lado1 + lado2 + base;
}  


function areaTriangulo(base,altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Codigo del Circulo

console.group("Circulo");


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




// Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularAlturaTriangulo(lado1, lado2, base){
            if (lado1 != lado2) {
                console.error("Los lados no son iguales")
            }
            else {
                //...
            }



            