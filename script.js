const inquirer = require('inquirer');
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
  