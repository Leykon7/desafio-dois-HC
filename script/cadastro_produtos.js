function cadastraProduto(){
    const nome = document.querySelector("#nome");
    const descricao = document.querySelector("descricao");
    const codigo = document.querySelector("#codigo");
    const preco = document.querySelector("#preco");
    
    produto = [
        nome,
        descricao,
        codigo,
        preco
    ]

    localStorage.setItem("Produto", produto.value);

    alert("PRODUTO CADASTRADO!")

    window.location.href="index.html"
}