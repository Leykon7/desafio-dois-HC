function cadastraCliente(){
    const nomeCliente = document.querySelector("#nome-cliente");
    const sobrenome = document.querySelector("#sobrenome");
    const data = document.querySelector("#data");
    const email = document.querySelector("#emailCliente");
    const rua = document.querySelector("#rua");
    const numero = document.querySelector("#numero");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");
    const cep = document.querySelector("#cep");
    
    endereco = [
        rua,
        numero,
        bairro,
        cidade,
        estado,
        cep
    ];

    cliente = [
        nomeCliente,
        sobrenome,
        data,
        email,
        endereco
    ];

    localStorage.setItem("Cliente", cliente.value);

    alert("CLIENTE CADASTRADO!")

    window.location.href="index.html"
}