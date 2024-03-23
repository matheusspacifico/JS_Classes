let dados = [
    {
        "nome": "José da Silva Emanuel",
        "idade": 21,
        "matriculado": true,
        "disciplinas": [
            {
                "nome": "PRW1",
                "professor": "Tiago"
            },
            {
                "nome": "APR2",
                "professor": "Carlao"
            }
        ]
    },
    {
        "nome": "Maria da Silva Gomes",
        "idade": 22,
        "matriculado": true,
        "disciplinas": [
            {
                "nome": "PRW1",
                "professor": "Tiago"
            },
            {
                "nome": "SO",
                "professor": "Luis"
            }
        ]
    }
]

function mediaidades(){
    let soma = 0;
    let media = 0;
    let tamanho = dados.length;
    let idade;

    for(let i = 0; i < tamanho; i++){
        idade = dados[i].idade;
        soma += idade;
    }
    
    media = parseFloat(soma / tamanho);

    return media;
}

let resultado = mediaidades();
console.log(resultado);