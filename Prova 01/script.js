//função que calcula o imc
function calcularIMC(nome, alturaCm, peso) {
    //conversão de centímetros  para metros
    let alturaM = alturaCm / 100;
    
    //calculo imc
    let imc = peso / (alturaM * alturaM);
    
    //identifica a classe de peso
    let classePeso;
    if (imc < 16) {
        classePeso = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 17) {
        classePeso = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.5) {
        classePeso = "Baixo peso";
    } else if (imc >= 18.5 && imc < 25) {
        classePeso = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classePeso = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classePeso = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classePeso = "Obesidade grau II";
    } else {
        classePeso = "Obesidade grau III";
    }
    
    //mostrar o resultado
    console.log("Nome: " + nome);
    console.log("IMC: " + imc.toFixed(2));
    console.log("Classe de peso: " + classePeso);
}

//interação com o usuário
let nome = prompt("Digite seu nome: ");
let alturaCm = parseFloat(prompt("Digite sua altura em centímetros: "));
let peso = parseFloat(prompt("Digite seu peso em quilogramas: "));

//chama a função e exibe
calcularIMC(nome, alturaCm, peso);
