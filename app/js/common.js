$(function(){     
    $(".share").click(function(e){
        e.preventDefault();
        $('#share-modal').show();
        $('body').css('overflow', 'hidden');
   });
    $(".btn-cancel").click(function(){
        $('#share-modal').hide();
        $('body').css('overflow', 'auto');
    });    
});