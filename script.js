let body = document.querySelector('body') 

let mainDiv = document.querySelector('#main-div') //game field


let refreshButton = document.createElement('button') //refresh button
refreshButton.innerText = 'Reset'
refreshButton.style.backgroundColor = '#2a9d8f'
refreshButton.style.color = '#fff'
refreshButton.style.border = '0'
refreshButton.style.padding = '0.5em'
refreshButton.style.borderRadius = '15%'
refreshButton.style.marginTop = '2rem'

body.insertBefore(refreshButton, mainDiv)

refreshButton.addEventListener('click', () =>{

    mainDiv.innerHTML = ''
    
    let boardSize = document.querySelector('.field-size').value 
    mainDiv.style.display = 'grid'
    mainDiv.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`
    mainDiv.style.border = '4px solid #000'
    mainDiv.style.marginTop = '3rem'

    createBoard(mainDiv, boardSize)

})

let fieldSize = document.createElement('input') //input for field size
fieldSize.type = 'text'
fieldSize.className = 'field-size'
fieldSize.pattern = '[1-100]{1}'

body.insertBefore(fieldSize, mainDiv)




//creating board 

function createBoard(mainDiv, boardSize){

    let size = boardSize * boardSize
    for(let i = 0; i < size; i++){
        let div = document.createElement('div')
        div.classList.add('inside')
        div.style.padding = '10px'
        div.style.border = '1px solid #000'
        mainDiv.appendChild(div)
    }

    let smallDiv  = document.querySelectorAll('.inside')
    smallDiv.forEach(div => {
        div.addEventListener('mouseenter', () =>{
            div.style.backgroundColor = '#023e8a'
        })
    });
}


