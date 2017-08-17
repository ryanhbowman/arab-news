

// This is where it all goes :)
$( document ).ready(function() {

    $('.swipe-slick').slick({


      responsive: [
        {
          breakpoint: 2024,
          settings: "unslick"
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            arrows:false,
            dots: true,
          }
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 1,
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
