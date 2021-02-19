const request = require("request");
const cheerio = require("cheerio");

request(
	"https://www.miss-thrifty.co.uk/the-mythbusters-guide-to-saving-money-on-energy-bills/",
	(error, response, html) => {
		if (!error && response.statusCode === 200) {
			const $ = cheerio.load(html);

			const siteHeading = $(".post-head-title");
			const output = siteHeading.children("h1").next().text();
			console.log(output);
		}
	}
);
