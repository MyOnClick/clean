$(document).ready(function () {
	
// hamburger
	$("#navToggle").click(function () {
		$(this).toggleClass("active");
		$(".overlay").toggleClass("open");
		// this line ▼ prevents content scroll-behind
		$("body").toggleClass("locked");
	});
	//  toTop
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function () {
			$('body,html').animate({ scrollTop: 0 }, 800);
		});
	});
// Gallery
	(function ($) {
		var $li = $('.img-list').find('> li'),
			$links = $li.find('> a'),
			$lightbox = $('.lightbox'),
			$next = $('.next'),
			$prev = $('.prev'),
			$overlay = $('.overlay'),
			liIndex,
			targetImg;
		//preload images
		var imgSources = [
			'img/cleaningProduct/1.jpg',
			'img/cleaningProduct/1.jpg',
			'img/cleaningProduct/1.jpg',
			'img/cleaningProduct/1.jpg',
			'img/cleaningProduct/1.jpg',
			'img/cleaningProduct/1.jpg',
			'img/cleaningProduct/1.jpg'
		];
		var imgs = [];
		for (var i = 0; i < imgSources.length; i++) {
			imgs[i] = new Image();
			imgs[i].src = imgSources[i];
		}
		function replaceImg(src) {
			$lightbox.find('img').attr('src', src);
		}
		function getHref(index) {
			return $li.eq(index).find('>a').attr('href');
		}
		function closeLigtbox() {
			$lightbox.fadeOut();
		}
		$overlay.click(closeLigtbox);
		$links.click(function (e) {
			e.preventDefault();
			targetImg = $(this).attr('href');
			liIndex = $(this).parent().index();
			replaceImg(targetImg);
			$lightbox.fadeIn();
		});
		$next.click(function () {
			if ((liIndex + 1) < $li.length) {
				targetImg = getHref(liIndex + 1);
				liIndex++;
			} else {
				targetImg = getHref(0);
				liIndex = 0;
			}
			replaceImg(targetImg);
		});

		$prev.click(function () {
			if ((liIndex) > 0) {
				targetImg = getHref(liIndex - 1);
				liIndex--;
			} else {
				targetImg = getHref($li.length - 1);
				liIndex = $li.length - 1;
			}
			replaceImg(targetImg);
		});
	})(jQuery);
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