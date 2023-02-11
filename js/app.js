let bottonStart = document.getElementById('gameStartBtn')

bottonStart.addEventListener('click', gameMinefield)

function gameMinefield (event) {

    bottonStart.innerHTML = 'Reset'

    let sideNumberOfCells = document.getElementById('levelRange')

    let numberOfCells = sideNumberOfCells.value * sideNumberOfCells.value

    const grillElement = document.getElementById('grill')

    grillElement.innerHTML = ''
    
    for (let i = 0; i < numberOfCells; i++) {

        let numberCycle = i + 1

        const cellElement = (`<div class="cell" style="width: calc(100% / ${sideNumberOfCells.value}); font-size: 23px; text-shadow: 0px 0px #3c2424 !important;">${numberCycle}</div>`);

        grillElement.innerHTML += cellElement
    
    }

    const cellElements = document.querySelectorAll('.cell')

    for (let i = 0; i < cellElements.length; i++) {

        const cell = cellElements[i]

        cell.addEventListener('click', cellClicked)
    }

    let pointsScore = document.getElementById('point-section')

    let points = 0

    const winStep = []

    const step = 'STEP'

    function cellClicked (event){

        let cell = event.target

        cell.classList.add('bg-warning')

        cell.classList.add('cell-style')

        cell.removeEventListener('click', cellClicked)

        let numberCell = parseInt(cell.innerHTML)

        cell.innerHTML = `<i class="fa-solid fa-hands-clapping"></i>`

        points = points += 10
    
        pointsScore.innerHTML = 'Score: ' + points;

        winStep.push(step)
    
        if(bombsBox.includes(numberCell)){ 

            cell.classList.remove('bg-warning')

            cell.classList.add('cell-bomb')

            cell.innerHTML = `<i class="fa-solid fa-bomb"></i>`

            for (let i = 0; i < cellElements.length; i++) {

                const cell = cellElements[i]

                cell.removeEventListener('click', cellClicked)
            }

            pointsScore.innerHTML = 'You Lose! Try again'

        } else if(winStep.length === cellElements.length - bombsBox.length) {

            for (let i = 0; i < cellElements.length; i++) {

                const cell = cellElements[i]

                cell.removeEventListener('click', cellClicked)

            }

            pointsScore.innerHTML = 'You Win! ' + 'Score: ' + points;
        }

        console.log(winStep)

        console.log(cellElements.length - bombsBox.length)

        console.log(bombsBox.length)

        console.log(cellElements.length)
    }

    const bombsBox = []

    console.log(bombsBox)

    while(bombsBox.length <= (cellElements.length / 10)){

        const bombs = Math.floor(Math.random() * ((cellElements.length) - 1 + 1) + 1);

        if(!bombsBox.includes(bombs)){

            bombsBox.push(bombs)
        }
    }
}






