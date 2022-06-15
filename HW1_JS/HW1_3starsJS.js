/*3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось,
преобразовываясь в number*/

function checkAge(age) {
    let age_2 = 18
    let age_3 = 60


    if (typeof age == 'boolean') {
        console.log('The age can\'t be boolean')
    }
    else {
        age = +age
        if (age < 0) {
            console.log('The age cannot be less than 0')
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
            console.log('The age is not a number.')
        }
    }
}

checkAge('60')
