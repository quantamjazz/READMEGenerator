const inquirer = require('inquirer');
 readline = require('readline');

const questions = [
  {
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    name: 'description',
    message: 'Please provide a description of your project.'
  },
  {
    name: 'installation',
    message: 'Please provide instructions for installing your project.'
  },
  {
    name: 'usage',
    message: 'Please provide instructions for using your project.'
  },

{
    type:'list', 'message':'What license would you like to use?','name':'license',
'choices':['MIT','GPLv2','Apache License Version 2.0']
},

  {
    name: 'contributing',
    message: 'Please provide instructions for contributing to your project.'
  },
  {
    name: 'tests',
    message: 'Please provide instructions for testing your project.'
  },
  {
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    name: 'email',
    message: 'What is your email address?'
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(index) {
  const question = questions[index];

  inquirer.prompt([
    {
      type: 'input',
      name: question.name,
      message: question.message
    }
  ]).then((answers) => {
    if (index < questions.length - 1) {
      askQuestion(index + 1);
    } else {
      rl.close();
      let readmeTemplate = `
    # ${answers.title}
    `;
      // Table of Contents
      readmeTemplate += `
      ## Table of Contents
      - [Description](#description)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Questions](#questions)
      `;
      // anchors
      readmeTemplate += `
      ## Description
      <a name="description"></a>
      ${answers.description}

      ## Installation
      <a name="installation"></a>
      ${answers.installation}

      ## Usage
      <a name="usage"></a>
      ${answers.usage}

##  License
This project is licensed under the ${answers.license}.

      ## Contributing
      <a name="contributing"></a>
      ${answers.contributing}

      ## Tests
      <a name="tests"></a>
      ${answers.tests}

      ## Questions
      <a name="questions"></a>
      If you have any questions, please reach out to me at:

      - GitHub: [${answers.github}](https://github.com/${answers.github})
      - Email: ${answers.email}
      `;
      writeToFile(readmeTemplate);
    }
  });
}

askQuestion(0);

function writeToFile(readmeTemplate) {
}