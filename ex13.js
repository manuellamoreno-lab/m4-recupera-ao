function ex13_objetoComForIn() {
    console.log("\n--- Exercício 13: Objeto com For...In ---");
    const pessoa = {
        nome: "João",
        idade: 30,
        cidade: "São Paulo"
    };

    console.log("Dados da Pessoa:");
    for (const chave in pessoa) {
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}
