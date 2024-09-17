// Явное преобразование значений в тип boolean
function makeBool(params) {
  return !!params; // Простое двойное отрицание для преобразования в boolean
}

console.log(makeBool(0));

// Явное преобразование значений в тип number
function convertToNumber(params) {
  return Number(params); // Использую встроенную функцию для явного преобразования
}

console.log(convertToNumber(""));
console.log(convertToNumber(true));
console.log(convertToNumber(false));
console.log(convertToNumber("15"));
console.log(convertToNumber("12million")); // Приведет к NaN, так как строка не является числом

// Управление числами с помощью объекта Math
function findMax(arr) {
  return Math.max(...arr); // Использую spread оператор для передачи элементов массива в Math.max
}

const numbers = [3, 5, 7, 2, 9];
console.log(findMax(numbers));

// Math.min
function findMin(arr) {
  return Math.min(...arr); // Аналогично Math.max, только ищем минимум
}

console.log(findMin(numbers));

// Округление чисел
function roundNum(num) {
  return Math.round(num); // Округление числа до ближайшего целого
}

console.log(roundNum(15.62));
console.log(roundNum(-85.89));
console.log(roundNum(2.89));

// Преобразование значений с унарными операторами
function unaryPlus(value) {
  return +value; // Преобразование значения в число с помощью унарного плюса
}

console.log(unaryPlus(77));

function unaryMinus(value) {
  return -value; // Унарный минус — просто меняет знак числа
}

console.log(unaryMinus(77));

// Инкремент и декремент
function increment(value) {
  return ++value; // Предварительное увеличение
}

console.log(increment(77));

function decrement(value) {
  return --value; // Предварительное уменьшение
}

console.log(decrement(77));

// Работа с методами строк
function toUpperCase(str) {
  return str.toUpperCase(); // Преобразование строки в верхний регистр
}

let text = "Don't give up";
console.log(toUpperCase(text));

function toLowerCase(str) {
  return str.toLowerCase(); // Преобразование строки в нижний регистр
}

let text2 = "DON'T GIVE UP";
console.log(toLowerCase(text2));

// Замена подстроки
function replaceString(str) {
  return str.replace("Don't give up", ''); // Заменяем подстроку на пустую строку
}

console.log(replaceString("Don't give up on your dreams!"));

// Разбиение строки
function splitString(str) {
  return str.split(); // Разделение строки по умолчанию (по пробелам)
}

console.log(splitString("Don't give up on your dreams!"));

// Удаление пробелов
function trimString(str) {
  return str.trim(); // Удаление пробелов в начале и конце строки
}

console.log(trimString("        Don't give up         "));

// Поиск подстроки
function findSubstring(str, substring) {
  return str.indexOf(substring); // Ищем индекс первой подстроки
}

console.log(findSubstring("Don't give up", "g"));

// Проверка наличия подстроки
function containsSubstring(str, substring) {
  return str.includes(substring); // Проверяем наличие подстроки
}

console.log(containsSubstring("Don't give up", "up"));
console.log(containsSubstring("Don't give up", "Boboev"));
