let playerActivated = false;

let moves = document.createElement('div');
let field = document.createElement('div');

let clicks = 0;

let minutes = 0;
let seconds = 0;

let audio = new Audio(); 
let volume = document.createElement('button');

let resultsTable = document.createElement('div');

let winTable = document.createElement('div');

let arrOfLastWinners = [];

function init() {
    let wrapperOfAll = document.createElement('div');
    wrapperOfAll.classList.add('wrapper');
    document.body.append(wrapperOfAll);

    let movesAndTimerWrapper = document.createElement('div');
    movesAndTimerWrapper.classList.add('moves_timer');
    //document.body.append(movesAndTimerWrapper);
    wrapperOfAll.append(movesAndTimerWrapper);


    let savedSeconds = localStorage.getItem('savedSeconds');
    if (savedSeconds != null) {
        seconds = savedSeconds;
    }
    let savedMinutes = localStorage.getItem('savedMinutes');
    if (savedMinutes != null) {
        minutes = savedMinutes;
    }
    let timeWrapper = document.createElement('div');
    timeWrapper.setAttribute('id', 'timer');
    //document.body.append(timeWrapper);
    movesAndTimerWrapper.append(timeWrapper);
    let timer = document.getElementById('timer');
    timer.innerHTML = 'Time ' + '0' + minutes + ':0' + seconds;
    document.addEventListener("DOMContentLoaded", startTimer);

    let savedMoves = localStorage.getItem('savedMoves');
    if (savedMoves != null) {
        clicks = savedMoves;
    }
    moves.classList.add('moves');
    moves.innerHTML = `Moves: ${clicks}`;
    //document.body.append(moves);

    
    movesAndTimerWrapper.append(moves);

    field.classList.add('field');
    //document.body.append(field);
    wrapperOfAll.append(field);
    field.addEventListener('click', moveCell);
    //field.addEventListener('mousedown', moveCellTest); //test

    //обертка для кнопочек
    let wrapperForBtns = document.createElement('div');
    wrapperForBtns.classList.add('buttons_wrapper');
    //document.body.append(wrapperForBtns);
    wrapperOfAll.append(wrapperForBtns);

    let restartButton = document.createElement('button');
    restartButton.innerHTML = 'Restart';
    restartButton.classList.add('restart_btn');
    //document.body.append(restartButton);
    wrapperForBtns.append(restartButton);
    restartButton.addEventListener('click', restart);

    volume.classList.add('volume');
    volume.innerHTML = 'Sound';
    //document.body.append(volume);
    wrapperForBtns.append(volume);
    volume.addEventListener('click', changeVolume);

    let resultsButton = document.createElement('button');
    resultsButton.classList.add('results_btn');
    resultsButton.innerHTML = 'Results'; 
    //document.body.append(resultsButton);
    wrapperForBtns.append(resultsButton);
    resultsButton.addEventListener('click', openResultTable);

    resultsTable.classList.add('results');
    resultsTable.innerHTML = 'GAME RESULTS';
    let list = document.createElement("ul")
    list.classList.add('list_result')
    resultsTable.appendChild(list)
    document.body.append(resultsTable);

    let closeItem = document.createElement('img');
    closeItem.classList.add('close_item');
    closeItem.src = './assets/close_item.png';
    closeItem.alt = 'closeItem';
    resultsTable.append(closeItem);

    closeItem.addEventListener('click', () => {
        resultsTable.classList.remove('results_active');
    });
    
    createForm();
    createCells();

    let savedWinners = localStorage.getItem('savedWinners');
    if (savedWinners != null) {
        arrOfLastWinners = JSON.parse(localStorage.getItem('savedWinners'));
    } 
    updateResultsTable(arrOfLastWinners);

    window.addEventListener('beforeunload', () => {
        if (playerActivated) {
            localStorage.setItem('savedSeconds', seconds);
            localStorage.setItem('savedMinutes', minutes);
        } else {
            localStorage.clear();
            if (arrOfLastWinners.length) {
                localStorage.setItem('savedWinners', JSON.stringify(arrOfLastWinners));
            }
        }
    });
}

init();

function startTimer() {
    setInterval(timerHandler, 1000);
}

