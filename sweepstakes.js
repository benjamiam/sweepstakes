

function intervalFunc() {

const puppeteer = require('puppeteer');
var dt = new Date();

let data = require('./info.js');

(async () => {

	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto(data.info.website);

	await page.type('#first_name', data.info.fname)
	await page.type('#last_name', data.info.lname)
	await page.type('#email', data.info.email)
	await page.type('#street', data.info.address)
	await page.type('#city', data.info.city)
	await page.type('#state', data.info.state)
	await page.type('#zip_code', data.info.zip)

	await page.$$eval('input[type="checkbox"]', checkboxes=> {
		checkboxes.forEach(chkbox => chkbox.click())
	});

	await Promise.all([
		page.waitForNavigation(),
		page.click('#send2')
	]);

	await page.screenshot({path: data.info.screenshot, fullPage: true});

	await browser.close();

	await console.log(dt.toString() + data.info.fname + " Success");

})();

	var fs = require('fs')
	var logger = fs.createWriteStream(data.info.log, {
		flags: 'a' // append 
	})
	logger.write("\r\n"+ dt.toString() + data.info.fname + "  Success");


}

setInterval(intervalFunc, 21720000); // 6 hours 2 minutes


