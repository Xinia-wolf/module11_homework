/* Задание 5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, 
умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль. */

const involuteFunction = (x, n) => {
    let xNatural = Math.round(x);
    let nNatural = Math.round(n);
    const result = xNatural ** nNatural;
    return result;
  };
  
  console.log( involuteFunction(2, 3) );