function timerHandler() {
    let timer = document.getElementById('timer');
    seconds++;
    if (seconds >= 60) { 
        minutes++;
        seconds = seconds - 60;
    }
    if (minutes >= 10) {
        if (seconds >= 10) {
            timer.innerHTML = 'Time ' + minutes + ':' + seconds;
        }
        if (seconds < 10) {
            timer.innerHTML = 'Time ' + minutes + ':0' + seconds;
        }
    } else if (minutes < 10) {
        if (seconds >= 10) {
            timer.innerHTML = 'Time ' + '0' + minutes + ':' + seconds;
        }
        if (seconds < 10) {
            timer.innerHTML = 'Time ' + '0' + minutes + ':0' + seconds;
        }
    }
}

function getAmountOfCells() {
    let form = document.change_size.size;
 
    if (form.options[0].value === '0' && form.options[0].selected) {
        return 9;
    }; 

    if (form.options[1].value === '1' && form.options[1].selected) {
        return 16;
    };

    if (form.options[2].value === '2'  && form.options[2].selected) {
        return 25;
    };

    if (form.options[3].value === '3'  && form.options[3].selected) {
        return 36;
    };

    if (form.options[4].value === '4'  && form.options[4].selected) {
        return 49;
    };

    if (form.options[5].value === '5'  && form.options[5].selected) {
        return 64;
    };
}

function shuffleArray() {
    let amountOfCells = getAmountOfCells();
    let arr = [];

    if (amountOfCells === 9) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }
    if (amountOfCells === 16) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }
    if (amountOfCells === 25) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23, 24];
    }
    if (amountOfCells === 36) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35];
    }
    if (amountOfCells === 49) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
             16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
              30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
               44, 45, 46, 47, 48];
    }
    if (amountOfCells === 64) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
             16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
              30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
               44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
                58, 59, 60, 61, 61, 63];
    }

    let shuffledArr = arr.sort(() => Math.random() - 0.5);
    let copyArrayWithZero = [...shuffledArr]; // копия массива с 0
    let inversion = 0;
    let indexOfZero = shuffledArr.indexOf(0);
    shuffledArr.splice(indexOfZero, 1);

    // подсчет инверсий
    for (let i = 0; i < shuffledArr.length; i++) {
        for (let j = i + 1; j < shuffledArr.length; j++) {
          if (shuffledArr[i] > shuffledArr[j]) {
            ++inversion;
          }
        }
      }

    // для нечетных полей
    if (copyArrayWithZero.length % 2 != 0) {
        if (inversion % 2 == 0) {
            return copyArrayWithZero;
        } 
    } 

    if (copyArrayWithZero.length % 2 != 0) {
        if (inversion % 2 != 0) {
            return shuffleArray();
        }
    }

    if (copyArrayWithZero.length % 2 == 0) {
        let amountCellInRow = Math.sqrt(copyArrayWithZero.length);
        let indexZero = copyArrayWithZero.indexOf(0);
        // номер ряда, где расположен 0
        let numberRowOfZero = Math.trunc(indexZero / amountCellInRow);

        if ((numberRowOfZero + inversion) % 2 != 0) {
            return copyArrayWithZero;
        }
    } 

    if (copyArrayWithZero.length % 2 == 0) {
        let amountCellInRow = Math.sqrt(copyArrayWithZero.length);
        let indexZero = copyArrayWithZero.indexOf(0);
        // номер ряда, где расположен 0
        let numberRowOfZero = Math.trunc(indexZero / amountCellInRow);
       
        if ((numberRowOfZero + inversion) % 2 == 0) {
            return shuffleArray();
        }
    } 
}

function restart() {
    localStorage.clear();
    if (arrOfLastWinners.length) {
        localStorage.setItem('savedWinners', JSON.stringify(arrOfLastWinners));
    }

    minutes = 0;
    seconds = 0;
    let timer = document.getElementById('timer');
    timer.innerHTML = 'Time ' + '0' + minutes + ':0' + seconds;

    field.innerHTML = '';
    createCells();

    clicks = 0;
    moves.innerHTML = 'Moves: 0';
}

function soundClick() {
    audio.src = './assets/click.mp3'; 
    if (volume.className != 'volume volume_active') {
        audio.play(); 
    } else {
        audio.pause(); 
    }
}

