const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

async function tests() {

// Launch the browser
let driver = await new Builder(). forBrowser("chrome").build();
await driver.sleep(1500);

// navigate to application
await driver.get("https://lambdatest.github.io/sample-todo-app/")
await driver.sleep(1500);

// add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("New todo", Key.RETURN);
await driver.sleep(1500);

//select the first todo on the list
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).click();
await driver.sleep(1500);

//unmark the first todo on the list
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).click();
await driver.sleep(250)
//mark all the checkboxes
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).click();
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[2]/input")).click();
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[3]/input")).click();
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[4]/input")).click();
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[5]/input")).click();
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/input")).click();
await driver.sleep(500);

await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[3]/input")).click();
await driver.sleep(250);
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).click();
await driver.sleep(250);
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[4]/input")).click();
await driver.sleep(250);
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[2]/input")).click();
await driver.sleep(250);
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[5]/input")).click();
await driver.sleep(250);
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[6]/input")).click();
await driver.sleep(250);



//assert
let toDoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
return value
});

//assert using node assertion
//assert.strictEqual(toDoText, "New todo");

//assert using chai should
toDoText.should.equal("New todo");




// close the browser
await driver.sleep(2000);
await driver.quit();

}
tests()