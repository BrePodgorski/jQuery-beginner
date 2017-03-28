$(document).ready(function(){

  // $('img').click(function(){
  //     $(this).fadeOut("slow");
  //           });

  $('img').click(function() {

    // console.log('data-alt-src value is', $(this).attr('data-alt-src'));

    var alt = $(this).attr('data-alt-src');
    console.log(alt);

    var temp = $(this).attr('src');
    console.log(temp);

    $(this).attr('src', alt);
    $(this).attr('data-alt-src', temp);


      // $('data-alt-src').click();
  });

  // $('img').click(function(){
  //     $(this).fadeIn("slow");
  //           });
})
