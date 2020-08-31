$(document).ready(function() {

	$(".item-team").click(function() {
		var NameTeam = $(this).find(".team-info__name").html();
		var DescrTeam = $(this).find(".team-info__descr").html();
		var ImgTeam = $(this).find(".item-team__image img").attr('src');
		$(".item-team__name").html( NameTeam );	
		$(".item-team__descr").html( DescrTeam );
		$(".item-team_active .item-team__image img").attr('src', ImgTeam);	
		});


$(document).one( "mouseleave", function(e) {
if (e.clientY < 10) {
         $.fancybox.open("#catch",
         	{
    helpers:  {
      overlay : {
        locked : false
      }
    }
  });  
    } 
});

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").fadeIn(200);
		} else {
			$(".menu").fadeOut(200);
		}
		
	});

	$(".menu a").click(function() {
			$(".menu").fadeOut(200);
			$(".sandwich").removeClass("active");
		});


	/*высота блока по экрану*/
function heightDetect() {
    $('.menu').css("height", $(window).height() -$(".header").height() + 40);
  };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });

	$('.tabs_portfolio li a').click(function(event) {
		event.preventDefault();
	});
	$('.tabs_portfolio li').click(function(event) {
		$(this).parent().find("li").removeClass('active');
		$(this).addClass('active');
		$(".tab-content").hide();
		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});

	$('.tabs-card li a').click(function(event) {
		event.preventDefault();
	});
	$('.tabs-card li').click(function(event) {
		$(this).parent().find("li").removeClass('active');
		$(this).addClass('active');
		$(".tabs-card-pane").hide();
		var selectTab2 = $(this).find('a').attr("href");
		$(selectTab2).fadeIn();
	});



 $('.btn-dropdown').click(function() {
  $('.wrap-tabs').addClass("wrap-tabs_mob")
        if ($(".wrap-tabs li:not('.active')").is(":hidden")) {
            $(".wrap-tabs li:not('.active')").slideDown(200);
        } else {
           $(".wrap-tabs li:not('.active')").slideUp(200);
        }
          $('.wrap-tabs_mob li').click(function() {
   $(".wrap-tabs_mob li:not('.active')").slideUp(200);
      });
      });
	//слайдер

	$('.slider-products').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		 prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 749,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	/* new 2 */

	$('.slider-projects').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		 prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		
	});

	$('.link-blue_more-card').click(function(e) {
		e.preventDefault();
		
		if ($(".hidden-text-card").is(":hidden")) {
			$(".hidden-text-card").slideDown(200);
			 $(this).html("Скрыть");
        } else {
        	$(".hidden-text-card").slideUp(200);
           $(this).html("Смотреть все описание");
        }
      });


/* end new 2 */

	var $status = $('.slider-counter');
var $slickElement = $('.slider-sertificats');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html(i + ' / ' + '<span>' + slick.slideCount + '</span>');
});

$slickElement.slick({
arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		 prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1
});

$('.slider-selection').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		 prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1
	});

$('.slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		 prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
        nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
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

$('.slider-card').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
$('.slider-team').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
$(".fancybox").fancybox({
    helpers:  {
      overlay : {
        locked : false
      }
    }
  });


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});


objectFitImages()

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

