$('.multiple-items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var myVideo = document.getElementById('query-video');

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  document.getElementById("play").style.display = "none";
  document.getElementById("img-none").style.display = "none"
}

$(document).ready(function() {
  new WOW().init();
});