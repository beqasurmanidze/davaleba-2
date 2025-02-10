// 1)
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }
}

const tesla = new ElectricCar("Tesla", "Model S", 2022, "85%");
console.log(tesla);

// 2)
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookTitle) {
    this.books = this.books.filter((book) => book.book !== bookTitle);
  }

  listBooks() {
    return this.books;
  }
}

const myLibrary = new Library();
myLibrary.addBook({
  author: "George Orwell",
  book: "Nineteen Eighty-Four",
  year: 1948,
});
console.log(myLibrary.listBooks());
myLibrary.removeBook("Nineteen Eighty-Four");
console.log(myLibrary.listBooks());

// 3)
class Employee {
  constructor(name, hourlyRate) {
    this.name = name;
    this.hourlyRate = hourlyRate;
  }

  calculateSalary(hoursWorked) {
    return this.hourlyRate * hoursWorked;
  }
}

const employee = new Employee("John Doe", 20);
console.log(employee.calculateSalary(40));

// 4) S
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  deleteItem(itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  }

  updateItem(itemName, newItem) {
    const index = this.items.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...newItem };
    }
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Laptop", price: 1000, quantity: 1 });
cart.addItem({ name: "Phone", price: 500, quantity: 2 });
console.log(cart.calculateTotal());
cart.updateItem("Phone", { price: 450 });
console.log(cart.calculateTotal());
cart.deleteItem("Laptop");
console.log(cart.calculateTotal());

// 5)
class CarFactory {
  constructor() {
    this.cars = [];
  }

  addCar(car) {
    this.cars.push(car);
  }

  deleteCar(model) {
    this.cars = this.cars.filter((car) => car.model !== model);
  }

  updateCar(model, newCarData) {
    const index = this.cars.findIndex((car) => car.model === model);
    if (index !== -1) {
      this.cars[index] = { ...this.cars[index], ...newCarData };
    }
  }

  getAllCars() {
    return this.cars;
  }
}

function getRandomYear() {
  return Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
}

const factory = new CarFactory();
factory.addCar({ year: getRandomYear(), model: "Ferrari", price: 350000 });
factory.addCar({ year: getRandomYear(), model: "Lamborghini", price: 400000 });
console.log(factory.getAllCars());
factory.updateCar("Ferrari", { price: 360000 });
console.log(factory.getAllCars());
factory.deleteCar("Lamborghini");
console.log(factory.getAllCars());
