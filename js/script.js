$(document).ready(function(){

            $('#hamburger-menu').on('click',function(){


                $('#responsive-nav').animate({
                    'right':0,
                },1000);

                $('body').append("<div id='close-body' class='close-body'></div>");


                $('#close-body').on('click',function(){

                    $('#responsive-nav').animate({
                        'right':'-200px',
                    },1000);

                    $('#close-body').remove();

                });
            });   


        $("#story-image").on('click',function(){


              $('#story-image').addClass('animate__animated  animate__flash');

              setTimeout(function(){ 
                $('#story-image').removeClass('animate__animated  animate__flash');
                }, 1000);


        });



        $('#scroll-top').on('click',function(){

            $('html, body').animate({

                scrollTop : 0
                
            },800);
           
          });

  
});