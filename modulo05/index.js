// objeto arguments

// um array com todos os parametros passados quando a funcao foi invocada

function findMax() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max;
}

//Arrays e objetos

// Spread : forma de lidar separadamente com elementos de um array

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // retorno no console = 6

// Rest: combina os argumentos em um array

function confereTamanho(...args) {
  console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5); // 3

// Object Destructuring ---- entre chaves podemos filtrar apenas os dados que nos interessam no objeto

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jhon",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function getFullName({ fullname: { firstName: first, lastName: last } }) {
  return `${first} ${last}`;
}

userId(user);
//42

getFullName(user);
// john doe
