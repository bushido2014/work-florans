$(document).foundation();$(function(){$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-98193205-1','auto');ga('send','pageview');});$(window).load(function(){var $container=$('.portfolio-items');$container.isotope({filter:'*',animationOptions:{duration:750,easing:'linear',queue:false}});$('.cat a').click(function(){$('.cat .active').removeClass('active');$(this).addClass('active');var selector=$(this).attr('data-filter');$container.isotope({filter:selector,animationOptions:{duration:750,easing:'linear',queue:false}});return false;});});$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false,deeplinking:false});$(document).ready(function(){$(".owl-carousel").owlCarousel({responsive:{0:{items:1,nav:true}},navText:""});if($('.fi-arrow-up').length){var scrollTrigger=100,backToTop=function(){var scrollTop=$(window).scrollTop();if(scrollTop>scrollTrigger){$('.fi-arrow-up').addClass('show');}else{$('.fi-arrow-up').removeClass('show');}};backToTop();$(window).on('scroll',function(){backToTop();});$('.fi-arrow-up').on('click',function(e){e.preventDefault();$('html,body').animate({scrollTop:0},700);});}$(".service h2").animated("zoomIn");$(".heading h2").animated("fadeInDown","fadeOutUp");$(".card").animated("zoomIn");$(".type li").animated("zoomIn");$(".rewiw_item h4").animated("fadeInLeft","fadeOutDown");$(".hr").animated("fadeIn");$(".rewiw_item p").animated("fadeInRight","fadeOutDown");$(".logo_footer").animated("fadeInLeft","fadeOutDown");$(".adress").animated("zoomIn");$(".map").animated("fadeInRight","fadeOutDown");});$(document).ready(function(){$(function(){$(window).scroll(function(){if($(this).scrollTop()>270){$('.myfixed').fadeIn();}else{$('.myfixed').fadeOut();}});});});document.body.onload=function(){setTimeout(function(){var preloader=document.getElementById('page-preloader');if(!preloader.classList.contains('done')){preloader.classList.add('done');}},1000);}