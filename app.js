// #1 ### Задача: Добавление товара в магазин

const getStatusMessage = status => {

  switch (status) {
    case 'error': return 'Не известная ошибка';
    case 'pending': return 'Транзакция в ожидании';
    case 'success': return 'Транзакция прошла успешно';
    case 'feild': return 'Транзакция не прошла успешно';
    default: return('Неизвестный статус');
  }
}
console.log('Задача:    ', getStatusMessage('asd'))






// #2 ### Задача: Обработка статусов

const products = [
  { name: "Laptop", price: 999.99, quantity: 5 },
  { name: "Phone", price: 499.99, quantity: 10 }
];

const newProduct = { name: "Tablet", price: 299.99, quantity: 7 };

const addProduct = (newProduct, products) => ([newProduct, ...products])

console.log('Задача:    ', addProduct(newProduct, products));







// #3 ### Задача: Функция вычисления площади круга

const calculateCircleArea = a => (Math.PI*Math.pow(a, 2))

console.log('Задача:   ', calculateCircleArea(5)); 






// #4 ### Задача: Функция расчёта скидки

const calculateDiscount = (price, discount) => price - (price *discount)/100

console.log('Задача:   ', calculateDiscount(1000, 15)); 





// #5 ### Задача: Арифметические операции с двумя числами

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/':
      if(!isFinite(a / b)) {
        return 'Ошибка: деление на ноль'
      }
      return  a / b
    case '%': return 'Ошибка: некорректный оператор'
    default: return 'Этого оператора не существует'
  }
}

console.log('Задача 5. Арифметические операции:   ', calculate(10, 5, '+')); 
console.log('Задача 5.1:    ', calculate(10, 5, '-')); 
console.log('Задача 5.2:    ', calculate(10, 5, '*')); 
console.log('Задача 5.3:    ', calculate(10, 5, '/')); 
console.log('Задача 5.4:    ', calculate(10, 0, '/')); 
console.log('Задача 5.5:    ', calculate(10, 5, '%'));







// #6 ### Задача: Функция преобразования времени из минут в часы и минуты

const convertMinutes = minute => `${Math.floor(minute/60)} часов ${Math.floor(minute%60)} минут`

console.log('Задача 6:   ', convertMinutes(130)); 







// #7 ### Задача: Функция вычисления максимального числа

const findMax = (a, b ,c) => Math.max(a, b, c)

console.log('Задача 7:   ', findMax(10, 25, 7)); 




// #8 ### Задача: Форматирование строки

const formatString = str => str.trim().toUpperCase()

console.log('Задача 8:   ', formatString("   hello world   "));  
console.log('Задача 8:   ', formatString("  JavaScript   "));    
console.log('Задача 8:   ', formatString("    openai  "));       








// #9 ### Задача: Генерация идентификатора

const generateId = () => `id-(${Math.random().toFixed(0)*10+1})`

console.log('Задача 9:   ', generateId());






// #10 ### Задача: Обработка HTTP статус-кодов
const getInfoAboutHTTPStatus = statusCode => {

  switch (statusCode) {
      case 200: return `ОК: Запрос выполнен успешно`;
      case 201: return `Created: Ресурс был создан успешно`;
      case 204: return `Not Content: Запрос выполнен успешно, но нет содержимого`;
      case 400: return `Bad Request: Неверный запрос`;
      case 401: return `Unauthorized: Неавторизованный доступ`;
      case 403: return `Forbidden: Доступ запрещен`;
      case 404: return `Not Found: Ресурс не найден`;
      case 500: return `Internal Server Error: Внутренняя ошибка сервера`;
      case 502: return `Bad Gateway: Неверный шлюз`;
      case 503: return `Service Unavailable: Сервис недоступен`;
      default: return `Unknown Status Code: Неизвестный статус-код`;
  }
}

console.log('Задача 10:   ', getHttpStatusMessage(404));





// #11 ### Задача: Функция проверки на четность

const isEven = (num) => !Boolean(num % 2)

console.log('Задача 11:   ', isEven(10)) 
