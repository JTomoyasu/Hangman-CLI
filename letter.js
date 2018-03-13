function Letter(input) {
    this.input = input;
    this.guessed = false;
    this.under = function () {
        if (this.guessed) {
            return this.input;
        }
        else {
            return "_";
        }
    };
    this.checker = function (guess) {
        if (this.input.toLowerCase() == guess.toLowerCase()) {
            this.guessed = true;
        }
    };
}

module.exports = Letter;