function changeVolume() {
    if (volume.className != 'volume volume_active'){
        volume.classList.add('volume_active');
        volume.innerHTML = 'No sound'
        audio.autoplay = false; 
    } else {
        volume.innerHTML = 'Sound';
        volume.classList.remove('volume_active');
        audio.autoplay = false; 
    }
}

function openResultTable() {
    resultsTable.classList.add('results_active');
}

function createForm() {
    let form = document.createElement('form');
    let wrapper = document.querySelector('.wrapper');
    form.name = 'change_size';
    form.classList.add('form');
    //document.body.append(form);
    //wrapperForBtns.append(form);
    wrapper.append(form)
    let arrayOfSizes = ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'];

    let select = document.createElement('select');
    select.name = 'size';
    form.append(select);

    let savedFieldSize = localStorage.getItem('savedFieldSize');
    for (let i = 0; i < arrayOfSizes.length; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = arrayOfSizes[i];
        if (savedFieldSize != null) {
            if (savedFieldSize === 9 && option.innerHTML === '3x3') {
                option.defaultSelected = true;
            } else if (savedFieldSize == 16 && option.innerHTML === '4x4') {
                option.defaultSelected = true;
            } else if (savedFieldSize == 25 && option.innerHTML === '5x5') {
                option.defaultSelected = true;
            } else if (savedFieldSize == 36 && option.innerHTML === '6x6') {
                option.defaultSelected = true;  
            } else if (savedFieldSize == 49 && option.innerHTML === '7x7') {
                option.defaultSelected = true;
            } else if (savedFieldSize == 64 && option.innerHTML === '8x8') {
                option.defaultSelected = true;
            }
        }
        else if (option.innerHTML === '4x4') {
            option.defaultSelected = true;
        }
        select.append(option);
    }

    document.change_size.size.addEventListener('change', getAmountOfCells);
    document.change_size.size.addEventListener('change', createCells);
    document.change_size.size.addEventListener('change', restart);
    document.change_size.size.addEventListener('change', shuffleArray);
}

// Создание игрового поля в зависимости от количества клеток
function createCells() {
    let cellArray = shuffleArray();
    let cells = getAmountOfCells();
    field.innerHTML = '';

    let savedCells = localStorage.getItem('savedCells');
    if (savedCells != null) {
        cellArray = JSON.parse(savedCells);
    }
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = cellArray[i];

        if (cells === 9) { // test
            cell.style.width = '100px'; // 308:5 - 2 = 59.6px
            cell.style.height = '100px';
            field.style.width = '306px';
            field.style.height = '306px';
          
        }
        if (cells === 16) {
            cell.style.width = '75px'; // 308:5 - 2 = 59.6px
            cell.style.height = '75px';
            field.style.width = '308px';
            field.style.height = '308px';
        }
        if (cells === 25) {
            cell.style.width = '60px'; // 308:5 - 2 = 59.6px
            cell.style.height = '60px';
            field.style.width = '310px';
            field.style.height = '310px';
        }
        if (cells === 36) {
            cell.style.width = '50px'; // 308:5 - 2 = 59.6px
            cell.style.height = '50px';
            field.style.width = '312px';
            field.style.height = '312px';
        }
        if (cells === 49) {
            cell.style.width = '43px'; // 308:5 - 2 = 59.6px
            cell.style.height = '43px';
            field.style.width = '315px';
            field.style.height = '315px';
        }
        if (cells === 64) {
            cell.style.width = '37px'; // 308:5 - 2 = 59.6px
            cell.style.height = '37px';
            field.style.width = '312px';
            field.style.height = '312px';
        }
        
        if (cell.innerHTML === '0') {
            cell.classList.add('empty_cell')
        }

        field.append(cell);
    }
}

function getCellArray() {
    let cells = document.querySelectorAll('.cell');
    let cellsArray = [];
    for (let i = 0; i < cells.length; i++) {
        cellsArray.push(+cells[i].innerHTML);
    }
    return cellsArray;
}

