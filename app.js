const container = document.querySelector('#container');
const btn = document.querySelector('#clear');

function createGrid(num){
    let columns = '';
    for (let i=0; i<num; i++){
    let columnSize = ` ${40/num}rem`;
        columns += columnSize;
    }
    container.style.cssText = `grid-template-columns: ${columns};`;
    for (let i=1; i<=num*num; i++){
        let div = document.createElement('div');
        div.classList.add('tile');
        div.textContent = '';
        div.addEventListener('mouseenter', function (e) {
            e.target.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }
}

createGrid(16);

function clear(){
    let tile = document.querySelectorAll('.tile');
    tile.forEach(one => {
        one.remove();
    })
    newGrid = 101;
    while (newGrid > 100) {
        newGrid = prompt('How large would you like the new grid? Max size is 100.');
    }
    createGrid(newGrid);
    
}

btn.addEventListener('click', clear);

