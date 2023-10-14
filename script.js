texto = document.getElementById('titulo')

function oculta(){    
    texto.innerHTML = 'É na UNIPINHAL!'
    texto.style.color = 'white'
    texto.style.textDecoration = 'underline'
}

function exibe(){
    texto.innerHTML = 'Engenharia de Computação?'
    texto.style.color = 'black'
    texto.style.textDecoration = 'none'
}

function cadastro(){
    alert('Você foi inscrito com sucesso!')  
}

function mensagem(){
    alert('Mensagem Enviada!')
}