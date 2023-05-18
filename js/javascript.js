    //header按鈕

$(function(){
    $('header .inputBox').click(function(){
        $(this).addClass('active');
    })
    $('header .inputBox input').blur(function(){
        $('header .inputBox').removeClass('active');
    })
    var handle = null;
	$('header .inputBox').mouseover(function(){
		
		clearTimeout(handle);
	}).mouseout(function(){
		handle = setTimeout(function(){
			$('header .inputBox').removeClass('active');
		},1500);
	})

    $('header .btnBox button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var n = $(this).index();

        $(".mainBox ul:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

    //mainBox左右拖曳滑動效果

$(function(){
    var drag = function(obj){  

        obj.bind("mousedown",start);  

        function start(event){  
            if(event.button == 0){//判斷是否點選滑鼠左鍵  
                gapX=event.clientX;
                startx = $(window).scrollLeft();  // scroll的初始位置

                //movemove事件必須繫結到$(document)上，滑鼠移動是在整個螢幕上的  
                $(document).bind("mousemove",move);  
                //此處的$(document)可以改為obj  
                $(document).bind("mouseup",stop);                           
            }  
            return false;//阻止預設事件或冒泡  
        }  
        function move(event){  
            var left = event.clientX-gapX; // 滑鼠移動的相對距離

            $(window).scrollLeft(startx - left );

            return false;//阻止預設事件或冒泡  
        }  
        function stop(){  
            //解繫結，這一步很必要，前面有解釋  
            $(document).unbind("mousemove",move);  
            $(document).unbind("mouseup",stop);  
        }  
    }  

    obj = $(".mainBox");  

    drag(obj);//傳入的必須是jQuery物件，否則不能呼叫jQuery的自定義函式 
})

    //自動抓取herf

$(function(){
    $('.img').each(function(index){
        $('#web_demo'+index+' .img').css('background','url(./images/demoImg/web/web_demo'+index+'.jpg) no-repeat top center');
        $('#web_demo'+index+' .link').attr('href','./images/demoImg/web/web_demo'+index+'.jpg');
        $('#mobile_demo'+index+' .img').css('background','url(./images/demoImg/mobile/mobile_demo'+index+'.jpg)  no-repeat top center');
        $('#mobile_demo'+index+' .link').attr('href','./images/demoImg/mobile/mobile_demo'+index+'.jpg');
        $('.img').css('background-size','cover');
    })
})

    //回到頂端按鈕

$(function(){
    $(".mainBox ul").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 1){
            $(".gotop")
            .css({
                "opacity" : "1",
                "pointer-events" : "visible",
            });
        } else{
            $(".gotop")
            .css({
                "opacity" : "0",
                "pointer-events" : "none",
            });
        };
    })
    $(".gotop").click(function(){

        $(".mainBox ul").animate({
            scrollTop: 0,
        },500);
    })
})

    //主物件hover時a跑版效果修正

$(function(){
    $('.forWeb li,.forMobile li').hover(function(){
        $(this).addClass('hoverA');
    })
    var handle = null;
    $('.forWeb li .link,.forMobile li .link').click(function(){
        handle = setTimeout(function(){
			$('.forWeb li,.forMobile li').removeClass('hoverA');
		},500);
    })
})

    //transCover觸發
    
$(function(){
    $('.enterBtn').click(function(){
        $(this).addClass('trans');
        
        setTimeout(function(){
            $('.mainAnime').fadeOut(500);
        },700)
    })
})

    //滑鼠追蹤

$(function(){
    var timer = null;
    var handle = null;

    $(".mainAnime").mousemove(function(mE){
        var mX = mE.pageX - $(".mainAnime").offset().left;
        var mY = mE.pageY - $(".mainAnime").offset().top;

        clearInterval(handle);
        handle = setInterval(function(){
            $(".mainAnime")
            .append("<freeze style='top: "+ mY +"px; left: "+ mX +"px;'></freeze>");

            if($(".mainAnime freeze").length >= 5)
            {
                $(".mainAnime freeze").first()
                .remove();
            }
        },700)

        if(timer != null) return;

        timer = setTimeout(function(){
            timer = null;
        },220);

        $(".mainAnime")
        .append("<i style='top: "+ mY +"px; left: "+ mX +"px;'></i>");

        if($(".mainAnime i").length >= 10)
        {
            $(".mainAnime i").first()
            .remove();
        }
    })
})

    //自動高

$(function(){
    var wH = $(window).innerHeight();

    $(".mainBox ul")
    .css("height",""+ (wH - 170) +"px");

    $(window).resize(function(){
        var wH = $(window).innerHeight();

        $(".mainBox ul")
        .css("height",""+ (wH - 170) +"px");
    })
})


    //手機版調整
function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
    if(isMobile()){
        $('.svgWrapper').css('width','900')
    }
})