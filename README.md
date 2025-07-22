// Функция для вывода информации о человеке
function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);  ЗАДАНИЕ 7.7.1
}

// Объект person
const person = {
  name: 'John',
  age: 30
};

// Вызываем функцию printInfo с контекстом объекта person
printInfo.call(person);




