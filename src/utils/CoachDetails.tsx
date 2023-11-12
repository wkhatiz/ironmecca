const coachDetailsArr = [
  {
    id: "C01",
    firstName: "David",
    lastName: "Clark",
    title: "Worlds Strongest Man",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
      "officia deserunt mollit anim id est laborum.",
    experience: 23,
    specialty: "Strongman",
    qualification: "Masters in Strength, University of Strongmen",
    availability: "Midnight on Bloodmoons",
    profileImgSrc: "david-clark.jpg",
    bannerImgSrc1: "david-clark-carousel-1.jpg",
    bannerImgSrc2: "david-clark-carousel-2.jpg",
    bannerImgSrc3: "david-clark-carousel-3.jpg",
    bannerImgSrc4: "david-clark-carousel-4.jpg",
  },
  {
    id: "C02",
    firstName: "Dominic",
    lastName: "Doe",
    title: "Powerlifting Superstar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
      "officia deserunt mollit anim id est laborum.",
    experience: 5,
    specialty: "Powerlifting",
    qualification: "Masters in Power, University of Lifting",
    availability: "Afternoons on Weekends",
    profileImgSrc: "dominic-doe.jpg",
    bannerImgSrc1: "dominic-doe-carousel-1.jpg",
    bannerImgSrc2: "dominic-doe-carousel-2.jpg",
    bannerImgSrc3: "dominic-doe-carousel-3.jpg",
    bannerImgSrc4: "dominic-doe-carousel-4.jpg",
  },
  {
    id: "C03",
    firstName: "Emilia",
    lastName: "Smith",
    title: "7-time Mrs Olympia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
      "officia deserunt mollit anim id est laborum.",
    experience: 13,
    specialty: "Bodybuilding",
    qualification: "Masters in Olympia, University of Olympians",
    availability: "Mornings on Weekdays",
    profileImgSrc: "emilia-smith.jpg",
    bannerImgSrc1: "emilia-smith-carousel-1.jpg",
    bannerImgSrc2: "emilia-smith-carousel-2.jpg",
    bannerImgSrc3: "emilia-smith-carousel-3.jpg",
    bannerImgSrc4: "emilia-smith-carousel-4.jpg",
  },
  {
    id: "C04",
    firstName: "John",
    lastName: "Smith",
    title: "Fitness Icon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
      "officia deserunt mollit anim id est laborum.",
    experience: 2,
    specialty: "General Fitness",
    qualification: "Masters in Media, University of Influencers",
    availability: "Invite Only",
    profileImgSrc: "john-smith.jpg",
    bannerImgSrc1: "john-smith-carousel-1.jpg",
    bannerImgSrc2: "john-smith-carousel-2.jpg",
    bannerImgSrc3: "john-smith-carousel-3.jpg",
    bannerImgSrc4: "john-smith-carousel-4.jpg",
  },
  {
    id: "C05",
    firstName: "Sarah",
    lastName: "Peters",
    title: "Crossfit Expert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui" +
      "officia deserunt mollit anim id est laborum.",
    experience: 10,
    specialty: "Crossfit",
    qualification: "Masters in Crossing, University of Fitting",
    availability: "All Mornings",
    profileImgSrc: "sarah-peters.jpg",
    bannerImgSrc1: "sarah-peters-carousel-1.jpg",
    bannerImgSrc2: "sarah-peters-carousel-2.jpg",
    bannerImgSrc3: "sarah-peters-carousel-3.jpg",
    bannerImgSrc4: "sarah-peters-carousel-4.jpg",
  },
];

function getCoachDetails(id: string) {
  for (let i = 0; i < coachDetailsArr.length; i++) {
    if (coachDetailsArr[i].id == id) {
      return coachDetailsArr[i];
    }
  }
}

export { coachDetailsArr, getCoachDetails };
