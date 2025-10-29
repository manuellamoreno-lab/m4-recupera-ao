function ex3_maiorDoisNumeros() {
    console.log("\n--- Exercício 3: Maior entre Dois Números ---");
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Valores inválidos.");
    } else if (num1 > num2) {
        console.log(`O maior número é: ${num1}`);
    } else if (num2 > num1) {
        console.log(`O maior número é: ${num2}`);
    } else {
        console.log("Os números são iguais.");
    }
}
