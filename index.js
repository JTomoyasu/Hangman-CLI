var Word=require("./word.js");
var inquirer=require("inquirer");

var wordBank=["theatre", "mansion", "house", "skyscraper", "building", "shack", "hovel"];
var guesses=14;
var won=false;
var theWord=new Word(wordBank[Math.floor(Math.random()*wordBank.length)]);
var pat=/[a-z]/i;
var usedLetters=[];
function playGame(){
    if(guesses>0){
        if(won){
            console.log("You Won");
        }
        else{
            console.log("Guesses remaining: "+guesses);
            console.log(theWord.returnString());
            inquirer.prompt([
                {
                    type:"input",
                    message:"Please input a letter",
                    name: "userInput",
                    validate:function(value){
                        if(value.length!=1||!pat.test(value)){
                            console.log("\nThat's not a letter");
                            return false;
                        }
                        else if(usedLetters.includes(value)){
                            console.log("\nYou've used that already")
                            return false;
                        }
                        else{
                            return true;
                        }
                    }
                },
            ]).then(function(ans){
                if(!theWord.checkLetters(ans.userInput)){
                    guesses--;
                }
                console.log(theWord.checkLetters(ans.userInput));
                usedLetters.push(ans.userInput);
                var currentStatus=theWord.returnString()
                console.log(currentStatus);
                var winning=true;
                for(i=0;i<currentStatus.length;i++){
                    if(currentStatus.charAt(i)=="_"){
                        winning=false;
                    }
                }
                if(winning){
                    won=true;
                }
                playGame();
            })
        }
    }
    else{
        console.log("You Lost! The correct word was: "+theWord.inputWord);
    }
};
playGame();
//console.log(pat.test("1"));
