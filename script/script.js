let key = "311293879799-ji3ipbilim7sa2m26vvae4hin99lsk52.apps.googleusercontent.com"
let secretKey = "TUpZ6mIkoiJdZYQlWTqOvdA9"

let link = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRAZjtydpIMEAhTf2nGH9K9hKfTVYetWn_vg4fsPHDPTrGrB4LxZpo5qwbpWeCpGCsDGB_lCBqudIJZ/pubhtml?gid=1541758764&single=true"

let url = "https://spreadsheets.google.com/feeds/list/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/od6/public/values?alt=json"

let newUrl ="https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:json&sheet=generator"

let nUrl ="https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator"

async function letter(url) {
	try {
		let response = await fetch(url);
		let sheet = await response.json();
		console.log(sheet);
	}
	catch (e) {
		console.error(e);
	}
}

letter(nUrl)

console.log("hello")

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

name: Curl table

on:
  schedule:
    - cron:  '30 5,17 * * *'
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
  
  workflow_dispatch:

jobs:
  run_tests:
    runs-on: ubuntu-20.04
    steps:
    - name: add table
      run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.cvs
    - uses: actions/upload-artifact@v2
      with:
        name: my-artifact
        path: table1.cvs
    - name: Commit files 
      run: |
        git init
        git add table1.cvs
        git config --global user.email "risenes@gmail.com"
        git config --global user.name "Risenes"
        git commit -m "Add changes"
        git remote add origin https://github.com/Risenes/letter2.0.git
        git clone https://github.com/Risenes/letter2.0.git
    - name: Push changes # push the output folder to your repo
      uses: ad-m/github-push-action@master
      with: 
        
        github_token: ${{ secrets.LETTER }}
        force: true


				name: Curl table

				on:
					schedule:
						- cron:  '30 5,17 * * *'
					push:
						branches: [ master ]
					pull_request:
						branches: [ master ]
					
					workflow_dispatch:
				
				jobs:
					run_tests:
						runs-on: ubuntu-20.04
						steps:
						- name: add table
							run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.cvs
						- uses: actions/upload-artifact@v2
							with:
								name: my-artifact
								path: table1.cvs
						- name: move to dir # Move the generated files into output folder
							run: |
								mkdir -p output
								yes| cp -rf table1.cvs ./output/
						- name: Commit files 
							run: |
								git config --global user.email "risenes@gmail.com"
								git config --global user.name "Risenes"
								git add ./output
								git commit -m "Add changes"
						- name: Push changes # push the output folder to your repo
							uses: ad-m/github-push-action@master
							with: 
								
								github_token: ${{ secrets.LETTER }}
								force: true







// Рабочий актионс

name: Curl table

on:
  schedule:
    - cron:  '30 5,17 * * *'
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
  
  workflow_dispatch:

jobs:
  run_tests:
    runs-on: ubuntu-20.04
    steps:
    - name: checkout
      uses: actions/checkout@v2
    - name: add table
      run:  curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.cvs
    - uses: actions/upload-artifact@v2
      with:
        name: my-artifact
        path: table1.cvs
    - name: move to dir # Move the generated files into output folder
      run: |
        mkdir -p output
        yes| cp -rf table1.cvs ./output/
    - name: Commit files 
      run: |
        
        git clone https://github.com/Risenes/letter2.0
        git config --global user.email "risenes@gmail.com"
        git config --global user.name "Risenes"
        git add table1.cvs
        git commit -m "Add changes"
        
    - name: Push changes # push the output folder to your repo
      uses: ad-m/github-push-action@master
      with: 
        
        github_token: ${{ secrets.LETTER }}
        force: true







        name: Curl table

on:
  schedule:
    - cron:  '30 5,17 * * *'
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  
  workflow_dispatch:

jobs:
  run_tests:
    runs-on: ubuntu-20.04
    steps:
    - name: checkout
      uses: actions/checkout@v2

    - name: Clone
      run: |        
        git ls-files
        git remote show origin https://github.com/Risenes/letter2.0 .
        git config --global user.email "risenes@gmail.com"
        git config --global user.name "Risenes"
    - name: Load table
      run: |  
        curl https://docs.google.com/spreadsheets/d/1d6E9VREMtVGHdYubZoZs5fmS2P7tCi6w47LjDdylphE/gviz/tq?tqx=out:csv&sheet=generator > table1.csv
        cat table1.csv
        git add table1.csv
        git branch -u origin/main
        git commit -m "Update table by bot"
    
    - name: Push changes # push the output folder to your repo
      uses: ad-m/github-push-action@master
      with: 
        
        github_token: ${{ secrets.LETTER }}
        force: true