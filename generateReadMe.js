function askQuestion(index) {
    const question = questions[index];
  
    rl.question(question.message, (input) => {
      answers[question.name] = input;
  
      if (index < questions.length - 1) {
        askQuestion(index + 1);
      } else {
        rl.close();
        let readmeTemplate = `
    # ${answers.title}
    `;
  
    // Add Table of Contents
    readmeTemplate += `
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    `;
  
    // Add sections with anchors
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