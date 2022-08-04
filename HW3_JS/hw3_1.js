/*Написать функцию, которая найдет и выведет в консоль юзеров, 
зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt*/

const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

//Выполнение задания с использованием метода .forEach()
function dateReg(x) {
    users.forEach(user => {
        if (user.registrationDate == x)
            console.log(user)
    })
}
//Выполнение задания с использованием метода .filter()

//Первый способ
const user = users.filter(user => (user.registrationDate == '10.10.2021' || user.registrationDate == '09.10.2021'))
console.log(user)

//Второй способ
function dateReg(x) {
    users.filter(user => {
        if (user.registrationDate == x) {
           return (user)
        }
       console.log(user)
   })
}

//Выполнение задания с использованием метода .map()
function dateReg(x) {
    users.map(user => {
        if (user.registrationDate == x) {
            console.log(user)
       }
    })
}

