const account = {
  owner: 'Muhammad',
  balance: 1000,
  deposit(amount) {
    this.balance += amount
  },
  withdraw(amount) {
    if(this.balance < amount) {
      return 'Недостаточно средств!'
    } 
    this.balance -= amount
    return 'Снято'
  },
  getBalance() {
    return this.balance
  },
  getOwner() {
    return this.owner
  } 
}

account.deposit(500);      // Ожидаемый вывод: Депозит: 500. Текущий баланс: 1500
account.withdraw(200);     // Ожидаемый вывод: Снято: 200. Текущий баланс: 1300
account.withdraw(2000);    // Ожидаемый вывод: Недостаточно средств для снятия: 2000
console.log(account.getBalance()); // Ожидаемый вывод: 1300


/* ******************************************************************************** */



const user = {
  username: 'Muhammad',
  email: 'asd@gmail.com',
  age: 22
} 


const address = {
  city: 'Душанбе',
  state: 'Сино',
  postalCode: 125402
} 


const userProfile = Object.assign(user, address)
console.log(userProfile)






/* ******************************************************************************** */


const literal = {
  title: 'Точиконистон',
  author: 'Фирдавси',
  year: 1995,
  isAvailable: true
}





/* ******************************************************************************** */


const createBook = (title, author, year, genre) => {
  return {
    title,
    author,
    year,
    genre
  }
}

console.log(createBook('title', 'author', 30, 'genre'))





/* ******************************************************************************** */


const calculator = {
  num1: 0,
  num2: 0,
  setNumbers(a, b) {
    this.num1 = a
    this.num2 = b
  },
  add() {
    return this.num1 + this.num2 
  },
  subtract() {
    return this.num1 - this.num2
  },
  multiply() {
    return this.num1 * this.num2
  },
  divide() {
    return this.num1 / this.num2
  }
}

calculator.setNumbers(10, 5);
console.log(calculator.add());      // Ожидаемый вывод: 15
console.log(calculator.subtract()); // Ожидаемый вывод: 5
console.log(calculator.multiply()); // Ожидаемый вывод: 50
console.log(calculator.divide());   // Ожидаемый вывод: 2







/* ******************************************************************************** */
function createCar(brand, model, year, isElectric) {
  const car = new Object();

  car.brand = brand;
  car.model = model;
  car.year = year;
  car.isElectric = isElectric;

  return car;
}

const myCar = createCar("Tesla", "Model 3", 2022, true);
console.log(myCar);



/* ******************************************************************************** */

// здесь


/* ******************************************************************************** */

const copyObject = oldObject => {
  const newObject = Object.assign({},oldObject)

  return newObject
} 


const original = { name: "Alice", age: 30 };
const copy = copyObject(original);

console.log(copy); 
console.log(original === copy); 



/* ******************************************************************************** */

const userNewTask = { name: "Alice", age: 30, city: "New York" };

const countProperties = obj => Object.keys(obj).length


console.log(countProperties(userNewTask)); 




/* ******************************************************************************** */
const person = { name: "Bob", age: 40, city: "San Francisco" };

const deleteProperty = (obj, propertyName) => {

  const newObject = Object.assign({}, obj)
  delete newObject[propertyName]

  return newObject
}


console.log(deleteProperty(person, "city")); 





/* ******************************************************************************** */

const car = { brand: "Toyota", model: "Camry", year: 2021 };

const hasProperty = (obj, name) => {
  if(obj[name]) {
    return true
  }

  return false
}

console.log(hasProperty(car, "model")); 
// Ожидаемый вывод: true

console.log(hasProperty(car, "color")); 
// Ожидаемый вывод: false




/* ******************************************************************************** */
const laptop = {
  brand: 'asd',
  year: 540
}

for(let key in laptop) {
  console.log(`свойство ${key}, значение: ${laptop[key]}`)
}



/* ******************************************************************************** */

const personNewTask = {
  name: 'Bob',
  age: 12
}

Object.defineProperty(personNewTask, 'age', {
  writable: false,
  enumerable: false,
  configurable: false
})

console.log(personNewTask)

console.log(Object.getOwnPropertyDescriptor(personNewTask, 'age'))

Object.getOwnPropertyDescriptor(personNewTask, 'age').configurable = true

personNewTask.age = 50

console.log(personNewTask.age)
