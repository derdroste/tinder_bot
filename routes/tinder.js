const express = require('express');
const router = express.Router();
const loginTinder = require('../modules/tinder/loginTinder');
const likeTinder = require('../modules/tinder/likeTinder');
const messageTinder = require('../modules/tinder/messageTinder');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const webdriver =  require('selenium-webdriver');
let driver = null;
let driverMessage = null;

router.post('/like',async (req, res) => {
    if(req.body.value === true) {
        try {
            driver = await new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
            await loginTinder(driver, webdriver, 'http://www.tinder.com/');
            await messageTinder(driver, webdriver);
        } catch (e) {
            console.log('Liking all the girls failed...', e);
            driver.quit();
        }
    } else {
        try {
            driver.quit();
            driver = null;
        } catch (e) {
            console.log('Liking all the girls failed...', e);
            driver.quit();
        }
    }
});

router.post('/message',async (req, res) => {
    if(req.body.value === true) {
        try {
            driverMessage = await new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
            await loginTinder(driverMessage, webdriver, 'http://www.tinder.com/');
            await likeTinder(driverMessage, webdriver);
        } catch (e) {
            console.log('Liking all the girls failed...', e);
            driverMessage.quit();
        }
    } else {
        try {
            driverMessage.quit();
            driverMessage = null;
        } catch (e) {
            console.log('Liking all the girls failed...', e);
            driverMessage.quit();
        }
    }
});

module.exports = router;
