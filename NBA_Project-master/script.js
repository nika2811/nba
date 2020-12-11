$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});



$(function() {
    $("#team-members").owlCarousel(
        {
            items:2,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', 
            '<i class="fa fa-angle-right"></i>'
        ]
        }
    );
});

$(function() {
    $(".progress-bar").each(function(){

        $(this).animate({
            width: $(this).attr("aria-valuenow") + "%"
        }, 2000);
    });
});


$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});



$(window).on('load', function(){

    $("#isotoopes").isotope({      // isotope-* ase erqva wesit konteiners
    });

    $("#isotope-filters").on('click', 'button', function() {
        var filterValue=$(this).attr('data-filter');
        //alert("You Clicked "+ filterValue);

        $("#isotoopes").isotope({
            filter: filterValue
        });
    
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
   
    });


});
 
$(function(){
    $("#portfolio-wrapper").magnificPopup({
delegate: 'a',
type: 'image',
gallery: {
    enabled: true
}
    });
});





$(function() {
    $("#testimonial-slider").owlCarousel(
        {
            items:1,
            autoplay: false,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', 
            '<i class="fa fa-angle-right"></i>'
        ]
        }
    );
});

$(function() {
    $("#clients-list").owlCarousel(
        {
            items:6,
            autoplay: false,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', 
            '<i class="fa fa-angle-right"></i>'
        ]
        }
    );
});/**/


/*
*/

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});




$(function() {
    new WOW().init();
});