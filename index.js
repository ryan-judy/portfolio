$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).on('scroll', function (e) {
	if (document.body.scrollTop > 30) {
		$('.navbar').css('background-color', '#751212');
		$('.navbar').css('box-shadow', 'none');
		$('.navbar-brand').css('color', 'white');
	}

	else{ 
		$('.navbar').css('background-color', 'transparent');
	}
});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.dropdown-toggle').dropdown();

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();


});

