$(document).ready(function(){
	$('.slider').slick({

		slidesToShow:3, 
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
		{
			breakpoint: 1602,
			settings: {
				slidesToShow:2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow:1
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow:1
			}
		}
		]
	});
});

