function botaocontinuar(){
    const name = document.getElementById('nome').value;
    console.log(name);

    if(!name){
        alert('O campo está vazio!');
    } else{
        sessionStorage.setItem('nome', name);
        window.location.replace('salas.html');
    }
};