const user = {
  id: "", // nanoid() - programatically generated throu NanoID library
  email: "", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "", //check for valid email | required for both hunter and talent | 8 - 20 characters?
  userType: "", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: false, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "",
    profileLastName: "",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "",
    profileEmail: "",
    profileLinkedIn: "",
    profileWebsite: "",
    profileSkills: [],
    profileBio: "", //30 - 50 words?
    profileExperience: "",
  },
  connections: [],
};

const Laura = {
  id: 1, // nanoid() - programatically generated throu NanoID library
  email: "laurasmith@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "laura",
    profileLastName: "smith",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Frontend Developer",
    profileEmail: "laurasmith@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "laurasmith.io",
    profileSkills: ["html,css,react,javascript,bootstrap"],
    profileBio:
      "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
    profileExperience: 6,
    profileImage: "laura",
  },
  connections: [],
};

const argel = {
  id: 2, // nanoid() - programatically generated throu NanoID library
  email: "argel@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "argel",
    profileLastName: "miralles",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "edit",
    profileEmail: "edit",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "argel.io",
    profileSkills: ["html,css,react,javascript,bootstrap"],
    profileBio:
      "Amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante",
    profileExperience: 0,
    profileImage: "argel",
  },
  connections: [],
};

const james = {
  id: 3, // nanoid() - programatically generated throu NanoID library
  email: "james@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "james",
    profileLastName: "willems",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Video Editor",
    profileEmail: "james@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "jameswillems.io",
    profileSkills: ["videography"],
    profileBio:
      "Tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed",
    profileExperience: 3,
    profileImage: "james",
  },
  connections: [],
};

const adam = {
  id: 4, // nanoid() - programatically generated throu NanoID library
  email: "adam@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "adam",
    profileLastName: "kovic",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Backend Developer",
    profileEmail: "adam@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "adamkovic.io",
    profileSkills: ["html,css,javascript,C, C#, node,"],
    profileBio:
      "Eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus",
    profileExperience: 2,
    profileImage: "adam",
  },
  connections: [],
};

const bruce = {
  id: 5, // nanoid() - programatically generated throu NanoID library
  email: "bruce@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "Bruce",
    profileLastName: "Greene",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Software Developer",
    profileEmail: "bruce@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "brucegreene.io",
    profileSkills: [
      "html,css,react,javascript,bootstrap, Node, MongoDB, Express",
    ],
    profileBio:
      "Ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare",
    profileExperience: 8,
    profileImage: "bruce",
  },
  connections: [],
};

const elyse = {
  id: 6, // nanoid() - programatically generated throu NanoID library
  email: "elyse@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "elyse",
    profileLastName: "willems",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Web Designer",
    profileEmail: "elyse@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "elysewillems.io",
    profileSkills: ["Figma, Adobe XD, Adobe Photoshop"],
    profileBio:
      "Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet",
    profileExperience: 3,
    profileImage: "elyse",
  },
  connections: [],
};

const lawrence = {
  id: 7, // nanoid() - programatically generated throu NanoID library
  email: "lawrence@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "lawrence",
    profileLastName: "Sonntag",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Frontend Developer",
    profileEmail: "lawrence@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "lawrencesonntag.io",
    profileSkills: ["html,css,react,javascript,bootstrap, vue"],
    profileBio:
      "Enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus",
    profileExperience: 6,
    profileImage: "lawrence",
  },
  connections: [],
};

const alanah = {
  id: 8, // nanoid() - programatically generated throu NanoID library
  email: "alanah@fakegmail.com", //check for valid email | required for both hunter and talent | Check if user already exists <-> later feature
  password: "1234", //check for valid email | required for both hunter and talent
  userType: "talent", // Radio button? | Required | either "hunter" or "talent"
  firstName: "", // Required for userType = "hunter" sign up
  lastName: "", // Required for userType = "hunter" sign up
  fullName: `${this.firstName} ${this.firstName}`, // Default value - sign up form unrelated
  company: "", // Required for userType = "hunter" sign up
  jobTitle: "", // Required for userType = "hunter" sign up
  profileActivated: true, // Default value = false after "talent" signs up
  profileCard: {
    // Default value = object with undefined values | will populate after "talent" created a profile card in My Profile page
    profileFirstName: "alanah",
    profileLastName: "pearce",
    profileFullName: `${this.profileFirstName} ${this.LastName}`,
    profileJobTitle: "Graphic Designer",
    profileEmail: "alanahpearce@fakegmail.com",
    profileLinkedIn: "fakelinkedin.com",
    profileWebsite: "alanahpearce.io",
    profileSkills: [
      "Adobe Photoshop, Adobe Lightroom, Adobe XD, Adobe After Effects",
    ],
    profileBio:
      "in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum",
    profileExperience: 6,
    profileImage: "alanah",
  },
  connections: [],
};

const data = [laura, argel, james, adam, bruce, elyse, lawrence, alanah];

export default data;
