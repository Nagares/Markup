

/*
// Stars hover
$('.star-rating').hover(function() {

  let contStars = $(this).find('.stars');
  let star = $(this).find('.stars .star');

  star.hover(function() {
      var nowPos = $(this);
      star.removeClass('fas');

      for(var i = 0; nowPos.index()+1 > i; i++)

         star.eq(i).toggleClass('fas');
       
  });

  contStars.mouseleave(function() {

    let starsEmpt = star.not('[stars]');
    let starsFull = star.filter('[stars]');

    starsEmpt.map(function(indx){
      $(this).removeClass('fas')
    })

    starsFull.map(function(index){
      $(this).addClass('fas')
    })
  })


  star.click(function() {
      var nowPos = $(this);
       star.removeAttr('stars');
        for(var i = 0; nowPos.index()+1 > i; i++){
         star.eq(i).attr('stars',`${i+1}`);}
  });

})

//блоки фиксации
$(document).ready(function () {
      var offset = $('.fixed').offset();
    var topPadding = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $('.fixed').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
        }
        else {
            $('.fixed').stop().animate({marginTop: 0});
        }
    });
});




   



      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
 */