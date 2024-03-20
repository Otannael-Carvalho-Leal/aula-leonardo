// Função para calcular a potência
function calcularPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

// Função para calcular a área de um quadrado
function calcularAreaQuadrado(lado) {
    return lado * lado;
}

// Função para calcular a área de um triângulo retângulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Função para verificar se um número é par
function verificarPar(numero) {
    if (numero % 2 === 0) {
        return true; // é par
    } else {
        return false; // não é par
    }
}

// Exemplo de uso das funções
var base = 2;
var expoente = 3;
var resultadoPotencia = calcularPotencia(base, expoente);
console.log("O resultado da potência é: " + resultadoPotencia);

var ladoQuadrado = 4;
var resultadoAreaQuadrado = calcularAreaQuadrado(ladoQuadrado);
console.log("A área do quadrado é: " + resultadoAreaQuadrado);

var baseTriangulo = 3;
var alturaTriangulo = 4;
var resultadoAreaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
console.log("A área do triângulo é: " + resultadoAreaTriangulo);

console.log("Números pares:");

for (var i = 1; i <= 10; i++) {
    if (verificarPar(i)) {
        console.log(i + " é par");
    }
}

