import("./style.css");

console.log("Working");
class Ship{
    constructor(length){
        this.length = length;
        this.curHits = 0;
        this.sunk = false;
    }
    hit(){
        curHits++;
    }
    isSunk(){
        if(curHits == length){
            sunk = true;
        }
    }
}
class Gameboard{
    constructor(){
        this.board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }
    receiveAttack(x,y){
        console.log("x");
    }
    addShip(ship, row, column, direction){
        
        for(let i=0; i<ship.length; i++){
            if(direction=="h"){
                this.board[row][column+i]=1;
            }else{
                this.board[row+i][column]=1;
            }
            
        }
        console.log(this.board);
    }
}
const myGameboard = new Gameboard();
myShip = new Ship(1);
console.log(myShip);
myGameboard.addShip(myShip, row=4, column=0, "v");
//console.log(myGameboard.board);
