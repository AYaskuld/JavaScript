/*3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
преобразовываясь в number*/
let age_2 = 18
let age_3 = 60
function checkAge(age) {

    if (age && !isNaN(age) && age != true) {

        if (age < 0) {
            console.log('The age cannot be less than 1')
        }
        else if (age < age_2) {
            console.log('You don\'t have access cause your age is ' + age + '. ' + ' It\'s less then ' + age_2)
        }
        else if (age >= age_2 & age < age_3) {
            console.log(' Welcome !')
        }
        else if (age >= age_3) {
            console.log('Keep calm and look Culture channel')
        }
        else {
            console.log('Technical works.')
        }
    }
    else { console.log('Not a number') }
}

checkAge(17)
checkAge('18')
checkAge(60)
checkAge(0)
checkAge('vxcv')
checkAge('20')
checkAge(true)
checkAge('')