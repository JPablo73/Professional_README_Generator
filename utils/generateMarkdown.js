// Functino to generate markdown
function generateMarkdown(data) {
  return `# ${data.title}

    ## Table of Contents
    * [Description](#description)
    * [Usage Instructions](#usage)
    * [Installation](#installation)
    * [Testing](#testing) 
    * [Contributing Members](#contributors)
    * [License](#license)
    * [Questions](#questions)
    
    ## Description
    ${data.description}

    ## Usage Instructions
    ${data.usage}

    ## Installation Instructions 
    ${data.installation}

    ## Testing 
    ${data.test}

    ## Contributing Members
    ${data.contributors}

    ## License
    ${data.license}

    ## Questions
    
    ### Email
    ${data.email}

    ### GitHub Profile
    [GitHub Profile](https://github.com/${data.Github})
    
  `;
}
module.exports = generateMarkdown;