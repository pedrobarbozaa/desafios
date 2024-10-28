// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
const fibonacci = (num = 0) => {
  if (num == 0) return `${num} pertence à sequência de Fibonacci.` //Verifica se é 0
  let a = 0;
  let b = 1;
  
  for (let i = 3; i < num; i+=1) {
    let next = a + b;
    a = b;
    b = next;

    if (b == num) {
      return `${num} pertence à sequência de Fibonacci.` //Retorna cado haja correspondência
    }
  }

  return `${num} não pertence à sequência de Fibonacci.`; //Se não houver correspondência, não pertence à sequência
};

console.log(fibonacci(55)); 


// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
const aChecker = (str) => {
  let strArr = [...str.split('')] //Separa os caracteres em itens do array
  const checked = strArr.filter((e) => /[àáâãäåÀÁÂÃÄÅaA]/g.test(e)) //Monta um segundo array com itens verificados pelo regex

  return checked.length //Retorna a quantidade de "a" encontrados
}

console.log(aChecker('olá, como vai? Animada?'));

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA)
// Ao final do processamento, qual será o valor da variável SOMA?
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);  //O resultado da iteração será 77.

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128 
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2,10, 12, 16, 17, 18, 19, ? (não consegui encontrar o padrão)


// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  
// Tentei algumas combinações mas não cheguei na solução, talvez com algum truque além dos números, se forem lâmpadas incandescentes por exemplo, poderíamos checar a temperatura das lâmpadas...
