function ex18_tiposPropriedadesObjeto() {
    console.log("\n--- Exercício 18: Análise de Objeto (For...In) ---");
    const veiculo = {
        marca: "Ford",
        ano: 2022,
        eletrico: true,
        donos: ["Ana", "Bruno"],
        motor: {
            potencia: 200
        }
    };
    
    let contador = 0;
    console.log("Análise das Propriedades:");

    for (const chave in veiculo) {
        // Usamos typeof para obter o tipo do valor
        console.log(`- Chave: '${chave}', Tipo do Valor: ${typeof veiculo[chave]}`);
        contador++;
    }
    
    console.log(`\nTotal de propriedades no objeto: ${contador}`);
}
