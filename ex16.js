function ex16_classificarFaixaEtaria() {
    console.log("\n--- Exercício 16: Classificar Faixa Etária ---");
    let idade = parseInt(prompt("Digite a idade:"));

    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida.");
    } else if (idade <= 12) {
        console.log("Classificação: Criança");
    } else if (idade <= 17) {
        console.log("Classificação: Adolescente");
    } else if (idade <= 59) {
        console.log("Classificação: Adulto");
    } else {
        // 60 ou mais
        console.log("Classificação: Idoso");
    }
}
