// generates markdown
function generateMarkdown(data) {
  return `# ${data.title}

    ## Table of Contents
    * [Description](#description)
    * [Usage Instructions](#usage-instructions)
    * [Installation](#installation-instructions)
    * [Testing](#testing) 
    * [Contributing Members](#contributing-members)
    * [License](#license)
    * [Questions/Inquiries](#questions/inquiries)
    
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

    ## Questions/Inquiries 
    ### Email
    ${data.email}

    ### GitHub Profile
    [GitHub Profile](https://github.com/${data.Github})
    
  `;
}
module.exports = generateMarkdown;