$(document).ready(function(){
    $('#home-nav').click(function() {
      if($('#home-page:visible').length == 0){
        $('#home-page').fadeToggle( "slow", "linear" );
      }
      if($('#project-page:visible').length == 1){
        $('#project-page').fadeToggle( "slow", "linear" );
      }
      if($('#contact-page:visible').length == 1){
        $('#contact-page').fadeToggle( "slow", "linear" );
      }
    });
});
$(document).ready(function(){
    $('#project-nav').click(function() {
      if($('#home-page:visible').length == 1){
        $('#home-page').fadeToggle( "slow", "linear" );
      }
      if($('#project-page:visible').length == 0){
        $('#project-page').fadeToggle( "slow", "linear" );
      }
      if($('#contact-page:visible').length == 1){
        $('#contact-page').fadeToggle( "slow", "linear" );
      }
    });
});
$(document).ready(function(){
    $('#contact-nav').click(function() {
      if($('#home-page:visible').length == 1){
        $('#home-page').fadeToggle( "slow", "linear" );
      }
      if($('#project-page:visible').length == 1){
        $('#project-page').fadeToggle( "slow", "linear" );
      }
      if($('#contact-page:visible').length == 0){
        $('#contact-page').fadeToggle( "slow", "linear" );
      }
    });
});