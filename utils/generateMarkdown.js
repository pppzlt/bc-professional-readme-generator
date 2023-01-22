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
renderLicenseBadge("MIT");
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
    return `## License\n[${license}](${renderLicenseLink})\n`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
