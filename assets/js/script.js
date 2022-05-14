$overlayContainer = $('#overlay-container');
$overlayText = $('#overlay-text');
$videoContainer = $('#video-container');
$train = $('#train');
window.scrollTo(0, 0);
$(window).on("scroll",function(e) {
  let top = $(window).scrollTop();
  console.log(top);
  if(top<=540){        
    $overlayContainer.show();
    $overlayText.css("margin-top", ((top + 480) + 'px'));  
    $overlayText.css('transform','scale('+ ((top/20) + 1) +')');  
  }
  if(top > 540){
    $overlayContainer.hide();
    $videoContainer.css('margin-top','540px');
    $videoContainer.css('position','static');    
  } else {
    $videoContainer.css('margin-top','0px');
    $videoContainer.css('position','sticky');    
  }

  if(top < 2700){
    $train.css("left", '0px');    
  }
  
  if(top > 2700 && top < 1920 + 2700) {
    if(top < 1920 + 2700){
      $train.css("left", '-' + (top - 2700) + 'px');    
      $train.css("top", (top - 0) + 'px');  
    }
  }
  
  if(top > 4620){
    $train.css("left", '-1920px');    
  }
});