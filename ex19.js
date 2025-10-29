function ex19_verificarIsograma() {
    console.log("\n--- Exercício 19: Verificar Isograma ---");
    let palavra = prompt("Digite uma palavra para verificar se é um isograma:");
    
    if (palavra === null || palavra.length === 0) {
        console.log("Nenhuma palavra digitada.");
        return; // Sai da função
    }

    // Normaliza a palavra: minúsculas e remove espaços/hífens/acentos (simplificado)
    let palavraNormalizada = palavra.toLowerCase().replace(/[^a-z]/g, '');
    
    if (palavraNormalizada.length === 0) {
        console.log("Entrada não contém letras válidas.");
        return;
    }

    let contagemLetras = {}; // Objeto para armazenar as letras já vistas
    let isIsograma = true;

    // Itera sobre a string usando for...of
    for (const letra of palavraNormalizada) {
        if (contagemLetras[letra]) {
            // Se a letra já existe no objeto (contagemLetras[letra] é true/1)
            isIsograma = false;
            break; // Para a verificação, já sabemos que não é isograma
        }
        // Se não existe, adiciona ao objeto
        contagemLetras[letra] = 1;
    }

    if (isIsograma) {
        console.log(`'${palavra}' é um isograma (não há letras repetidas).`);
    } else {
        console.log(`'${palavra}' NÃO é um isograma (contém letras repetidas).`);
    }
}
