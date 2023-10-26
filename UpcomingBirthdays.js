Module.register("UpcomingBirthdays", {
  // Default module config
  defaults: {
    birthdays: [],
    textColor: "white",
    textSize: "medium",
    textAlignment: "left",
  },

  start: function () {
    this.birthdayInterval = null;
    this.scheduleUpdate();
  },

  getStyles: function () {
    return ["UpcomingBirthdays.css"];
  },

  scheduleUpdate: function () {
    const self = this;
    this.birthdayInterval = setInterval(() => {
      self.updateDom();
    }, 60000); // Update every minute
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    const currentDay = now.getDate();
    const birthdays = this.config.birthdays;
    const upcomingBirthdays = [];

    for (const birthday of birthdays) {
      const birthDate = new Date(birthday.date);
      const birthYear = birthDate.getFullYear();
      const birthMonth = birthDate.getMonth() + 1;
      const birthDay = birthDate.getDate();

      const nextBirthday = new Date(currentYear, birthMonth - 1, birthDay);
      if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
      }

      const daysUntilBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));

      upcomingBirthdays.push({
        name: birthday.name,
        age: currentYear - birthYear,
        daysUntilBirthday
      });
    }

    for (const birthday of upcomingBirthdays) {
      const birthdayText = document.createElement("div");
      birthdayText.style.color = this.config.textColor;
      birthdayText.style.fontSize = this.config.textSize;
      birthdayText.style.textAlign = this.config.textAlignment;

      birthdayText.innerHTML = `${birthday.name} will be ${birthday.age + 1} in ${birthday.daysUntilBirthday} days`;

      wrapper.appendChild(birthdayText);
    }

    return wrapper;
  },

  notificationReceived: function (notification, payload, sender) {
    if (notification === "DOM_OBJECTS_CREATED") {
      this.updateDom();
    }
  },
});
