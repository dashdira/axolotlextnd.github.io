var mybubbles = document.getElementsByClassName("ani-bubble");

var bubblecolors = [ "#c5a5ab", "#e3e2dd", "#87a6c0" ];

for (var i = 0; i < mybubbles.length; i++) {

  mybubbles[i].style.backgroundColor = bubblecolors[Math.floor(Math.random() * bubblecolors.length)];
  mybubbles[i].style.opacity = Math.random()*.75;

  var bubblesize = (Math.floor(Math.random() * 9)+2) * 50;

  mybubbles[i].style.width = bubblesize+"px";
  mybubbles[i].style.height = bubblesize+"px";
  mybubbles[i].style.borderRadius = (bubblesize/2)+"px";

  mybubbles[i].style.left = Math.floor(Math.random() * 100) + "%";

  mybubbles[i].style.animationDuration = Math.floor(Math.random() * 16)+8 + "s";
  mybubbles[i].style.animationDelay = Math.floor(Math.random() * 8) + "s";

}

$( document ).ready(function() {
  jQuery.expr.filters.offscreen = function(el) {
  return (
      (el.offsetLeft + el.offsetWidth) < 0 
      || (el.offsetTop + el.offsetHeight) < 0
      || (el.offsetLeft > window.innerWidth || el.offsetTop > window.innerHeight)
    );  
    };
  setInterval(function(){
    $('.ani-bubble').each(function(){
      if($(this).is(':offscreen')){
       var bubbleoffset = Math.floor((Math.random() * 140) - 19);
         $(this).css({ 'left': bubbleoffset+'%' }); 
      }
    });
  },50);
});
