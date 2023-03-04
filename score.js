const test = document.getElementById('test');

const lista = JSON.parse(localStorage.getItem('lista'))

lista.forEach((el)=> {
    let newEl = document.createElement('h1');
    newEl.innerText = el.name
    test.appendChild(newEl);
})