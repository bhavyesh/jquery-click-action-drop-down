$(function () {
    
 $('.dropdown').hide();
 
    var ddshow = function(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
            return;
        }
        ddhide(event);
    }
    
    var ddhide = function(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                         
        if (targetGroup && targetGroup.is('.dropdown') && !targetGroup.is('.closeit')) { return; }
        
        $('.dropdown').slideUp(300);
        $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    
});
