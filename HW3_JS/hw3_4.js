const company = [
    {
        id: 1,
        name: "Компания",
        parent: null,
        users_count: 10,
        children: [
            {
                id: 2,
                name: "Отдел тестирования",
                parent: 1,
                users_count: 7,
                children: [
                    {
                        id: 2,
                        name: "Тестирование Web",
                        parent: 2,
                        users_count: 5,
                    },
                    {
                        id: 3,
                        name: "Тестирование Mobile",
                        parent: 2,
                        users_count: 0,
                    },
                ]
            },
            {
                id: 4,
                name: "Отдел маркетинга",
                parent: 1,
                users_count: 30,
            },
            {
                id: 5,
                name: "Администрация",
                parent: 1,
                users_count: 25,
                children: [
                    {
                        id: 6,
                        name: "Бухгалтерия",
                        parent: 5,
                        users_count: 10,
                    },
                    {
                        id: 7,
                        name: "Менеджмент",
                        parent: 5,
                        users_count: 15,
                        children: [
                            {
                                id: 8,
                                name: "Подраздел менеджмента 1",
                                parent: 7,
                                users_count: 5,
                            },
                            {
                                id: 9,
                                name: "Подраздел менеджмента 2",
                                parent: 7,
                                users_count: 10,
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "HR",
                        parent: 5,
                        users_count: 1,
                    }
                ]
            },
        ]
    }
]

/* Написать функцию: 

Функция строит древовидный список компании.
При ее вызове в консоль должен выветить список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.
 */
function listOfDepartments(company) {
    company.forEach(company => {
        // Создание массива deps в цикле forEach, в которой будут записываться департаменты
        let deps = []
        //создание переменной count в цикле forEach, в которой будет подсчитываться сотрудники
        let count = 0
        // запись в массив deps свойство name
        deps.push(`${company.name}  (${company.users_count})`)
        //проверка на наличие департамента в компании
        if (company.children) {
            //если есть дети, то происходит подсчет сотрудников в каждом департаменте компании
            company.children.forEach(child => {
                count += child.users_count
                deps.push(` -- ${child.name} (${child.users_count})`)
                if (child.children) {
                    child.children.forEach(el => {
                        deps.push(` ---- ${el.name} (${el.users_count})`)
                        if (el.children) {
                            el.children.forEach(el => {
                                deps.push(` ------ ${el.name} (${el.users_count})`)
                            })
                        }
                    })
                }
            })
            //Добавление в массив deps подсчет(count), происходившего в if и запись в 0 элемент.
            // Каждый элемент в масииве deps, в цикле company.forEach, будет [0]
            //   deps[0] + count
        }
        //Cбор данных из цикла company.forEach в строку, с разделителем \n,
        //который переносит инфо. о каждом предприятии на новую строку  
        console.log(deps.join(`\n `))
    });
}
console.log(listOfDepartments(company))

const checkArray = function (company, counter = '') {
    company.forEach(comp => {
        console.log(`${counter} ${counter === '' ? '' : ' '}${comp.name} (${comp.users_count})`)
        if (comp.children) {
            counter += '--'
            checkArray(comp.children, counter)
            //Удаление массива элементов
            counter = counter.slice(0, -2)

        }
    })
}

console.log(checkArray(company))
