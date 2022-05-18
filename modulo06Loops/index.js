// Loops de repetição

//if e else

function numeroPositivo(num) {
  let resultado;

  if (num < 0) {
    // isso é a condição
    resultado = false; // primeira declaração (ocorre caso a condição seja verdadeira)
  } else {
    resultado = true; // segunda declaração (ocorre caso a condição seja falsa)
  }

  return resultado;
}

numeroPositivo(2); // true

numeroPositivo(-9); // false

// FORMA DE ESCREVER O EXEMPLO ACIMA UTILIZANDO BOAS PRATICAS

function numeroPositivo(num) {
  let resultado;

  const ehNegativo = num < 0;

  if (ehNegativo) {
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}

// Utilizando o ELSE IF

function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if (ehNegativo) {
    return "Esse número é negativo!";
  } else if (!ehNegativo && maiorQueDez) {
    // javascript nao tem elseif, as palavras sempre estao espaçadas.
    return "Esse número é positivo e maior que 10!";
  }

  return "esse número é positivo!";
}

// switch/case , equivale a uma comparacao de valor (===)
// sempre precisa ter um valor default
// ideal para quando se precisa comparar muitos valores

function getAnimal(id) {
  switch (id) {
    case 1:
      return "cão";
    case 2:
      return "gato";
    case 3:
      return "passaro";
    default:
      return "peixe";
  }
}

getAnimal(1); // cão
getAnimal(4); // Peixe, pois nao caiu em nenhum valor acima entao retorna o valor default
getAnimal("1"); // se mandar como string retornará default.

// FOR (loop dentro de elementos iteráveis (arrays, strings)).

function multiplicaPorDois(arr) {
  let multiplacados = [];

  for (let i = 0; i < arr.length; i++) {
    multiplacados.push(arr[i] * 2);
  }

  return multiplacados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);

// FOR IN (loops entre propriedades enumeraveis de um objeto)

function forInExemplo(obj) {
  for (prop in obj) {
    console.log(prop);
  }
}

const meuObjeto = {
  nome: "Joao",
  idade: "20",
  cidade: "maceio",
};

forInExemplo(meuObjeto);

// FOR OF (LOOP entre estruturas iteraveis)

function logLetras(palavras) {
  for (letra of palavra) {
    console.log(letra);
  }
}

const palavra = "abacaxi";

logLetras(palavra);
//a
//b
//a
//c
//a
//x
//i

//WHILE AND DO WHILE executa ate que a condicao seja falsa

function exemploWhile() {
  let num = 0;

  while (num <= 5) {
    console.log(num);
    num++;
  }
}
