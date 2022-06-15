/*4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке*/
//Скрипт привязак к файлу HW1_starsHTML.HTML
let age = prompt('Enter your age')
let age_2 = 18
let age_3 = 60
if (typeof age == 'boolean') {
    document.write('The age can\'t be boolean')
}
else {
    age = +age
    if (age < 0) {
        document.write('The age cannot be less than 0')
    }
    else if (age < age_2) {
        document.write('You don\'t have access cause your age is ' + age + '. ' + ' It\'s less then ' + age_2)
    }
    else if (age >= age_2 & age < age_3) {
        document.write(' Welcome !')
    }
    else if (age >= age_3) {
        document.write('Keep calm and look Culture channel')
    }
    else {
        document.write('The age is not a number.')
    }
}