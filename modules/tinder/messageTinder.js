const sleep = require('../sleep');
const random = require('../randomNum');
const secret = require('../../secrets/secret');

async function messageTinder(driver, webdriver) {
    const alwaysTrue = true;
    while (alwaysTrue) {
        await sleep(random(2000, 4000));
        console.log('Selecting girl...');
        let girlsName = await driver.findElement(webdriver.By.xpath(`//*[@id="matchListNoMessages"]/div[1]/div[3]/a/span/div/div`)).getText();
        console.log(girlsName);
        await driver.findElement(webdriver.By.xpath(`//*[@id="matchListNoMessages"]/div[1]/div[3]`)).click();
        await sleep(random(800, 1000));
        await driver.findElement(webdriver.By.xpath(`//*[@id="messages-tab"]`)).click();
        console.log('Messaging girl...');
        await sleep(random(800, 1000));
        const message = await driver.findElement(webdriver.By.xpath(`//*[@id="chat-text-area"]`));
        await message.click();
        await message.sendKeys(`${secret.tinder.message.firstPart}${girlsName}${secret.tinder.message.secondPart}`);
        await sleep(random(800, 1000));
        console.log('Send message...');
        await sleep(random(800, 1000));
        await driver.findElement(webdriver.By.xpath(`//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div/div[1]/div/div/div[3]/form/button[2]`)).click();
        await sleep(random(800, 1000));
        await driver.findElement(webdriver.By.xpath(` //*[@id="match-tab"]`)).click();
        await sleep(random(800, 1000));
    }
}

module.exports = messageTinder;
