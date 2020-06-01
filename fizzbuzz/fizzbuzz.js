
// O que eu falhei:
// 1. retornei direto o valor do número passado;
// 2. retornei um array com o valor (só que era um array do número passado na linha apenas);
// 3. era necessário imprimir toda a listagem de fizz buzz até o número desejado, e eu achei que já fazia isso na função main.
// 4. FALHA MINHA;
// 5. fiquei aflito com o tempo de 20 min.


//Você deve alterar o conteudo desta funcao para processar as entradas de acordo.
function processarLinha(linha) {
    const result = [];

    for (let i=0; i <= linha; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            result.push("FizzBuzz");
        } else if (i % 5 == 0){
            result.push("Buzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else {
            result.push(i);
        }
    }

    return result.join("\n");

}

//Esta função geralmente não é alterada, mas você pode alterar sem problemas, se achar necessário.
function main(entradas) {
    const linhas = entradas.trim().split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.

    for (let i = 0; i < linhas.length; i++) {
        let linha_entrada;
        try {
            linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
        } catch {
            linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
        }
        if (!linha_entrada || linha_entrada !== "") {
            const resultado_processado = processarLinha(linha_entrada);
            if (resultado_processado) {
                console.log(resultado_processado);
            }
        }
    }
}

// const abc = "1\n2\n3\n4\n5\n6";
const abc = "225";

main(abc);