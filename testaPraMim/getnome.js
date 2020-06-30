const name = sessionStorage.getItem('nome');
const frase = `Olá, ${name}`
document.getElementById('nome').innerHTML = frase;