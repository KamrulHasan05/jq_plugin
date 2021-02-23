$(document).ready(function(){
	// counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// wow plug in --> fadeInUp
		new WOW().init();

	// isotope plugin
	// init Isotope
	var $grid = $('.iso-item').isotope({
	// options
  	});
  // filter items on button click
  	$('.custom_ul').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
  	});

  	$('.custom_ul').on( 'click', 'li', function() {
		const list = document.querySelectorAll("li");
      
            list.forEach(function(e) {
                e.addEventListener("click", function ()
                {

                    for (let x = 0; x < list.length; x++)
                    {
                        list[x].classList.remove("active");
                    }
                    this.classList.add("active");

            })})
  	});

	// slick slider plug in
	$('.demo').slick({
		dots: true,
		centerMode: true,
		centerPadding: '60px',
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
 		autoplaySpeed: 2000,
		cssEase: 'linear',	
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });

	//   owl carosel
	$('.owl-carousel').owlCarousel();

	// lightbox plugin
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	  })



});