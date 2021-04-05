"use strict";

const Computer = require("./Computer");
const Human = require("./Human");
const Player = require("./Player");
const prompt = require("prompt-sync")();

class Game {
    constructor() {
        this.playerOne = new Player ("koby");
        this.playerTwo = new Player ("destinee");
        
    }
    runGame() {
        this.displayRules();
         let userChoice = prompt("multiplayer or singlePlayer?");
        if(userChoice == "multiplayer"){
            let player = new Player();
            
            console.log(player.showGesture());
            let human = new Human();
            human.chosen();
           // Human;
        }
        else if(userChoice == "singleplayer"){
            let player = new Player();
            console.log(player.showGesture());
            let robot = new Computer();
            robot.chosen();
        }
        else{
            this.runGame();

        }
        
        //this.displayGamerWinner();
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
    
    
module.exports = Game;
