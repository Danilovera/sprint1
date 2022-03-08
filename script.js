let containerShow = document.getElementById("containerShow").style.display="none"
function calcular(){
    let container1 = document.getElementById("container1").style.display="none"
    let containerShow = document.getElementById("containerShow").style.display="block"
    let cantidadsPcs = document.getElementById("number").value

    let valorComputador = 820.000
    valorComputador = valorComputador * cantidadsPcs
    let descuento = operar(valorComputador)
    let valorTotal = document.getElementById("valorTotal")
    valorTotal.value = valorComputador.toFixed(3)
    let valorDescuento = document.getElementById("valorDescuento")
    valorDescuento.value = descuento
    let total = (valorComputador - descuento)
    total= total.toFixed(3)
    let totalpagar = document.getElementById("totalPagar")
    totalpagar.value = total
    const noDescuento = document.getElementById("noDescuento")
    if(valorComputador > 9840.000){
        noDescuento.innerHTML = `no hay descuento`
    }
    


}

function operar(value){
    let descuento = 0 
    if(value > 1640.000 && value <= 3280.000){
     descuento += value * 0.15
    }else if(value > 3280.000 && value <= 6560.000){
    descuento += value * 0.25
    }else if(value > 6560.000 && value <= 9840.000){
        descuento += value * 0.35
    }return(descuento.toFixed(3))
    

}