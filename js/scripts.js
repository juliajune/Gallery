$(function() {

   $('[data-fancybox="gallery"]').fancybox({
      baseClass: "fancybox-custom-layout",
      infobar: false,
      touch: {
          vertical: false
      },
      buttons: ["close", "thumbs"],
      animationEffect: "fade",
      transitionEffect: "fade",
      preventCaptionOverlap: false,
      idleTime: false,
      gutter: 0
      
    });


});