const webdriver =  require('selenium-webdriver');
const express = require('express');
const app = express();
const views = require('./routes/views');
const tinder = require('./routes/tinder');
const cors = require('cors');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', views);
app.use('/api/tinder', tinder);
const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();
driver.get('http://www.localhost:3000/');

// Start App
const port = process.env.PORT || 3000;
app.listen(port, () =>  console.log(`App listening on port ${port}...`));
