// Formas de configurar "this"

// Default Binding
function globalFuntion() {
  // "use strict";
  console.log(this);
}
// sloppy mode -> window object
// strict mode -> undefined
globalFuntion();

/*



*/

// Implicit Binding
// this = counter object
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log("Conteo: " + this.count);
  },
};
counter.increment();

// Falta de contexto
// Asignación de método en variable
const globalCounter = counter.increment;
globalCounter();

// En callbacks
const sendButton = {
  buttonName: '"El botón" Enviar',
  click() {
    console.log("Yo soy el " + this.buttonName);
  },
};
// const button = document.querySelector(".btn");

// // Método como callback -> error
// button.addEventListener("click", sendButton.click);
// // Método como a través de función anónima -> correcto
// button.addEventListener("click", () => {
//   sendButton.click;
// });

/*



*/

// Explicit Binding (métodos call, apply y bind)
// Método call()
globalCounter.call(counter);

const user = {
  username: "Peter",
  auth(greeting) {
    // ahora esta función tiene un parámetro para el saludo
    console.log(`${greeting} ${this.username}`);
  },
};
const adminAuth = user.auth;
// El segundo parámetro es el parámetro de la función
adminAuth.call(user, "Hola");

// Método apply()
// Objeto
const car = {
  registrationNumber: "O287AE",
  brand: "Tesla",
};
// Función
function displayDetails(greeting, ownerName) {
  console.log(`${greeting} ${ownerName}`);
  console.log(
    `Información del vehículo: ${this.registrationNumber} ${this.brand}`
  );
}
// Asignación de objeto a función, junto con sus parámetros
displayDetails.apply(car, ["Hola", "Matt"]);

// Método bind()
// crea una nueva función con el contexto anclado a ella.
// Donde sea que llamemos a la función boundDisplayDetails(), este valor en su interior siempre será el objeto car
const boundDisplayDetails = displayDetails.bind(car);
// Ahora puedes llamarla por el nombre (el contexto que tiene anclado)
boundDisplayDetails("Hola", "Matt");

// También puede usarse para contextualizar lo siguiente
// button.addEventListener("click", sendButton.click.bind(sendButton));

/*



*/

// Operador new
// Se utiliza para crear la instancia de un objeto
// A través de funciones constructoras
function Human(name) {
  this.name = name;
}
const bob = new Human("Bob");
console.log(bob);

// Excepción: si la función devuelve un objeto, no devolverá this
function Plane(model) {
  this.model = model;
  return { model: "TU-134" };
}
const airbus = new Plane("Airbus");
console.log(airbus);

// No se puede combinar new con apply(), bind() y call()
function Driver(name, category) {
  this.name = name;
  this.category = category;
}
const Henry = new Driver.call(window, "Henry", "A"); // TypeError: Driver.call no es un constructor
const Peter = new Driver.apply(window, ["Peter", "B"]); // TypeError: Driver.apply no es un constructor
const Matt = new Driver.bind(window, "Matt", "C")(); // TypeError: Driver.bind no es un constructor

function Windows(name) {
  this.name = "Windows 10";
  this.printInfo = function () {
    console.log("Your OS: " + this.name);
  };
}

const Linux = {
  name: "Ubuntu",
};

const theOs = new Windows();

theOs.printInfo(); // Your OS: Windows 10
theOs.printInfo.call(Linux); // Your OS: Ubuntu
theOs.printInfo.apply(Linux); // Your OS: Ubuntu
theOs.printInfo.bind(Linux)(); // Your OS: Ubuntu

/*



*/

// Funciones arrow y "this"
// Las funciones arrow no tienen "this"
const myObject = {
  myMethod: () => {
    console.log(this);
  },
};
myObject.myMethod(); // window (o undefined en modo estricto)

// Funciones arroz y método call, apply y bind
// No funcionan
function Frontender() {
  this.profession = "Desarrollador Front-end";
  this.printProfession = () => {
    console.log("Soy " + this.profession);
  };
}

const backender = {
  profession: "Desarrollador Back-end",
};
const frontender = new Frontender();
frontender.printProfession.call(backender); // 'Soy Desarrollador Front-end'
frontender.printProfession.apply(backender); // 'Soy Desarrollador Front-end'

const boundPrintProfession = frontender.printProfession.bind(backender);
boundPrintProfession(); // 'Soy Desarrollador Front-end'

// Usarlas dentro de constructores
function Table() {
  this.rows = 4;
  this.columns = 3;
  this.printInfo = () => {
    console.log(
      "La tabla tiene " + this.rows + " filas y " + this.columns + " columnas"
    );
  };
}
const myTable = new Table();
myTable.printInfo(); // La tabla tiene 4 filas y 3 columnas
// Esto también funciona
const myFunc = myTable.printInfo;
myFunc(); // La tabla tiene 4 filas y 3 columnas - esto está siempre anclado a Table
