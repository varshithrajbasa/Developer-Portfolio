    $("#scroll").click(function () {

        $('html,body').animate({
                scrollTop: $(".second").offset().top
            },
            'slow');
    });

    $("#next").click(function () {

        $('html,body').animate({
                scrollTop: $(".udemy").offset().top
            },
            'slow');
    });