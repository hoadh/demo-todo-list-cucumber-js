const seleniumWebdriver = require('selenium-webdriver');
const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build()
    
    this.waitForElement = function(locator) {
      const condition = seleniumWebdriver.until.elementLocated(locator)
      return this.driver.wait(condition)
    }
  }
}

setWorldConstructor(CustomWorld);