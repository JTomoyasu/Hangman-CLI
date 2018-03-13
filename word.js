var Letter = require("./letter.js");
function Word(inputWord) {
    this.inputWord = inputWord;
    this.chars = inputWord.split("");
    this.letters = [];
    for (j = 0; j < this.chars.length; j++) {
        this.letters.push(new Letter(this.chars[j]));
    }
    this.returnString = function () {
        var ansStr = "";
        for (i = 0; i < this.letters.length; i++) {
            ansStr = ansStr+this.letters[i].under()+" ";
        }
        return ansStr;
    };
    this.checkLetters = function (inputLetter) {
        for (k = 0; k < this.letters.length; k++) {
            this.letters[k].checker(inputLetter);
        }
    }
}
module.exports = Word;