// boolean
var estaPago = true;
//number
var idade = 34;
var valor = 29.99;
//String
var empresa = 'LCarrafaBR';
//Template Strings
var nome = 'Luciano Carrafa';
console.log("Ol\u00E1. Meu nome \u00E9: " + nome + " e tenho " + idade + " anos.");
//Concatenação tradicional
var concatenacaoTradicional = 'Olá. meu nome é: ' + nome + ' e tenho ' + idade + 'anos.';
//Arrays - posso ter arrays de qualquer tipo: String, number ...
var notas = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//Tuple
var alunos = ['Luciano', 10, 'matematica'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
//Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
var corFundo = Cor.Verde;
var corDesenho1 = Cor.Amarelo;
var corDesenho2 = Cor.Azul;
var corDesenho3 = Cor.Branco;
var montarBandeira;
var bg = Cor[Cor.Verde]; //Converter Enum para string
//Any - Muito util para receber Arrays com vários tipos de dados.
var algumValor = 4;
algumValor = 'Agora é String';
algumValor = true;
algumValor = 29.99;
//Void - Não aceita nada
function alerta() {
}
//null e undefined
var u = undefined;
var n = null;
//null e undefined são subtipos dos outros tipos.
