function ex15_pararComBreak() {
    console.log("\n--- Exercício 15: Parar com Break ---");
    console.log("Contando até 10, mas parando ao chegar no 7:");
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            console.log("Encontrou o 7. Parando a contagem.");
            break; // Sai do loop imediatamente
        }
        console.log(i); // Só vai imprimir de 1 a 6
    }
}
