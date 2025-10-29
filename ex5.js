function ex5_classificarNota() {
    console.log("\n--- Exercício 5: Classificar Nota (Ternário) ---");
    let nota = parseFloat(prompt("Digite a nota (0 a 10):"));

    if (isNaN(nota)) {
        console.log("Nota inválida.");
    } else {
        let status = (nota >= 6) ? "Aprovado" : "Reprovado";
        console.log(`Status: ${status}`);
    }
}
