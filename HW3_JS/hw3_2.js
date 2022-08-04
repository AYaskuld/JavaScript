/*Task 2*
Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.*/


//подключение модуля fs - считывание, записывание данных из файлов
const fs = require("fs");
//подключение файла
let user = JSON.parse(fs.readFileSync("D:/Projects/HW3/task2.json"))

//Первый способ
function uniqueFunc1() {
    let unique1 = []
    user.forEach(el => {
        //проверка того, что unique1 не содержит элементы из массива user
        //т.к includes плохо видит вложенные объекты, то приводим el к строке(JSON.stringify)
        if (!unique1.includes(JSON.stringify(el)))
            unique1.push(JSON.stringify(el))
    })
    // преобразование строки unique1 из функции в формат Json
    return unique1.map(el => JSON.parse(el))
}
//console.log(uniqueFunc1()) 
//___________________________________________________________________________________________

//Второй способ

//1.(new Set(users.map((item) =>JSON.stringify(item))))- приведение в string значений из users и педача в Set(не массив). Set() создает набор уникальных значений.
//2.Создаем массив из Set - Array.from(
//3.И т.к. в полученном массиве тип дпнных string, то преобразовываем обратно в Json(.map((item) => JSON.parse(item)))  
let unique = Array.from(new Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item))
console.log(unique)
