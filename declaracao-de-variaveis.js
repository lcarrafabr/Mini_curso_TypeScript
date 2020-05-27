//var, let, e const
//var
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    if (iniciaJogo) {
        var cidade = 'São Paulo';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
/*
//let = let só funciona dentro do escopo
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    if (iniciaJogo) {
        let cidade = 'São Paulo';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
*/
//Const = uma variavel que terá valor constante, nunca irá mudar.
function iniciarTime2(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = 'São Paulo';
    if (iniciaJogo) {
        cidade = 'São Paulo';
    }
    //nome = 'Ronaldo dibrador de amigos'; (Não dá para atribuir um novo valor a uma variavel const)
    console.log(nome + " v\u00E3o jogar " + cidade + " usando variavel const");
}
iniciarTime2(true);
