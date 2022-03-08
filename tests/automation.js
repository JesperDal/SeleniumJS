const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require("assert");
var should = require("chai").should();

async function tests() {

// Launch the browser
let driver = await new Builder(). forBrowser("chrome").build();
await driver.sleep(500);

// navigate to application
await driver.get("https://lambdatest.github.io/sample-todo-app/")
await driver.sleep(1500);

// add a todo
await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Adding new todo with browser automatisation", Key.RETURN);
await driver.sleep(1000);

    //assert - Does text equal whats been entered
    let toDoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function(value){
    return value
    });

    //assert using chai should
    toDoText.should.equal("Adding new todo with browser automatisation");

//Checking that I have done the todo task
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).click();
await driver.sleep(1000);

let checkBoxOne = await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).isSelected().then((value) => {
      return value
   });
        checkBoxOne.should.be.true;

//assert - is text in counter correct
let confirmCounter = await driver.findElement(By.xpath("/html/body/div/div/div/span")).getText().then(function(value){
        return value
    });
        confirmCounter.should.equal("5 of 6 remaining");

//unmark the first todo on the list
await driver.findElement(By.xpath("/html/body/div/div/div/ul/li[1]/input")).click();
await driver.sleep(250)


  //finding all the checkbox elements on the page, then running function below
 await driver.findElements(By.xpath("//input[@type='checkbox']"))
    .then(async (checkBoxes) => {
      //statement above returns all the checkboxes in an array named checkBoxes and passes it to the function below
      const amount = checkBoxes.length; //how many checkboxes there are in total

      //running loop 12 times
      for (let i = 0; i <= 12; i++) {
        let randomizer = Math.floor(Math.random() * amount); // getting a random number between 0 and checkbox amount

        let checkbox = checkBoxes[randomizer]; //using the random index to get a random checkbox

        checkbox.click(); //clicking the checkbox
        await driver.sleep(250); //waiting and then restarting loop until the 12th time, then exits the loop
      }


    });

    const checkBoxes = await driver.findElements(
      By.xpath("//input[@type='checkbox']")
    );

    checkBoxes.forEach(async (checkbox) => {
      await checkbox.isSelected().then(async (checked) => {
        if (!checked) {
          await checkbox.click();
        }
      });
      await driver.sleep(150);

      let isChecked = await checkbox.isSelected();
      isChecked.should.be.true;


    });
    // close the browser
    await driver.sleep(1000);
    await driver.quit();
}
tests();


