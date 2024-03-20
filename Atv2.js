// Definição da classe Carro
class Carro {
    constructor() {
        this.velocidade = 0; // Inicializa a velocidade como 0
        this.marcha = 0; // Inicializa a marcha como 0
        this.combustivel = 0; // Inicializa o combustível como 0
    }

    // Método para abastecer o carro
    abastecer(quantidade) {
        this.combustivel += quantidade;
        console.log("Carro abastecido. Combustível atual: " + this.combustivel);
    }

    // Método para acelerar o carro
    acelerar() {
        if (this.combustivel > 0) {
            this.velocidade += 10;
            this.combustivel -= 1;
            console.log("Carro acelerando. Velocidade atual: " + this.velocidade);
        } else {
            console.log("Carro sem combustível. Abasteça primeiro.");
        }
    }

    // Método para frear o carro
    frear() {
        if (this.velocidade > 0) {
            this.velocidade -= 10;
            console.log("Carro freando. Velocidade atual: " + this.velocidade);
        } else {
            console.log("O carro já está parado.");
        }
    }

    // Método para trocar de marcha
    trocarMarcha(marcha) {
        this.marcha = marcha;
        console.log("Marcha trocada para " + this.marcha);
    }
}

// Exemplo de uso da classe Carro
var carro = new Carro(); // Cria um novo carro

carro.abastecer(20); // Abastece o carro com 20 litros de combustível
carro.acelerar(); // Acelera o carro
carro.trocarMarcha(1); // Troca de marcha para a marcha 1
carro.acelerar(); // Acelera o carro novamente
carro.frear(); // Freia o carro
