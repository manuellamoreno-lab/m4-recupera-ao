function ex1_maiorDeIdade() {
    console.log("\n--- Exercício 1: Maior de Idade ---");
    let idade = parseInt(prompt("Digite sua idade:"));

    if (isNaN(idade)) {
        console.log("Valor inválido.");
    } else if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
