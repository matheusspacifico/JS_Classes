function luva(){
    let luva = ["Receba", "Sucumba", "Sofra", "Decaia"]; // The choice of words are from a brazilian meme called luva de pedreiro, dont worry.
    console.log("---------");
    for(let i = 0; i < luva.length; i++){
        console.log(luva[i]);
    }
    console.log("---------");
    luva.push("Prevaleça"); //adiciona ultimo index
    luva.unshift("Entregue"); //adiciona primeiro index
    for(let j of luva){
        console.log(j);
    }
    console.log("---------");
    for(let k in luva){
        console.log(k);
    }
    console.log("---------");
    luva.pop(); //remove e retorna ultimo index
    luva.shift(); //remove e retorna primeiro index
    console.log("Tamanho de luva: ", luva.length);
    console.log(luva);
    console.log(luva.splice(1,2,"teste")); //começa no index 1 e remove e retorna (em forma de lista) 2 elementos apartir do 1 (tbm remove eles da lista)
    // ainda em cima, se adicionar mais um elemento exemplo "teste", ele da um append nesse elemento no indice que vc iniciou a contagem, nesse caso 1
    console.log(luva);
}

function receba(){
    let luva = ["Receba", "Sucumba", "Sofra", "Decaia"]; // The choice of words are from a brazilian meme called luva de pedreiro, dont worry.
    let randomIndex = Math.floor(Math.random() * luva.length);
    let randomElement = luva[randomIndex];
    alert(randomElement);
}

var v1 = [1, 2, 3, 4];
var v2 = v1;
console.log(v2); // 1, 2, 3, 4
v1.pop();
console.log(v2); // 1, 2, 3

var v3 = v1.slice();
console.log(v3); // 1, 2, 3
v1.pop();
console.log(v3); // 1, 2, 3
console.log(v1); // 1, 2