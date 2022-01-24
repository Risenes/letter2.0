// let key = "311293879799-ji3ipbilim7sa2m26vvae4hin99lsk52.apps.googleusercontent.com"
// let secretKey = "TUpZ6mIkoiJdZYQlWTqOvdA9"

// const myHeaders = new Headers();

// myHeaders.append('Authorization', secretKey)

// let link = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAZjtydpIMEAhTf2nGH9K9hKfTVYetWn_vg4fsPHDPTrGrB4LxZpo5qwbpWeCpGCsDGB_lCBqudIJZ/pubhtml?gid=1541758764&single=true"

// let url = "https://github.com/Risenes/letter2.0/blob/main/table.csv"
// let url2 = "../table.csv"

// let newUrl = "https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:json&sheet=generator"

// let nUrl = "https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator"

// async function letter(url) {
// 	try {
// 		let response = await fetch(url);
// 		console.log(response)
// 		// let sheet = await response.json();
// 		// console.log(sheet);
// 		function csvJSON(f) {

// 			let lines = f.toString().split('\n')

// 			let result = [];

// 			let headers = lines[0].split(',');
// 			lines.splice(0, 1);
// 			lines.forEach(function (line) {
// 				let obj = {};
// 				let currentline = line.split(',');
// 				headers.forEach(function (header, i) {
// 					obj[header] = currentline[i];
// 				});
// 				result.push(obj);
// 			});

// 			// return result; //JavaScript object
// 			return JSON.stringify(result); //JSON
// 		}
// 		table = csvJSON(response)
// 		console.log(table)
// 	}
// 	catch (e) {
// 		console.error(e);
// 	}
// }

// let file = letter(url2)
// console.log(file)

// function toJson(csvData) {
//   var lines = csvData.split("\n");
//   var colNames = lines[0].split(",");
//   var records=[];
//   for(var i = 1; i < lines.length; i++) {
//     var record = {};
//     var bits = lines[i].split(",");
//     for (var j = 0 ; j < bits.length ; j++) {
//       record[colNames[j]] = bits[j];
//     }
//     records.push(record);
//   }
//   return records;
// }

// var rawFile = new XMLHttpRequest();
// rawFile.open("GET", "../table.csv", true);
// rawFile.onreadystatechange = function () {
//   if (rawFile.readyState === 4) {
//     if (rawFile.status === 200 || rawFile.status == 0) {
//       var allText = rawFile.responseText;
//       var result = toJson(allText);
//       console.log(JSON.stringify(result));
//     }
//   }
// }
// rawFile.send(null);




// const selCont = document.querySelector('.select')

// const sel = document.createElement('select')

// function select(obj) {
// 	for (let [index, item] of obj.entries()) {
// 		let el = document.createElement('option')
// 		index == 0 ? el.setAttribute('selected', '') : false
// 		el.value = item.Приветствие;
// 		el.innerHTML = item.Приветствие

// 		sel.appendChild(el)
// 		console.log(index, item)
// 	}
// 	selCont.appendChild(sel)
// }

// let rawFile = new XMLHttpRequest();
// rawFile.open("GET", "../../table.csv", true);
// rawFile.onreadystatechange = function () {
// 	if (rawFile.readyState === 4) {
// 		if (rawFile.status === 200 || rawFile.status == 0) {
// 			let allText = rawFile.responseText;
// 			let result = csvJSON(allText);
// 			jsLetter = JSON.stringify(result);
// 			objLetter = JSON.parse(jsLetter)
// 			console.log(objLetter);
// 			select(objLetter)
// 		}
// 	}
// }

let arrNumber = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
	"二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"];

