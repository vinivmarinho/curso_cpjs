// 01- Escreva um programa que solicita ao usuário dois números inteiros e, em seguida, exibe a soma desses dois números.

/* let n1 = parseInt(prompt("Digite um número inteiro"));
let n2 = parseInt(prompt("Digite outro número inteiro"));
let soma = n1 + n2;
alert(`A soma entre ${n1} e ${n2} é: ${soma}`); */

// 02- Desenvolva um programa que lê quatro notas de um aluno, calcula a média aritmética e exibe a média final.

/* let nota1 = parseFloat(prompt("Qual a nota do 1° bimestre"));
let nota2 = parseFloat(prompt("Qual a nota do 2° bimestre"));
let nota3 = parseFloat(prompt("Qual a nota do 3° bimestre"));
let nota4 = parseFloat(prompt("Qual a nota do 4° bimestre"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
alert(`A média do aluno é: ${media}`); */

// 03- Crie um algoritmo que lê dois valores inteiros para as variáveis A e B, e então troca os valores de A por B e B por A, mostrando os valores após a troca.

/* let a = parseInt(prompt("Digite um número para a variável 'A' : "));
let b = parseInt(prompt("Digite outro número para a variável 'B':"));
let c = a // Variável "c" é usada para guardar o valor de "a" para que "b" possa recebê-lo
a = b;
b = c;
alert(`Trocando...A = ${a}. B = ${b}`); */

// 04- Crie um programa que pede ao usuário seu nome e sobrenome separadamente e, em seguida, exibe o nome completo.
/* let nome = prompt("Digite o seu nome: ")
let sobrenome = prompt("Digite o seu sobrenome: ")
alert(`Olá ${nome} ${sobrenome}, tudo bem?`) */

// 05- Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.
/* let precoTotal = parseFloat(prompt("Preço do produto: "));
let desconto = (precoTotal * 5) / 100;
let precoComDesconto = precoTotal - desconto
alert(`Com o desconto de 5% (R$${desconto} reais), o valor passa a ser: R$${precoComDesconto} reais`); */

// 06- Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
let salario = parseFloat(prompt("Digite o salário do funcionário:"))
let aumento = salario * 0.15
let SalarioComAumento = salario + (salario * 0.15)
alert(`Com aumento de 15%(R$${aumento} reais), o salário passou a ser: R$${SalarioComAumento} reais`)
