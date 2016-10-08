var swiper = new Swiper('.swiper-container', {        
    direction: 'vertical'
});  

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
if(isAndroid){
    $("input").focus(function(){
        var num = $(this).offset().top-250;
        $("html,body").animate({scrollTop:num},800);
    });  //关键代码  
    var win_h = $(window).height();  //关键代码
    $("body").height(win_h);  //关键代码  
}



