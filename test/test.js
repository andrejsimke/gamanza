// const {By, Key, Builder, until, Browser} = require ("selenium-webdriver")
// const chrome = require('selenium-webdriver/chrome');
// //const assert = require("assert")
// var should = require("chai").should()
// require("chromedriver")

// async function test_case(){
//     let driver = await new Builder().forBrowser("chrome").build()
//     await driver.get("https://gamanza.com") 
//     await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[8]/div")).click();
//     let BrowserTabs = await driver.getAllWindowHandles()
//     await driver.switchTo().window(BrowserTabs[1])
//     const tabURL = await driver.getCurrentUrl()
//     tabURL.should.equal("https://www.grandcasinobaden.ch/")

//     // let a = await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[11]/div/a/span/img")).getAttribute("alt")
//     // let b = await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[6]/div/span/img")).getAttribute("alt")
//     // //let a = await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[6]/div")).getAttribute("innerHtml")
//     // console.log("++++", a)
//     // console.log("++++", b)

//     // let tab1 = await driver.getWindowHandle()
//     // console.log("tab1", tab1)


//     // let tab2 = await driver.getWindowHandle();
//     // console.log("tab2", tab2)

//     //if(await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[8]/div")))
//     //driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[8]/div")).click();
    
//     //await driver.switchTo().window(tabs)
//     // await driver.switchTo().window(tab1)
    

    
//     //driver.switchTo().window(tabs.get(2))
//     // await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[8]/div")).click();
//     // /html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[1]/div
//     // /html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[8]/div
//     // /html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[15]/div
//     // //await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[11]/div")).click();
    
    

//    // driver.navigate().to("https://gamanza.com");  
    
//     // //get window handlers as list
//     // const browserTabs = new ArrayList (driver.getWindowHandles());
//     // driver.switchTo().window(browserTabs .get(0));
//     // //check is it correct page opened or not (e.g. check page's title)
//     // //...
//     // //then close tab and get back
//     // driver.close();
//     // driver.switchTo().window(browserTabs.get(1))

//     //let browserTabs = await driver.WindowHandles();            
//     // driver.SwitchTo().Window(browserTabs[0]);
//     // driver.Close();
//     // driver.SwitchTo().Window(browserTabs[1]);

// //check is it correct page opened or not (e.g. check page's title or url, etc.)
// // ...
// //close tab and get back

//     //await driver.findElement(By.xpath("/html/body/div[2]/div/div/div/div/div/div[22]/div/div/div/div/div/div[4]/div/div/div/div[11]/div"))
//     //await driver.sleep(2000)
//     //await driver.findElement(By.linkText("https://www.jackpots.ch/en/")).click();
    

//     /*
//     //Open page
//     await driver.get("https://gamanza.com")    
//     await driver.findElement(By.name("your-message")).sendKeys("Lep pozdrav Gamanza svet!!!")
//     await driver.findElement(By.name("your-email")).sendKeys("test@test.com", Key.RETURN)
//     //await driver.sleep(1000)
//     let a = await driver.findElement(By.xpath("html/body/div[2]/div/div/div/div/div/div[7]/div/div/div/div/div/h3")).getAttribute("innerHTML")
//     let b = await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getAttribute("innerHTML")
//     console.log("a=", a)
//     console.log("b=", b)

//      if (b.should.equal("There was an error trying to send your message. Please try again later."))
//          console.log("dela")
//     //b.should.not.be.equal("There was an error trying to send your message. Please try again later.")

// */

//     // let b = await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getText().then(function(value){
//     //     return value
//     // })

    
//     //await driver.findElement(By.xpath("//html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getText()
//     //await driver.findElement(By.xpath("//html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5] [contains(text(), 'There was an error trying to send your message. Please try again later.')]")).getText()
    
    
//     //There was an error trying to send your message. Please try again later.

   

//     //let a = await driver.findElement(By.xpath("html/body/div[2]/div/div/div/div/div/div[7]/div/div/div/div/div/h3")).getAttribute("innerHTML")
//     //let b = await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getAttribute("innerHTML")
    
//     //let b = driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getAttribute("innerHTML")
//     //let b = driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]"))
//     //const c = await driver.wait(until.elementTextContains(b, "There was an error trying to send your message. Please try again later."))
    
//     //await driver.wait(until.elementIsVisible(b), 2000);
    


//     // let b = await driver.findElement(By.xpath("html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getText().then(function(value){
//     //     return value
//     // })

//     //console.log("a=", a)
//     //console.log("test")
//     /*
//     let formErrorText1 = await driver.findElement(By.className("wpcf7-response-output")).getText().then(function(value){
//         return value
//     })
//     let formErrorText4 = await driver.findElement(By.xpath("//html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[23]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[5]")).getText()
    
//     formErrorText4.should.equal("There was an error trying to send your message. Please try again later.")
// */

//     /*
//     let formErrorText2 = await driver.findElement(By.xpath("//html/body/div[2]/div/div/div/div/div/div[20]/div/div/div/div/div/h2")).getText()
//     let formErrorText3 = "There was an error trying to send your message. Please try again later."

//     let formErrorText4 = await driver.findElement(By.css("form[class='wpcf7-form cf7_custom_style_1 failed'] div[class='wpcf7-response-output']")).getText()
    
//     let formErrorText5 = await driver.findElement(By.xpath("//html/body/div[2]/div/div/div/div/div/div[20]/div/div/div/div/div/h2")).getText()
    
//     //formErrorText4.should.equal("There was an error trying to send your message. Please try again later.")
// */
//     //await driver.quit()


    
    

//     //console.log("+++++++++++++++++++++++++++++", formErrorText)
//     //console.log(formErrorText1)
    
//     // if (formErrorText.should.equal("There was an error trying to send your message. Please try again later."))
//     //     console.log("dela")

//     // else (formErrorText.should.equal("There was an error trying to send your message. Please try again later."))
//     //     console.log("ne dela")


//     // setInterval(function(){
//     //     driver.quit()
//     // }, 2000)

    
//     //await driver.findElement(By.name("q")).sendKeys("Hello world!!!", Key.RETURN)

//     //await driver.findElement(By.name("your-message")).sendKeys("Hello world!!!")
//     //await driver.findElement(By.name("your-email")).sendKeys("test@test.com", Key.RETURN)
//     //await driver.findElement(By.id("ak_js_1"))
    
    
//     //await driver.findElement(By.name("your-email")).sendKeys("test@test.com")
//     //await driver.findElement(By.name("your-email")).sendKeys(), Key.RETURN
//     //await driver.findElement(By.linkText("Submit"))
    
//     //driver.findElement(By.id("#wpcf7-f166-p2821-o1 > form > div.edgtf-two-columns-50-50.clearfix > div > div:nth-child(3) > input"))
//     //driver.findElement(By.xpath("//html/body/div[2]/div/div/div/div/div/div[23]/div/div/div/div/div/div[2]/div/div/div[2]/div/div/div/div/div/form/div[4]/div/div[3]/input")).click()

            
//          //document.querySelector("#wpcf7-f166-p2821-o2 > form > div.edgtf-two-columns-50-50.clearfix > div > div:nth-child(3) > input")
//     //#wpcf7-f166-p2821-o2 > form > div.edgtf-two-columns-50-50.clearfix > div > div:nth-child(3) > input
// /*
//     setInterval(function(){
//         driver.quit()
//     }, 15000)
// */
//     //driver.manage().window().minimize()
    
   
// }
// test_case()