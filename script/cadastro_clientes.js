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

    let lastID = 0;

    if(localStorage.getItem('lastID') == null) {
        localStorage.setItem('lastID', 1);
    } else {
        lastID = parseInt(localStorage.getItem('lastID'));
        localStorage.setItem('lastID', lastID + 1)
    }

    lastID = localStorage.getItem('lastID');

    let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];    
    
    const usuario = {
        id: lastID,
        nomeCliente,
        sobrenome,
        data,
        email,
        
        endereco: {
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado
        }
    }

    let novaListaUsuarios = [...listaUsuarios, usuario]
    localStorage.setItem('usuarios', JSON.stringify(novaListaUsuarios));

    alert("CLIENTE CADASTRADO!")

    window.location.href="index.html";
}
