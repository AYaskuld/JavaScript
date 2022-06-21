/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)*/

//Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    //.toLowerCase() - приведение строки к нижнему регистру
    let rtlc = word.toLowerCase()
    console.log(word)
    //.split('признак, ск-ко знач.') - разделение строки на массив( по определенному признаку и сколько значений будет выведено)
    //.reverse () - переворот массива
    //.join('') - объединение массива
    if (rtlc == rtlc.split('').reverse().join('')) {
        console.log('Палиндром')
    }
    else {
        console.log('Не палиндром')
    }
}
isPalindrom('Abba')
isPalindrom('abba')