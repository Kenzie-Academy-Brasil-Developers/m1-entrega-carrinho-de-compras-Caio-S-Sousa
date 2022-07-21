let body = document.querySelector("body")

let main    = document.createElement("main")
let ul      = document.createElement("ul")
let h1      = document.createElement("h1")
let h3      = document.createElement("h3")

body.appendChild(main)
main.appendChild(ul)

let secaoVitrine = document.querySelector(".lista")

let carrinhoCompras = []
console.log(carrinhoCompras)

ul.appendChild(h1)

function listarProdutos(listaProdutos, vitrine){

    if (vitrine) {vitrine.innerHTML = ""}
    
    for(let i = 0; i<listaProdutos.length; i++){
        carrinhoCompras.push(listaProdutos[i])
        
        let data = listaProdutos[i]

        let cardProduto    = criarCardProduto(data)
        
        h3.innerText = "Itens"

        calcularTotal(carrinhoCompras)
        vitrine.appendChild(cardProduto)

    }
   
}

listarProdutos(productsCart, ul)

function criarCardProduto(produto){

    let nome            = produto.name
    let preco           = produto.price
  
    let tagLi           = document.createElement("li")
    let tagNome         = document.createElement("h2")
    let tagPreco        = document.createElement("p")

    tagNome.classList.add("nome")
    tagNome.innerText    = nome
    tagPreco.classList.add("preco")
    tagPreco.innerText   = `R$ ${preco}`
  
    tagLi.append(tagNome,tagPreco)

    return tagLi
}

ul.appendChild(h3)

function calcularTotal(carrinhoCompras){

    let total  = 0
    for(let i=0; i<carrinhoCompras.length; i++){

        total += carrinhoCompras[i].price
   }

    h3.innerText = `Total ${total}`

}
