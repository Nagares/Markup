const newMain = $('.youneedtobeheer');
const hasBoxis = $('.boxis');
const hasRefond = $('.refond')
const mainforBoxis = $('.firstmain');
const mainforRefond = $('.twicemain');
const hasImg = $('.ladi');
const mainforImg = $('.forimg');
const oldmainforImg = $('.info');


const madeNewBlock={
  append: function(child, parent){
            child.remove();
            parent.append(child);},

  prepend: function(child, parent){
            parent.prepend(child);},
  before: function(child, parent){
            parent.before(child);},
}



$(window).resize(function(){
    responsMe()
  })

function responsMe(){
  
   if(($(window).width() <= 1100) && (!newMain.children('#id').length > 0) ){
      madeNewBlock.append(hasBoxis, newMain);
      madeNewBlock.append(hasRefond, newMain);
   }

   else if(($(window).width() >= 1101) && (mainforBoxis.children().length <= 1)){
    
   
      madeNewBlock.prepend(hasBoxis, mainforBoxis);
      madeNewBlock.append(hasRefond, mainforRefond);

   }

    if(($(window).width() <= 530) && (oldmainforImg.parent().children().length > 3)){
     madeNewBlock.append(hasImg, mainforImg);
     
       
   }

   else if(($(window).width() >= 531) && (oldmainforImg.parent().children().length <= 3)){
   
      madeNewBlock.before(hasImg, oldmainforImg);
      
   }
}



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
  responsMe()
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


   
