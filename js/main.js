$(function(){

	$('.depth2').hide();
		
	$('.depth1 li').hover(
	function(){
	  $(this)
		.find('.depth2')
		.stop() 
		.slideDown(200);
	},
	function(){      
	  $(this)
		.find('.depth2')
		.stop()
		.slideUp(200);
		}
	);    
}); 

$(function(){
    var img_num = 0;  // 이미지 번호(배열)
    var img_width = 100;  // 이미지 크기(width)
    var duration = 3000;  // 재생시간

    var play_slider = setInterval(function(){

      if(img_num >= 3){ img_num = 0;}
      // image_width x img_num
      $('.sliders').css('margin-left', -(img_width * img_num) + '%');
      img_num++;
    }, duration)

  });