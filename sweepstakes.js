

function intervalFunc() {

const puppeteer = require('puppeteer');
var dt = new Date();

let data = require('./info.js');

(async () => {

	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto(data.info.website);

	await page.type('#ID', data.info.fname)
	await page.type('#ID', data.info.lname)
	await page.type('#ID', data.info.email)
	await page.type('#ID', data.info.address)
	await page.type('#ID', data.info.city)
	await page.type('#ID', data.info.state)
	await page.type('#ID', data.info.zip)

	await page.$$eval('input[type="checkbox"]', checkboxes=> {
		checkboxes.forEach(chkbox => chkbox.click())
	});

	await Promise.all([
		page.waitForNavigation(),
		page.click('#ID_OF_BUTTON')
	]);

	await page.screenshot({path: data.info.screenshot, fullPage: true}); // Confirm sent

	await browser.close();

	await console.log(dt.toString() + " " + data.info.fname + " Success"); // Confirm in console, but verify with the screenshot

})();

	var fs = require('fs')
	var logger = fs.createWriteStream(data.info.log, {
		flags: 'a' // append 
	})
	logger.write("\r\n"+ dt.toString() + " " + data.info.fname + " Success"); // Log your entries


}

setInterval(intervalFunc, 21600000*4); // 24 Hours


