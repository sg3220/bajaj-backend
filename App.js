import express from "express";
export const App = express();

App.use(express.json());

App.get("/", (req, res) => {
  res.send("Server Working");
});

App.all("/bfhl", (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ operation_code: 1 });
  } else if (req.method === "POST") {
    const arrayData = req.body.data;

    let numberArray = [];
    let alphabetArray = [];

    for (let i = 0; i < arrayData.length; i++) {
      if (!isNaN(parseInt(arrayData[i]))) {
        numberArray.push(parseInt(arrayData[i]));
      } else if (
        typeof arrayData[i] === "string" &&
        arrayData[i].match(/[a-zA-Z]/)
      ) {
        alphabetArray.push(arrayData[i]);
      }
    }

    let copyAlphabetArray = alphabetArray;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const highestAplhabet = copyAlphabetArray.reduce(
      (prevChar, currentChar) => {
        if (alphabet.indexOf(currentChar) > alphabet.indexOf(prevChar)) {
          return currentChar;
        } else {
          return prevChar;
        }
      }
    );

    res.status(200).json({
      is_success: true,
      user_id: "Siddharth_Ghosh",
      email: "sg8418@srmist.edu.in",
      roll_number: "RA2011003030036",
      numbers: numberArray,
      alphabets: alphabetArray,
      highest_alphabet: highestAplhabet,
    });
  }
});
