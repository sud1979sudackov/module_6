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

javascript                             ЗАДАНИЕ 7.7.2.
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 'Неизвестный оператор';
  }
}

// Объект с параметрами (не используется в apply, но добавлен для примера)
const paramsObj = {
  a: 2,    // Эти значения не будут использоваться при вызове через apply
  b: 3,    // (так как apply использует массив аргументов)
  operator: '+'
};

// Вызов функции calculate с помощью apply
const result = calculate.apply(null, [2, 3, '+']);

console.log(result); // Выведет: 5
ЗАДАНИЕ 7.7.3
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 18 },
  { name: 'David', age: 14 },
  { name: 'Eve', age: 30 }
];

// 1. Фильтруем пользователей старше или равно 18 лет
const adults = users.filter(user => user.age >= 18);

// 2. Создаём массив только с именами
const names = adults.map(user => user.name);

console.log('Совершеннолетние пользователи:', adults);
console.log('Имена совершеннолетних:', names);

ЗАДАНИЕ 7.7.4.
// Функция для установки fullName
function setFullName(fullName) {
  this.fullName = fullName;
}

// Объект person (из предыдущего примера)
const person = {
  name: 'John',
  age: 30
};

// Создаем новую функцию с привязанным контекстом (person)
const setPersonFullName = setFullName.bind(person);

// Вызываем с новым значением fullName
setPersonFullName("John Smith");

// Проверяем результат
console.log(person); // { name: 'John', age: 30, fullName: 'John Smith' }
ЗАДАНИЕ 7.7.5
function getUniqueSortedNumbers(arr) {
  // Фильтрация уникальных значений
  const uniqueNumbers = [...new Set(arr)];
  
  // Сортировка по возрастанию
  const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
  
  return sortedNumbers;
}
