const funcs = []

for (var i = 0; i < 10; i++) {
    //Aqui dentro do laço iremos preencher o array
    funcs.push(function() {
        console.log(i);

    })
}

funcs[2]()
funcs[8]()

//Qual será o valor de i quando chamarmos o indice 2?
//como essa variavel foi declarada em  VAR, ela não tem escopo,, e com isso  irá retornar  10 para quarquer chamada