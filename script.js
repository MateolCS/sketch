let mainDiv = document.querySelector('#main-div')
mainDiv.style.display = 'grid'
mainDiv.style.gridTemplateColumns = 'repeat(16, 1fr)'
mainDiv.style.border = '4px solid #000'
mainDiv.style.marginTop = '10rem'

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
        div.addEventListener('click', () =>{
            div.style.backgroundColor = '#023e8a'
        })
    });
}

createBoard(mainDiv)


