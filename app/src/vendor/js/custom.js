$(document).ready(function () {
    $(".table-height-fixed").niceScroll({cursorcolor: "#74BCE4", touchbehavior: true});
    $('.smooth-scroll').click(function () {
        let targetID = $(this).attr('href');
        $('body,html').animate({scrollTop: $(targetID).offset().top - 80});
    });
    $('ul>li>.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});