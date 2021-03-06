const projectData = [
  {
    title: "Jackie Slanley Artist Site",
    subTitle: "Portfolio site for NYC based sculptor and painter.",
    p1: "Built with Django, React, Redux, Typescript, and postgreSQL. The site uses custom hooks to handle authentication and to check if animated elements are in view.",
    p2: "Site visitors can view artworks and have the ability to zoom and pan on images. Authorized users have CRUD functionality over artworks and can edit page text, splash images, and links on the about and CV pages.",
    img: [
      "https://i.imgur.com/Le8CHVg.png",
      "https://i.imgur.com/xtIh5VM.png",
      "https://i.imgur.com/38PnLBE.png",
      "https://i.imgur.com/QFM0vEX.png",
      "https://i.imgur.com/HoIvrLm.png",
      "https://i.imgur.com/pqfMm2y.png",
      "https://i.imgur.com/UyIz3DO.png",
      "https://i.imgur.com/ZaCjML7.png",
    ],
    sitelink: "https://jackie-artist-site-demo.herokuapp.com/",
    git: "https://github.com/MikeOD92/Jackie_artistsite",
  },
  {
    title: "Random Man Editions",
    subTitle:
      "randomman.net - E-commerce site for NYC art book publisher, built with React, Redux, Django, and postgreSQL",
    p1: "Site visitors are able to view and purchase publications. Checkout is facilitated by PayPal. Customers receive an automated confirmation email on purchase and later a shipping notification with a tracking number provided by the store. ",
    p2: "Staff users have crud functionality with publications, media, orders and the text and links in the about and contact pages. \n *current link goes to demo site as we still need to set up some credentials and move to offical url",
    img: [
      "https://i.imgur.com/sxlrLpN.png",
      "https://i.imgur.com/9l4bkTq.png",
      "https://i.imgur.com/sIs5G33.png",
      "https://i.imgur.com/vHLLKYJ.png",
    ],
    sitelink: "https://www.randomman.net/",
    git: "",
  },
  {
    title: " Barraza Law Intake App",
    subTitle:
      "React and Django app built for the Immigration Law Office of Moises Barraza.",
    p1: "This app allows the law firm to create responsive forms for their intake process that can be edited as needed by staff. The intake app facilitates a quick and user friendly intake process for both the law firm and their prospective clients.",
    p2: "",
    img: [
      "https://i.imgur.com/EeHRqgY.png",
      "https://i.imgur.com/NMogUN6.png",
      "https://i.imgur.com/t2g5ERL.png",
      "https://i.imgur.com/zXZdPBv.png",
    ],
    sitelink: "",
    git: "",
  },
  // {
  //     title: " Roll Bot",
  //     subTitle: "Discord bot designed to help play Powered by the Apocalypse Role Playing Games (RPG) remotely.",
  //     p1: "Roll Bot uses Discord.py, and PyMongo to respond to user input, build character sheets, and to make dice rolls with or without modifiers based on their characters play sheet. Character sheets are stored in MongoDB, which can be updated and changed as players level up",
  //     p2: "Roll Bot is currently in development specifically for players of Dungeon World. I plan to include set up options so people can play other Powered by the Apocalypse games such as Apocalypse World, City of Mist, Monster Hearts and others.",
  //     img: ["https://i.imgur.com/As2PMxH.png"],
  //     sitelink:"",
  //     git: "https://github.com/MikeOD92/rollbot"
  // },

  {
    title: "Rain Check",
    subTitle: "Mobile first weather app",
    p1: "Built using React, Rain Check pulls data from a third-party api (open weather) and stores saved locations in local storage.",
    p2: "",
    img: ["https://i.imgur.com/SS2pauD.png", "https://i.imgur.com/xwf5aUK.png"],
    sitelink: "https://raincheckapp.netlify.app/",
    git: "https://github.com/MikeOD92/weather_app",
  },
  {
    title: "Here comes Treble",
    subTitle:
      "Kids music education app. Built with a team at the LiveOnline May 21' Hack-a-thon",
    p1: "Built with the M.E.R.N stack, MongoDB, Express, React, Node.js. This app also uses Tone.js, React-router and jsonwebtokens",
    p2: "",
    img: ["https://i.imgur.com/gH4zQsv.png"],
    sitelink: "https://here-comes-treble.netlify.app/",
    git: "https://github.com/MikeOD92/here_comes_treble",
  },
  {
    title: "My-Pack",
    subTitle:
      "Gear and pack weight management application for thru hikers and ultra-light backpackers.",
    p1: "My pack is a full stack application made with a Ruby on rails back end and a React front end using the Chart.js library.",
    p2: "Users can make a list of their backpacking gear, calculate total weight and see a chart which breaks down weights into user defined gear categories.",
    img: ["https://i.imgur.com/JuAT335.png", "https://i.imgur.com/YKreI6V.png"],
    sitelink: "https://my-pack.herokuapp.com/",
    git: "https://github.com/MikeOD92/mypack",
  },
  {
    title: "Fermenter",
    subTitle:
      "Recipe management application made home brewers and fermenters to create and fine tune recipes.",
    p1: "Built with a react front end and a express/mongo DB backend.",
    p2: "Users have full crud capability with recipes for beers and lacto fermentations. Planing to add recipe models for vinegars, cider, cheese and grain fermentations. Users can make time-stamped notes associated with recipes to record variations and outcomes",
    img: ["https://i.imgur.com/u6E93df.png"],
    sitelink: "https://infinite-temple-91457.herokuapp.com",
    git: "https://github.com/MikeOD92/Fermenter",
  },
  {
    title: "Computer Cacti",
    subTitle: "a mock e-commerce site for 3-d models of cacti and planters",
    p1: "Built with an express and mongoDB backend ",
    p2: "with this application the user has full crud over product models and can click the buy button to reduce inventory",
    img: ["https://i.imgur.com/eBNcPPv.png", "https://i.imgur.com/vhaBqKg.png"],
    sitelink: "",
    git: "https://github.com/MikeOD92/computer-cacti",
  },
  {
    title: "Wizard's Maze",
    subTitle: "Maze game with RPG battle Elements",
    p1: "Built with Jquery and vanilla JS, Wizard's maze is a small in browser maze and battle game inspired by choose your own adventure games and the pokemon battle sequences. As the player attempts to find the correct pattern to exit the maze, they encounter creatures and have the option to fight, heal or run.",
    p2: "The game is lost when the player's health reaches zero and the game is won when the player has escaped the maze.",
    img: ["https://i.imgur.com/6MHHpZZ.png", "https://i.imgur.com/UrVeKAf.jpg"],
    sitelink: "https://mikeod92.github.io/Wizards_Maze/",
    git: "https://github.com/MikeOD92/Wizards_Maze",
  },
  // {
  //     title: "",
  //     subTitle: "",
  //     p1: "",
  //     p2: "",
  //     img: [],
  //     sitelink: "",
  //     git: ""
  // },
];
export default projectData;
