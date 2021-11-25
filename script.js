let body = document.querySelector('body') 

let mainDiv = document.querySelector('#main-div') //game field
mainDiv.style.display = 'grid'
mainDiv.style.gridTemplateColumns = 'repeat(16, 1fr)'
mainDiv.style.border = '4px solid #000'
mainDiv.style.marginTop = '10rem'

let refreshButton = document.createElement('button') //refresh button
refreshButton.innerText = 'Reset'
refreshButton.style.backgroundColor = '#2a9d8f'
refreshButton.style.color = '#fff'
refreshButton.style.border = '0'
refreshButton.style.padding = '0.5em'
refreshButton.style.borderRadius = '15%'

body.appendChild(refreshButton)

refreshButton.addEventListener('click', () =>{
    window.location.reload(true)
})

let fieldSize = document.createElement('input') //input for field size
fieldSize.type = 'text'
fieldSize.className = 'field-size'
fieldSize.pattern = '[1-99]{1}'

body.appendChild(fieldSize)

let boardSize = document.querySelector('.field-size')


//creating board 

function createBoard(mainDiv){
    for(let i = 0; i < 256; i++){
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

createBoard(mainDiv)


