const { Given, When, Then, After } = require('cucumber');
const { Key } = require('selenium-webdriver');
const { expect } = require('chai');
const TodoPage = require('../page_objects/todo_page');

Given('Mở ứng dụng Todos List', async function () {
  await this.driver.get('https://cg-todo-list-demo.netlify.app/');
});

Given('Danh sách việc cần làm ban đầu rỗng', async function () {
  const todoPage = new TodoPage(this.driver);
  const items = await todoPage.getTodos();
  expect(items).to.have.lengthOf(0);
});

When('Thêm việc {string} vào danh sách', async function (todoText) {
  const todoPage = new TodoPage(this.driver);
  const todoInput = await todoPage.getTodoInput();
  await todoInput.sendKeys(todoText + Key.ENTER);
});

Then('Danh sách việc cần làm sẽ có {string}', async function (todoText) {
  const todoPage = new TodoPage(this.driver);
  const items = await todoPage.getTodos();
  const todo = await items[0].getText();
  expect(items).to.have.lengthOf(1);
  expect(todo).to.equal(todoText);
});

After(async function() {
  await this.driver.close();
});