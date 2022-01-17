// Task1:
let health = Number(prompt('Введите число параметра "здоровье" для персонажа').trim());
debugger;
if ( health <= 0 || !health ) {
  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}


// Task2:
const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия').trim());
debugger;
if (temperatureInCelsius === 0) {
  alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
  alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
debugger;
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
debugger;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по
Фаренгейту.`);


// Task3:
const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
debugger;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  debugger;
  const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
  totalJuniorDevelopersSalary += salaryWithTax;
  debugger;
}
debugger;
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);