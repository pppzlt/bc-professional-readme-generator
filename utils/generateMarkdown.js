// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const all_license = [
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "MPL 2.0",
    badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "ISC",
    badge: "https://img.shields.io/badge/License-ISC-blue.svg",
    link: "https://opensource.org/licenses/ISC",
  },
];

function renderLicenseBadge(license) {
  if (license.length === 0) {
    return "";
  } else {
    // console.log(all_license.find((key) => key.name === license).badge);
    return all_license.find((key) => key.name === license).badge;
  }
}
// renderLicenseBadge("MIT");
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length === 0) {
    return "";
  } else {
    return all_license.find((key) => key.name === license).link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.length === 0) {
    return "";
  } else {
    return `This is covered under [${license}](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<p align="left">
<a href="${renderLicenseLink(data.license)}"><img src="${renderLicenseBadge(
    data.license
  )}" alt="License Badge"></a>
</p>

## Description

${data.description}

## Table of Contents
[Description](#description)  
[Installation Guide](#installation)  
[Usage Infomation](#installation)  
[Contributions](#contributions)  
[Test Instructions](#test)  
[License](#licence)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Test

${data.test}

## Licence

${renderLicenseSection(data.license)}

## Questions

This is my Github profile: <a href="https://github.com/${
    data.git_username
  }">link</a>  
If you have additional questions, please contact me ${data.email}.
`;
}

module.exports = generateMarkdown;
