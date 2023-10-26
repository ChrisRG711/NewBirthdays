A birthday reminder module for MichMich's MagicMirror.
Adding text display and formatting controls.

Sample config file
{
  module: "UpcomingBirthdays",
  position: "top_right", // Set the desired position
  config: {
    birthdays: [
      {
        name: "Rob",
        date: "2023-11-05"
      },
      // Add more birthday entries as needed
    ],
    textColor: "white",
    textSize: "medium",
    textAlignment: "left"
  }
}


