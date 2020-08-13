// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
    
# Description

${data.description}
    
# Installation
    
${data.install}

# Usage

${data.usage}
    
# License

${data.license}
    
# Contributors

${data.contributor}
    
# Tests

${data.tests}
    
# Questions

${data.questions}`;
  }
  
  module.exports = generateMarkdown;

  
// ## Table of Contents 
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributor](#contributor)
// - [Tests](#tests)
// - [Questions](#questions)
