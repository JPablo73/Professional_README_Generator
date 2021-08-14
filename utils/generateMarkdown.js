
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
    ### GitHub Profile
    [GitHub Profile](http://github.com/${data.Github})
    ### Email
    ${data.Email}
  `;
}
module.exports = generateMarkdown;