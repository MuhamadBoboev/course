function userSettings() {
  // Настройки пользователя
  var theme = 'light';  
  let language = 'English';  
  const maxNotifications = 10;  

  // Смена темы
  function setTheme(newTheme) {
    if (newTheme) theme = newTheme;
    console.log(`Тема: ${theme}`);
  }

  // Смена языка
  function setLanguage(newLanguage) {
    if (newLanguage) language = newLanguage;
    console.log(`Язык: ${language}`);
  }

  // Отображение настроек
  function displaySettings() {
    console.log(`Тема: ${theme}, Язык: ${language}, Уведомления: ${maxNotifications}`);
  }

  return { setTheme, setLanguage, displaySettings };
}

// Работа с настройками
const settingsManager = userSettings();
settingsManager.displaySettings();  // Текущие настройки
settingsManager.setTheme('dark');   // Обновить тему
settingsManager.setLanguage('Russian');  // Обновить язык
settingsManager.displaySettings();  // Обновленные настройки
