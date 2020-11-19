const sleep = require('../sleep');
const random = require('../randomNum');
const secret = require('../../secrets/secret');

async function loginTinder(driver, webdriver, website) {
    console.log('Getting Tinder Website...');
    await driver.get(website);

    await sleep(3000);
    console.log('Logging in...');
    await driver.findElement(webdriver.By.xpath(`//*[@id="content"]/div/div[2]/div/div/div[1]/button`)).click();
    await sleep(random(300, 1100));
    await driver.findElement(webdriver.By.xpath(`//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/header/div[1]/div[2]/div/button`)).click();
    await sleep(random(300, 1100));
    await driver.findElement(webdriver.By.xpath(`//*[@id="modal-manager"]/div/div/div[1]/div/div[3]/span/div[2]/button`)).click();

    await sleep(random(800, 1000));
    const parent = await driver.getWindowHandle();
    const windows = await driver.getAllWindowHandles();
    console.log('Switching Windows...');
    await driver.switchTo().window(windows[1]);

    await sleep(random(400, 1200));
    console.log('Filling out forms...');
    await driver.findElement(webdriver.By.xpath(`//*[@id="email"]`)).sendKeys(secret.tinder.mail);
    await sleep(300, 600);
    await driver.findElement(webdriver.By.xpath(`//*[@id="pass"]`)).sendKeys(secret.tinder.password);
    await sleep(300, 600);
    await driver.findElement(webdriver.By.xpath(`//*[@id="loginbutton"]`)).click();
    await sleep(300, 600);
    await driver.findElement(webdriver.By.xpath(`//*[@id="platformDialogForm"]/div[3]/div/table/tbody/tr/td[2]/button[2]`)).click();

    await sleep(300, 600);
    console.log('Switching back to original window...');
    await driver.switchTo().window(parent);
    await sleep(3000, 5000);
    await driver.findElement(webdriver.By.xpath(`//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]`)).click();
    await sleep(1000, 1200);
    await driver.findElement(webdriver.By.xpath(`//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]`)).click();

    console.log('Successfully logged in!!!');
}

module.exports = loginTinder;