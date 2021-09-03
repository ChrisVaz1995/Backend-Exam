const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Change is happening in your life, so go with the flow!",
                "Determination is what you need now.",
                "Don’t be discouraged, because every wrong attempt discarded is another step forward.",
                "A fresh start will put you on your way",
                "Get your mind set…confidence will lead you on."
];

let randomIndex1 = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex1];

res.status(200).send(randomFortune);
});


app.get("/api/inspire", (req, res) => {
  const inspire = ["Let us make our future now, and let us make our dreams tomorrow's reality.",
  "I believe there's an inner power that makes winners or losers. And the winners are the ones who really listen to the truth of their hearts.",
  "If we did all the things we are capable of, we would literally astound ourselves.",
];
  let randomIndex2 = Math.floor(Math.random() * inspire.length);
  let randomInspire = inspire[randomIndex2];

  res.status(200).send(randomInspire);
});

app.get("/api/books", (req, res) => {
const books = ["Make your bed by William H. McRaven",
"The Last Lecture by Randy Pausch",
"Educated by Tara Westover"
];

let randomIndex3 = Math.floor(Math.random() * books.length);
let randomBooks = books[randomIndex3];

res.status(200).send(randomBooks);
});

app.get("/api/advice", (req,res) => {
  const advice = ["Leave ego behind",
  "Listen actively",
  "Build your resilience",
  "Learning, Not Just Lecturing",
  " Significance, Not Just Success"
];

let randomIndex4 = Math.floor(Math.random() * advice.length)
let randomAdvice = advice[randomIndex4];

res.status(200).send(randomAdvice);
});

app.listen(4000, () => console.log("Server running on 4000"));
