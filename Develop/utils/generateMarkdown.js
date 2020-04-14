function generateMarkdown(data) {
  return `
# ${data.title} ![GitHub package.json version]
${data.description}
# Tables of Contents
* [Username](#username)
* [Email](#email)
* [Project](#project)
* [Description](#description)
* [Portfolio](#portfolio)
* [Licensetype](#licensetype)
* [About](#About)
* [Contributing](#contributing)
* [Installation](#installation)
* [tests](#tests)

# Username
${data.username}
# Email
${data.email}
# Project
${data.project}
# Description
${data.description}
# Portfolio 
${answers.portfolio}
# Licensetype
${data.licensetype}
# About
${data.about}
# Contributing
${data.contributing}
# Installation
${answers.installation}
# Tests
${answers.tests} 



# Questions
![Profile Avatar](${data.pfp})
If you have any questions, please e-mail me at ${data.email}.
# Credits
Github: [${data.username}](${data.url})
Copyright ${data.name}. All Rights Reserved.
`;
};

module.exports = generateMarkdown;