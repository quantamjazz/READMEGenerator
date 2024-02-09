const fs = require('fs');
const readline = require('readline');

function writeToFile(data) {
  fs.writeFile('README.md', data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('README file has been successfully created!');
    }
  });
}

function gatherUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const questions = [
    { type: 'input', name: 'title', message: 'What is your project title?' },
    { type: 'input', name: 'description', message: 'Please provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
    { type: 'input', name: 'usage', message: 'How do you use this project?' },
    { type: 'input', name: 'contributing', message: 'How can others contribute to this project?' },
    { type: 'input', name: 'tests', message: 'What tests have been run on this project?' },
    { type: 'input', name: 'github', message: 'What is your GitHub username?' },
    { type: 'input', name: 'email', message: 'What is your email address?' },
  ];

  const answers = {};

  function askQuestion(index) {
    const question = questions[index];

    rl.question(question.message, (input) => {
      answers[question.name] = input;

      if (index < questions.length - 1) {
        askQuestion(index + 1);
      } else {
        rl.close();
        const readmeTemplate = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, please reach out to me at:
  
  - GitHub: [${answers.github}](https://github.com/${answers.github})
  - Email: ${answers.email}
  `;

        writeToFile(readmeTemplate);
      }
    });
  }

  askQuestion(0);
}

gatherUserInput();