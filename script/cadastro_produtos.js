function cadastraProduto(){
    const nome = document.querySelector("#nome").value;
    const descricao = document.querySelector("#descricao").value;
    const codigo = document.querySelector("#codigo").value;
    const preco = document.querySelector("#preco").value;
    
    let ultimoIdGeradoProduto = 0;

    if(localStorage.getItem('ultimoIdGeradoProduto') == null) {
        localStorage.setItem('ultimoIdGeradoProduto', 1);
    } else {
        ultimoIdGeradoProduto = parseInt(localStorage.getItem('ultimoIdGeradoProduto'));
        localStorage.setItem('ultimoIdGeradoProduto', ultimoIdGeradoProduto + 1)
    }

    ultimoIdGeradoProduto = localStorage.getItem('ultimoIdGeradoProduto');

    let listaProdutos = JSON.parse(localStorage.getItem('produtos')) || [];

    produto = {
        id: ultimoIdGeradoProduto,
        nome,
        descricao,
        codigo,
        preco
    }
    
    let novaListaProdutos = [...listaProdutos, produto]

    localStorage.setItem('produtos', JSON.stringify(novaListaProdutos));

    alert("PRODUTO CADASTRADO!")

    console.log(JSON.parse(localStorage.getItem('produtos')))

    window.location.href="index.html"
}
