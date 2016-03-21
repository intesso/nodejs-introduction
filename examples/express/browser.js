var request = require('superagent');

var back = document.querySelector('.back');
back.addEventListener('click', function(e){
  console.log('back');
  window.history.back();
});

var dir = document.querySelector('.directory');
dir.addEventListener('click', function(e){
  request
    .get('/__directory')
    .accept('json')
    .end(function(err, res){
      if (err) return console.log('directory error', err);
      console.log('directory', res.text);
    })
});