

// This is where it all goes :)
$( document ).ready(function() {

    $('.swipe-slick').slick({


      responsive: [
        {
          breakpoint: 2024,
          settings: "unslick"
        },
        {
          breakpoint: 766,
          settings: {
            arrows:false,
            centerMode: true,
            centerPadding: '50px',
            dots: true,
          }
        }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
});
