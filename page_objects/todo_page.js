class TodoPage {

  constructor(driver) {
    this.driver = driver;
    this.el = {
      todoList: {css: '.todo-list'},
      todoItems: {css: 'li'},
      todoInput: {css: '.js-todo-input'}
    };
  }

  async _findEl(el) {
    return await this.driver.findElement(el);
  }

  async getTodoInput() {
    return await this._findEl(this.el.todoInput);
  }

  async getTodos() {
    const todolist = await this.getTodoList();
    const items = await todolist.findElements(this.el.todoItems);
    return items;
  }

  async getTodoList() {
    const todolist = await this._findEl(this.el.todoList);
    return todolist;
  }

}

module.exports = TodoPage;