function moveCell(event) {
    let target = event.target;
    if (target.className != 'cell') 
        return;

    playerActivated = true;

    //checkItemBeforeDrop(target);
    changeItem(target);
    

    localStorage.setItem('savedCells', JSON.stringify(getCellArray()));
    localStorage.setItem('savedFieldSize', getAmountOfCells());
    localStorage.setItem('savedMoves', clicks);

    isWin();
 }

 function changeItem(item) {
    let emptyItem = document.querySelector('.empty_cell');

    // получение координат выбранного item
    let parentPos = field.getBoundingClientRect();
    let itemPos = item.getBoundingClientRect();
    let childrenPos = emptyItem.getBoundingClientRect();
    let relativePos = {};
    let currentItemPos = {};
    widthOfCell = findWidthOfCell();

    currentItemPos.top = itemPos.top - parentPos.top;
    currentItemPos.right = itemPos.right - parentPos.right;
    currentItemPos.bottom = itemPos.bottom - parentPos.bottom;
    currentItemPos.left = itemPos.left - parentPos.left;

    relativePos.top = childrenPos.top - parentPos.top;
    relativePos.right = childrenPos.right - parentPos.right,
    relativePos.bottom = childrenPos.bottom - parentPos.bottom,
    relativePos.left = childrenPos.left - parentPos.left;

    if (Math.round(currentItemPos.top - relativePos.top) === widthOfCell && Math.round(currentItemPos.bottom - relativePos.bottom) === widthOfCell && Math.round(currentItemPos.left) === Math.round(relativePos.left) ||
    Math.round(currentItemPos.top - relativePos.top) === -widthOfCell && Math.round(currentItemPos.bottom - relativePos.bottom) === -widthOfCell && Math.round(currentItemPos.left) === Math.round(relativePos.left) ||
    Math.round(currentItemPos.left - relativePos.left) === widthOfCell && Math.round(currentItemPos.right - relativePos.right) === widthOfCell && Math.round(currentItemPos.top) === Math.round(relativePos.top) ||
    Math.round(currentItemPos.left - relativePos.left) === -widthOfCell && Math.round(currentItemPos.right - relativePos.right) === -widthOfCell && Math.round(currentItemPos.top) === Math.round(relativePos.top)) {

        emptyItem.innerHTML = item.innerHTML;
        emptyItem.classList.remove('empty_cell');
        item.classList.add('empty_cell');
        item.innerHTML = '0';
        
        moves.innerHTML =`Moves: ${++clicks}`;
        
        soundClick()
    }
}

// Функция записи результата 
function putWinner() {
    let record = `You solved the puzzle in ${timer.innerHTML.slice(4)} and ${clicks} moves`;

    if (arrOfLastWinners.length < 10) {
        arrOfLastWinners.push(record)
    } else {
        arrOfLastWinners.shift()
        arrOfLastWinners.push(record)
    }

    updateResultsTable(arrOfLastWinners);
    localStorage.setItem('savedWinners', JSON.stringify(arrOfLastWinners))
}

// функция для создания поля, появляющегося после выигрыша
function createWinTable() {
    winTable.classList.add('win_table');
    winTable.innerHTML = `Hooray! You solved the puzzle in ${timer.innerHTML.slice(4)} and ${clicks} moves`;
    winTable.classList.add('win_table_active');
    document.body.append(winTable);

    // Добавление крестика2 закрытия
    let closeItem2 = document.createElement('img');
    closeItem2.classList.add('close_item');
    closeItem2.src = './assets/close_item.png';
    closeItem2.alt = 'closeItem2';

    //закрытие и обновление по нажатию крестика выигрыша
    closeItem2.addEventListener('click', () => {
        winTable.classList.remove('win_table_active');
        restart();
    })
    winTable.append(closeItem2);
}

// Найдем ширину клетки в зависимости от количества клеток
function findWidthOfCell() {
    let form = document.change_size.size;
 
    if (form.options[0].value === '0' && form.options[0].selected) {
        return 102;
    }; 

    if (form.options[1].value === '1' && form.options[1].selected) {
        return 77;
    };

    if (form.options[2].value === '2'  && form.options[2].selected) {
        return 62;
    };

    if (form.options[3].value === '3'  && form.options[3].selected) {
        return 52;
    };

    if (form.options[4].value === '4'  && form.options[4].selected) {
        return 45;
    };

    if (form.options[5].value === '5'  && form.options[5].selected) {
        return 39;
    };
}

