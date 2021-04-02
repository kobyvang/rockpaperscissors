"use strict";

const { HandGesture } = require("./gestures");



class Player {
    constructor (name){
        this.score = 0;
        this.name = name;
        this.gesture = new HandGesture();
        this.choice = "";
    }
    showGesture(){
        let array = this.gesture;
        array = array.gestureArray();
        return array;
    }
}


let player = new Player();
player.showGesture();
console.log(player.showGesture());

module.exports = Player; 