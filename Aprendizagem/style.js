
 document.getElementById('b1').onclick = function() {
    var botao = document.getElementById('b1');
    var containe = document.querySelector('.container');

    botao.disabled = true;
    botao.style.backgroundColor = "#6ae36aab";
    botao.style.color = "white";
    setTimeout(() => {
        containe.style.visibility = "hidden";
     },2000);
    
}

document.getElementById('b2').onclick = function() {
    var botao = document.getElementById('b1');
    var botaoo = document.getElementById('b2');
    var heart3 = document.getElementById('ther');
    var containe = document.querySelector('.container');

    botao.disabled = true;
    botao.style.backgroundColor = "#6ae36aab";
    botao.style.color = "white";
    botaoo.style.backgroundColor = "#f15151d9";
    botaoo.style.color = "white";
    heart3.style.color = "#e4696260";
  
    setTimeout(() => {
        containe.style.visibility = "hidden";
     },2000);
}

document.getElementById('b3').onclick = function() {
    var botao = document.getElementById('b1');
    var botaoo = document.getElementById('b3');
    var heart3 = document.getElementById('ther');
    var containe = document.querySelector('.container');

    botao.disabled = true;
    botao.style.backgroundColor = "#6ae36aab";
    botao.style.color = "white";
    botaoo.style.backgroundColor = "#f15151d9";
    botaoo.style.color = "white";
    heart3.style.color = "#e4696260";
    setTimeout(() => {
        containe.style.visibility = "hidden";
     },2000);
 }
 
 document.getElementById('b4').onclick = function() {
    var botao = document.getElementById('b1');
    var botaoo = document.getElementById('b4');
    var heart3 = document.getElementById('ther');
    var containe = document.querySelector('.container');

    botao.disabled = true;
    botao.style.backgroundColor = "#6ae36aab";
    botao.style.color = "white";
    botaoo.style.backgroundColor = "#f15151d9";
    botaoo.style.color = "white";
    heart3.style.color = "#e4696260";
    setTimeout(() => {
        containe.style.visibility = "hidden";
     },2000);
 }
 
 function update() {
    var teste = document.querySelector('.teste');
    var up = document.getElementById('comeco');
    var upp = document.getElementById('comecoo');
    var heart3 = document.getElementById('ther');
    var containe = document.querySelector('.container');
    var nav = document.querySelector('.nav-bar');
    var cenarios = document.querySelector('.cenarios');
    var element = document.getElementById("myprogressBar"); 
    teste.style.display = 'block'; 
    up.style.display = 'none'; 
    upp.style.display = 'none'; 
    nav.style.display = 'none'; 
    cenarios.style.display = 'none'; 
    var width = 1;
    var identity = setInterval(scene, 120);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
        containe.style.visibility = "hidden";
        heart3.style.color = "#e4696260";
        
      } else {
        heart3.style.color = "E46962";
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }

