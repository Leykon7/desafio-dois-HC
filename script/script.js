function carregaListas() {
    carregaUsuarios();
    carregaProdutos();
}

function carregaUsuarios() {
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios'));

    if(usuariosCadastrados == null || usuariosCadastrados.length == 0) {
        
        const sectionClien = document.querySelector('#clien');
        let p = document.createElement('p');
        let textoDoP = document.createTextNode('Nenhum cliente cadastrado ainda.');
        p.appendChild(textoDoP);
        sectionClien.appendChild(p);

        return;
    }
    
    const olSectionClien = document.querySelector('#clien ol');
    let li;
    let texto;

    for(let i = 0; i < usuariosCadastrados.length; i++) {
        let temp;
        li = document.createElement('li');

        if(usuariosCadastrados[i].nomeCliente.length > 37) {
            temp = usuariosCadastrados[i].nomeCliente.substring(0, 37);
            temp += ' ...';
        } else {
            temp = usuariosCadastrados[i].nomeCliente;
        }

        texto = document.createTextNode(temp);

        li.appendChild(texto);
        olSectionClien.appendChild(li);
    }
}

function carregaProdutos() {
    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos'));

    if(produtosCadastrados == null || produtosCadastrados.length == 0) {
        
        const sectionProd = document.querySelector('#prod');
        let p = document.createElement('p');
        let textoDoP = document.createTextNode('Nenhum produto cadastrado ainda.');
        p.appendChild(textoDoP);
        sectionProd.appendChild(p);

        return;
    }
    
    const olSectionProd = document.querySelector('#prod ol');
    let li;
    let texto;

    for(let i = 0; i < produtosCadastrados.length; i++) {
        let temp;
        li = document.createElement('li');

        if(produtosCadastrados[i].nome.length > 37) {
            temp = produtosCadastrados[i].nome.substring(0, 37);
            temp += ' ...';
        } else {
            temp = produtosCadastrados[i].nome;
        }

        texto = document.createTextNode(temp);

        li.appendChild(texto);
        olSectionProd.appendChild(li);
    }
}
