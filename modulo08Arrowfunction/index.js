// arrow functions

const helloWorld = () => "Hello World";

const soma = (a, b) => a + b;
soma(4, 6);
// retorna o valor 10

// arrow function NÃO FAZ HOISTING!
// o valor this sempre será o objeto global. Metodos para modificar seu valor nao ira funcionar.
// nao existe o objeto "arguments"
// o construtor tambem nao pode ser utilizado (ex: new Meuobjeto()).
