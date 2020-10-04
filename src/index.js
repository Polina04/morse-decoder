const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let codedExpr = expr;
  const countOfSymbols = expr.length / 10;
  let decodedExpr = "";
  for (let i = 0; i < countOfSymbols; i++) {
    const codedLetter = codedExpr.slice(0, 10); //вырезало 1 букву
    codedExpr = codedExpr.slice(10); //убрали ее из строки

    if (codedLetter === "**********") {
      decodedExpr = decodedExpr + " ";
      continue;
    }

    let decodedLetter = "";
    for (let i = 0; i < codedLetter.length; i += 2) {
      if (codedLetter[i] === "0" && codedLetter[i + 1] === "0") {
        continue;
      } else if (codedLetter[i] === "1" && codedLetter[i + 1] === "0") {
        decodedLetter = decodedLetter + ".";
      } else if (codedLetter[i] === "1" && codedLetter[i + 1] === "1") {
        decodedLetter = decodedLetter + "-";
      }
    }
    decodedExpr = decodedExpr + MORSE_TABLE[decodedLetter];
  }
  return decodedExpr;
}

module.exports = {
  decode
};
