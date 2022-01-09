// variaveis
let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []


// funcao para o numero inserido para saber se ele é ou nao um numero
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }   


}

// funcao para verificar se o numero ja esta na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



// funcao que adiciona os dados na lista e analisa os ja adicionados
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '
    }else{
        window.alert('Valor invalido ou ja encontrado na lista sua muda')

    }

    num.value = " "
    num.focus()
}


//funcao do botao finalizar
function finalizar(){

    // if para vereficar dados e mostrar caso esteja todos os dados corretos
    if(valores.length == 0){
        window.alert('Adicione Valores sua mula')
        
    }else{
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        

        // for para saber a soma, maior e menor de todos os valores inseridos pelo usuario
        for(let pos in valores){
            soma += valores[pos]
        if(valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]

        }
        media = soma / tot
        res.innerHTML = ' '
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>` 
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>` 
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>` 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>` 
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 
    }
}
    

