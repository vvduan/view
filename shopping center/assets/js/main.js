$(document).ready(function($) {

	//banner
	var $slider1 = $('#demo-slider-0');
	var counter = 0;
	var getSlide = function() {
		counter++;
		return '<li><img src="http://s.amazeui.org/media/i/demos/bing-' +
			(Math.floor(Math.random() * 4) + 1) + '.jpg" />' +
			'<div class="am-slider-desc">动态插入的 slide ' + counter + '</div></li>';
	};
	var $slider2 = $('#slider-1');
	$slider2.flexslider({
		slideshow: false,
		touch: true,
		controlNav: false,
		itemMargin: 5
	});
	$(".moreButton span").click(function() {
		$(".hide").css({
			"display": "block"
		});
		$(".moreButton").css({
			"display": "none"
		});
	});
	$(".moreButton-two span").click(function() {
		$(".hide-one").css({
			"display": "block"
		});
		$(".moreButton-two").css({
			"display": "none"
		});
	});
	$(".navslide").click(function() {
		var $nav = $(".hide");
		if($nav.css("display") == "block") {
			$nav.css({
				display: "none"
			});
		} else {
			$nav.css({
				display: "block"
			});
		}
	});
	/*nav 滚动*/
	/*设置当前时间*/
	var mydate = new Date();
	var str = (mydate.getMonth() + 1) + "月";
	var yesdate = str + (mydate.getDate() - 1) + "日"
	str += mydate.getDate() + "日";
	$(".date").html(str);
	$(".yesdate").html(yesdate);
	//product-one 轮播设置
	$('#slider-2').flexslider({
		animation: "slide",
		slideshow: false,
		touch: true,
		controlNav: true,
		directionNav: false
	});
	//product-one 设置hide
	$(".p-abcd span").click(function(event) {
		event.stopPropagation();
		$(".provicehide").slideDown("slow");
		$(".box-shadow").css({
			"display": "block"
		});
	});
	$(".provicehide .over").click(function() {
		$(".provicehide").slideUp("slow");
		$(".box-shadow").css({
			"display": "none"
		});
	});
	$("body").click(function() {
		$(".provicehide").slideUp("slow");
		$(".box-shadow").css({
			"display": "none"
		});
	});
	$button = $(".buy .buy-choice").find("button");
	$button.each(function(index) {
		$(this).click(function() {
			$button.each(function() {
				$(this).removeClass("selected");
			});
			$(this).addClass("selected");
			if(index == 1) {
				$(".buy-a p:eq(0)").text("￥89元");
			}
			if(index == 0) {
				$(".buy-a p:eq(0)").text("￥69元");
			}
		});
	});
	$(".reduce").click(function() {
		$num = $(".buyAmout .am-fr .number ")[0].innerHTML;
		if(parseInt($num) > 1) {
			$(".buyAmout .am-fr .number ").html(parseInt($num) - 1);
		}
	});
	$(".add").click(function() {
		$num = $(".buyAmout .am-fr .number ")[0].innerHTML;
		if(parseInt($num) >= 1) {
			$(".buyAmout .iconfont").addClass("colorZ");
		}
		$(".buyAmout .am-fr .number ").html(parseInt($num) + 1);
	});
	$(".good-ping").click(function() {
		$(".buy").slideDown("slow");
		$(".product-one .box-shadow").css({
			"display": "block"
		});
	});
	$(".tuichu").click(function() {
		$(".buy").slideUp("slow");
	});
	$(".shop").click(function() {
		$(".buy").slideUp("slow");
	});
	$(".bottom-nav .shop").click(function() {
		$(".buy").slideDown("slow");
	});
	/*收货表单验证*/
	function isHave($obj, $new) {
		if(!$obj.val()) {
			var $odiv = $("<div></div>").text($new);
			$(".tiShi").append($odiv);
			$odiv.css({
				"padding": "10px"
			});
			setTimeout(function() {
				$(".tiShi").css({
					"opacity": "0"
				});
			}, 1000);
			return true;
		}
	}

	function isPhone($obj) {
		var ret = /^1[0-9]{10}$/;
		if(!(ret.test($obj.val()))) {
			var $odiv = $("<div></div>").text("手机号输入不正确");
			$(".tiShi").append($odiv);
			$odiv.css({
				"padding": "10px",
				"fontSize": "12px"
			});
			setTimeout(function() {
				$(".tiShi").css({
					"opacity": "0"
				});
			}, 1000);

		}
		return true;
	}
	function isRight($obj){
		var ret = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,32}$/;
		if(!(ret.test($obj.val()))) {
			var $odiv = $("<div></div>").text("密码格式不正确");
			$(".tiShi").append($odiv);
			$odiv.css({
				"padding": "10px",
				"fontSize": "12px"
			});
			setTimeout(function() {
				$(".tiShi").css({
					"opacity": "0"
				});
			}, 1000);

		}
		return true;
	}
	$(".shouHuo .am-btn").click(function() {
		$(".tiShi").empty();
		$(".tiShi").css({
			"opacity": "0.5"
		});
		if(isHave($(".shouHuo .name"), "请添加收货人")) {
			return false;
		}
		if(isHave($(".shouHuo .iphone"), "请输入手机号")) {
			return false;
		}
		else{
			if(isPhone($(".shouHuo .iphone"))){
			return false;	
			}
		}
		if(isHave($(".shouHuo .provice"), "请选择省份")) {
			return false;
		}
		if(isHave($(".shouHuo .city"), "请选择城市")) {
			return false;
		}
		if(isHave($(".shouHuo .qu"), "请选择区县")) {
			return false;
		}
		if(isHave($(".shouHuo .street"), "请输入街道名")) {
			return false;
		}
		return true;

	});
	//load
	$(".load input").each(function() {
		$(this).bind("input propertychange", function() {
			if($(this).val()) {
				$(this).parent().find(".clear").css({
					"opacity": "1"
				});
			}
		});
	});
	$(".form-group").each(function() {
		$(this).mouseleave(function() {
			$(this).find(".clear").css({
				"opacity": "0"
			});
		});
		$(this).mouseenter(function() {
			if($(this).find("input").val()) {
				$(this).find(".clear").css({
					"opacity": "1"
				});
			}
		});
	});
	$('.clear').click(function() {
		$(this).parent().parent().find("input").val("");
	});
	//load 表单
	$(".load .am-btn").click(function() {
		$(".tiShi").empty();
		$(".tiShi").css({
			"opacity": "0.5"
		});
		if(isHave($(".load #iphone"), "请输入手机号")) {
			return false;
		} else {
			if(isPhone($(".load #iphone"))) {
				return false;
			}

		}
		return true;
	});
	//re-confirm
	$(".me-confirm .am-btn").click(function() {
		$(".tiShi").empty();
		$(".tiShi").css({
			"opacity": "0.5"
		});
		if(isHave($(".load #iphone"), "请输入手机号")) {
			return false;
		} 
		else {
			if(isPhone($(".load #iphone"))) {
				return false;
			}

		}
		if(isHave($(".load #me-con"),"请先获取验证码")){
			return false;
		}
		if(isHave($(".load #new-password"),"请输入登录密码")){
			return false;
		}
		 else {
			if(isRight($(".load #new-password"))) {
				return false;
			}
		}
		return true;
	});

	/*商品评价查看*/
	$(".moreButton-three").click(function() {
		$(".hidePing").css({
			"display": "block"
		});
		$(this).css({
			"display": "none"
		});
	});
	//订单页
	var oscreen = $(window).height() - $(".header").height();
	$("body").css({
		"height": oscreen + "px"
	});
	$('#doc-modal-list').find('.am-icon-close').add('#doc-confirm-toggle').
	on('click', function() {
		$('#my-confirm').modal({
			relatedTarget: this,
			onConfirm: function(options) {
				window.location.href = "https://m.biyao.com/app";
			},
			// closeOnConfirm: false,
		});
	});
	//shopCar
	$(".m-btn").click(function() {
		$(this).toggleClass("m-choice");
	});
	$(".m-cars .m-car-btn").click(function() {
		if($(this).hasClass("m-choice")) {
			$(this).parent().parent().find(".m-p-l").addClass("m-choice");
			$(".m-p-all").addClass("m-choice");
			NewNumber();
			NewPrice();
			AllSum();
			allNum();
		} else {
			$(this).parent().parent().find(".m-p-l").removeClass("m-choice");
			$(this).parent().parent().find(".allNum").text("0");
			$(this).parent().parent().find(".allPrice").text("0");
			$(".m-p-all").removeClass("m-choice");
			AllSum();
			allNum();
		}
	});
	$(".m-p-l").click(function() {
		if($(this).hasClass("m-choice")) {
			$(this).parent().parent().parent().find(".m-car-btn").addClass("m-choice");
			$(".m-p-all").addClass("m-choice");
			NewNumber();
			NewPrice();
			AllSum();
			allNum();
		} else {
			$(this).parent().parent().parent().find(".m-car-btn").removeClass("m-choice");
			var $newNum = $(this).parent().parent().parent().find(".allNum").text() - $(this).parent().find("input").val();
			var $newNum = $(this).parent().parent().parent().find(".allNum").text($newNum);
			var $newPrice = $(this).parent().parent().parent().find(".allPrice").text() - $(this).parent().find("input").val() * ($(this).parent().find(".price").text().split("￥")[1]);
			$(".m-p-all").removeClass("m-choice");
			$(this).parent().parent().parent().find(".allPrice").text($newPrice);
			AllSum();
			allNum();
		}
	});
	$(".m-p-all").click(function() {
		if($(this).hasClass("m-choice")) {
			$(this).parent().parent().find(".m-btn").addClass("m-choice");
			NewNumber();
			NewPrice();
			AllSum();
			allNum();
		} else {
			$(this).parent().parent().find(".m-btn").removeClass("m-choice");
			$(this).parent().parent().find(".allNum").text("0");
			$(this).parent().parent().find(".allPrice").text("0");
			AllSum();
			allNum();
		}
	});

	function NewNumber() {
		$(".m-cars .allNum ").each(function() {
			$num = 0;
			$(this).parent().parent().find("input").each(function() {
				$num = $num + parseInt($(this).val());
			});
			$(this).text($num);
		});
	}

	function NewPrice() {
		$(".a-price .allPrice").each(function() {
			$price = 0;
			$(this).parent().parent().parent().find("input").each(function() {
				$pr = $(this).parent().parent().parent().find(".price").text().split("￥")[1];
				$price = $price + $pr * $(this).val();

			});
			$(this).text($price);
		});
	}

	function AllSum() {
		var $Sum = 0;
		$("body").find(".allPrice").each(function() {
			$Sum = $Sum + parseFloat($(this).text());
		});
		$(".sum").text($Sum);
	}

	function allNum() {
		var $num = 0;
		$("body").find(".allNum").each(function() {
			$num = $num + parseFloat($(this).text());
		});
		$(".all-num").text($num);
		$(".number").text($num);
	}
	$(".m-number .m-reduce").click(function() {
		var num = $(this).parent().find("input").val();
		if(num <= 1) {
			return;
		}
		$(this).parent().find("input").val(num - 1);
		NewNumber();
		NewPrice();
		AllSum();
		allNum();
	});
	$(".m-number .m-add").click(function() {
		var num = $(this).parent().find("input").val();
		$(this).parent().find("input").val(parseInt(num) + 1);
		NewNumber();
		NewPrice();
		AllSum();
		allNum();
	});
	/*删除确认*/
	$('.m-del').each(function() {
		$(this).click(function() {
			$confirm = $(this).parent().find(".myconfirm");
			$confirm.modal({
				relatedTarget: this,
				onConfirm: function(options) {
					if($confirm.parent().parent().parent().parent().parent().find(".m-car-list").length == 1) {
						$confirm.parent().parent().parent().parent().parent().remove();
					}
					$confirm.parent().parent().parent().parent().remove();
					NewNumber();
					NewPrice();
					AllSum();
					allNum();
					$(".am-dimmer").css({"display":"none"}).removeClass("am-active");
				},
				// closeOnConfirm: false,
				onCancel: function() {
					$(".am-dimmer").css({"display":"none"}).removeClass("am-active");
				}
			});
		});
	});

	//my-address
	$(".my-address .delet").click(function() {
		$(this).parent().parent().parent().remove();
	});
	$(".my-address .m-btn").click(function() {
		$(".my-address .m-btn").each(function() {
			$(this).removeClass("m-choice");
		});
		$(this).addClass("m-choice");
	}, function() {
		history.go(-1);
	});
	//goback
	$(".header .goback").click(function() {
		history.go(-1);
	});

});