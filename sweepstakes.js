

// function intervalFunc() {

const puppeteer = require('puppeteer');
var dt = new Date();

import { info } from './infobb.js';
import { local_info } from './infobb.js';


(async () => {

	const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
	const page = await browser.newPage();
	await page.goto(local_info.website);

	await page.type('#first_name', info.fname)
	await page.type('#last_name', info.lname)
	await page.type('#email', info.email)
	await page.type('#street', info.address)
	await page.type('#city', info.city)
	await page.type('#state', info.state)
	await page.type('#zip_code', info.zip)

	await page.$$eval('input[type="checkbox"]', checkboxes=> {
		checkboxes.forEach(chkbox => chkbox.click())
	});
/*
	await Promise.all([
		page.waitForNavigation(),
		page.click('#send2')
	]);
*/
	await page.screenshot({path: local_info.screenshot, fullPage: true});

	await browser.close();

	await console.log(dt.toString() + info.fname + " Success");

})();

	var fs = require('fs')
	var logger = fs.createWriteStream(local_info.log, {
		flags: 'a' // append 
	})
	logger.write("\r\n"+ dt.toString() + info.fname + "  Success");

/*
}

setInterval(intervalFunc, 21720000);

*/
