// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "";
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  
}

// TODO: Create a function to generate markdown for README
// title
// description
// usage
// contribution
// test
// license
// githubUsername
// githubProfile
// githubDeployed
function generateMarkdown(data) {
  return `
  
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  GitHub Username: [${data.githubUsername}](${data.githubProfile})

  Deployed GitHub: [${data.githubDeployed}](${data.githubDeployed})
`;
}

module.exports = generateMarkdown;
