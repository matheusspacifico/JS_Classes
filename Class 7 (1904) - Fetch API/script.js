function checar_digitos(cepNumber){
    const cepString = cepNumber.toString();
    if(cepString.length != 8){
        return false;
    }
    return true;
}

function analisar(){
    const cep = document.getElementById("cep").value;
    const cepNumber = parseInt(cep, 10);
    const digitos = checar_digitos(cepNumber);
    const exibicao = document.getElementById("informacoes");

    if(cep === ""){
        const mensagem_erro = document.createElement("p");
        mensagem_erro.textContent = "Digite um CEP antes de enviar!";
        mensagem_erro.classList.add("error-message");
        return exibicao.appendChild(mensagem_erro);
    }
    if(isNaN(cepNumber) || !Number.isInteger(cepNumber)){
        const mensagem_erro = document.createElement("p");
        mensagem_erro.textContent = "O valor inserido não é um número inteiro!";
        mensagem_erro.classList.add("error-message");
        return exibicao.appendChild(mensagem_erro);
    }
    if(!digitos){
        const mensagem_erro = document.createElement("p");
        mensagem_erro.textContent = "Tamanho do CEP incorreto!";
        mensagem_erro.classList.add("error-message");
        return exibicao.appendChild(mensagem_erro);
    }
    
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(resposta => {
            if(!resposta.ok){
                const mensagem_erro = document.createElement("p");
                mensagem_erro.textContent = "Erro no servidor, tente novamente.";
                mensagem_erro.classList.add("error-message");
                exibicao.append(mensagem_erro);
                
                throw new Error("Erro no servidor, tente novamente.");
            }
            return resposta.json();
        })
        .then(data => {
            if(data.erro){
                const mensagem_erro = document.createElement("p");
                mensagem_erro.textContent = "CEP não existente.";
                mensagem_erro.classList.add("error-message");
                exibicao.append(mensagem_erro);

                throw new Error("CEP não existente.");
            }

            const endereco = document.createElement("p");
            const cepInfo = document.createElement("p");
            cepInfo.textContent = `CEP: ${data.cep}`;
            endereco.textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;


            exibicao.appendChild(endereco);
            exibicao.appendChild(cepInfo);
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("informacoes").innerHTML = "";
    analisar();
    document.getElementById("cep").value = "";
})