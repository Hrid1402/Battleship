
function addBoards(shipsinf) {
    console.log('---------------------\nAdding Boards');
    console.log(shipsinf);
    const boards = document.createElement('div');
    const bodyy = document.querySelector('body');
    boards.classList.add('boards');
    bodyy.append(boards);
    addPlayerBoard(shipsinf, boards);
    addCPUboard(shipsinf, boards);
}
function addPlayerBoard(shipsinf, boards){
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
    
    const P_bottom = document.createElement('div');
    P_bottom.classList.add('P_bottom');

    const P_text = document.createElement('h2');
    P_text.textContent = 'You:';
    P_text.classList.add('P_text');

    P_bottom.append(P_text);

    const carrierICON = document.createElement('img');
    carrierICON.classList.add('carrierICON');
    carrierICON.src = require('./imgs/CarrierPixel.svg');

    const battleshipICON = document.createElement('img');
    battleshipICON.classList.add('battleshipICON');
    battleshipICON.src = require('./imgs/battleshipPixel.svg');

    const cruiserICON = document.createElement('img');
    cruiserICON.classList.add('cruiserICON');
    cruiserICON.src = require('./imgs/cruiserPixel.svg');

    const submarineICON = document.createElement('img');
    submarineICON.classList.add('submarineICON');
    submarineICON.src = require('./imgs/submarinePixel.svg');

    const destroyerICON = document.createElement('img');
    destroyerICON.classList.add('destroyerICON');
    destroyerICON.src = require('./imgs/destroyerPixel.svg');


    const P_shipsHolder = document.createElement('div');
    P_shipsHolder.classList.add('P_shipsHolder');
    P_shipsHolder.append(carrierICON);
    P_shipsHolder.append(battleshipICON);
    P_shipsHolder.append(cruiserICON);
    P_shipsHolder.append(submarineICON);
    P_shipsHolder.append(destroyerICON);

    P_bottom.append(P_shipsHolder);

    P_board.append(P_board_letters);
    P_board.append(P_middle);
    P_board.append(P_bottom);
    
    
    boards.append(P_board);
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
function addCPUboard(shipsinf, boards){
    const CPU_board = document.createElement('div');
    CPU_board.classList.add('CPU_board');
    const CPU_board_letters = document.createElement('li');
    CPU_board_letters.classList.add('CPU_board_letters');
    //letters
    const CPU_A = document.createElement('p');
    CPU_A.textContent = 'A';
    const CPU_B = document.createElement('p');
    CPU_B.textContent = 'B';
    const CPU_C = document.createElement('p');
    CPU_C.textContent = 'C';
    const CPU_D = document.createElement('p');
    CPU_D.textContent = 'D';
    const CPU_E = document.createElement('p');
    CPU_E.textContent = 'E';
    const CPU_F = document.createElement('p');
    CPU_F.textContent = 'F';
    const CPU_G = document.createElement('p');
    CPU_G.textContent = 'G';
    const CPU_H = document.createElement('p');
    CPU_H.textContent = 'H';
    const CPU_I = document.createElement('p');
    CPU_I.textContent = 'I';
    const CPU_J = document.createElement('p');
    CPU_J.textContent = 'J';

    CPU_board_letters.append(CPU_A, CPU_B, CPU_C, CPU_D, CPU_E, CPU_F, CPU_G, CPU_H, CPU_I, CPU_J);
    //
    const CPU_middle = document.createElement('div');
    CPU_middle.classList.add('CPU_middle');
    const CPU_board_numbers = document.createElement('li');
    CPU_board_numbers.classList.add('CPU_board_numbers');
    for (let i = 1; i <= 10; i++) {
        const CPU_number = document.createElement('p');
        CPU_number.textContent = i;
        CPU_board_numbers.append(CPU_number);
    }
    const CPU_board_grid = document.createElement('div');
    CPU_board_grid.classList.add('CPU_board_grid');

    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('CPU_cell');
        CPU_board_grid.append(cell);
    }

    CPU_middle.append(CPU_board_numbers);
    CPU_middle.append(CPU_board_grid);

    CPU_board.append(CPU_board_letters);
    CPU_board.append(CPU_middle);
    
    boards.append(CPU_board);
}

module.exports = { addBoards };