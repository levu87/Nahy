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
        // effect: "fade",
        observer: true,
        observeParents: true,
        autoplay: {
        	delay: 3000
        },
        // fadeEffect: {
        //     crossFade: true
        // },
	});
	
	var swiper = new Swiper(".chi-tiet-khach-hang .swiper-container", {
		slidesPerView: 2,
		spaceBetween: 20,
		navigation: {
			prevEl: ".ctkh-button-prev",
			nextEl: ".ctkh-button-next"
		  },
		breakpoints: {
		  // when window width is <= 480px
		  480: {
			slidesPerView: 1,
			spaceBetween: 20
		  },
		  // when window width is <= 640px
		  768: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  992: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  1025: {
			slidesPerView: 2,
			spaceBetween: 20
		  }
		}
	  });
	  var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 20,
		slidesPerView: 3,
		direction: 'vertical',
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.product-button-down',
			prevEl: '.product-button-up',
		  },
		breakpoints: {
			// when window width is <= 480px
			1025: {
			  direction: 'horizontal',
			  navigation: {
				nextEl: '.product-button-next',
				prevEl: '.product-button-prev',
			  },
			  	slidesPerView: 3,
				spaceBetween: 20
				},
			768:{
				slidesPerView: 2,
				spaceBetween: 20
			},
			425:{
				slidesPerView: 2,
				spaceBetween: 20
			},
			375:{
				slidesPerView: 2,
				spaceBetween: 20
			},
		  }
	  });
	  var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		thumbs: {
		  swiper: galleryThumbs
		}
	  });



	  var swiper = new Swiper(".product-similar .swiper-container", {
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			prevEl: ".similar-button-prev",
			nextEl: ".similar-button-next"
		  },
		breakpoints: {
		  // when window width is <= 480px
		  480: {
			slidesPerView: 1,
			spaceBetween: 20
		  },
		  // when window width is <= 640px
		  768: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  992: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  1025: {
			slidesPerView: 3,
			spaceBetween: 20
		  }
		}
	  });
	  var swiper = new Swiper(".product-other .swiper-container", {
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			prevEl: ".other-button-prev",
			nextEl: ".other-button-next"
		  },
		breakpoints: {
		  // when window width is <= 480px
		  480: {
			slidesPerView: 1,
			spaceBetween: 20
		  },
		  // when window width is <= 640px
		  768: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  992: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  1025: {
			slidesPerView: 3,
			spaceBetween: 20
		  }
		}
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
function CustomSelect() {
	var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /*for each element, create a new DIV that will act as the selected item:*/
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /*for each element, create a new DIV that will contain the option list:*/
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 1; j < selElmnt.length; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("a");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.setAttribute('href', selElmnt.options[j].value)
		c.addEventListener("click", function (e) {
		  /*when an item is clicked, update the original select box,
		  and the selected item:*/
		  var y, i, k, s, h;
		  s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		  h = this.parentNode.previousSibling;
		  for (i = 0; i < s.length; i++) {
			if (s.options[i].innerHTML == this.innerHTML) {
			  s.selectedIndex = i;
			  h.innerHTML = this.innerHTML;
			  y = this.parentNode.getElementsByClassName("same-as-selected");
			  for (k = 0; k < y.length; k++) {
				y[k].removeAttribute("class");
			  }
			  this.setAttribute("class", "same-as-selected");
			  break;
			}
		  }
		  h.click();
		});
		b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function (e) {
		// khi hộp chọn được nhấp, đóng bất kỳ hộp chọn nào khác, và mở / đóng hộp chọn hiện tại
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	  });
	}
  
	function closeAllSelect(elmnt) {
	  /*a function that will close all select boxes in the document,
	  except the current select box:*/
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
		  arrNo.push(i)
		} else {
		  y[i].classList.remove("select-arrow-active");
		}
	  }
	  for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
		  x[i].classList.add("select-hide");
		}
	  }
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);
  }

  function productCate() {
	$('.has-submenu').on('click', function () {
		if ($(this).find('ul').is(':hidden')) {
		$(this).find('ul').slideDown()
		$(this).addClass('active')
		
		} else {
		$(this).find('ul').slideUp()
		$(this).removeClass('active')
		}
	});
}
function tabpro(){
	$('.tab-wrapper .tab-navigation li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-navigation li a').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})
}

$(document).ready(function(){
	Aos()
	setBackground()
	swiperInit()
	gotop()
	form()
	CustomSelect()
	productCate()
	tabpro()

	const listViewButton = document.querySelector('.list-view-button');
	const gridViewButton = document.querySelector('.grid-view-button');
	const list = document.querySelector('.list');

	listViewButton.onclick = function () {
	list.classList.remove('grid-view-filter');
	list.classList.add('list-view-filter');
	gridViewButton.classList.remove('active');
	listViewButton.classList.add('active');
	}

	gridViewButton.onclick = function () {
	list.classList.remove('list-view-filter');
	list.classList.add('grid-view-filter');
	gridViewButton.classList.add('active');
	listViewButton.classList.remove('active');
	}

	$('.checkbox').on('click', function () {
		$(this).toggleClass('active')
	});
  });

  
  