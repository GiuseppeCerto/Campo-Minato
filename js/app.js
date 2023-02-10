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

        const cellElement = (`<div class="cell" style="width: calc(100% / ${sideNumberOfCells.value}); font-size: 15px;">${numberCycle}</div>`);

        grillElement.innerHTML += cellElement
    }

    const cellElements = document.querySelectorAll('.cell')

    for (let i = 0; i < cellElements.length; i++) {

        const cell = cellElements[i]

        cell.addEventListener('click', cellClicked)
    }

    function cellClicked (event){

        let cell = event.target

        cell.classList.add('bg-warning')

        cell.classList.add('cell-style')

        cell.removeEventListener('click', cellClicked)

        let numberCell = parseInt(cell.innerHTML)

        cell.innerHTML = `<i class="fa-solid fa-hands-clapping"></i>`
        


        // seganpunti **************************************


        
        let points = document.getElementById('point-section')

        points = points =+ 1

        points.innerHTML
        
        if(bombsBox.includes(numberCell)){

            cell.classList.remove('bg-warning')

            cell.classList.add('cell-bomb')

            cell.innerHTML = `<i class="fa-solid fa-bomb"></i>`

            window.alert("You Lose! Don't worry! Try Again! ")

            for (let i = 0; i < cellElements.length; i++) {

                const cell = cellElements[i]

                cell.removeEventListener('click', cellClicked)
            }
        }
    }

    bombsBox = []

    while(bombsBox.length <= (cellElements.length / 5)){

        bombs = Math.floor(Math.random() * ((cellElements.length) - 1 + 1) + 1);

        if(!bombsBox.includes(bombs)){

            bombsBox.push(bombs)
        }
    }

    return
}






