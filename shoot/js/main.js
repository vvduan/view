$(document).ready(function() {
	//nav
	$(".secondCon").hover(function() {
		$(this).children(".secondNav").css("display", "block");
	}, function() {
		$(this).children(".secondNav").css("display", "none");
	});
	//banner
	jQuery(".slide1").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: true,
		delayTime: 500
	});
	jQuery(".slide2,.slide3").slide({
		mainCell: ".bd ul",
		effect: "leftLoop",
		autoPlay: false,
		delayTime: 500,
		pnLoop:false
	});
	$(".prev").hover(function() {
		$(this).find(".line2").css({
			width: "13px",
			"borderTop": "1px solid #fe2642",
			left: "12px"
		});
		$(this).find(".icco1").css({
			"display": "none"
		});
		$(this).find(".hide").css({
			display: "block"
		}).animate({
			left: "0px"
		}, 100);
	}, function() {
		$(this).find(".line2").css({
			width: "10px",
			"borderTop": "1px solid #353535",
			left: "0px"
		});
		$(this).find(".icco1").css({
			"display": "block"
		});
		$(this).find(".hide").css({
			display: "none"
		}).css({
			left: "15px"
		});
	});
	$(".next").hover(function() {
		$(this).find(".line2").css({
			width: "13px",
			"borderTop": "1px solid #fe2642",
			left: "0px"
		});
		$(this).find(".icco2").css({
			"display": "none"
		});
		$(this).find(".hide").css({
			display: "block"
		}).animate({
			left: "10px"
		}, 100);
	}, function() {
		$(this).find(".line2").css({
			width: "10px",
			"borderTop": "1px solid #353535",
			left: "20px"
		});
		$(this).find(".icco2").css({
			"display": "block"
		});
		$(this).find(".hide").css({
			display: "none"
		}).css({
			left: "0px"
		});
	});
	var ovideo = document.getElementById("video");
	if(ovideo){
		ovideo.play();
	}
	
//middle 瀑布流
$('.grid').masonry({
  itemSelector: '.grid-item',
  gutter:58
});
//animate
$(window).scroll(function(e){
	var $scrolltop=$(window).scrollTop();
	var oscreenhe=$(window).height();
	if($scrolltop>0){
		$(".goTop").css({"display":"block"});
		$(".main .slide1").css({"position":"fixed"});
		$(".mgd").css({"width":"100%","height":"650px"});
		$("#headTop").css({"background":"#111","height":"60px"});
		$("#headTop .fl").css({"padding":"0px"});
		$(".logo img").css({"width":"85px","height":"35px"});
		$(".firstNav").css({"margin-top":"0px"});
	}
	else{
		$(".goTop").css({"display":"none"});
		$(".slide1").css({"position":"relative"});
		$(".mgd").css({"width":"100%","height":"0px"});
		$("#headTop").css({"background":"none","height":"71px"});
		$("#headTop .fl").css({"padding":"19px"});
		$(".logo img").css({"width":"99px","height":"37px"});
		$(".firstNav").css({"margin-top":"10px"});
	}
	function slowSlide($obj){
	var height1=$obj.offset().top;
	var he1=height1-$scrolltop;
	if(he1<oscreenhe){
		$obj.addClass("animated slideInUp");
	}
	}
	
	//news
	$(".news .big-wrap").find("dt").each(function(){
		slowSlide($(this));
	});
	//art-detail
	$(".art-detail .grid-item").each(function(){
		slowSlide($(this));
	});
});
$(".team .team-item .img").hover(function(){
	$(this).find(".hide").slideDown(200);
},function(){
	$(this).find(".hide").slideUp(200);
});

$(".flatHide .online #online_close ").click(function(){
	$(".flatHide").css({"right":"-192px"});
	setTimeout(function(){
		$(".flat .xinxi").css({"right":"0px"});
	},300);
});
$(".flat .xinxi").click(function(){
	$(this).css({"right":"-100px"});
	setTimeout(function(){
		$(".flatHide").css({"right":"0px"});
	},300);
});
$(".flat .goTop").click(function(){
	$("html").animate({scrollTop:0}, 500);
});





});