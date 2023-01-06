const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click' , function(){
  this.classList.toggle('fa-moon-o');
  if(this.classList.toggle('fa-sun-o fa-lg')){
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s';
  }else{
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '2s';
  }
})