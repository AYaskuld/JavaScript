//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2


function pow(i, e) {
    //.pow(x,e) - воззводит число х в степень е
    i = Math.pow(i, e)
    alert(i)
}
pow(
    prompt('Введите число'),
    prompt('Введите степень'))