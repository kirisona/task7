/*
6. Дан массив пользователей, его можно скопировать [отсюда](https://www.notion.so/8e2b70ab692a4986b1816ce7dd2fb1ca), создать таблицу (см. презентацию).

Условия:
* В конце таблицы обязательно последняя `tr` должна содержать `total balance` всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю. 
* Количество пользователей может быть любым.
* Таблица и все ее содержимое должно создаваться через `js`, в разметке у вас может быть только контейнер какой то.
* В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков `th` которые будут выводиться в таблице. Что то типа `{ name: ‘Name’, email: ‘Email’... }` соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок `th`.

7. Из домашнего задания “Занятие 4 - Манипуляция DOM. Работа с атрибутами.” Дополнить функционал для таблицы из задачи 6. Создать кнопку которая будет при клике сортировать пользователей по возрастанию и убыванию поля `balance` при этом в кнопке должна показываться стрелка в какую сторону сейчас отсортированы пользователи. Иконки можете взять с font awesome, в качестве фреймворка использовался bootstrap.

*/

const clients = [
  {
    number: "#",
    name: "Name",
    email: "Email",
    balance: "Balance"
  },
  {
    number: 1,
    name: "Buckner Osborne",
    email: "bucknerosborne@empirica.com",
    balance: 2853.33
  },
  {
    number: 2,
    name: "Rosalie Smith",
    email: "rosaliesmith@katakana.com",
    balance: 1464.63
  },
  {
    number: 3,
    name: "Estrada Davenport",
    email: "estradadavenport@ebidco.com",
    balance: 2823.39
  },
];

let amount = 0;
for (let i = 1; i < clients.length; i++) {
  amount += clients[i].balance;
}

let container = document.querySelector(".container");

let table = document.createElement("table");

container.insertAdjacentElement("afterbegin", table);

let tableMain = container.querySelector("table");

let tableClients = `
  <tr>
    <th>${clients[0].number}</th>
    <th>${clients[0].name}</th>
    <th>${clients[0].email}</th>
    <th>${clients[0].balance}</th>
  </tr>`;

tableMain.insertAdjacentHTML("afterbegin", tableClients);

tableMain.setAttribute("class", "table");

let clientsList = [];

let tableBody = container.querySelector("tbody");

for (let i = 1; i < clients.length; i++) {
  let client = `
  <tr>
    <td>${clients[i].number}</td>
    <td>${clients[i].name}</td>
    <td>${clients[i].email}</td>
    <td>${clients[i].balance}</td>
  </tr>`;

  tableBody.insertAdjacentHTML("beforeend", client);
}

let total = `
  <tr>
    <td colspan="4" style="text-align: right;">Total balance: <strong>${amount}</strong></td>
  </tr>`;

tableBody.insertAdjacentHTML("beforeend", total);

let button = document.createElement('button');

container.insertAdjacentElement('afterbegin', button);

button.setAttribute('class', 'btn btn-outline-secondary');

button.addEventListener('click', sortTable);

function sortTable(event) {

  button.insertAdjacentHTML('afterbegin', `<i class="fa fa-arrow-down" aria-hidden="true"></i>`);

  let allTr = document.querySelectorAll('tr');

  console.log(allTr);

  for (let i = 1; i < allTr.length - 1; i++) {
    let balance = parseFloat(allTr[i].lastChild);
    console.log(balance);
  }





}
