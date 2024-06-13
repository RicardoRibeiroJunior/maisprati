var inteiros = [];
let troca = 0;

for( let i = 0; i < 20; i++){
    inteiros[i] = Math.floor(Math.random() * 99);
    console.log(inteiros[i]);
}

console.log("**********************************")

for(let i = 0; i < 19; i++){
    for(let j = 1; j < 20; j++){
        if(inteiros[i] > inteiros[j]){
            troca = inteiros[i];
            inteiros[i] = inteiros[j];
            inteiros[j] = troca;
        }
    }
}

for(let i = 0; i < 20; i++){
    console.log(inteiros[i]);
}