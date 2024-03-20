// Definição da classe ContasDomesticas
class ContasDomesticas {
    constructor() {
        this.luz = 0; // Inicializa a conta de luz como 0
        this.gas = 0; // Inicializa a conta de gás como 0
        this.agua = 0; // Inicializa a conta de água como 0
    }

    // Método para adicionar valor à conta de luz
    adicionarLuz(valor) {
        this.luz += valor;
        console.log("Conta de luz atualizada. Total: R$" + this.luz.toFixed(2));
    }

    // Método para adicionar valor à conta de gás
    adicionarGas(valor) {
        this.gas += valor;
        console.log("Conta de gás atualizada. Total: R$" + this.gas.toFixed(2));
    }

    // Método para adicionar valor à conta de água
    adicionarAgua(valor) {
        this.agua += valor;
        console.log("Conta de água atualizada. Total: R$" + this.agua.toFixed(2));
    }

    // Método para calcular o total das contas
    calcularTotal() {
        var total = this.luz + this.gas + this.agua;
        console.log("Total das contas: R$" + total.toFixed(2));
    }
}

// Exemplo de uso da classe ContasDomesticas
var contas = new ContasDomesticas(); // Cria um novo objeto contas

contas.adicionarLuz(100); // Adiciona R$ 100 à conta de luz
contas.adicionarGas(50); // Adiciona R$ 50 à conta de gás
contas.adicionarAgua(80); // Adiciona R$ 80 à conta de água
contas.calcularTotal(); // Calcula o total das contas
