let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/BollyActors", (req, res) => {
  let bollyActors = [
    "Shah Rukh Khan",
    ,
    // image:
    //   "https://images.news18.com/webstories/2023/10/Shah-Rukh-Khan_172fa644f21_original-ratio.jpg",
    "Hrithik Roshan",
    ,
    // image:
    //   "https://www.prabhatkhabar.com/wp-content/uploads/2024/01/hrithik-roshan.jpg",
    "Aamir Khan",
    ,
    // image:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aamir_Khan_%28Berlin_Film_Festival_2011%29.jpg1200px-Aamir_Khan_%28Berlin_Film_Festival_2011%29.jpg",
    "Salman Khan",
    ,
    // image:
    //   "https://st1.bollywoodlife.com/wp-content/uploads/2023/08/MicrosoftTeams-image-2023-08-22T132655.209.jpgimpolicy=Medium_Widthonly&w=400&h=711",
    "Ranbir Kapoor",
    ,
    // image:
    //   "https://www.livemint.com/lm-img/img/2023/09/28/1600x900/PTI07-28-2023-000335B-0_1695899400096_1695899556536.jpg",
    "Shahid Kapoor",
    // image:
    //   "https://m.media-amazon.com/images/M/MV5BYjZkNjhlNDMtOGE3Yy00OTMxLTkwYzgtZGRiMjk2ZmY5MmQzXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
    ,
  ];
  res.json(bollyActors);
});
app.get("/TollyActors", (req, res) => {
  let tollyactors = [
    "Prabhas",
    "Allu Arjun",
    "J.NTR",
    "Teja Sajja",
    "Nani",
    "Ballaya Babu",
    "Ram",
    "Ram Charan",
  ];
  res.json(tollyactors);
});

app.listen(4444, () => {
  console.log("Listening to port 4444");
});
