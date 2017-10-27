$(document).ready(function(){
	$(window).scroll(function(e){
	var $scrolltop=$(window).scrollTop();
	var oscreenhe=$(window).height();
	if($scrolltop>0){
		$(".slide1").css({"position":"fixed"});
		$(".mgd").css({"width":"100%","height":"650px"});
		$("#headTop").css({"background":"#111","height":"60px"});
		$("#headTop .fl").css({"padding":"0px"});
		$(".logo img").css({"width":"85px","height":"35px"});
		$(".firstNav").css({"margin-top":"0px"});
	}
	else{
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
	if($("slide2")){
		slowSlide($(".main .slide2"));
	}
	slowSlide($(".artShow  .title h1"));
	slowSlide($(".artShow .title p"));
	slowSlide($(".artShow .list"));
	$(".artShow .grid").find(".grid-item").each(function(){
		slowSlide($(this));
	});
	slowSlide($(".more"));
	//.foot .right
	var height3=$(".foot .right").offset().top;
	var he3=height3-$scrolltop;
	if(he3<oscreenhe){
		$(".foot .right").addClass("animated slideInUp");
		setTimeout(function(){
			$(".foot .right .txt").css({"opacity":"0"});
		},2500);
	}
	slowSlide($(".m-news .big-wrap"));
	slowSlide($(".slide3"));
	slowSlide($(".foot .left img"));
	//
	var height2=$(".mid-fo").offset().top;
	var he2=height2-$scrolltop;
	if(he2<oscreenhe){
		$(".mid-fo").addClass("animated slideInLeft");
	}
});
});

