/*
6. Дан массив пользователей, его можно скопировать [отсюда](https://www.notion.so/8e2b70ab692a4986b1816ce7dd2fb1ca), создать таблицу (см. презентацию).

Условия:
* В конце таблицы обязательно последняя `tr` должна содержать `total balance` всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
* Количество пользователей может быть любым.
* Таблица и все ее содержимое должно создаваться через `js`, в разметке у вас может быть только контейнер какой то.
* В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков `th` которые будут выводиться в таблице. Что то типа `{ name: ‘Name’, email: ‘Email’... }` соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок `th`.

7. Из домашнего задания “Занятие 4 - Манипуляция DOM. Работа с атрибутами.” Дополнить функционал для таблицы из задачи 6. Создать кнопку которая будет при клике сортировать пользователей по возрастанию и убыванию поля `balance` при этом в кнопке должна показываться стрелка в какую сторону сейчас отсортированы пользователи. Иконки можете взять с font awesome, в качестве фреймворка использовался bootstrap.

*/

const map = ["_id", "name", "isActive", "balance"];

const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];

function _printUserTableHeader(container) {
  let fields = ["#", "Name", "Email", "Balance"]

  let tableRow = document.createElement("tr");
  for (let i = 0; i < fields.length; i++) {
    let tableHeader = document.createElement("th");
    tableHeader.innerHTML = fields[i];
    tableRow.insertAdjacentElement("beforeend", tableHeader);
  }
  container.insertAdjacentElement("afterbegin", tableRow);
}

function _printUsersBody(container, users) {
  let totalBalance = 0;
  let tableRow, tableElement;
  for (let i = 0; i < users.length; i++) {
    tableRow = document.createElement("tr");
    totalBalance += users[i].balance;

    tableElement = document.createElement("td");
    tableElement.innerHTML = i + 1;
    tableRow.insertAdjacentElement("beforeend", tableElement);

    tableElement = document.createElement("td");
    tableElement.innerHTML = users[i].name;
    tableRow.insertAdjacentElement("beforeend", tableElement);

    tableElement = document.createElement("td");
    tableElement.innerHTML = users[i].email;
    tableRow.insertAdjacentElement("beforeend", tableElement);

    tableElement = document.createElement("td");
    tableElement.innerHTML = users[i].balance;
    tableRow.insertAdjacentElement("beforeend", tableElement);
    container.insertAdjacentElement("beforeend", tableRow);
  }
  tableRow = document.createElement("tr");
  balanceTitleElement = document.createElement("td");
  balanceTitleElement.setAttribute("colspan", "3");
  balanceTitleElement.innerHTML = 'Total balance:';
  tableRow.insertAdjacentElement("beforeend", balanceTitleElement);

  balanceElement = document.createElement("td");
  balanceElement.innerHTML = totalBalance.toFixed(2);
  tableRow.insertAdjacentElement("beforeend", balanceElement);

  container.insertAdjacentElement("beforeend", tableRow);
}

function _printUsersTable(container, users) {
  container.innerHTML = "";
  let table = document.createElement("table");
  table.classList.add("table");

  container.insertAdjacentElement("afterbegin", table);
  _printUserTableHeader(table);
  _printUsersBody(table, users);
}

function printUsers(users) {
  let container = document.getElementById("container");
  _printUsersTable(container, users);
}

printUsers(users);

let sortButton = document.getElementById("sortButton");
let sortOrder = 0;

function sortAsc(a, b) {
    if (a.balance > b.balance) {
      return 1;
    } else if (a.balance < b.balance) {
      return -1;
    } else {
      return 0;
    }
}

function sortDesc(a, b) {
  return sortAsc(b, a);
}

sortButton.addEventListener('click', function () {
  if (sortOrder > 0) {
    users.sort(function (a, b) { return sortDesc(a, b); });
    sortOrder = -1;
    sortButton.innerHTML = `<i class="fa fa-arrow-down" aria-hidden="true"></i>`;
  } else {
    users.sort(function (a, b) { return sortAsc(a, b); });
    sortOrder = 1;
    sortButton.innerHTML = `<i class="fa fa-arrow-up" aria-hidden="true"></i>`;
  }
  printUsers(users);
});
