// THIS como usar e como aplicar metodos para usa-la

const pessoa = {
  firstName: "Andre",
  lastName: "Soares",
  id: 1,
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
  getId: function () {
    return this.id;
  },
};

pessoa.fullName();

pessoa.getId();
