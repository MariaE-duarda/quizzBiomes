//Quizz
let titulo = document.querySelector("h1");
let instrucoes = document.querySelector('#instrucoes');
let aviso = document.querySelector('#aviso');
//let respostaEsta = document.querySelector('#respostaEsta');
let pontos = 0;
let placar = 0;

//Pergunta
let numQuestao = document.querySelector('#numQuestao');
let pergunta = document.querySelector('#pergunta');

//Alternativas
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

let articleQuestoes = document.querySelector('.questoes');
let status = document.querySelector('#status');
let alternativas = document.querySelector('#alternativas');

//coloque 5 perguntas, cada uma dentro de um const;
const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta", 
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : 'Alternativa D',
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual o maior bioma em espaço territórial do Brasil?", 
    alternativaA : "Pampa",
    alternativaB : "Cerrado",
    alternativaC : "Caatinga",
    alternativaD : "Amazônia",
    correta      : "Amazônia",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "A Amazônia pode ser considerado o pulmão do mundo?”?", 
    alternativaA : "Falso",
    alternativaB : "Verdade",
    alternativaC : "0",
    alternativaD : "0",
    correta      : "Falso",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quais as duas principais ameaças para a amazônia?", 
    alternativaA : "Mineração e atividades agrícolas",
    alternativaB : "Desflorestação e mineração",
    alternativaC : "0",
    alternativaD : "0",
    correta      : "Desflorestação e mineração",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "De onde é a invenção do chuveiro elétrico? ", 
    alternativaA : "Brasil",
    alternativaB : "Inglaterra",
    alternativaC : "França",
    alternativaD : "Terra",
    correta      : "Brasil",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual o menor e o maior país do mundo?", 
    alternativaA : "São Marino e Índia",
    alternativaB : "Malta e Estados Unidos",
    alternativaC : "Vaticano e Rússia",
    alternativaD : "Várzea",
    correta      : "Vaticano e Rússia",
}

//Constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = (questoes.length)-1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

//Montar a 1a questão completa, para iniciar o quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

//configurar o value inicial da 1a questão completa
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');
d.setAttribute('value', '1D');

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value',nQuestao+'A')
    b.setAttribute('value',nQuestao+'B')
    c.setAttribute('value',nQuestao+'C')
    d.setAttribute('value',nQuestao+'D')
}


function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}
function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    console.log("Questão "+ numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU "+ respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log("Questão "+ certa)

    if(respostaEscolhida == certa) {
        pontos+=10
        console.log("Acertou");
    }
    else {
        console.log("Errou!")
    }

    placar = pontos;
    instrucoes.textContent = "Pontos " + placar;

    //execulta função de bloquear a escolha de opcoes
    bloquearAlternativas();

    setTimeout(function() {
        proxima = numeroDaQuestao+1
        if(proxima > totalDeQuestoes) {
            console.log('Fim de Jogo!')
            fimDeJogo()
        } else{
            proximaQuestao(proxima)
        }
    }, 250);
    desbloquearAlternativas()
}



function fimDeJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Clique aqui para jogar novamente"

    aviso.textContent = "Você conseguiu " + pontos + " " + " " + pont

    a.textContent = " "
    b.textContent = " "
    c.textContent = " "
    d.textContent = " "

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    articleQuestoes.getElementsByClassName.display = 'none'
    numQuestao.style.display = 'none'
    alternativas.style.display = 'none'

}






