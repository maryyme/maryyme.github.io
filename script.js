var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('AAAAAAAAAAA');
});
btnyes.addEventListener('click', () => {
alert('OMG NO PUEDE SER');
});
btnyes.addEventListener('click', () => {
alert('chao. &*^!&*#733');
});
btnyes.addEventListener('click', () => {
alert('MAÑANA es el dia de nuestra boda');
});
btnyes.addEventListener('click', () => {
alert('anda planeando nuestra luna de miel caramelito ;3');
});
btnyes.addEventListener('click', () => {
    alert('te amo mucho :(');
    });
btnyes.addEventListener('click', () => {
alert('dare lo mejor de mi para que esto sea inolvidable (´• ω •`)');
        });