const taxas = {
1:0.08,2:0.10,3:0.11,4:0.12,5:0.12,6:0.12,7:0.12,
8:0.13,9:0.13,10:0.14,11:0.15,12:0.17,
13:0.175,14:0.18,15:0.185,16:0.19,17:0.195,18:0.20
};

const parcelas = document.getElementById("parcelas");
for(let i=1;i<=18;i++){
parcelas.innerHTML += `<option value="${i}">${i}x</option>`;
}

let valor, total, parcela, n;

function simular(){
valor = parseFloat(document.getElementById("valor").value);
n = parseInt(parcelas.value);
total = valor * (1 + taxas[n]);
parcela = total / n;

document.getElementById("resultado").innerHTML =
`Parcela: R$ ${parcela.toFixed(2)}<br>Total: R$ ${total.toFixed(2)}`;
}

function enviarWhats(){
const msg = `Olá! Fiz uma simulação de troca de limite por dinheiro na hora.
Valor: R$ ${valor}
Parcelas: ${n}x
Parcela: R$ ${parcela.toFixed(2)}
Total: R$ ${total.toFixed(2)}`;

window.open(`https://wa.me/5579998758219?text=${encodeURIComponent(msg)}`);
}
