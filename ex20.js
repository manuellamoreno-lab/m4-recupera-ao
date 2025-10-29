function ex20_menuLoopWhile() {
    console.log("\n--- Exercício 20: Menu em Loop (While/Switch) ---");
    
    let continuar = true;

    // O loop 'while' continua executando enquanto 'continuar' for true
    while (continuar) {
        console.log("\n*** Menu Interativo (Ex 20) ***");
        console.log("1: Ver Mensagem");
        console.log("2: Ver Hora (Simulação)");
        console.log("3: Sair");
        
        let escolha = prompt("Digite sua escolha (1, 2 ou 3):");

        switch (escolha) {
            case "1":
                console.log(">> Opção 1: Olá! Este é o menu em loop.");
                break;
            case "2":
                // Simples simulação, pois o NetAcad pode não ter Date() formatado
                console.log(">> Opção 2: Simulando a hora: 10:30 AM");
                break;
            case "3":
            case "Sair": // Adicionando flexibilidade para o texto "Sair"
            case "sair":
                console.log(">> Você escolheu 'Sair'. Encerrando o menu...");
                continuar = false; // Define a flag para 'false' para sair do loop 'while'
                break;
            
            case null: // Usuário clicou em 'Cancelar' no prompt
                console.log(">> Menu cancelado. Saindo...");
                continuar = false;
                break;

            default:
                console.log(">> Opção inválida! Por favor, tente 1, 2 ou 3.");
                break;
        }
    }
    
    console.log("Você saiu do menu do Exercício 20.");
}
