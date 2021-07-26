function cadastraProduto(){
    const nome = document.querySelector("#nome").value;
    const descricao = document.querySelector("#descricao").value;
    const codigo = document.querySelector("#codigo").value;
    const preco = document.querySelector("#preco").value;
    
    let lastID = 0;

    if(localStorage.getItem('lastID') == null) {
        localStorage.setItem('lastID', 1);
    } else {
        lastID = parseInt(localStorage.getItem('lastID'));
        localStorage.setItem('lastID', lastID + 1)
    }

    lastID = localStorage.getItem('lastID');

    let listaProdutos = JSON.parse(localStorage.getItem('produtos')) || [];

    produto = {
        id: lastID,
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