function getValue() {
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
	rawFile.open("GET", "../table.csv", true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				let allText = rawFile.responseText;
				let result = csvJSON(allText);
				console.log(result)
				jsLetter = JSON.stringify(result);
				console.log(jsLetter)
				
				let resHello = result.map(x => x.Приветствие).filter(String)
				let helloR = checkText(resHello);
				document.getElementById('letter__hello').innerHTML = helloR + " いつも　お世話に　なって　おります。";

				let senseiHealth = result.map(x => x.ЗдоровьеСенсея).filter(String)
				let SHR = checkText(senseiHealth)

				let sapporoWeather = result.map(x => x.СаппороПогода).filter(String)
				let SWR = checkText(sapporoWeather)
				

				let thxLetter = result.map(x => x.ЗаПисьмо).filter(String)
				let LR = checkText(thxLetter)

				let thxCheck = result.map(x => x.заПроверку).filter(String)
				let CR = checkText(thxCheck)
				
				let resW
				let resWeather
				if (checkBoxWeather.checked == true) {
					weather = document.getElementById('weather').value;
					resWeather = result.map(x => x[weather]).filter(String)
					resW = checkText(resWeather)
				} else {
					resW = "";
				}
				
				let resH
				let resHealth
				if (checkBoxHealth.checked == true) {
					health = document.getElementById('selfHealth').value;
					resHealth = result.map(x => x[health]).filter(String)
					resH = checkText(resHealth)
				} else {
					resH = "";
				}

				let resArm
				let resA
				if (checkBoxArm.checked == true) {
					arm = document.getElementById('selfArm').value;
					resArm = result.map(x => x[arm]).filter(String)
					resA = checkText(resArm)
				} else {
					resA = "";
				}

				let letterBody = SHR + SWR + LR + CR + resW + resH +resA;
				document.getElementById('letter__body').innerHTML = letterBody;

				city = document.letter__form.selectCity.value.toLowerCase();
				if (city) {
				document.getElementById("letter__body").innerHTML = document.getElementById("letter__body").innerHTML.replace('city', city);
				}

				let resBye = result.map(x => x.Прощание).filter(String)
				let byeR = checkText(resBye)
				document.getElementById('letter__bye').innerHTML = byeR + "これからも よろしく お願い　いたします。"
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




// https://docs.google.com/spreadsheets/d/e/2PACX-1vRAZjtydpIMEAhTf2nGH9K9hKfTVYetWn_vg4fsPHDPTrGrB4LxZpo5qwbpWeCpGCsDGB_lCBqudIJZ/pub?gid=2041280469&single=true&output=csv


// For Reading CSV File
// function readCSV(event) {
// 	const reader = new FileReader();
// 	reader.readAsText(event.files[0]);
// 	reader.onload = () => {
// 		const text = reader.result;
// 		const csvToJson = this.csvJSON(text);
// 		console.log(csvToJson);
// 	};
// }

// name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ master ]
//   pull_request:
//     branches: [ master ]

//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: add table
//       run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table.cvs
//     - uses: actions/upload-artifact@v2
//       with:
//         name: my-artifact
//         path: table.cvs

//     - name: Commit files
//       run: |
//          git init
// 					git config --local user.email "risenes@gmail.com"
// 					git config --local user.name "Risenes"
// 					git add table.cvs
// 					git commit -m "Add changes"
//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with:

//           github_token: ${{ secrets.LETTER }}
//           force: true

// name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ master ]
//   pull_request:
//     branches: [ master ]

//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: add table
//       run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.cvs
//     - uses: actions/upload-artifact@v2
//       with:
//         name: my-artifact
//         path: table1.cvs
//     - name: Commit files
//       run: |
//         git init
//         git add table1.cvs
//         git config --global user.email "risenes@gmail.com"
//         git config --global user.name "Risenes"
//         git commit -m "Add changes"
//         git remote add origin https://github.com/Risenes/letter2.0.git
//         git clone https://github.com/Risenes/letter2.0.git
//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with:

//         github_token: ${{ secrets.LETTER }}
//         force: true


// 				name: Curl table

// 				on:
// 					schedule:
// 						- cron:  '30 5,17 * * *'
// 					push:
// 						branches: [ master ]
// 					pull_request:
// 						branches: [ master ]

// 					workflow_dispatch:

// 				jobs:
// 					run_tests:
// 						runs-on: ubuntu-20.04
// 						steps:
// 						- name: add table
// 							run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.cvs
// 						- uses: actions/upload-artifact@v2
// 							with:
// 								name: my-artifact
// 								path: table1.cvs
// 						- name: move to dir # Move the generated files into output folder
// 							run: |
// 								mkdir -p output
// 								yes| cp -rf table1.cvs ./output/
// 						- name: Commit files
// 							run: |
// 								git config --global user.email "risenes@gmail.com"
// 								git config --global user.name "Risenes"
// 								git add ./output
// 								git commit -m "Add changes"
// 						- name: Push changes # push the output folder to your repo
// 							uses: ad-m/github-push-action@master
// 							with:

// 								github_token: ${{ secrets.LETTER }}
// 								force: true







// Рабочий актионс

// name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ master ]
//   pull_request:
//     branches: [ master ]

//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: checkout
//       uses: actions/checkout@v2
//     - name: add table
//       run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.cvs
//     - uses: actions/upload-artifact@v2
//       with:
//         name: my-artifact
//         path: table1.cvs
//     - name: move to dir # Move the generated files into output folder
//       run: |
//         mkdir -p output
//         yes| cp -rf table1.cvs ./output/
//     - name: Commit files
//       run: |

//         git clone https://github.com/Risenes/letter2.0
//         git config --global user.email "risenes@gmail.com"
//         git config --global user.name "Risenes"
//         git add table1.cvs
//         git commit -m "Add changes"

//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with:

//         github_token: ${{ secrets.LETTER }}
//         force: true







//         name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ main ]
//   pull_request:
//     branches: [ main ]

//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: checkout
//       uses: actions/checkout@v2

//     - name: Clone
//       run: |
//         git ls-files
//         git remote show origin https://github.com/Risenes/letter2.0 .
//         git config --global user.email "risenes@gmail.com"
//         git config --global user.name "Risenes"
//     - name: Load table
//       run: |
//         curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.csv
//         cat table1.csv
//         git add table1.csv
//         git branch -u origin/main
//         git commit -m "Update table by bot"

//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with:

//         github_token: ${{ secrets.LETTER }}
//         force: true



//         name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ main ]
//   pull_request:
//     branches: [ main ]

//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: checkout
//       uses: actions/checkout@v2

//     - name: Clone
//       run: |
//         git ls-files
//         git remote show origin https://github.com/Risenes/letter2.0 .
//         git config --global user.email "risenes@gmail.com"
//         git config --global user.name "Risenes"
//     - name: Load table
//       run: |
//         curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.csv
//         cat table1.csv
//         git add table1.csv
//         git branch -u origin/main
//         git commit -m "Update table by bot"
//     - uses: actions/upload-artifact@v2
//       with:
//         name: my-artifact
//         path: table1.csv
//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with:

//         github_token: ${{ secrets.LETTER }}
//         force: true



//         name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ main ]
//   pull_request:
//     branches: [ main ]

//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: checkout
//       uses: actions/checkout@v2

//     - name: Clone
//       run: |
//         git ls-files
//         git remote show origin https://github.com/Risenes/letter2.0 .
//         git config --global user.email "risenes@gmail.com"
//         git config --global user.name "Risenes"
//     - name: Load table and commit
//       run: |-
//         curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator | jq . > table1.csv
//         cat table1.csv
//         git add table1.csv
//         git branch -u origin/main
//         git commit -m "Update table by bot"
//         git push
//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with:

//         github_token: ${{ secrets.LETTER }}
//         force: true





// name: Curl table

// on:
//   schedule:
//     - cron:  '30 5,17 * * *'
//   push:
//     branches: [ main ]
//   pull_request:
//     branches: [ main ]
  
//   workflow_dispatch:

// jobs:
//   run_tests:
//     runs-on: ubuntu-20.04
//     steps:
//     - name: checkout
//       uses: actions/checkout@v2
//     - name: Clone
//       run: |        
//         git ls-files
//         git remote show origin https://github.com/Risenes/letter2.0
//         git config --global user.email "risenes@gmail.com"
//         git config --global user.name "Risenes"
//     - name: Download Feed
//       run: |-
//         curl "https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator" > table.csv
//         cat table.csv
//         git status
//         git add table.csv
//         git branch -u origin/main
//         git commit -m "Add changes" || echo Nothing to change
//         git push || echo Nothing to change
//     - name: Push changes # push the output folder to your repo
//       uses: ad-m/github-push-action@master
//       with: 
        
//         github_token: ${{ secrets.LETTER }}
//         force: true
