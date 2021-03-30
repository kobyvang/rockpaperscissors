"use strict";




class game {
    constructor() {
        this.playerOne = new Player("Koby");
        this.playerTwo = new Player("destinee");
        this.gesture = [];

        this.gesture.push(new handGesture(rock));
        this.gesture.push(new handGesture(paper));
        this.gesture.push(new handGesture(scissors));
        this.gesture.push(new handGesture(lizard));
        this.gesture.push(new handGesture(spock));
    }

    runGame() {
        this.displayRules();

        while(this.playerOne.score <3 && this.playerTwo.score < 3) {
            let playerOneTotal = this.playerOne.throwHandGesture(this.gesture);
            let playerTwoTotal = this.playertwo.throwHandGesture(this.gesture);

            if(playerOneTotal > playerTwoTotal){
            console.log(this.playerOne.name + "wins this round!");
            this.playerOne.score++;
            }
            else if (playerTwoTotal > playerOneTotal) {
            console.log(this.playerTwo.name + "wins this round!");
            this.playerTwo.score++;
             }
            else {
            console.log("you tied try again!");
            }
        }
        this.displayGamerWinner();
    }


    displayRules() {
    console.log("Welcome to the Rock Paper Scissors!");
    console.log("Two players will throw hand gestures.");
    console.log("throw hand gestures to find out who wins from rock, paper, or scissors.");
    console.log("The first player to three points will win the game!");
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



class Player {
    constructor (name){
        this.score = 0;
        this.name =name;
    }

    throwGesture(gesture){
        let throwGesture = gesture.generateRandomGesture();
        return throwGesture;
      }
}


class handGesture{
      constructor (numberOfGestures){
          this.numberOfGestures = numberOfGestures;
      }
  


  generateRandomGesture(){
      let randomNumber = math.floor(math.random() * this.numberOfGestures) + 1;
      return randomNumber;
  }
}
