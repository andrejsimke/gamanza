const {By, Key, Builder, until} = require ("selenium-webdriver")
const chrome = require('selenium-webdriver/chrome');
var should = require("chai").should()
require("chromedriver")

describe("Gamanza web page automation", function(){

    it("Send e-mail via form", async function(){
        this.timeout(0);
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.get("https://gamanza.com")    
        await driver.findElement(By.name("your-message")).sendKeys("Lep pozdrav Gamanza svet!!!")
        await driver.findElement(By.name("your-email")).sendKeys("test@test.com", Key.RETURN)
        await driver.sleep(1000)
        let formErrorText = await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getAttribute("innerHTML")
        formErrorText.should.not.be.equal("There was an error trying to send your message. Please try again later.")
        driver.quit()
    })
    
    it("Check if Our clients icons clickable and open new tab when clicken on", async function(){
        this.timeout(0);
        let driver = await new Builder().forBrowser("chrome").build()    
        await driver.get("https://gamanza.com") 
        await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[8]/div")).click();
        let BrowserTabs = await driver.getAllWindowHandles()
        await driver.switchTo().window(BrowserTabs[1])
        const tabURL = await driver.getCurrentUrl()
        tabURL.should.equal("https://www.grandcasinobaden.ch/")
        driver.quit()
        })
})