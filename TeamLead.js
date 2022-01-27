$(document).ready(function()
{

    $('.sliders').slick(
    {
        autoplay: true,
        fade: true,
        autoplaySpeed: 1000
    });
    
    function dec_min()
    {
        min = parseInt($('.min').html());
        if(min !== 0){
            $('.min').html(min -1);
            $('.sec').html(59);
        }
    };

    var Update=function()
    {
        $('.sec').each(function()
        {
            var count= parseInt($(this).html());
            if(count !== 0){
            $(this).html(count-1);
            }
            else {
                dec_min();
            }
        });
    };

    setInterval(Update, 1000);

    
});