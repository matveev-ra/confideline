$(function() {
    $(".selectlink-js").on('click', function(e){
        // $('.Flag__dropdown').slideToggle();

        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function(){

            $('.Flag .Flag__dropdown').not($menu_popup).slideUp(200);
            
            if ($menu_popup.is(':hidden')) {
                $('.Flag__dropdown').removeClass('active');
                $(".selectlink-js").removeClass('active');
            } else {
                  $('.Flag__dropdown').addClass('active');
                  $(".selectlink-js").addClass('active');
            }					
        });  
        return false;
    });		
    $('.Flag-js').on('click', function(e){
        if($('.Flag__dropdown').hasClass('active')){
            $(".selectlink-js").html($(this).html());
            $('.Flag .Flag__dropdown').slideUp(200);
            $('.Flag .Flag__dropdown').removeClass('active');
            $(".selectlink-js").removeClass('active');
        }
        
    });
});