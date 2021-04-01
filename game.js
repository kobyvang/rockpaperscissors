"use strict";



class Game {
    constructor() {
        this.playerOne = new Player ("koby");
        this.playerTwo = new Player ("destinee");
        
    }
    runGame() {
        let compare = function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock crushes scissors";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "paper covers rock";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock crushes scissors";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="spock"){
        if(choice2==="scissors"){
            return "spock smashes scissors";
        }
        else{
           return "try again";
        }
    }
    if(choice1==="spock"){
        if(choice2==="lizard"){
            return "lizard poisons spock";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="lizard"){
        if(choice2==="spock"){
            return "lizard poisons spock";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="rock"){
        if(choice2==="paper"){
            return "paper covers rock";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors cuts paper";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors cuts paper";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="spock"){
            return "spock smashes scissors";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="paper"){
        if(choice2==="lizard"){
            return "lizard eats paper";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="lizard"){
        if(choice2==="paper"){
            return "lizard eats paper";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="paper"){
        if(choice2==="spock"){
            return "paper disproves spock"
        }
        else{
            return "try again";
        }
    }
    if(choice1==="spock"){
        if(choice2==="paper"){
            return "paper disproves spock"
        }
        else{
            return "try again";
        }
    }
    if(choice1==="spock"){
        if(choice2==="rock"){
            return "spock vaporizes rock";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="rock"){
        if(choice2==="spock"){
            return "spock vaporizes rock";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="lizard"){
            return "scissors decapitates lizard";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="lizard"){
        if(choice2==="scissors"){
            return "scissors decapitates lizard";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="rock"){
        if(choice2==="lizard"){
            return "rock crushes lizard";
        }
        else{
            return "try again";
        }
    }
    if(choice1==="lizard"){
        if(choice2==="rock"){
            return "rock crushes lizard";
        }
        else{
            return "try again";
        }
    }
}

compare(userChoice,computerChoice);
        this.displayGamerWinner();
    }
    displayRules() {
        console.log("Welcome to the Rock Paper Scissors!");
        console.log("Two players will each throw one hand gesture.");
        console.log("throw hand gestures to find out who wins from rock, paper, scissors, spock, lizard.");
        console.log("rock < scissors, rock < lizard, scissors < paper, scissors < lizard, paper < rock, paper < spock, spock < scissors, spock < rock, lizard < paper, lizard < spock.");
        console.log("The first player to win three rounds wins!");
        }
        
        displayGamerWinner(){
            if(this.playerOne.score === 3){
                console.log(this.playerOne.name + "wins the game!");
            }
            else{
                (this.playertwo.score ===3);{
                    console.log(this.playerTwo.name + "wins the game!");
              }
          }
        }
    }
        
module.exports.Game = Game
