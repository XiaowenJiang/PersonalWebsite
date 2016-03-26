/**
 * Created by XiaowenJiang on 3/4/16.
 */
var main = function() {

    var formtext;
    $.getScript("tipuesearch/tipuesearch.js");
    $('#tipue_search_input').tipuesearch({
        'mode': 'live'
    });

    //move to next slide
    $('.arrow-next').click(function(event) {
            var currentSlide = $('.active_slide');
            var nextSlide = currentSlide.next();
            var currentDot = $('.active-dot');
            var nextDot = currentDot.next();

            if (nextSlide.length == 0)
            {
                nextSlide  = $('.slide').first();
                nextDot = $('.dot').first();
            }
            currentSlide.fadeOut(300);
            currentDot.removeClass('active-dot');
            currentSlide.removeClass('active_slide');
            nextSlide.fadeIn(300);
            nextDot.addClass('active-dot');
            nextSlide.addClass('active_slide');
            // Cancel the default action,don't scroll to top
            event.preventDefault();
        }
    );
    //move to previous slide
    $('.arrow-prev').click(function(event){
        var currentSlide = $('.active_slide');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        if(prevSlide.length==0)
        {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        currentSlide.fadeOut(300);
        currentDot.removeClass('active-dot');
        currentSlide.removeClass('active_slide');
        prevSlide.fadeIn(300);
        prevDot.addClass('active-dot');
        prevSlide.addClass('active_slide');
        // Cancel the default action
        event.preventDefault();
    });

    //click dot to certain slide
    $('.slider-dots li').click(function(event){
        var dot = $(this);
        var currentSlide = $('.active_slide');
        var currentDot = $('.active-dot');
        if(dot.next().length===0)
        {
            if(currentSlide.next().length!==0)
            {
                var nextSlide = currentSlide.next();
                currentSlide.fadeOut(300);
                currentDot.removeClass('active-dot');
                currentSlide.removeClass('active_slide');
                dot.addClass('active-dot');
                nextSlide.addClass('active_slide');
                nextSlide.fadeIn(300);
            }
        }
        else
        {
            if(currentSlide.prev().length!==0)
            {
                var prevSlide = currentSlide.prev();
                currentSlide.fadeOut(300);
                currentDot.removeClass('active-dot');
                currentSlide.removeClass('active_slide');
                dot.addClass('active-dot');
                prevSlide.addClass('active_slide');
                prevSlide.fadeIn(300);
            }
        }
        // Cancel the default action
        event.preventDefault();
    });

    //highlight
    $('.form-button').click(function (event) {

       $.getScript("plugin/hilitor.js");
       var myHilitor = new Hilitor("Content");
        myHilitor.apply(formtext);
        // Cancel the default action
        event.preventDefault();
    });

    $('#po-resume').click(function(event){
            event.preventDefault();
            window.location.href="subpages/resume.html#Resume-here";
            var top = $('.Resume').position().top;
            $(window).scrollTop( top );
        }

    );

    //get form input text
    document.getElementById("search-text").addEventListener("keyup",function(){
        formtext = this.value;
    },false);

    //space key effect
    document.addEventListener("keypress",function(){
        if(event.which==32)
        {
        }
    });

}

$(document).ready(main);