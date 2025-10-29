function ex17_nomesETamanhos() {
    console.log("\n--- Exercício 17: Nomes e Tamanhos (For...Of) ---");
    const listaDeNomes = ["Alice", "Roberto", "Júlia", "Marcos", "Eva"];
    
    console.log("Análise dos Nomes:");
    for (const nome of listaDeNomes) {
        console.log(`Nome: ${nome}, Tamanho: ${nome.length} letras`);
    }
}
