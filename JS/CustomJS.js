
/* Sidebar active on scroll */
$('#sidenav nav a').on('click', function (event) {
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
});

$(window).on('scroll', function () {
    $('.target').each(function () {
        if ($(window).scrollTop() >= $(this).position().top) {
            var id = $(this).attr('id');
            $('#sidenav nav a').removeClass('active');
            $('#sidenav nav a[href=#' + id + ']').addClass('active');
        }
    });
});

/* Sidebar hide/display on scroll */
(function ($) {
  $(document).ready(function(){

    // hide sidenav first
    $("#sidenav").hide();

    // fade in sidenav
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 689) {
                $('#sidenav').fadeIn();
            } else {
                $('#sidenav').fadeOut();
            }
        });
    });

});
}(jQuery));

/* sticky back to top button */
$(document).ready(function(){
    $(window).scroll(function () {
            if ($(this).scrollTop() > 160) {
                $('#backtotopbutton').fadeIn();
            } else {
                $('#backtotopbutton').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#backtotopbutton').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
});

/* modal image pop up */
$(document).ready(function () {
    $('img').on('click', function () {
        var image = $(this).attr('src');
        $('#myModal').on('show.bs.modal', function () {
            $(".img-responsive").attr("src", image);
        });
    });
});


/* Topbar hide/display -- no longer use this one */
function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }