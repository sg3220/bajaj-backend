import express from "express";
export const App = express();

App.use(express.json());

App.get("/", (req, res) => {
  res.send("Server Working");
});

App.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

App.post("/bfhl", (req, res) => {
  const arrayData = req.body.data;

  let numberArray = [];
  let alphabetArray = [];

  for (let i = 0; i < arrayData.length; i++) {
    if (arrayData[i].charCodeAt(0) > 47 && arrayData[i].charCodeAt(0) < 58) {
      numberArray.push(arrayData[i]);
    } else if (
      (arrayData[i].charCodeAt(0) > 64 && arrayData[i].charCodeAt(0) < 91) ||
      (arrayData[i].charCodeAt(0) > 96 && arrayData[i].charCodeAt(0) < 123)
    ) {
      alphabetArray.push(arrayData[i]);
    }
  }

  let highestAplhabetIndex = 0;

  for (let i = 0; i < alphabetArray.length; i++) {
    if (
      alphabetArray[i].charCodeAt(0) >
      alphabetArray[highestAplhabetIndex].charCodeAt(0)
    ) {
      highestAplhabetIndex = i;
    }
  }

  const highestAplhabet = alphabetArray[highestAplhabetIndex];

  res.status(200).json({
    is_success: true,
    user_id: "Siddharth_Ghosh",
    email: "sg8418@srmist.edu.in",
    roll_number: "RA2011003030036",
    numbers: numberArray,
    alphabets: alphabetArray,
    highest_alphabet: highestAplhabet,
  });
});

App.use((req, res) => {
  res.status(404).json({ Message: "Route Not Found" });
});
