#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');

clear();

const data = {
  name: chalk.bold.green('                    Andres Calpa Lopez'),
  handle: chalk.white('@hcalpa-condor'),
  work: `${chalk.white('Backend Developer at')} ${chalk
    .hex('#cca918')
    .bold('Condor Labs')}`,
  github: chalk.cyan('https://github.com/hcalpa-condor'),
  twitter: chalk.cyan('https://twitter.com/AndresCalpaL7'),
  linkedin:
    chalk.cyan('https://linkedin.com/in/andres-calpa-828437196'),
  npx: chalk.greenBright('npx') + ' ' + chalk.white('andrescalpacondor'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold("I'm Developer!")}`,
    `${chalk.yellowBright("I'm")} ${chalk.blueBright("from Colombia")} ${chalk.redBright("parcero!")}`,
    ``,
    `${chalk.bold(
      "Best quote: "
    )}`,
    `${chalk.bold.gray(
      "If a person is persistent, even if he is hard of understanding, he will become intelligent; and even if it is weak it will become strong - "
    )} ${chalk.bold("Da Vinci")}`
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'blue',
  }
);

console.log(me);