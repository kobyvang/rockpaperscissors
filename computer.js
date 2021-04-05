"use strict";

//const Player = require("./player");
const  HandGesture  = require("./gestures");
const prompt = require("prompt-sync")();

class Computer{
   constructor(){
       this.choice1 = "";
       this.choice2 = "";
       this.playerChoice = "";
   }
   robot(){
       this.choice2 = [Math.floor(Math.random() * 5)]
       let gesture = new HandGesture();
       gesture = gesture.gestureArray();
       this.choice2 = gesture[this.choice2]
       
       
       
       
   }
       compare(){
           if(this.choice1===this.choice2){
               console.log( "The result is a tie!");
           }
           if(this.choice1==="rock"){
               if(this.choice2==="scissors"){
                   console.log( "rock crushes scissors");
               }
               
                   
               
           }
           if(this.choice1==="paper"){
               if(this.choice2==="rock"){
                   console.log( "paper covers rock");
               }
               
                   
               
           }
           if(this.choice1==="scissors"){
               if(this.choice2==="rock"){
                   console.log( "rock crushes scissors");
               }
               
                   
               
           }
           if(this.choice1==="spock"){
               if(this.choice2==="scissors"){
                   console.log( "spock smashes scissors");
               }
           }
           if(this.choice1=="spock"){
               if(this.choice2=="lizard"){
                   console.log( "lizard poisons spock");
               }
               
                   
               
           }
           if(this.choice1==="lizard"){
               if(this.choice2==="spock"){
                   console.log( "lizard poisons spock");
               }
               
                   
               
           }
           if(this.choice1==="rock"){
               if(this.choice2==="paper"){
                   console.log( "paper covers rock");
               }
               
                   
               
           }
           if(this.choice1==="scissors"){
               if(this.choice2==="paper"){
                   console.log( "scissors cuts paper");
               }
               
                   
               
           }
           if(this.choice1==="paper"){
               if(this.choice2==="scissors"){
                   console.log( "scissors cuts paper");
               }
               
                   
               
           }
           if(this.choice1==="scissors"){
               if(this.choice2==="spock"){
                   console.log( "spock smashes scissors");
               }
               
                   
               
           }
           if(this.choice1==="paper"){
               if(this.choice2==="lizard"){
                   console.log( "lizard eats paper");
               }
               
                   
               
           }
           if(this.choice1==="lizard"){
               if(this.choice2==="paper"){
                   console.log( "lizard eats paper");
               }
               
                   
               
           }
           if(this.choice1==="paper"){
               if(this.choice2==="spock"){
                   console.log( "paper disproves spock");
               }
               
                   
               
           }
           if(this.choice1==="spock"){
               if(this.choice2==="paper"){
                   console.log( "paper disproves spock");
               }
               
                   
               
           }
           if(this.choice1==="spock"){
               if(this.choice2==="rock"){
                   console.log( "spock vaporizes rock");
               }
               
                   
               
           }
           if(this.choice1==="rock"){
               if(this.choice2==="spock"){
                   console.log( "spock vaporizes rock");
               }
               
                   
               
           }
           if(this.choice1==="scissors"){
               if(this.choice2==="lizard"){
                   console.log( "scissors decapitates lizard");
               }
               
                   
               
           }
           if(this.choice1==="lizard"){
               if(this.choice2==="scissors"){
                   console.log( "scissors decapitates lizard");
               }
               
                   
               
           }
           if(this.choice1==="rock"){
               if(this.choice2==="lizard"){
                   console.log( "rock crushes lizard");
               }
               
                   
               
           }
           if(this.choice1==="lizard"){
               if(this.choice2==="rock"){
                   console.log( "rock crushes lizard");
               }
           }
       }
   
   

   chosen(){
        let gestures =  new HandGesture();
       this.choice1 = prompt("player one choose your gesture.");
       this.playerChoice = gestures.gestureArray().indexOf(this.choice1,0);
       while(this.playerChoice < 0){
           
           this.choice1 = prompt("player one choose your gesture.");
           this.playerChoice = gestures.gestureArray().indexOf(this.choice1,0);
       }
       this.robot();
       this.compare();
   }
}







 
 
 
 
module.exports = Computer; 
 
    // creat function for all of the actions that this object can perfom
    
        // for human class only - userChoice = prompt("Do you choose rock, paper, scissors, spock, or lizard?");
        
        // generate a random number between 

        

       
    

