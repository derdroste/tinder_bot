const sleep = require('../sleep');
const random = require('../randomNum');

async function likeTinder(driver, webdriver) {
    console.log('Preparing to like all the beautiful girls (and the "not-so-beautiful ones" too)...');
    await sleep(random(300, 1100));

    const alwaysTrue = true;
    while(alwaysTrue) {
        await sleep(random(300, 1100));
        console.log(await checkIfExists(driver, webdriver, `//*[@id="modal-manager"]/div/div/button[2]`));
        if (await checkIfExists(driver, webdriver, `//*[@id="modal-manager"]/div/div/button[2]`) === undefined) {
            console.log('try to click');
            await driver.findElement(webdriver.By.xpath(`//*[@id="modal-manager"]/div/div/button[2]`)).click();
        } else if (await checkIfExists(driver, webdriver, `//*[@id="modal-manager"]/div/div/div[2]/button[2]`) === undefined) {
            console.log('try to click');
            await driver.findElement(webdriver.By.xpath(`//*[@id="modal-manager"]/div/div/div[2]/button[2]`)).click();
        } else {
            console.log('Liked...');
            await driver.findElement(webdriver.By.xpath(`//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div[1]/div[2]/div[4]/button`)).click();    sleep(random(300, 1100));
        }
    }
}

async function checkIfExists (driver, webdriver, el) {
    try {
        await driver.findElement(webdriver.By.xpath(el)).then(function() {
            return true;
        });
    } catch {
        return false;
    }
}

module.exports = likeTinder;