/* Задание 3
Напишите функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент 
и возвращает сумму этих двух чисел. Выведите в консоль результат. */

// Вариант 1
function takeNumber(a) {
    function getSum(b) {
      let sum = a + b;
      return sum;
    };
    return getSum(78);
  };
  
  alert(takeNumber(32));

  // Вариант 2
  const takeNumber = a => b => a + b.