var estado = false;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const limpiar = () => {
    var div = document.getElementById('grid');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

const empezar2 = ()=>{
    estado = !estado;
    const t = parseInt(document.getElementById("t").value);
    setTimeout(() => {
                empezar();
              }, t*1000);
}

const mientras = (estado)=>{
    while (estado) {
        
    }
}

const empezar = () => {
    limpiar();
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    
    const c = parseInt(document.getElementById("c").value);
    var numerosRandom = [];
    for (let index = 0; index < c; index++) {
        var temp = getRandomInt(24);
        if (numerosRandom.includes(temp)) {
            index--;
        } else {
            numerosRandom.push(temp);
        }

    }
    console.log(numerosRandom);
    const grid = document.getElementById("grid");
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

    for (let index = 0; index < (x * y); index++) {
        const div = document.createElement("div");
        if (numerosRandom.includes(index)) {
            div.style.backgroundColor = 'blue';
        }
        grid.appendChild(div);
    }
}

