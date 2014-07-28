
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
		$("#stageSmall").hide();
	}else{
        $(".welcome:not(.logo)").eq(currentIndex).find(".line").hide();
        $(".welcome:not(.logo)").eq(currentIndex).find(".img").hide();
        $(".welcome:not(.logo)").eq(currentIndex).find(".name").css({"bottom":"50%","opacity":"0"});
        $(".welcome:not(.logo)").eq(currentIndex).find(".name_text").css({"bottom":"-10%","opacity":"0"});
        $(".welcome:not(.logo)").eq(currentIndex).find(".arrow_bg").hide();
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
		$("#stageSmall").fadeIn(1500);
	}else{
        $(".welcome:not(.logo)").eq(currentIndex).find(".line").fadeIn(2000);
        $(".welcome:not(.logo)").eq(currentIndex).find(".img").fadeIn(1000);
        $(".welcome:not(.logo)").eq(currentIndex).find(".name").animate({"bottom":"12%","opacity":"1"},800,function(){
           $(this).animate({"bottom":"15%"},400);
        });
        $(".welcome:not(.logo)").eq(currentIndex).find(".name_text").animate({"bottom":"12%","opacity":"1"},800,function(){
           $(this).animate({"bottom":"9%"},400);
        });
    }
}


function activity(){
	currentIndex = $(".welcome").size()-3;
	$("#nav").animate({"top":"-105%"},1000,function(){
	   $(this).animate({"top":"-100%"},500);
	});
    beforeLoadPage();
	$("#activity").css({"top":"100%"}).show().animate({"top":"-5%"},1000,function(){
		$(this).animate({"top":"0%"},500,function(){
            afterLoadPage();
        });
	});
}

function baoming(){
	currentIndex = $(".welcome").size()-2;
	$("#nav").animate({"top":"-105%"},1000,function(){
	   $(this).animate({"top":"-100%"},500);
	});
    beforeLoadPage();
	$("#baoming").css({"top":"100%"}).show().animate({"top":"-5%"},1000,function(){
		$(this).animate({"top":"0%"},500,function(){
            afterLoadPage();
        });
	});
}

function weixin(){
    currentIndex = $(".welcome").size()-1;
    $("#nav").animate({"top":"-105%"},1000,function(){
       $(this).animate({"top":"-100%"},500);
    });
    beforeLoadPage();
    $("#wexin").css({"top":"100%"}).show().animate({"top":"-5%"},1000,function(){
        $(this).animate({"top":"0%"},500,function(){
            afterLoadPage();
        });
    });
}

$(function() {

    beforeLoadPage();
    $(".welcome:eq(" + currentIndex + ")").show(function(){
        afterLoadPage();
    });

    var zIndex = 10;
    $(".welcome").swipe({
        swipe: function(event, direction, distance, duration, fingerCount) {
            if(direction == "up" && currentIndex<$(".welcome").size()-4){
                currentIndex++;
                $(this).animate({"top":"-105%"},1000,function(){
                   $(this).animate({"top":"-100%"},500);
                });
                beforeLoadPage();
                $(this).next().css({"top":"100%","zIndex":zIndex++}).show().animate({"top":"-5%"},1000,function(){
                    $(this).animate({"top":"0%"},500,function(){
                        afterLoadPage();
                    });
                });
            }else if(direction == "down" && (currentIndex == $(".welcome").size()-3 || currentIndex == $(".welcome").size()-2 || currentIndex == $(".welcome").size()-1) ){
                currentIndex = $(".welcome").size()-4;
                beforeLoadPage();
                $(".welcome").eq(currentIndex).css({"top":"-100%","zIndex":zIndex++}).show().animate({"top":"5%"},1000,function(){
                    $(this).animate({"top":"0%"},500,function(){
                        afterLoadPage();
                    });
                });
                $(this).animate({"top":"105%"},1000,function(){
                    $(this).animate({"top":"100%"},500);
                });
            }else if(direction == "down" && currentIndex>0){
                currentIndex--;
                beforeLoadPage();
                $(this).prev().css({"top":"-100%","zIndex":zIndex++}).show().animate({"top":"5%"},1000,function(){
                    $(this).animate({"top":"0%"},500,function(){
                        afterLoadPage();
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
        if(i == 19){
            i = 0;
        }else{
            i++;
        }
        $(".loading_logo img").css({
            "-moz-transform":"rotate("+(i/20)*360+"deg)",
            "-webkit-transform":"rotate("+(i/20)*360+"deg)"
        })
    },100);


});