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


//Utilites

const employeesCountHelper = function (number) {
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
//console.log(employeesCountHelper('20'))

const getNewId = function (company) {
    let maxId = 0
    company.forEach(comp => {
        if (maxId < comp.id) maxId = comp.id
        if (comp.departments) {
            comp.departments.forEach(dept => {
                if (maxId < dept.id) maxId = dept.id
            })

        }
    })
    return maxId + 1
}
//console.log(getNewId(enterprises))

const getEnterprise = function (val) {
    let enterprise = enterprises.find(el => el.id === val || el.name === val)
    return enterprise ? enterprise : false
}

const getDepartment = function (val) {
    let department
    enterprises.forEach((company) => {
        const dept = company.departments.find(el => { return el.id === val || el.name === val })
        if (dept) department = dept
    })
    // enterprises.departments.find(el => el.id === val || el.name === val)
    return department ? department : false
}

//console.log(getDepartment(10))


//Functions
//_____________________________________________________________________________________________
/* 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
Для предприятия посчитать сумму всех сотрудников во всех отделах. */

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
//company(enterprises)

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
function getEnterpriseByDepartment(val) {
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


//console.log(companyId1(11))

//3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

function addEnterprises(name) {
    enterprises.push({
        id: getNewId(enterprises),
        name: name,
        departments: []
    })

}
addEnterprises('Testers')

//4. Добавление отдела в предприятие
const addDepartment = function (entId, name, count = 0) {
    const enterprise = getEnterprise(entId)
    if (enterprise) {
        enterprise.departments.push({
            id: getNewId(enterprises),
            name: name,
            employees_count: count
        })
    }
}

addDepartment(11, 'QA', 20)
addDepartment('Testers', 'AQA', 5)
//console.log(enterprises[3])

//5. Написать функцию для редатирования названия предприятия. Принимает в качестве аргмента id пердприятия и новое имя предприятия.

const editEnterprise = function (val, name) {
    const enterprise = getEnterprise(val)
    if (enterprise) {
        enterprise.name = name;
    }
    //создание кастомной ошибки
    else throw new Error('No such enterprise')
}
editEnterprise(11, 'Devs')


//6. Написать функцию для редатирования названия отдела. Принимает в качестве аргмента id пердприятия и новое имя отдела.
const editDepartmet = function (val, name) {
    const department = getDepartment(val)
    if (department) {
        department.name = name;
    }
    //создание кастомной ошибки
    else throw new Error('No such department')
}

editDepartmet(12, 'Devops')
//console.log(enterprises[3])
//7. удаление предприятия
const deleteEnterprise = function (val) {
    //находим номер индекса под которым числится наше предприятие
    const index = enterprises.findIndex(el => el.id == val)
    //splice - Удаление элемента по ( индексу, сколько элементов будет удалено справа на лево)
    enterprises.splice(index, 1)
}
//deleteEnterprise(9)
//console.log(enterprises)

//8.Удаление департамента
const deleteDepartmens = function (val) {
    enterprises.forEach(el => {
        let index = el.departments.findIndex(el => el.id == val)
        if (index !== -1) {
            el.departments.splice(index, 1)
        }
    })
}

//deleteDepartmens()
//console.log()

//9.Написать функцию для переноса сотрудников между отделами одного предприятия
//в качестве аргумента принимает два значения: id отдела. из которого будут переноситься сотрудники и id отдела, в который будут переноситься

const moveEmployees = function (currentId, newId) {
    const current = getDepartment(currentId)
    const newdep = getDepartment(newId)
    if (getEnterpriseByDepartment(currentId) === getEnterpriseByDepartment(newId) && newId && currentId) {
        newdep.employees_count += current.employees_count
        current.employees_count = 0
    }
    else throw Error('Something went wrong')

}
moveEmployees(8, 7)
//console.log(enterprises[1])