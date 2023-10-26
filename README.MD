# MMM-birthdays
A birthday reminder module for MichMich's [MagicMirror](https://magicmirror.builders/).

## Installation
- Navigate to your MagicMirror `modules` folder and clone this repository using: `git clone ‘https://github.com/ChrisRG711/UpcomingBirthdays’
- Change directory to `UpcomginBirthdays’
- Run `npm install` to install the necessary third-party packages

## Configuration & Usage
This module is intended to be extremely simple to use and therefore only provides a small set of configurable parameters:
textColor = the color of the text
textSize: size of the text
textAlignment: how you want the text aligned.
| birthdays  | An array of `birthdays` objects as described below | See below  |

So, the default `config.js` entry for this module could look like this:




{
  module: "UpcomingBirthdays",
  position: "top_right", // Set the desired position
  header: "upcoming birthdays",
  config: {
  birthdays: 
[
{       name: "Joe",
                date: "1997-11-25"
		
},
{
                name: "Virginia",
                date: "1948-08-30
}
],
    textColor: "green",
    textSize: "large",
    textAlignment: "left"
}
},
### Birthdays Array
The birthdays array is a list of JSON objects containing the following fields 
Name:
Date:

FYI: Date should be in RFC 2822 date format `"YYYY-MM-DD
