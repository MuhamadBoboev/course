// Текущее количество товаров
var currentStock = 100;

// Поступившие товары за день
let dailyIncomingStock = 50;

// Максимальная емкость склада
const maxStockCapacity = 500;

// Добавление товаров на склад
function addStock(incoming) {
  dailyIncomingStock = incoming;
  console.log(`Поступило товаров: ${dailyIncomingStock}`);

  if (currentStock + dailyIncomingStock > maxStockCapacity) {
    console.log('Ошибка: превышена емкость склада!');
  } else {
    currentStock += dailyIncomingStock;
    console.log(`Обновленный запас: ${currentStock}`);
  }
}

// Продажа товаров
function sellStock(sold) {
  if (sold > currentStock) {
    console.log('Ошибка: недостаточно товаров!');
  } else {
    currentStock -= sold;
    console.log(`Продано: ${sold}. Осталось: ${currentStock}`);
  }
}

// Вывод информации о складе
console.log(`Текущий запас: ${currentStock}`);
console.log(`Макс. емкость склада: ${maxStockCapacity}`);

// Тестирование функций
addStock(200);
sellStock(50);
addStock(300); // Превышение емкости
