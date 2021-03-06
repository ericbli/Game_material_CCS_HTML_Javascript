 anime({
   targets: 'div.box.red',
   translateY: [
  { value: 400, duration: 1000 },
     { value: 0, duration: 1000 }
   ],
   rotate:{
     value: '0.25turn',
backgroundColor: '#FFF',
 opacity: .99, // Animate all divs opacity to .8
 scale: 2, // Animate all divs scale to 2
   easing: 'easeInOutSine'
   }
 });


 anime({


   targets: 'div.box.blue',
 translateY: [
    { value: 200, duration: 1000, delay: 1000},
    { value: 0, duration: 1000 }
  ],
  rotate:{
  value: '1turn',
     easing: 'easeInOutSine',
     delay: 1000
   }
 });

anime({
   targets: 'div.box.green',
   translateY: [
     { value: 200, duration: 1000, delay: 2000},
     { value: 0, duration: 1000 }
  ],
   rotate:{
    value: '1turn',
    easing: 'easeOutExpo',
     delay: 2000
   }
 });

 anime({
   targets: 'div.box.yellow',
   translateY: [
    { value: 200, duration: 1000, delay: 3000},
     { value: 0, duration: 1000 }
   ],
   rotate:{
     value: '1turn',
     easing: 'easeOutCubic',
     delay: 3000
  }
 });

var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 10, duration: 1000 },
    { value: 0, duration: 1000 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeOutQuad'
  },

opacity:'0.9',

  delay: function(el, i, m){ return i + anime.random(10, 4000)},
  autoplay:false,
  loop:true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;