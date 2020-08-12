//slider

$(document).ready(function(){

  $(".navbar-btn").click(function(){
      $(".nav-menu").toggleClass("open");
  });



  $('.owl_one').owlCarousel({
      loop:true,
      navText : ["<img src=''>","<img src=''>"],
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
        600:{
              items:2
          },
          1000:{
              items:3.5
          }
      }
  })


  $('.owl_two').owlCarousel({
    loop:true,
    navText : ["<img src=''>","<img src=''>"],
    margin:10,
    nav:false,
    pagination:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})


$('.owl-three').owlCarousel({
    loop:true,
    navText : ["<img src=''>","<img src=''>"],
    margin:10,
    nav:false,
    pagination:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5.8
        }
    }
})


  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

});








