function setBackground() {
	$('[setBackground]').each(function () {
		var background = $(this).attr('setBackground')
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center"
		})
	})
	$('[setBackgroundRepeat]').each(function () {
		var background = $(this).attr('setBackgroundRepeat')
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat"
		})
	})
}
function Aos(){
	AOS.init({
		disable: 'phone',
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation

		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 700, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
	});
}
function swiperInit(){
	var swiper = new Swiper('.page-banner .swiper-container', {
        pagination: {
            el: '.page-banner .swiper-pagination',
            clickable: true,
            type: 'bullets'
		},
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
        loop: true,
        speed: 750,
        effect: "fade",
        observer: true,
        observeParents: true,
        autoplay: {
        	delay: 3000
        },
        fadeEffect: {
            crossFade: true
        },
    });
}
function gotop() {
    $('.scroll-top em,p').on('click', function() {
    $('html,body').animate({
    scrollTop: 0
    }, 1000)
    })
	}
function form() {
	$('.button-ungtuyen').on('click', function () {
		$('.form-apply').toggleClass('active')
		$('.back-drop').toggleClass('active')
	});
	$('.back-drop').on('click', function () {
		$('.form-apply').removeClass('active')
		$('.back-drop').removeClass('active')
	});
	$('.button-out').on('click', function () {
		$('.form-apply').removeClass('active')
		$('.back-drop').removeClass('active')
	});
}
$(document).ready(function(){
	Aos()
	setBackground()
	swiperInit()
	gotop()
	form()
  });

  
  