  let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

  Clockwork.windUp({
    face:  require('https://raw.githubusercontent.com/rozek/banglejs-2-twelve-numbered-face/main/ClockFace.js'),
    hands: require('https://raw.githubusercontent.com/rozek/banglejs-2-rounded-clock-hands/main/ClockHands.js'),
    complications: {
      r:require('https://raw.githubusercontent.com/rozek/banglejs-2-moon-phase-complication/main/Complication.js'),
    }
  },{
    Foreground:'#FFFFFF', Background:'#000000', Seconds:'#FFFF00',
    withDots:true
  });
