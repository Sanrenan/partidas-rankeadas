//Calculadora de partidas rankeadas

function calcularPontos(vitorias, derrotas){
    let soma = vitorias -  derrotas
    return soma
}

let saldoVitorias = calcularPontos(411, 11)
let level

switch(true) {
    case saldoVitorias <= 10:
        level = "Ferro";
        break;
    case saldoVitorias >= 11 && saldoVitorias <= 20:
        level = "Bronze";
        break;
    case saldoVitorias >= 21 && saldoVitorias <= 50:
        level = "Prata";
        break;
    case saldoVitorias >= 51 && saldoVitorias <= 80:
        level = "Ouro";
        break;
    case saldoVitorias >= 81 && saldoVitorias <= 90:
        level = "Diamante";
        break;
    case saldoVitorias >= 91 && saldoVitorias <= 100:
        level = "Lendário";
        break;
    case saldoVitorias >= 101:
        level = "Imortal";
        break;
    default:
        level = "Nível não catalogado!";
}

console.log(`O Herói tem de saldo de ${saldoVitorias} vitórias e está no nível de ${level}`)



