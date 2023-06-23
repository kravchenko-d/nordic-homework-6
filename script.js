const app = document.getElementById("app")

const popup = document.getElementById("popup")
const popupBody = document.getElementById("popup-body")

const crossWin = document.getElementById("cross-win") // Homework_6
const zeroWin = document.getElementById("zero-win")
let crossWinCount = 1
let zeroWinCount = 1

let player = "cross"  // zero
const cells = []
for(let i = 0; i < 9; i++){
    var cell = document.createElement("div")
    cell.classList.add("cell")

    cell.addEventListener("click", (event) => onClickCell(event, i))

    app.appendChild(cell)
    cells.push(cell)
}

const line = document.createElement("div")

line.style.backgroundColor = "red" //"black"
line.style.width = "0"
line.style.height = "0"
line.style.borderRadius = "2px"
line.style.position = "absolute"
line.style.transitionDuration = "2s"

app.appendChild(line)

popup.addEventListener("click", (event) => 
{
    popup.style.display = "none"

    if(cell.classList.contains("cell")){
        for(let i = 0; i < 9; i++){
        cells[i].classList.remove("zero", "cross")
        }
    }
    line.style.width = "0"
    line.style.height = "0"
    line.style.transform = "none"
}
) // Homework_6

function onClickCell(event, index) {
    const cell = cells[index]
    
    // cells[index].innerHTML = "<span>x</span>"
    if(!cell.classList.contains("cross")  && !cell.classList.contains("zero")){
            cell.classList.add(player)
            checkWin(index, player)

        if(player === "cross") {
            // cell.innerText = "x"
            player = "zero"
        }
        else if(player === "zero"){
            // cell.innerText = "o"
            player = "cross"
        }        
    }
}

function checkWin(index, player) {
    let isWin = false
    let direction

    const row = Math.floor (index / 3)
    const column = index % 3

    const cell1 =cells[row * 3], 
          cell2 = cells[row * 3 + 1],
          cell3 = cells[row * 3 + 2]


    if(cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)) {
        isWin = true
        direction = "row"
    }
    
    if(!isWin) {
        const cell1 =cells[column], 
              cell2 = cells[column + 3],
              cell3 = cells[column + 6]

              if(cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)) {
                isWin = true
                direction = "column"
            }
    }

    if(!isWin){
        let cell1, cell2, cell3
        if(
            (row === 0 || row == 2) && (column === 0 || column === 2) ||
            row === 1 && column === 1
            ){
                if(
                    row === 0 && column === 0 ||
                    row === 1 && column === 1 ||
                    row === 2 && column === 2
                ){
                    cell1 = cells[0]
                    cell2 = cells[4]
                    cell3 = cells[8]
                    direction = "diagonal-lr"
                    
                }

                if(
                    row === 0 && column === 2 ||
                    row === 1 && column === 1 ||
                    row === 2 && column === 0
                ){
                    cell1 = cells[2]
                    cell2 = cells[4]
                    cell3 = cells[6]
                    direction = "diagonal-rl"
                }

                if(cell1.classList.contains(player) && cell2.classList.contains(player) && cell3.classList.contains(player)) {
                    isWin = true
                }
        }
    }

    if(isWin){
        crossLineWin(row, column, direction)
        showWinPopup(player)
        if(player === "cross"){
            crossWin.innerText = crossWinCount++
        }
        else{
            zeroWin.innerText = zeroWinCount++
        } // Homework_6
        // setTimeout(
        //     () => {
        //         crossLineWin(row, column, "diagonal-rl")
        //         // alert(`Win is ${player}`)
        //     },
        //     100
        // )        
    }
}

function crossLineWin(row, column, direction){
    // const line = document.createElement("div")

    // line.style.backgroundColor = "red" //"black"
    // line.style.width = "90%"
    // line.style.height = "3px"
    // line.style.borderRadius = "2px"
    // line.style.position = "absolute"
    // line.style.transition = "width 1s"

    switch(direction){
        case "row":
            line.style.transitionProperty = "width"
            line.style.top = row * 100 + 50 - 1.5 + "px"
            line.style.left = "5%"
            // row === 0 => 0 * 100 + 50 = 50px
            // row === 1 => 1 * 100 + 50 = 150px
            // row === 2 => 2 * 100 + 50 = 250px

            line.style.width = "90%"
            line.style.height = "3px"

            break;
        case "column":
            line.style.transitionProperty = "height"
            line.style.left = column * 100 + 50 - 1.5 + "px"
            line.style.top = "5%"
            
            line.style.width = "3px"
            line.style.height = "90%"

            break;
        case "diagonal-lr":
            line.style.transitionProperty = "height"
            line.style.width = "3px"
            line.style.height = 90 * Math.sqrt(2) + "%"

            line.style.left = "calc(50% - 1.5px)"
            line.style.top = "calc(5% - 50px - 6px)"

            line.style.transform = "rotate(-45deg)"

            break;
        case "diagonal-rl":
            line.style.transitionProperty = "height"
            line.style.width = "3px"
            line.style.height = 90 * Math.sqrt(2) + "%"

            line.style.left = "calc(50% - 1.5px)"
            line.style.top = "calc(5% - 50px - 6px)"

            line.style.transform = "rotate(45deg)"
            break;
    }

    // app.appendChild(line)
}

function showWinPopup(player){
    popupBody.innerText = `Winner is ${player}` // "Winner is " + player
    popup.style.display = "flex"
}