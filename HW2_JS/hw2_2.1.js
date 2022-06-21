/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/


function smile(x, y) {
    let e = x
    console.log(x)
    for (i = 1; i < y; i++) {
        x = x + e
        console.log(x)
    }
}
smile(prompt('Введи слово'), prompt('Введи количество строк'))