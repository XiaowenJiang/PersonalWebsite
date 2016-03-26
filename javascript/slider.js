/**
 * Created by XiaowenJiang on 3/13/16.
 */
// From fcalderan
// http://stackoverflow.com/questions/15876754/infinity-loop-slider-concepts

var slider= function() {

    var gallery = $('.photobanner'),
        items   = gallery.find('li'),
        len     = items.length,
        current = 1,  /* the item we're currently looking */

        first   = items.filter(':first'),
        last    = items.filter(':last');


    /* 1. Cloning first and last item */
    first.before(last.clone(true));
    last.after(first.clone(true));



    /* 2. Set button handlers */
    $('button').click(function() {

        var cycle, delta;

        if (gallery.is(':not(:animated)')) {
            cycle = false;
            delta = (this.id === "prev")? -1 : 1;
            /* in the example buttons have id "prev" or "next" */
            gallery.animate({ left: "+=" + (-230 * delta) }, function() {

                current += delta;

                /**
                 * we're cycling the slider when the the value of "current"
                 * variable (after increment/decrement) is 0 or when it exceeds
                 * the initial gallery length
                 */
                cycle = !!(current === 0 || current > len);

                if (cycle) {
                    /* we switched from image 1 to 4-cloned or
                     from image 4 to 1-cloned */
                    current = (current === 0)? len : 1;
                    gallery.css({left:  -330 * current });
                }
            });
        }

    });

    $('#po-resume').click(function(event){
            event.preventDefault();
            window.location.href="resume.html#Resume-here";
            var top = $('.Resume').position().top;
            $(window).scrollTop( top );
        }

    );
}

$(document).ready(slider);