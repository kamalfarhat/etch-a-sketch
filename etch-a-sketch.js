function changeSquareColor(e) {
    currentFilterString = e.target.style.filter
    if(e.target.style.backgroundColor == ''){
        e.target.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ',' 
        + getRandomInt(0, 255) + ',' + getRandomInt(0, 255)
        e.target.style.filter = 'brightness(1)'
    } else {
        currentFilterValue = currentFilterString.slice(currentFilterString.indexOf('(')+1, currentFilterString.indexOf(')'))
        newFilterValue = Math.round((currentFilterValue - 0.1) * 10)/10
        if(newFilterValue >= 0) {
            e.target.style.filter = 'brightness(' + newFilterValue + ')'
        }        
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

        numberOfSquares = prompt('How many squares per side do you want to have in the grid?')
        while(numberOfSquares > 100) {
            numberOfSquares = prompt('Please enter a number below 100')
        }
            body = document.body
            divContainer = document.createElement('div')
            divContainer.className = "divContainer"
            divContainer.style.gridTemplateColumns = 'repeat(' + numberOfSquares + ', 1fr)'
            divContainer.style.gridTemplateRows = 'repeat(' + numberOfSquares + ', 1fr)'
            body.appendChild(divContainer)
            for(i=0; i < numberOfSquares; i++) {
                for(j=0; j < numberOfSquares; j++) {
                    square = document.createElement('div')
                    square.className = 'square'
                    //square.innerHTML = '&emsp;'
                    divContainer.appendChild(square)
                }
        }
        squares = document.querySelectorAll('.square')
        squares.forEach(s => addEventListener('mouseover', changeSquareColor))