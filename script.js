import inquirer from 'inquirer';
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your application',
      },

      {
        type: 'input',
        name: 'licence',
        message: 'Detail which licence your application uses',
      },
    
      {
        type: 'input',
        name: 'contributing',
        message: 'How can developers or users contribute to your application?',
      },

  ];
  
  inquirer.prompt(questions)
  .then((answers) => {
    // Use the answers to dynamically generate the README
    generateREADME(answers);
  })
  .catch((error) => {
    console.error(error);
  });

  function generateREADME(answers) {
    // Read the template file
    const template = fs.readFileSync('template.md', 'utf8');
  
    // Replace placeholders in the template with user input
    const generatedREADME = template
      .replace('<!-- Describe what your project does -->', answers.projectTitle)
      // Add similar lines for other sections
  
    // Write the generated README to a file
    fs.writeFileSync('README.md', generatedREADME);
  
    console.log('README.md generated successfully!');
  }

  // Call the function to start the README generation process
generateREADME();

