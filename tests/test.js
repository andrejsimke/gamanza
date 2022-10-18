const {By, Key, Builder} = require ("selenium-webdriver")
require("chromedriver")

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://gamanza.com")

    //await driver.findElement(By.name("q")).sendKeys("Hello world!!!", Key.RETURN)

    //await driver.findElement(By.name("your-message")).sendKeys("Hello world!!!")
    //await driver.findElement(By.name("your-email")).sendKeys("test@test.com", Key.RETURN)
    await driver.findElement(By.id("ak_js_1"))
    
    
    //await driver.findElement(By.name("your-email")).sendKeys("test@test.com")
    //await driver.findElement(By.name("your-email")).sendKeys(), Key.RETURN
    //await driver.findElement(By.linkText("Submit"))
    
    //driver.findElement(By.id("#wpcf7-f166-p2821-o1 > form > div.edgtf-two-columns-50-50.clearfix > div > div:nth-child(3) > input"))
    //driver.findElement(By.xpath("//html/body/div[2]/div/div/div/div/div/div[23]/div/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div/div/form/div[4]/div/div[3]/input")).click()

            
         //document.querySelector("#wpcf7-f166-p2821-o2 > form > div.edgtf-two-columns-50-50.clearfix > div > div:nth-child(3) > input")
    //#wpcf7-f166-p2821-o2 > form > div.edgtf-two-columns-50-50.clearfix > div > div:nth-child(3) > input
/*
    setInterval(function(){
        driver.quit()
    }, 15000)
*/

}

test_case()