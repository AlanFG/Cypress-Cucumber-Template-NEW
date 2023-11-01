# Template Cyress Cucumber

## Getting started
Before you begin, ensure you have met the following requirements:\
You have installed node.js and npm.\
If not, download and install them from nodejs.org\
You have a Windows/Linux/Mac machine.\

Clone the repository to your local machine:\
bash\
git clone 
Navigate to the project directory:\
bash\
cd (directory)\
Install the project dependencies:\
npm install --force\
Using test\

Set Environment variables to run the test 
$env:CYPRESS_USERNAME="pageUsername"
$env:CYPRESS_PASSWORD="pagePassword"

npm test
This command will open the Cypress Test Runner, where you can see and run all your test files.


## Instalar cypress y cucumber desde 0 (comandos)
npm init
npm install cypress@(version) --save-dev
npm i -D install @badeball/cypress-cucumber-preprocessor
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
npm install --save-dev dotenv cypress-dotenv