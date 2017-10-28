$(document).ready(function() {
	$(":password").each(function() {
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
		$(this).parent().parent().find(":password").val("");
	});
	/*表单验证*/
	var ret = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,32}$/;
	$(".password .am-btn").click(function() {
		var $oldpassword = $(".password #old-password").val();
		var $newpassword = $(".password #new-password").val();
		var $conpassword = $(".password #confirm-password").val();
		$(".tiShi").empty();
		$(".tiShi").css({
			"opacity": "0.5"
		});
		if(!$oldpassword) {
			var $odiv = $("<div></div>").text("请输入原登录密码");
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
		if(!$newpassword) {
			var $odiv = $("<div></div>").text("请输入新密码");
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
		if(!$conpassword) {
			var $odiv = $("<div></div>").text("请输入新密码");
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
		if(!($newpassword == $conpassword)) {
			var $odiv = $("<div></div>").text("两次密码不一致，请从新输入");
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
	function confirmcon(){
			var $odiv = $("<div></div>").text("请输入6-32位字符，需要字母、数字、符号两种以上组合");
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
				if(!(ret.test($oldpassword))){
				confirmcon();
				return false;
			}
				
				if(!(ret.test($newpassword))){
				confirmcon();
				return false;
			}
				
				if(!(ret.test($conpassword))){
				confirmcon();
				return false;
			}
		return true;
	});

});