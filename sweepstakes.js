

// function intervalFunc() {

const puppeteer = require('puppeteer');
var dt = new Date();

const data = require('./infobb.js');

(async () => {

	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto(data.local_info[0]);

	await page.type('#first_name', data.info[0])
	await page.type('#last_name', data.info[1])
	await page.type('#email', data.info[2])
	await page.type('#street', data.info[3])
	await page.type('#city', data.info[4])
	await page.type('#state', data.info[5])
	await page.type('#zip_code', data.info[6])

	await page.$$eval('input[type="checkbox"]', checkboxes=> {
		checkboxes.forEach(chkbox => chkbox.click())
	});
/*
	await Promise.all([
		page.waitForNavigation(),
		page.click('#send2')
	]);
*/
	await page.screenshot({path: data.local_info[1], fullPage: true});

	await browser.close();

	await console.log(dt.toString() + info.fname + " Success");

})();
/*
	var fs = require('fs')
	var logger = fs.createWriteStream(data.local_info[3], {
		flags: 'a' // append 
	})
	logger.write("\r\n"+ dt.toString() + data.info.fname + "  Success");
*/
/*
}

setInterval(intervalFunc, 21720000);

*/
