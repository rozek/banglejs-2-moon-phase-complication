// see https://www.starpage.de/content/themen/2010_08_mondphasenberechnung/

(function () {
  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawmoonphase/main/drawMoonPhase.js');

  exports.draw = function draw (x,y, Radius, Settings) {
    let today = new Date();
    let Phase = (today/86400000 - new Date(2009,11,31, 20,12,36)/86400000) % 29.530588;

    let leftFactor, rightFactor;
    switch (true) {
      case (Phase === 0):                                           // full moon
        leftFactor = rightFactor = 1.0;
        break;
      case (Phase < 0.5):                                         // waning moon
        leftFactor  = 1.0;
        rightFactor = 1 - 4*Phase;
        break;
      case (Phase === 0.5):                                          // new moon
        g.drawCircle(x,y, Radius);
        break;
      case (Phase > 0.5):                                         // waxing moon
        leftFactor  = -1 + 4*(Phase-0.5);
        rightFactor = 1.0;
        break;
    }

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');
    g.drawMoonPhase(x,y, Radius, leftFactor,rightFactor);
  };
})();
