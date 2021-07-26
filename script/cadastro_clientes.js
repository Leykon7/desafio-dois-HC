function cadastraCliente(){
    const nomeCliente = document.querySelector("#nome-cliente").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const data = document.querySelector("#data").value;
    const email = document.querySelector("#emailCliente").value;
    const rua = document.querySelector("#rua").value;
    const numero = document.querySelector("#numero").value;
    const bairro = document.querySelector("#bairro").value;
    const cidade = document.querySelector("#cidade").value;
    const estado = document.querySelector("#estado").value;
    const cep = document.querySelector("#cep").value;

    let ultimoIdGerado = 0;

    if(localStorage.getItem('ultimoIdGerado') == null) {
        localStorage.setItem('ultimoIdGerado', 1);
    } else {
        ultimoIdGerado = parseInt(localStorage.getItem('ultimoIdGerado'));
        localStorage.setItem('ultimoIdGerado', ultimoIdGerado + 1)
    }

    ultimoIdGerado = localStorage.getItem('ultimoIdGerado');

    let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];    
    
    const usuario = {
        id: ultimoIdGerado,
        nomeCliente,
        sobrenome,
        data,
        email,
        
        endereco: {
            cep,
            rua,
            bairro,
            numero,
            cidade,
            estado
        }
    }

    let novaListaUsuarios = [...listaUsuarios, usuario]
    localStorage.setItem('usuarios', JSON.stringify(novaListaUsuarios));

    alert("CLIENTE CADASTRADO!")

    window.location.href="index.html";
}
