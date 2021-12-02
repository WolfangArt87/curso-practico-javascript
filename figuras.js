// Código del cuadrado
console.group("Cuadrado");
const  ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El  perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El  área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1  + "cm, "+ ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroCuadrado + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm2")

console.groupEnd();

// Código del círculo
console.group("Círculos");
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");
const diametroCiruclo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCiruclo + "cm");
const PI = Math.PI;
console.log("PI es: " + PI);
const perimetroCirculo = diametroCiruclo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
const areaCirculo = (radioCirculo ** 2) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();