function ex4_sinalNumero() {
    console.log("\n--- Exercício 4: Positivo, Negativo ou Zero ---");
    let numero = parseFloat(prompt("Digite um número:"));

    if (isNaN(numero)) {
        console.log("Valor inválido.");
    } else if (numero > 0) {
        console.log("O número é Positivo.");
    } else if (numero < 0) {
        console.log("O número é Negativo.");
    } else {
        console.log("O número é Zero.");
    }
}
