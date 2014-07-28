
function play() {
    $(document).off("touchstart");
    if ($("#audioControl").hasClass("active")) {
        $("#audioControl").removeClass("active");
        $("#audio")[0].pause();
    } else {
        $("#audioControl").addClass("active");
        $("#audio")[0].play();
    }
}

$(document).on("touchstart",function(){
    $("#audio")[0].play();
});

var currentIndex = 0;
function beforeLoadPage() {
	if (currentIndex == 0) {
        $("#indexTitle div").hide();
	}else if (currentIndex == 7) {
		$("#stageBig").hide();
		$("#stageSmall").hide();
	}else{
        $(".welcome:not(.logo)").eq(currentIndex).find(".img").hide();
        $(".welcome:not(.logo)").eq(currentIndex).find(".name img").hide();
        $(".welcome:not(.logo)").eq(currentIndex).find(".arrow_bg").hide()
    }
}

function afterLoadPage() {
	if (currentIndex == 0) {
        $("#indexTitle div").eq(0).fadeIn(500,function(){
            $(this).next().fadeIn(800,function(){
                $(this).next().fadeIn(1200,function(){
                     $(this).next().fadeIn(800,function(){
                        $(this).next().fadeIn(800);
                     });
                });
            });
        });
	}else if (currentIndex == 7) {
		$("#stageSmall").fadeIn(1500,function(){
			$("#stageBig").slideDown(1000);
		});
	}else{
        $(".welcome:not(.logo)").eq(currentIndex).find(".img").fadeIn(1000,function(){
            $(".welcome:not(.logo)").eq(currentIndex).find(".name img").eq(0).fadeIn(1000,function(){
                $(this).next().fadeIn(800,function(){
                    $(this).next().fadeIn(800);
                    $(".welcome:not(.logo)").eq(currentIndex).find(".arrow_bg").slideDown(1000);
                });
            });
        });
    }
}


function activity(){
	currentIndex = 10
	$("#nav").animate({"top":"-105%"},1000,function(){
	   $(this).animate({"top":"-100%"},500);
	});
	$("#activity").prev().css({"top":"100%"}).show().animate({"top":"-5%"},1000,function(){
		$(this).animate({"top":"0%"},500,function(){
			beforeLoadPage();
			$(this).fadeOut(400);
			$(this).next().css({"top":"0%"}).fadeIn(800,function(){
				afterLoadPage();
			});
		});
	});
}

function baoming(){
	currentIndex = 11
	$("#nav").animate({"top":"-105%"},1000,function(){
	   $(this).animate({"top":"-100%"},500);
	});
	$("#baoming").prev().css({"top":"100%"}).show().animate({"top":"-5%"},1000,function(){
		$(this).animate({"top":"0%"},500,function(){
			beforeLoadPage();
			$(this).fadeOut(400);
			$(this).next().css({"top":"0%"}).fadeIn(800,function(){
				afterLoadPage();
			});
		});
	});
}

$(function() {

    beforeLoadPage();
    $(".welcome:eq(" + currentIndex + ")").show(function(){
        afterLoadPage();
    });

    var zIndex = 10;
    $(".welcome:not(.logo)").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
            if(direction == "up" && $(this).index()<$(".welcome").size()-1){
                currentIndex++;
                $(this).animate({"top":"-105%"},1000,function(){
                   $(this).animate({"top":"-100%"},500);
                });
                $(this).next().css({"top":"100%","zIndex":zIndex++}).show().animate({"top":"-5%"},1000,function(){
                    $(this).animate({"top":"0%"},500,function(){
                        beforeLoadPage();
                        $(this).fadeOut(400);
                        $(this).next().css({"top":"0%"}).fadeIn(800,function(){
                            afterLoadPage();
                        });
                    });
                });
            }else if(direction == "down" && $(this).index()>0){
                currentIndex--;
                $(this).prev().css({"top":"-100%","zIndex":zIndex++}).show().animate({"top":"5%"},1000,function(){
                     $(this).animate({"top":"0%"},500,function(){
                        beforeLoadPage();
                        $(this).fadeOut(400);
                        $(this).prev().css({"top":"0%"}).fadeIn(800,function(){
                            afterLoadPage();
                        });
                     });
                });
                $(this).animate({"top":"105%"},1000,function(){
                    $(this).animate({"top":"100%"},500);
                });
            }
        }
    });

    var index = 0;
    var indexLoad = setInterval(function(){
        $("#indexLoad a").eq(index).animate({"backgroundColor":"#a19571"},400);
        if(index == $("#indexLoad a").size()-1){
            index = 0;
        }else{
            index++;
        }
        $("#indexLoad a").eq(index).animate({"backgroundColor":"#b52c1c"},400);
    }, 400);

    var i = 0;
    var loading = setInterval(function(){
        if(i == 21){
            i = 0;
        }else{
            i++;
        }
        $(".loading_logo img").css({
            "-moz-transform":"rotate("+(i/22)*360+"deg)",
            "-webkit-transform":"rotate("+(i/22)*360+"deg)"
        })
    },100);

    /*setTimeout(function(){
        play();
        play();
        setTimeout(function(){
            play();
        }, 1500)
    },1500);*/


});