const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();


//desribe block
describe("add todo tests", function(){

    //it block
    it("successfully adds a todo to application", async function(){

    });

});

async function example() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  //navigate to our application
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  //add a todo
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);

  //assert
  let todotext = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (value) {
      return value;
    });


  //assert using chai should
  todotext.should.equal("Learn Selenium");

  //close the browser
  await driver.quit();
}
example();
