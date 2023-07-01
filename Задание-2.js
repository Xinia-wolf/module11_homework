/* Задание 2 
Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, 
простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/
 
// Вариант 1
function searchPrime(a) {
    if (a > 1000) {
        alert( "Данные неверны" );
    } else if (a === 0 || a === 1) {
        alert( "Введены 1 или 0, простыми числами не являются" );
    } else if (a === 2) {
        alert( "Вы ввели простое число - 2");
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return "Число не является простым";
            }
        }
        return "Вы ввели простое число";
    };
};

alert(searchPrime(13));

// Вариант 2
function checkPrime(number) {
    if (number > 1000) {
        console.log( "Данные неверны" );
        return;
    } 
    if (number === 0 || number === 1) {
        console.log( "Введены 1 или 0, простыми числами не являются" );
        return;
    } 
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log("Вы ввели простое число");
        } else {
            console.log("Число не является простым");
        }
    }
