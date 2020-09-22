$(function(){


  $('.burger__menu').magnificPopup({
    type: 'inline'
  });

  var typed = new Typed('.element-typed', {
    typeSpeed: 50,
    stringsElement: '#typed',
    attr: null,
    callback: function(){
      setTimeout(function() { $('.typed-cursor ').hide(); }, 5000);
    }
  });


  var typed = new Typed('.element-5', {

    typeSpeed: 100,

    startDelay: 3000,
    backSpeed: 100,
    stringsElement: '#tre-5',
    loop: true,
    loopCount: false,
  });

  setTimeout(function () { $('.typed-cursor ').hide(); }, 3000);

});