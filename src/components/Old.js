let numOfRows = 0
let cells = 1   // assuming there's at least one cell being made
let colorList = ["gray",
    "white",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink"]


    let colorOption = document.querySelector(".color-button")
    let grid = document.querySelector("#grid")
    let chosenColor = document.querySelector(".color-button")

    let clicked = false //tracks if the user is holding the mouse down

    //toggles clicked on
    grid.addEventListener("mousedown", () => {
        clicked = true
        console.log(clicked)})
    //toggles clicked off
    grid.addEventListener("mouseup", () => {
        clicked = false
        console.log(clicked)})


    let defaultColor = "gray"

    // Select color from dropdown menu of colors
    function colorPick () {
        defaultColor = chosenColor.value
    }


    function createColorMenu() {
        // this populates the drop down menu
        let dropmenu = document.getElementById("drop")
        for(let i = 0; i < colorList.length; i++) {
            let color = document.createElement("option")
            color.classList.add(`${i}`)
            color.innerHTML = colorList[i]
            color.addEventListener('onclick', function () {
                console.log("Clicked")
            })
            colorOption.append(color)    
        }
    }

    //Fills all cells with selected color
    function fillAllCells() {
        const allCells = document.getElementsByClassName("grid-cell")
        for(let i = 0; i < allCells.length; i++){
            allCells[i].style.backgroundColor = defaultColor;
            allCells[i].classList.remove("uncolored")
        }
    }

    //Fills all uncolored cells with selected color
    function fillAllUncolored() {
        const allCells = document.getElementsByClassName("grid-cell")
        //Filters out all cells that are currently colored
        let uncoloredCells = [...allCells].filter(cell => {
            return cell.classList.contains("uncolored")
        })
        for(let i = 0; i < uncoloredCells.length; i++){
            uncoloredCells[i].style.backgroundColor = defaultColor;
            uncoloredCells[i].classList.remove("uncolored")
        }
    }

    //Resets the color of all cells to white
    function clearAllCells() {
        const allCells = document.getElementsByClassName("grid-cell")
        for(let i = 0; i < allCells.length; i++){
            allCells[i].style.backgroundColor = "white";
            allCells[i].classList.add("uncolored")
        }
    }

    function changeColor() {
        this.style.backgroundColor = defaultColor;
        this.classList.remove("uncolored")
    }

    function createCell(className) {
        let cell = document.createElement("td")
        cell.classList.add(className)
        cell.classList.add("uncolored")
        cell.style.backgroundColor = "white"
        //cell.addEventListener("click", changeColor)
        cell.addEventListener("mousedown", changeColor)
        //When the user mouses over a cell, the event listener checks if the
        // 'clicked' variable is true. If yes, the color of the cell is set to
        // the selected color
        cell.addEventListener("mouseover", () => {
            if(clicked){
                cell.style.backgroundColor = defaultColor
                cell.classList.remove("uncolored")
            }
            console.log(clicked)
        })
        return cell;
    }

    //Add rows a new row to the grid
    function addRow () {
        //cells = 1
        numOfRows++
        let newRow = document.createElement("tr")
        newRow.classList.add("grid-row")
        grid.appendChild(newRow)

        for (let i = 0; i < cells; i++) {
            newRow.appendChild(createCell("grid-cell"))
        }
        
    }

    //Add columns to the grid
    function addColumn () {
        if(numOfRows === 0){
            addRow()
            return
        }
        cells++ // when we add a column, we are using the row numbers to fill in the whole column
        let rows = grid.getElementsByClassName("grid-row")

        for (let i = 0; i < rows.length; i++) {
            rows[i].appendChild(createCell("grid-cell"))
        }
    }

    //Delete row from grid
    function deleteRow() {
        numOfRows--
        let grid = document.getElementsByTagName("tr")
        grid[grid.length - 1].remove()
    }

    //Delete column from grid
    function deleteColumn () {
        cells--;
        let grid = document.getElementById("grid")
        let rows = grid.getElementsByClassName("grid-row")
        let lastColumn = grid.rows[0].cells.length - 1
    
        for (let i = 0; i < grid.rows.length; i++) {
            grid.rows[i].deleteCell(lastColumn);
        }
    }