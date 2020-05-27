// boolean
let estaPago: boolean = true;

//number
let idade: number = 34;
let valor: number = 29.99;

//String
let empresa: string = 'LCarrafaBR';

//Template Strings
let nome: string = 'Luciano Carrafa';

console.log(`Olá. Meu nome é: ${nome} e tenho ${idade} anos.`);

//Concatenação tradicional
let concatenacaoTradicional = 'Olá. meu nome é: ' + nome + ' e tenho ' + idade + 'anos.'

//Arrays - posso ter arrays de qualquer tipo: String, number ...
let notas: number [] = [9,8,7,6,5,4,3,2,1,0];

//Tuple
let alunos: [string, number, string] = ['Luciano', 10, 'matematica'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//Enum
enum Cor {Verde, Amarelo, Azul, Branco}

let corFundo: Cor = Cor.Verde;
let corDesenho1: Cor = Cor.Amarelo;
let corDesenho2: Cor = Cor.Azul;
let corDesenho3: Cor = Cor.Branco;

let montarBandeira: string;
let bg: string = Cor[Cor.Verde]; //Converter Enum para string

//Any - Muito util para receber Arrays com vários tipos de dados.
let algumValor: any = 4;
algumValor = 'Agora é String';
algumValor = true;
algumValor = 29.99;

//Void - Não aceita nada
function alerta(): void {
}

//null e undefined
let u: undefined = undefined;
let n: null = null;
//null e undefined são subtipos dos outros tipos.