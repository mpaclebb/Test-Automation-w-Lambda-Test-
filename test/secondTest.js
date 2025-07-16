import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";

const ltCapabilities = require("../capabilities");
var driver;

should();

//desribe block
describe("add another todo tests", function () {
  //username
  const USERNAME = ltCapabilities.capabilities.user;

  //key
  const key = ltCapabilities.capabilities.accessKey;

  //host
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  const gridURL = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

  this.beforeEach(function () {
    driver = new Builder().usingServer(gridURL).withCapabilities(ltCapabilities.capabilities).build();
  });
  //it block
  it("successfully adds another todo to application", async function () {
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
  });
});
