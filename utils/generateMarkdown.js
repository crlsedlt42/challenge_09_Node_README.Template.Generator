// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") { 

    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return `\n* [License](#license)\n`
    ("https://opensource.org/licenses/${license})");
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return "[License](#license)"
  }

  return "";
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
  ${renderLicenselink(data.license)}
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Test

  ${data.test}

  ${renderLicenseSection(data.license)}
  **Licensed under the ${data.license} license.**

  ## Questions

  GitHub Username: [${data.githubUsername}](${data.githubProfile})

  Deployed GitHub: [${data.githubDeployed}](${data.githubDeployed})
`;
}

module.exports = generateMarkdown;
