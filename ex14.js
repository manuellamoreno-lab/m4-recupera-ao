function ex14_pularComContinue() {
    console.log("\n--- Exercício 14: Pular com Continue ---");
    console.log("Contando de 1 a 5, pulando o 3:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue; // Pula o resto do loop e vai para a próxima iteração
        }
        console.log(i);
    }
}
