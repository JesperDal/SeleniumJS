const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

async function tests() {

// Launch the browser
let driver = await new Builder(). forBrowser("chrome").build();

// navigate to application
await driver.get("https://lambdatest.github.io/sample-todo-app/")

// add a todo
await driver.sleep(1500);
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

//assert
let toDoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
return value
});

//assert using node assertion
//assert.strictEqual(toDoText, "Learn Selenium");

//assert using chai should
toDoText.should.equal("Learn Selenium");



// close the browser
await driver.sleep(2000);
await driver.quit();

}
tests()