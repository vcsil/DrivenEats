// Seleção dos elementos
 
let selecionado = undefined;
let valor = 0

function selecionar(elemento) {
    // Procura quem foi selecionado
    selecionado = document.querySelector(".box-selecionado");

    console.log(selecionado)
    console.log(elemento)
    // Verifica se o item já foi modificado, caso contrário modifica pela primeria vez
    if (selecionado !== null) {
        selecionado.classList.toggle("box-selecionado");
        selecionado.querySelector(".sinalSelecionado").classList.toggle("hidden")

        if (elemento.querySelector("h3").innerHTML !== selecionado.querySelector("h3").innerHTML) {
            elemento.classList.add("box-selecionado");
            elemento.querySelector(".sinalSelecionado").classList.remove("hidden")
        }

    } else {
        // Mostrando que foi selecionado
        elemento.classList.add("box-selecionado");
        elemento.querySelector(".sinalSelecionado").classList.remove("hidden")
    }
}