// Проверка на выигрыш
function isWin() {
    let cellsArray = getCellArray();
    let arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 0];
    let arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    let arr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
         17, 18, 19, 20, 21, 22, 23, 24, 0];
    let arr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
         17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
          33, 34, 35, 0];
    let arr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
         17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
          33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 0];
    let arr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
         33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
          49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 0];
    
    if (JSON.stringify(arr1) == JSON.stringify(cellsArray) ||
        JSON.stringify(arr2) == JSON.stringify(cellsArray) ||
        JSON.stringify(arr3) == JSON.stringify(cellsArray) ||
        JSON.stringify(arr4) == JSON.stringify(cellsArray) ||
        JSON.stringify(arr5) == JSON.stringify(cellsArray) ||
        JSON.stringify(arr6) == JSON.stringify(cellsArray)) {
        // функция, которая открывает окно выигрыша
        createWinTable();
        putWinner();
    }
}

function updateResultsTable(array) {
    let list = document.querySelector("ul")
    list.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        let elem = document.createElement("li")
        elem.innerHTML = array[i]
        list.appendChild(elem)
    }
}



















// function moveCellTest(event) {
//     let target = event.target;
//     if (target.className != 'cell') 
//         return;

//     playerActivated = true;

//     checkItemBeforeDrop(target);
//     //changeItem(target);
    

//     localStorage.setItem('savedCells', JSON.stringify(getCellArray()));
//     localStorage.setItem('savedFieldSize', getAmountOfCells());
//     localStorage.setItem('savedMoves', clicks);

//     isWin();
//  }











// //параметром передается элемент на который происходит клик
// function checkItemBeforeDrop(item) {
//     let emptyItem = document.querySelector('.empty_cell');

//     // получение координат выбранного item
//     let parentPos = field.getBoundingClientRect();
//     let itemPos = item.getBoundingClientRect();
//     let childrenPos = emptyItem.getBoundingClientRect();
//     let relativePos = {};
//     let currentItemPos = {};
//     widthOfCell = findWidthOfCell();

//     currentItemPos.top = itemPos.top - parentPos.top;
//     currentItemPos.right = itemPos.right - parentPos.right;
//     currentItemPos.bottom = itemPos.bottom - parentPos.bottom;
//     currentItemPos.left = itemPos.left - parentPos.left;

//     relativePos.top = childrenPos.top - parentPos.top;
//     relativePos.right = childrenPos.right - parentPos.right,
//     relativePos.bottom = childrenPos.bottom - parentPos.bottom,
//     relativePos.left = childrenPos.left - parentPos.left;

//     if (Math.round(currentItemPos.top - relativePos.top) === widthOfCell && Math.round(currentItemPos.bottom - relativePos.bottom) === widthOfCell && Math.round(currentItemPos.left) === Math.round(relativePos.left) ||
//     Math.round(currentItemPos.top - relativePos.top) === -widthOfCell && Math.round(currentItemPos.bottom - relativePos.bottom) === -widthOfCell && Math.round(currentItemPos.left) === Math.round(relativePos.left) ||
//     Math.round(currentItemPos.left - relativePos.left) === widthOfCell && Math.round(currentItemPos.right - relativePos.right) === widthOfCell && Math.round(currentItemPos.top) === Math.round(relativePos.top) ||
//     Math.round(currentItemPos.left - relativePos.left) === -widthOfCell && Math.round(currentItemPos.right - relativePos.right) === -widthOfCell && Math.round(currentItemPos.top) === Math.round(relativePos.top)) {
    
//         // если проходит проверка, то можно перемещать элемент
//         //console.log('kek');
        
//         item.onmousedown = function(event) {
//             let shiftX = event.clientX - item.getBoundingClientRect().left;
//             let shiftY = event.clientY - item.getBoundingClientRect().top;
//             console.log(shiftX, shiftY)

//             item.style.position = 'absolute';
//             item.style.zIndex = 1000;
//             field.body.append(item);

//             moveAt(event.pageX, event.pageY);
//         }
//         function moveAt(pageX, pageY) {
//             item.style.left = pageX - shiftX + 'px';
//             item.style.top = pageY - shiftY + 'px';
//         }

//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);
//         }

//         field.addEventListener('mousemove', onMouseMove);

//         // item.onmouseup = function() {
//         //     document.removeEventListener('mousemove', onMouseMove);
//         //     item.onmouseup = null;
//         //   };
        
    
        
//         item.ondragstart = function() {
//           return false;
//         };

//     }
     
//     }

//     field.addEventListener('mousedown', moveCellTest);