// audio
$(document).ready(function() {
  $('.audio-link').click(function(e) {
    e.preventDefault(); // Menghentikan perilaku default dari tautan
    
    var audio = $('#audio')[0]; // Mendapatkan elemen audio
    
    if (audio.paused) {
      audio.play(); // Memutar audio jika dijeda
    } else {
      audio.pause(); // Menjeda audio jika sedang diputar
      audio.currentTime = 0; // Mengatur posisi audio kembali ke awal
    }
  });
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".layer1").css({
    transform: "translate(0px, " + wScroll * -.05 + "%)",
  });

  $(".layer2").css({
    transform: "translate(0px, " + wScroll * .009 + "%)",
  });
  $(".layer3").css({
    transform: "translate(0px, " + wScroll *  .06+ "%)",
  });
  $(".layer4").css({
    transform: "translate(0px, " + wScroll *  .1+ "%)",
  });
 $(".her2").css({
    transform: "translate(0px, " + wScroll *  .1+ "%)",
  });
  
  
});
// scroll

$(document).ready(function(){
 
  $("a").on('click', function(event) {

   
    if (this.hash !== "") {
      
      event.preventDefault();

      
      var hash = this.hash;

      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){
   
        
        window.location.hash = hash;
      });
    }
  });
});
// scroll


