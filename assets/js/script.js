function pintar(id, color = 'green') {
    const div = document.getElementById(id);
    div.style.backgroundColor = color;
};

const key = document.getElementById('key');

let divNuevo = document.createElement("div");
divNuevo.style.cssText = "width: 200px; height: 200px; background-color: white; border: 1px solid black;";


document.addEventListener('keydown', function (event) {
if (event.key === 'a' || event.key === 'A') {
    key.style.backgroundColor = 'pink';
} else if (event.key === 's' || event.key === 'S') {
    key.style.backgroundColor = 'orange';
} else if (event.key === 'd' || event.key === 'D') {
    key.style.backgroundColor = 'aquamarine';
} else if (event.key === 'q' || event.key === 'Q') {
    document.body.appendChild(divNuevo);
    divNuevo.style.backgroundColor = 'purple';
} else if (event.key === 'w' || event.key === 'W'){
    document.body.appendChild(divNuevo);
    divNuevo.style.backgroundColor = 'grey';
} else if (event.key === 'e' || event.key === 'E'){
    document.body.appendChild(divNuevo);
    divNuevo.style.backgroundColor = 'brown';
}});

