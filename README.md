# banglejs-2-moon-phase-complication #

draws the current moon phase as a complication for an analog clock on a Bangle.js 2

This module displays a small graphics symbolizing the current moon phase as a complication for an analog clock on a [Bangle.js 2](https://www.espruino.com/Bangle.js2). It is based on an idea of forum user [HilmarSt](http://forum.espruino.com/profiles/182487/) (see this [discussion](http://forum.espruino.com/conversations/371330/))

![](Demo.png)

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let Clockwork = require(...);
Clockwork.windUp({
  complications: {
    r:require('https://raw.githubusercontent.com/rozek/banglejs-2-moon-phase-complication/main/Complication.js'),
  }
  ...
});
```

## Example ##

The following code shows a complete example for a (still simple) analog clock using this complication:

```
let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

Clockwork.windUp({
  face: require('https://raw.githubusercontent.com/rozek/banglejs-2-twelve-numbered-clock-face/main/ClockFace.js'),
  hands:require('https://raw.githubusercontent.com/rozek/banglejs-2-hollow-clock-hands/main/ClockHands.js'),
  complications: {
    r:require('https://raw.githubusercontent.com/rozek/banglejs-2-moon-phase-complication/main/Complication.js'),
  }
},{
  Foreground:'#000000', Background:'#FFFFFF', Seconds:'#FF0000',
  withDots:true
});
```

## License ##

[MIT License](LICENSE.md)
