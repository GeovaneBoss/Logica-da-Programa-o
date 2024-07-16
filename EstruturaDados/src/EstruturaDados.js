//Aprendendo sobre Lista 


  var lista = ["geovane", 24, true]; //Posso inserir numeros, string, buleano etc... dentro de uma unica lista.

lista [1] = 5 //Para alterar/"substituir" um dado do indice

  
console.log(lista[2]) // Para acessar alguma informação especifica da lista

console.log(lista[0] + lista[1]) // Para "juntar" os indices de uma lista. (contatenar = acresentar/juntar, mais indices)

lista.length // = serve para mostrar quantidade de indice/itens na lista

console.log(lista.length);

lista.push("geovane") // Serve para adicionar itens ao final da lista (nova coluna)

console.log(lista.length)

for(var i = 0; i <= 10; i++){
    console.log(i); 
    }

    var i = 0;

    while (i < 10){
        lista[i] = "geovane"
        i++;


    }

    console.log(lista)

    //  while (i < 10){
    //    lista[i] = leia.question("Informe um nome") <- srve para solicitar um dado ao usuario
    //    i++; para incrementar (começa pela frente)
    //    i--; para decrementar (comecar pelo fim da linha)


    for(var j = 0; j < lista.length; j++){  //essa é a "formula" para repetir a lista e a quantidade exata de itens que possue nela 

     if(lista[j].includes("sta")) //.include serve para "separar" o dado especifico infomado dentro de uma lista.


        console.log(lista[j])
    
    var soma = 0 
    console.log(soma =+ j);    // 
    }

   /* for(var valor of lista) === serve para percorrer a lista inteira
    {console.log(valor)}*/ 

    
-------------------------------------------------------------------------------


// Inicializa um vetor para armazenar os números
const numeros = [];

// Lê 10 números inteiros
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}

// Filtra os números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);

// Exibe os números pares
console.log("Números pares:");
for (const par of numerosPares) {
    console.log(par);
}



