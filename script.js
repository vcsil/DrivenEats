// Seleção dos elementos
 
let pedido = ['','','']
let valor  = [0,0,0]; 

// Selecionando os itens e deixnado verde
function selecionar(elemento, classe) {
    // Procura quem foi selecionado
    let selecionado = document.querySelector(`.${classe} .box-selecionado`);

    // Verifica se o item já foi modificado, caso contrário modifica pela primeria vez
    if (selecionado !== null) {
        let classeIgual = (classe === selecionado.parentElement.parentElement.classList.item(1))

        // Verifica se são o mesmo elemente e se são da mesma classe
        if ((elemento.querySelector("h3").innerHTML !== selecionado.querySelector("h3").innerHTML) && (classeIgual)) {
            elemento.classList.add("box-selecionado");
            elemento.querySelector(".sinalSelecionado").classList.remove("hidden")

            selecionado.classList.toggle("box-selecionado");
            selecionado.querySelector(".sinalSelecionado").classList.toggle("hidden")
        }
    } else {
        // Modificando pela primeira vez, mostrando que foi selecionado
        elemento.classList.add("box-selecionado");
        elemento.querySelector(".sinalSelecionado").classList.remove("hidden")
    }
}

// Guardando o pedido e o valor
function itensSelecionados(elemento, classe) {
    if (classe === "comida") {
        pedido[0] = elemento.querySelector("h3").innerHTML
        valor[0]  = Number(elemento.querySelector("h4").innerHTML.replace("R$ ", "").replace(",",".")).toFixed(2)
        document.querySelector(".pedido-comida").innerHTML = pedido[0]
        document.querySelector(".valor-comida").innerHTML  = valor[0].replace(".",",")
    } else if (classe === "bebida") {
        pedido[1] = elemento.querySelector("h3").innerHTML
        valor[1]  = Number(elemento.querySelector("h4").innerHTML.replace("R$ ", "").replace(",",".")).toFixed(2)
        document.querySelector(".pedido-bebida").innerHTML = pedido[1]
        document.querySelector(".valor-bebida").innerHTML  = valor[1].replace(".",",")
    } else if (classe === "sobremesa") {
        pedido[2] = elemento.querySelector("h3").innerHTML
        valor[2]  = Number(elemento.querySelector("h4").innerHTML.replace("R$ ", "").replace(",",".")).toFixed(2)
        document.querySelector(".pedido-sobremesa").innerHTML = pedido[2]
        document.querySelector(".valor-sobremesa").innerHTML  = valor[2].replace(".",",")
    }
    // Calculando o valor total
    let valorTotal = 0
    for (let i = 0; i < valor.length; i++) {
        valorTotal += Number(valor[i]);
    }
    document.querySelector(".valorTotal").innerHTML = valorTotal.toFixed(2).replace(".",",")

}

function selecionarClasse(elemento) {
    const classe = elemento.parentElement.parentElement.classList.item(1)
    selecionar(elemento, classe)
    itensSelecionados(elemento, classe)
    formatoBotaoComprar()
}

// Botão de fechar pedido
function formatoBotaoComprar() {
    // Quantos itens já foram selecionados
    const totalSelecionado = document.querySelectorAll(".box-selecionado").length
    const botaoFechaPedido = document.querySelector(".bar-gray")

    if (totalSelecionado === 0) {
        botaoFechaPedido.querySelector("p").innerHTML = "<p>Selecione os 3 itens<br />para fechar o pedido</p>"
    } else if (totalSelecionado === 1) {
        botaoFechaPedido.querySelector("p").innerHTML = "<p>Selecione mais 2 itens<br />para fechar o pedido</p>"
    } else if (totalSelecionado === 2) {
        botaoFechaPedido.querySelector("p").innerHTML = "<p>Selecione mais 1 item<br />para fechar o pedido</p>"
        botaoFechaPedido.classList.remove("fechar-pedido")
    } else if (totalSelecionado === 3) {
        botaoFechaPedido.querySelector("p").innerHTML = "<p>Fechar pedido</p>"
        botaoFechaPedido.classList.add("fechar-pedido")
    }

}

function finalizarPedido() {
    if (document.querySelector(".bar-gray").classList.contains("fechar-pedido")) {
        document.querySelector(".confirma-pedido").classList.remove("hidden")
    }
}

function cancelarPedido() {
    document.querySelector(".confirma-pedido").classList.add("hidden")
}

