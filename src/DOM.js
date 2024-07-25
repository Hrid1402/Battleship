function addBoards(shipsinf) {
    console.log('---------------------\nAdding Boards');
    console.log(shipsinf);
    addPlayerBoard(shipsinf);
}
function addPlayerBoard(shipsinf){
    const P_board = document.createElement('div');
    P_board.classList.add('P_board');
    const P_board_letters = document.createElement('li');
    P_board_letters.classList.add('P_board_letters');
    //letters
    const P_A = document.createElement('p');
    P_A.textContent = 'A';
    const P_B = document.createElement('p');
    P_B.textContent = 'B';
    const P_C = document.createElement('p');
    P_C.textContent = 'C';
    const P_D = document.createElement('p');
    P_D.textContent = 'D';
    const P_E = document.createElement('p');
    P_E.textContent = 'E';
    const P_F = document.createElement('p');
    P_F.textContent = 'F';
    const P_G = document.createElement('p');
    P_G.textContent = 'G';
    const P_H = document.createElement('p');
    P_H.textContent = 'H';
    const P_I = document.createElement('p');
    P_I.textContent = 'I';
    const P_J = document.createElement('p');
    P_J.textContent = 'J';

    P_board_letters.append(P_A, P_B, P_C, P_D, P_E, P_F, P_G, P_H, P_I, P_J);
    //
    const P_middle = document.createElement('div');
    P_middle.classList.add('P_middle');
    const P_board_numbers = document.createElement('li');
    P_board_numbers.classList.add('P_board_numbers');
    for (let i = 1; i <= 10; i++) {
        const P_number = document.createElement('p');
        P_number.textContent = i;
        P_board_numbers.append(P_number);
    }
    const P_board_grid = document.createElement('div');
    P_board_grid.classList.add('P_board_grid');

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('P_cell');
        P_board_grid.append(cell);
    }

    P_middle.append(P_board_numbers);
    P_middle.append(P_board_grid);

    P_board.append(P_board_letters);
    P_board.append(P_middle);
    
    const body = document.querySelector('body');
    body.append(P_board);
    addPlayerShips(shipsinf);
}
function addPlayerShips(shipsinf){
    const CELLS = document.querySelectorAll('.P_cell');

    const carrier = document.createElement('img');
    carrier.classList.add('carrierSVG');
    carrier.src = require('./imgs/CarrierPixel.svg');

    const battleship = document.createElement('img');
    battleship.classList.add('battleshipSVG');
    battleship.src = require('./imgs/battleshipPixel.svg');

    
    const cruiser = document.createElement('img');
    cruiser.classList.add('cruiserSVG');
    cruiser.src = require('./imgs/cruiserPixel.svg');

    const submarine = document.createElement('img');
    submarine.classList.add('submarineSVG');
    submarine.src = require('./imgs/submarinePixel.svg');

    const destroyer = document.createElement('img');
    destroyer.classList.add('destroyerSVG');
    destroyer.src = require('./imgs/destroyerPixel.svg');

    CELLS[shipsinf[1].curPOS].append(carrier);
    CELLS[shipsinf[1].curPOS].classList.add("inFront");
    CELLS[shipsinf[1].curPOS].addEventListener('mousedown', event => event.preventDefault());
    if(shipsinf[1].direction == "h"){
        CELLS[shipsinf[1].curPOS].classList.add("rotate");
    }

    CELLS[shipsinf[2].curPOS].append(battleship);
    CELLS[shipsinf[2].curPOS].classList.add("inFront");
    CELLS[shipsinf[2].curPOS].addEventListener('mousedown', event => event.preventDefault());
    if(shipsinf[2].direction == "h"){
        CELLS[shipsinf[2].curPOS].classList.add("rotate");
    }

    CELLS[shipsinf[3].curPOS].append(cruiser);
    CELLS[shipsinf[3].curPOS].classList.add("inFront");
    CELLS[shipsinf[3].curPOS].addEventListener('mousedown', event => event.preventDefault());
    if(shipsinf[3].direction == "h"){
        CELLS[shipsinf[3].curPOS].classList.add("rotate");
    }

    CELLS[shipsinf[4].curPOS].append(submarine);
    CELLS[shipsinf[4].curPOS].classList.add("inFront");
    CELLS[shipsinf[4].curPOS].addEventListener('mousedown', event => event.preventDefault());
    if(shipsinf[4].direction == "h"){
        CELLS[shipsinf[4].curPOS].classList.add("rotate");
    }

    CELLS[shipsinf[5].curPOS].append(destroyer);
    CELLS[shipsinf[5].curPOS].classList.add("inFront");
    CELLS[shipsinf[5].curPOS].addEventListener('mousedown', event => event.preventDefault());
    if(shipsinf[5].direction == "h"){
        CELLS[shipsinf[5].curPOS].classList.add("rotate");
    }
    
};

module.exports = { addBoards };