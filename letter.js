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
        var temp=false;
        if (this.input.toLowerCase() == guess.toLowerCase()) {
            this.guessed = true;
            temp=true;
        }
        else{
            temp= false;
        }
        return temp;
    };
}
module.exports = Letter;