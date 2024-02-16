function fibonacci(f){
    if(f == 1){
        console.log(0);
    } else if(f == 0){
        console.log("Nope!");
    } else if(f < 0){
        console.log("Nope!");
    } else{
        let a = 0;
        let b = 1;
        let i;
        let aux;
        for(i = 0; i < f; i++){
            console.log(a);
            aux = a;
            a = b;
            b = aux + b;
        }
    }
}

function main(){
    let quantidade = prompt("Digite a quantidade de números da sequência: ");
    quantidade = parseInt(quantidade)
    fibonacci(quantidade);
}

// run in HTML file