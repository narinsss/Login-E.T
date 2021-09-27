//senha login
document.getElementById('visibility').addEventListener('mousedown', function() {
document.getElementById('pass').type = 'text';
});
  
document.getElementById('visibility').addEventListener('mouseup', function() {
document.getElementById('pass').type = 'password';
});
  
// Para que o password não fique exposto.
document.getElementById('visibility').addEventListener('mousemove', function() {
document.getElementById('pass').type = 'password';
});
//senha forte
document.getElementById('visibility2').addEventListener('mousedown', function() {
document.getElementById('pass2').type = 'text';
});
      
document.getElementById('visibility2').addEventListener('mouseup', function() {
document.getElementById('pass2').type = 'password';
});
      
// Para que o password não fique exposto.
document.getElementById('visibility2').addEventListener('mousemove', function() {
document.getElementById('pass2').type = 'password';
});

//repetir senha forte
document.getElementById('visibilityy').addEventListener('mousedown', function() {
document.getElementById('passs').type = 'text';
});
  
document.getElementById('visibilityy').addEventListener('mouseup', function() {
document.getElementById('passs').type = 'password';
});
  
// Para que o password não fique exposto.
document.getElementById('visibilityy').addEventListener('mousemove', function() {
document.getElementById('passs').type = 'password';
});

//FAZER COM QUE OS BUTTONS EXERÇAM A FUNÇÃO DE MUDAR O FORMULÁRIO PARA O ADEQUADO AO NONE


function trocarForm () {
 const register = document.getElementById('register');
  
  if(document.getElementById("second").style.display == 'none') {
    document.getElementById("second").style.display = 'block';
    document.getElementById("all").style.display = 'none';
  }else{
    document.getElementById("second").style.display = 'block';
  }    
};

register.addEventListener('click', trocarForm);

//LOGIN

function trocarForm2 () {
 const have = document.getElementById('have');
  
  if(document.getElementById("all").style.display == 'none') {
    document.getElementById("all").style.display = 'block';
    document.getElementById("second").style.display = 'none';
  }else{
    document.getElementById("all").style.display = 'block';
  }    
};

have.addEventListener('click', trocarForm2);

//RECUPERAÇÃO DE SENHA

function sumirTudo () {
  const aa = document.getElementById('aa');
   
  if(document.getElementById("forget").style.display == 'none') {
    document.getElementById("forget").style.display = 'block';
    document.getElementById("ball").style.display = 'none';
   }else{
    document.getElementById("forget").style.display = 'none';
   }
   
};
aa.addEventListener('click', sumirTudo);

function surgirTudo () {
  const back = document.getElementById("back")

  if(document.getElementById("forget").style.display = 'block') {
    document.getElementById("forget").style.display = 'none';
    document.getElementById("ball").style.display = 'block';
  }else{
    document.getElementById("ball").style.display = 'none'
  }
};

back.addEventListener('click', surgirTudo)