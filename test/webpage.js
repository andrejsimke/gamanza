const {By, Key, Builder, until} = require ("selenium-webdriver")
const chrome = require('selenium-webdriver/chrome');
const assert = require("assert")
var should = require("chai").should()
require("chromedriver")

//Describe block
describe("Gamanza web page automation", function(){

    //Send form
    it("Send e-mail form", async function(){
        this.timeout(0);
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://gamanza.com")    
        await driver.findElement(By.name("your-message")).sendKeys("Lep pozdrav Gamanza svet!!!")
        await driver.findElement(By.name("your-email")).sendKeys("test@test.com", Key.RETURN)
        await driver.sleep(1000)
        let formErrorText = await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getAttribute("innerHTML")
        formErrorText.should.not.be.equal("There was an error trying to send your message. Please try again later.")
    })
    it("Open google webpage", async function(){
        this.timeout(0);
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://gamanza.com")    
        
        
        await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[22]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[11]/div[1]/a[1]/span[1]/img[1]")).click()
    })
})


    