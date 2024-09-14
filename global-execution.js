// Глобальные переменные
var theme = 'light';  // Тема оформления
let language = 'English';  // Язык интерфейса
const maxNotifications = 10;  // Максимум уведомлений

// Обновление темы
function updateTheme(newTheme) {
  if (newTheme) {
    theme = newTheme;
    console.log(`Тема изменена на: ${theme}`);
  }
}

// Обновление языка
function updateLanguage(newLanguage) {
  if (newLanguage) {
    language = newLanguage;
    console.log(`Язык изменён на: ${language}`);
  }
}

// Отображение настроек
const displaySettings = function() {
  console.log(`Тема: ${theme}, Язык: ${language}, Макс. уведомлений: ${maxNotifications}`);
};

// Тестирование
displaySettings();
updateTheme('dark');
updateLanguage('Russian');
displaySettings();
