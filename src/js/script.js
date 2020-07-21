// import $ from 'jquery';

document.querySelectorAll('.room').forEach(function(test){
  var b = test.getAttribute('bed');
  var f = test.getAttribute('fang');
  var t = test.getAttribute('toy');
  var r = test.getAttribute('roof');

  if ( b + f + t + r == 0 ) {
      var target = test.querySelector(".room__boons");
      target.innerHTML += '<div class="room__boon"></div>';
  } else {
      if (b == 1) {
          var target = test.querySelector(".room__boons");
          target.innerHTML += '<div class="room__boon room__boon_bed"></div>';
      }
      if (f == 1) {
          var target = test.querySelector(".room__boons");
          target.innerHTML += '<div class="room__boon room__boon_fang"></div>';
      }
      if (t == 1) {
          var target = test.querySelector(".room__boons");
          target.innerHTML += '<div class="room__boon room__boon_toy"></div>';
      }
      if (r == 1) {
          var target = test.querySelector(".room__boons");
          target.innerHTML += '<div class="room__boon room__boon_roof"></div>';
      }
  }
});