var back = document.querySelector('.back');
back.addEventListener('click', function(e){
  console.log('back');
  window.history.back();
});