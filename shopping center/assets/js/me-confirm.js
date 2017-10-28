$(document).ready(function() {
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
	/*表单验证*/
	var ret = /^1[0-9]{10}$/;
	$(".load .am-btn").click(function() {
		var $oldPhone = $(".load #iphone").val();
		
		$(".tiShi").empty();
		$(".tiShi").css({
			"opacity": "0.5"
		});
		if(!$oldPhone) {
			var $odiv = $("<div></div>").text("请输入手机号");
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
			return false;
		}
		else{
				if(!(ret.test($oldPhone))){
				confirmcon();
				return false;
			}
		}
		
		if($(".load #me-con")){
			var $meConfirm = $(".load #me-con").val();
			if(!$meConfirm) {
			var $odiv = $("<div></div>").text("请先获取验证码");
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
			return false;
		}
		}
		else{
			return true;
		}
		
		
		
	function confirmcon(){
			var $odiv = $("<div></div>").text("手机号输入不正确");
					$(".tiShi").append($odiv);
					$odiv.css({
						"padding": "10px",
						"fontSize":"12px"
					});
					setTimeout(function() {
						$(".tiShi").css({
							"opacity": "0"
						});
					}, 1000);
		}
				
		return true;
	});

});