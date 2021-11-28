let startDateOfTheYear = "2021-01-06";
let skipDates = ["23.6.2021", "29.9.2021", "22.12.2021", "5.1.2021"];
let wednesdayArray = [];
let wednesday = new Date(startDateOfTheYear);
let today = new Date();
let yesterday = today - 86400000;


for (let i = 0; i < 30; i++) {

	let wednesdayLocale = wednesday.toLocaleDateString("de-DE");
	if ( yesterday < wednesday   &&   skipDates.indexOf(wednesdayLocale) == -1 ) {
		wednesdayArray.push(wednesdayLocale);
	}

	wednesday.setDate(wednesday.getDate() + 14);


	// console.log(wednesday.toLocaleDateString("de-DE"));
}

console.log(wednesdayArray);










let nextThreeEventDates = wednesdayArray.slice(0, 3);

document.getElementsByClassName("featured-heading-wrap")[0].innerHTML = "<p>remote Termine (https://seibert.biz/programmieren-event), immer 16.00 Uhr: " + nextThreeEventDates.join(", ") + "</p>";




