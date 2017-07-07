

/* U of I ORANGE --> #E25238 --> 226,82,56
 * U of I NAVY   --> #0F294C --> 15,41,76
 * Grey          --> #A5ACAF --> 165,172,175
 * Darker grey   --> #707372 --> 112,115,114
 */


function _l(e) { console.log(":: " + e + " ::"); }

var original_w = $(window).width();
		original_h = $(window).height();
		w 				 = $(window).width();
		h 				 = $(window).height();

/* DOCUMENT DOT READY */
$(document).ready(function() {

//Set height for sections & updates container
	adjustDimensions();
//Create click events
	setClicks();
//Create hover effects
	createHovers();
//Add shadow effect on Recent Updates
	shadowVertScroll();

});

window.addEventListener('resize', function() {
	w = $(window).width();
	h = $(window).height();
}, true);

window.onscroll = function() {
	if (window.scrollY >= h-15) $("nav > a").addClass('scrolled');
	else $("nav > a").removeClass('scrolled');
};

function adjustDimensions() {
	/* Home Content */
	$("#main-content > section").css("height", (h+100));
	$("#main-content > section:first-child").css("height", h);
	$("#main-content > section:last-child").css("height", h/2 - 15);

	$("#main-content section:nth-child(2) > section:last-child > div").css("height", ((h+100)/2 - 120));

	var aContain = $("#main-content > section:nth-child(3) > section:first-child > div > div");
			aCount   = aContain.find("article").length;
			width    = 207 * aCount + 12 * aCount*2;
	aContain.css("width", width);

	/* About Content */
	$("#about > section").css("height", (h-10));

	/* Conference Content */
	$("#conference > section").css("height", (h+300));

	/* SBA Content */
	$("#sba > section").css("height", (h+350));
}

function setClicks() {
	$("nav > a").click(function(){
		$("nav").toggleClass('open');
		$("nav > a.scrolled > span").toggleClass('orange');
		$("nav").css("top", $(window).scrollTop());
		$("body").toggleClass('overflow');
	});
	$("nav > div").click(function(){
		$("nav").removeClass('open');
		$("body").removeClass('overflow');
		$("nav > a.scrolled > span").removeClass('orange');
	});
	$("#about > section > section:first-child ul li").click(function(){
		/* variables important for each click */
		var s  = $(this).data("selector");
		    a  = $("#about > section > section:first-child ul li.active");
		    t  = $("#about > section > section:nth-child(2) > div:first-of-type");
		    m  = $("#about > section > section:nth-child(2) > div:nth-of-type(2)");
				su = $("#about > section > section:nth-child(2) > div:nth-of-type(3)");

		/* Change active class */
		a.removeClass('active');
		$(this).addClass('active');

		/* Determine selected about-item, reveal necessary html */
		if (s == "team") {
			t.removeClass('dn');
			m.addClass('dn');
			su.addClass('dn');
		}
		else if (s == "mission") {
			t.addClass('dn');
			m.removeClass('dn');
			su.addClass('dn');
		}
		else if (s == "summary") {
			t.addClass('dn');
			m.addClass('dn');
			su.removeClass('dn');
		}
		else 
			_l("Error occured in About selector");
	});
}

function createHovers() {
	$("#header > ul li").hover(function(){
			$(this).css( { cursor: 'pointer', borderBottomColor: '#E25238'} );
			$(this).find("a").css("color", "#E25238");
		},function(){
			$(this).css( { borderBottomColor: 'white'} );
			$(this).find("a").css("color", "white");
		}
	);
	$("#main-content > section:nth-child(3) > section:first-child > div article").hover(function(){
			$(this).find("a[type='author']").css("color","#E25238");
			$(this).find("div").css("borderBottomWidth", "5px");
		},function(){
			$(this).find("a[type='author']").css("color","#aaa");
			$(this).find("div").css("borderBottomWidth", "3px");
		}
	);
	$("#main-content > section:nth-child(2) > section:last-child > div > div").hover(function(){
			$(this).css("background","#f9f9f9");
			$(this).find("span").css("color","#E25238");
		},function(){
			$(this).css("background","#fff");
			$(this).find("span").css("color","#888");
		}
	);
	$("#footer > section:nth-child(2) > div > form > div > div:last-of-type").hover(function(){
			$(this).find('.button').css({
				cursor: 'pointer',
				borderBottomWidth: '3px',
				borderColor: '#ca381d'
			});
		},function(){
			$(this).find('.button').css({
				cursor: 'default',
				borderBottomWidth: '1px',
				borderColor: '#e04529'
			});
		}
	);
}

/* Adds a shadow to the updates container when it's being scrolled vertically.
 * On scroll function
 * Created by: @jcksber | jackkasbeer.co
 */
function shadowVertScroll(){
	var d = $('#main-content > section:nth-child(2) > section:last-child > div');
			a = $('#main-content > section:nth-child(2) > section:last-child > div > ins');
	var shadow = function(){
		var	dOff = d.offset().top;
				aOff = a.offset().top;
//  Case 1: Scrolled to top
		if (dOff == aOff) d.removeClass('ssev');
//  Case 2: Scrolling...
		else d.addClass('ssev');
	};
	d.scroll(shadow);
	shadow();
}










