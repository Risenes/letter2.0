let arrNumber = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
	"二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"];

function csvJSON(csvText) {
		let lines = [];
		const linesArray = csvText.split('\n');
		// for trimming and deleting extra space 
		linesArray.forEach((e) => {
			const row = e.replace(/[\s]+[,]+|[,]+[\s]+/g, ',').trim();
			lines.push(row);
		});
		// for removing empty record
		lines.splice(lines.length - 1, 1);
		const result = [];
		const headers = lines[0].split(",");

		for (let i = 1; i < lines.length; i++) {

			const obj = {};
			const currentline = lines[i].split(",");

			for (let j = 0; j < headers.length; j++) {
				obj[headers[j]] = currentline[j];
			}
			result.push(obj);
		}
		//return result; //JavaScript object
		// return JSON.stringify(result); //JSON
		return result;
}

function getValue() {
	
	let date = new Date();
	let year = date.getFullYear() - 2018;
	let checkBoxWeather = document.getElementById("Weather");
	let checkBoxArm = document.getElementById("Arm");
	let checkBoxHealth = document.getElementById("Health");

	let weather = "";
	let arm = "";
	let health = "";


	let dateLetter = " 令和 " + arrNumber[year - 1] + " 年 " + arrNumber[date.getMonth()] + " 月　" + arrNumber[date.getDate() - 1] + " 日　";
	document.getElementById('letter__date').innerHTML = dateLetter;

	selfName = document.letter__form.selectName.value.toLowerCase();
	document.getElementById('letter__name').innerHTML = selfName;

	// document.getElementById('letter__body').innerHTML = arrLetterBody.join("<br />");



	let rawFile = new XMLHttpRequest();
	rawFile.open("GET", "/letter2.0/table.csv", false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				let allText = rawFile.responseText;
				let result = csvJSON(allText);
				console.log(result)
				let jsLetter = JSON.stringify(result);
				console.log(jsLetter)
				
				
				let resHello = result.map(x => x.Приветствие).filter(String)
				console.log(resHello)
				let helloR = resHello[Math.floor(Math.random() * resHello.length)];
				console.log(helloR)
				document.getElementById('letter__hello').innerHTML = helloR + " いつも　お世話に　なって　おります。";

// 				let senseiHealth = result.map(x => x.ЗдоровьеСенсея).filter(String)
// 				let SHR = checkText(senseiHealth)

// 				let sapporoWeather = result.map(x => x.СаппороПогода).filter(String)
// 				let SWR = checkText(sapporoWeather)
				

// 				let thxLetter = result.map(x => x.ЗаПисьмо).filter(String)
// 				let LR = checkText(thxLetter)

// 				let thxCheck = result.map(x => x.заПроверку).filter(String)
// 				let CR = checkText(thxCheck)
				
// 				let resW
// 				let resWeather
// 				if (checkBoxWeather.checked == true) {
// 					weather = document.getElementById('weather').value;
// 					resWeather = result.map(x => x[weather]).filter(String)
// 					resW = checkText(resWeather)
// 				} else {
// 					resW = "";
// 				}
				
// 				let resH
// 				let resHealth
// 				if (checkBoxHealth.checked == true) {
// 					health = document.getElementById('selfHealth').value;
// 					resHealth = result.map(x => x[health]).filter(String)
// 					resH = checkText(resHealth)
// 				} else {
// 					resH = "";
// 				}

// 				let resArm
// 				let resA
// 				if (checkBoxArm.checked == true) {
// 					arm = document.getElementById('selfArm').value;
// 					resArm = result.map(x => x[arm]).filter(String)
// 					resA = checkText(resArm)
// 				} else {
// 					resA = "";
// 				}

// 				let letterBody = SHR + SWR + LR + CR + resW + resH +resA;
// 				document.getElementById('letter__body').innerHTML = letterBody;

// 				city = document.letter__form.selectCity.value.toLowerCase();
// 				if (city) {
// 				document.getElementById("letter__body").innerHTML = document.getElementById("letter__body").innerHTML.replace('city', city);
// 				}

// 				let resBye = result.map(x => x.Прощание).filter(String)
// 				let byeR = checkText(resBye)
// 				document.getElementById('letter__bye').innerHTML = byeR + "これからも よろしく お願い　いたします。"
			}
		}
	}
	city = document.letter__form.selectCity.value.toLowerCase();
	if (city) {
		document.getElementById("letter__body").innerHTML = document.getElementById("letter__body").innerHTML.replace('city', city);
	}
	rawFile.send(null);
}

function boxFunctionWeather() {
	let checkBox = document.getElementById("Weather");
	if (checkBox.checked == true) {
		weather.disabled = false;
	} else {
		weather.disabled = true;
	}
}

function boxFunctionArm() {
	let checkBox = document.getElementById("Arm");
	if (checkBox.checked == true) {
		selfArm.disabled = false;
	} else {
		selfArm.disabled = true;
	}
}

function boxFunctionHealth() {
	let checkBox = document.getElementById("Health");
	if (checkBox.checked == true) {
		selfHealth.disabled = false;
	} else {
		selfHealth.disabled = true;
	}
}

function checkText(arrR) {
	let checkT = document.getElementById("letter").innerHTML;
	let textR = arrR[Math.floor(Math.random() * arrR.length)];
	while (checkT.includes(textR)) {
		textR = arrR[Math.floor(Math.random() * arrR.length)];
	}
	return textR;
}
