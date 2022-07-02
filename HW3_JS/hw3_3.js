/* Task 3**
В файле task3.txt найдете структуру компании и задания, необходимые выполнить.

Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)
 */
const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

/* 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
Для предприятия посчитать сумму всех сотрудников во всех отделах. */


/* const employeesCountHelper = function (number) {
    //приведение вводимого числа к строке(toString()), разделение элементов на массив(split('')),
    // возвращение последнего элемента массива (pop())(возвращение первого элемента shift())
    lastNumber = number.toString().split('').pop()
    //проверка на то, что lastNumber и number - true т.е существуют
    if (lastNumber && number) {
        if (number > 10 && number < 20) { return `${number} сотрудников` }
        else if (lastNumber == 1) { return `${number} сотрудник` }
        else if (lastNumber > 1 && lastNumber < 5) { return `${number} сотрудника` }
        else return `${number} сотрудников`
    }
    else return ' нет сотрудников '
}
employeesCountHelper('asda')

function company(companys) {
    companys.forEach(company => {
        // Создание массива deps в цикле forEach, в которой будут записываться департаменты
        let deps = []
        //создание переменной count в цикле forEach, в которой будет подсчитываться сотрудники
        let count = 0
        // запись в массив deps свойство name
        deps.push(company.name)
        //проверка на наличие департамента в компании
        if (company.departments) {
            //если есть департамент, то происходит подсчет сотрудников в каждом департаменте компании
            company.departments.forEach(depa => {
                count += depa.employees_count
                deps.push(` - ${depa.name} ${employeesCountHelper(depa.employees_count)}`)
            })
            //Добавление в массив deps подсчет(count), происходившего в if и запись в 0 элемент.
            // Каждый элемент в масииве deps, в цикле company.forEach, будет [0]
            deps[0] += ` (${employeesCountHelper(count)})`
        }
        //Cбор данных из цикла company.forEach в строку, с разделителем \n,
        //который переносит инфо. о каждом предприятии на новую строку  
        console.log(deps.join(`\n `))
    });
}
company(enterprises) */

/* 2. Написать функцию, которая будет принимать 1 аргумент
(id отдела или название отдела и возвращать название предприятия, к которому относится). */

function companyId(id) {
    let enterprise
    enterprises.forEach(compId => {
        if (compId.id == id) {
            enterprise = compId
        }
        else if (compId.departments) {
            compId.departments.forEach(dep => {
                if (dep.name == id || dep.id == id) {
                    enterprise = compId
                }
            })
        }
    })
    //если enterprise - true, то возвр. enterprise : false - возвр - Демантамента или отдела с id/названием ${id}
    return enterprise ? enterprise : `Демантамента или отдела с id/названием ${id} не существует`
}
//__________________________________________________________
//с использованием функции find
function companyId1(val) {
    let enterprise
    enterprises.forEach(compId => {
        let department
        if (compId.departments) {
            //find возвращает первый эл подходящий под условия
            department = compId.departments.find(dept =>
            //указание условия, которое будет возвр. в department
            { return dept.id == val || dept.name == val })
        }
        //если department - true, То enterprise = 
        if (department) enterprise = compId
    })
    //если enterprise - true, то возвр. enterprise : false - возвр 'нет такого отдела'
    return enterprise ? enterprise : `нет такого отдела`
}


console.log(companyId())

//3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

//function addEnterprises(addEnt) {
//let enterprise = enterprises.map((el) => JSON.stringify(el))
//enterprises.push('куку')
//console.log(enterprises)
//}


