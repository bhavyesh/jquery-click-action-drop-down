/*  With Dual function 
	Functions defined using variable assignment method
	Usage of return; statement to break the function
	Used jQuery
 **************** */

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
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


/*  with just single function and the hide function inside that function **************** */

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function dropdown(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        var ddhide = function (event)
		{
			var targetGroup = event ? $(event.target).parents().addBack() : null;
							 
			if (targetGroup && targetGroup.is('.dropdown'))
			{ 
				if (targetGroup.is('.dropdown'))
				{ 
					if (!targetGroup.is('A')) return;
				}
				else
				{
					return;
				}
			}
			
				$('.dropdown').slideUp(300);
				$('.clicker').removeClass('active');
		}
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
        }
        else
        {
            ddhide(event);
        }
        
    }
    
    $(document).on('click', dropdown);
    
});

/*  with dual function but a single call  with event.preventDefault(); &  event.stopPropagation();************ */ 

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
            target.preventDefault();
			/* $(target).preventDefault();   ---- this can be used instead of   ------  target.preventDefault();  */
            target.stopPropagation();
            /* $(target).stopPropagation();   ---- this can be used instead of   ------  target.stopPropagation(); */
        }
        else
        {
            ddhide(event);
        }
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                         
        if (targetGroup && targetGroup.is('.dropdown')) { 
            if (targetGroup.is('.dropdown')) { 
                if (!targetGroup.is('.closeit')) return; } else { return; } }
        
            $('.dropdown').slideUp(300);
            $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    
});

/*  with dual function but a single call  with target.preventDefault(); &  target.stopPropagation() and no else part in ddshow;************ */ 

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
            target.preventDefault(); 
            target.stopPropagation(); /* any of the above two statement can be used to stop propagation */
        }
        ddhide(event);
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                         
        if (targetGroup && targetGroup.is('.dropdown') && !targetGroup.is('.closeit')) { return; }
        
        $('.dropdown').slideUp(300);
        $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    
});

/*  with dual function but a single call  WITHOUT event.preventDefault(); &  event.stopPropagation() ; with multiple nested if statement target checker************ */ 

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
        }
        else
        {
            ddhide(event);
        }
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                         
        if (targetGroup && targetGroup.is('.dropdown')) { 
            if (targetGroup.is('.dropdown')) { 
                if (!targetGroup.is('A')) return; } else { return; } }
        
            $('.dropdown').slideUp(300);
            $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    
});

/*  with dual function but a single call  WITHOUT event.preventDefault(); &  event.stopPropagation(); and with SINGLE if statement target checker************ */

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
        }
        else
        {
            ddhide(event);
        }
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                         
        if (targetGroup && targetGroup.is('.dropdown') && !targetGroup.is('.closeit')) { return; }
        
        $('.dropdown').slideUp(300);
        $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    
});

/*  with dual function but a single call  WITHOUT event.preventDefault(); &  event.stopPropagation(); and with SINGLE if statement target checker and without else part in ddshow ************ */

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
            return; /* return; statement is uesd to break the forward movement of the function */
        }
        ddhide(event);  /*  else part is not used ... instead of that return statement is used under if statement above  */
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                         
        if (targetGroup && targetGroup.is('.dropdown') && !targetGroup.is('.closeit')) { return; }
        
        $('.dropdown').slideUp(300);
        $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    
});

/*  with DUAL function and DUAL CALL and remains always open on clicking on any element in th dropdown ************ */ 

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if(target.hasClass('clicker') && !target.hasClass('active'))
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
            target.preventDefault();
            target.stopPropagation();
        }
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                          
        if (targetGroup && targetGroup.is('.dropdown')) { return; } 
        
            $('.dropdown').slideUp(300);
            $('.clicker').removeClass('active');
       
    }
    
    $(document).on('click', ddshow);
    $(document).on('click', ddhide);
    
});

/*  with DUAL function and DUAL CALL and remains always open on clicking on any element in th dropdown ************ DIFFERENT THEN ABOVE METHOD */

$(function () {
    
  $('.nav > ul').toggleClass('no-js js');
    
  $('.nav .js ul').hide();
    
    function ddshow(event)
    {
        var target = $(event.target);
        var ddid = target.attr('data-ddid');
        
        if((target.hasClass('clicker') == true) && (target.hasClass('active') == false)) /* DIFFERENT THEN ABOVE METHOD */
        {
            ddhide();
            $(ddid).slideDown(300);
            $(target).addClass('active');
            target.stopPropagation();
        }
    }
    
    function ddhide(event)
    {
        var targetGroup = event ? $(event.target).parents().addBack() : null;
                          
        if (targetGroup && targetGroup.is('.dropdown')) { 
            if (targetGroup.is('.dropdown-menu')) { 
                if (!targetGroup.is('A')) return; } else { return; } }
        else
        {
            $('.dropdown').slideUp(300);
            $('.clicker').removeClass('active');
        }
    }
    
    $(document).on('click', ddshow);
    $(document).on('click', ddhide);
    
});
