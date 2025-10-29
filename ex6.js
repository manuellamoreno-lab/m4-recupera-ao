function ex6_menuSwitchSimples() {
    console.log("\n--- Exercício 6: Menu Simples (Switch) ---");
    let opcao = prompt("Escolha uma opção: 'Início', 'Ajuda', 'Sair'");
    
    // Trata o caso do usuário cancelar o prompt (que retorna null)
    if (opcao === null) {
        opcao = "";
    }

    switch (opcao.toLowerCase()) {
        case "início":
            console.log("Você selecionou 'Início'. Bem-vindo!");
            break;
        case "ajuda":
            console.log("Você selecionou 'Ajuda'. Como podemos ajudar?");
            break;
        case "sair":
            console.log("Você selecionou 'Sair'. Até logo!");
            break;
        default:
            console.log("Opção inválida. Tente 'Início', 'Ajuda' ou 'Sair'.");
            break;
    }
}
