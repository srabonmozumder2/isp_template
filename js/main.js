$('.payment-slider').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    nav:true,
    navText: ["<div><i class='fas fa-chevron-left'></i></div>" , "<div><i class='fas fa-chevron-right'></i></div>"],
    responsive:{
        0:{
           items:1,
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$('.testimonial-slider').owlCarousel({
    loop:true,
    dots:true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
           items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.Screenshot-slider').owlCarousel({
    loop:true,
    dots:false,
    center:true,
    margin:0,
    nav:true,
    // autoplay:true,
    // autoplayTimeout: 2000,
    navText: ["<div><i class='fas fa-angle-left'></i></div>" , "<div><i class='fas fa-angle-right'></i></i></div>"],
    responsive:{
        0:{
           items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})








$(document).ready(function() {
    $(".accordion").on("click", function() {
      $(this).toggleClass("active");
      $(this).next().slideToggle(200);
    });
  });
  