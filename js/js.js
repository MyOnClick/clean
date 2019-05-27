$(document).ready(function () {

// hamburger
	$("#navToggle").click(function () {
		$(this).toggleClass("active");
		$(".overlay").toggleClass("open");
		// this line ▼ prevents content scroll-behind
		$("body").toggleClass("locked");
	});

	// Carusel
	$('.main-slider').slick({
		autoplay:true,
		arrows:false,
		dots: true,
		infinite: true,
		autoplaySpeed:4000,
		speed: 1000,
		fade: true,
		cssEase: 'linear'
	});
});