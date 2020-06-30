const { Given, When, Then, After } = require('cucumber');
const { Key } = require('selenium-webdriver');
const { expect } = require('chai');

Given('Mở ứng dụng Todos List', async function () {
  await this.driver.get('https://cg-todo-list-demo.netlify.app/');
});

Given('Danh sách việc cần làm ban đầu rỗng', async function () {
  const todolist = await this.driver.findElement({css: '.todo-list'});
  const items = await todolist.findElements({css: 'li'});
  expect(items).to.have.lengthOf(0);
});

When('Thêm việc {string} vào danh sách', async function (todoText) {
  const todoInput = await this.driver.findElement({css: '.js-todo-input'});
  await todoInput.sendKeys(todoText + Key.ENTER);
});

Then('Danh sách việc cần làm sẽ có {string}', async function (todoText) {
  const todolist = await this.driver.findElement({css: '.todo-list'});
  const items = await todolist.findElements({css: 'li'});
  const todo = await items[0].getText();
  expect(items).to.have.lengthOf(1);
  expect(todo).to.equal(todoText);
});

After(async function() {
  await this.driver.close();
});