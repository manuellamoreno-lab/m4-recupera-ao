function ex2_multiploDe3() {
    console.log("\n--- Exercício 2: Múltiplo de 3 ---");
    let numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero)) {
        console.log("Valor inválido.");
    } else if (numero % 3 === 0) {
        console.log(`${numero} é múltiplo de 3.`);
    } else {
        console.log(`${numero} não é múltiplo de 3.`);
    }
}
