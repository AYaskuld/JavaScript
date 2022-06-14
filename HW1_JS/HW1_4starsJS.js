let age = prompt('Enter your age')

let age_2 = 18
let age_3 = 60
age = +age
if (age < age_2) {
    document.write('You don\'t have access cause your age is ' + age + '. ' + ' It\'s less then ' + age_2)
}
else if (age >= age_2 & age < age_3) {
    document.write(' Welcome !')
} else if (age > age_3) {
    document.write('Keep calm and look Culture channel')
}
else {
    document.write('The age is not a number.')
}
