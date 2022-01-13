// see https://www.starpage.de/content/themen/2010_08_mondphasenberechnung/

;(function () {
  require('https://raw.githubusercontent.com/rozek/banglejs-2-drawmoonphase/main/drawMoonPhase.js');

  const MillisPerDay   = 86400000;
  const synodicalMonth = 29.530588;

  exports.draw = function draw (x,y, Radius, Settings) {
    let today = new Date();
    let Phase = (
      (today/MillisPerDay - new Date(2009,11,31, 20,12,36)/MillisPerDay) % synodicalMonth
    ) / synodicalMonth;

    if (Phase < 0) { Phase += 1; } // just in case that date is completely wrong

    g.setColor(Settings.Background === 'Theme' ? g.theme.bg : Settings.Background || '#000000');
    g.fillCircle(x,y, Radius);

    let leftFactor, rightFactor;
    switch (true) {
      case (Phase === 0):                                           // full moon
        leftFactor = rightFactor = 1.0;
        break;
      case (Phase < 0.483):                                       // waning moon
        leftFactor  = 1.0;
        rightFactor = 1 - 4*Phase;
        break;
      case (Phase <= 0.517):                                         // new moon
        g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#FFFFFF');
        g.drawCircle(x,y, Radius-1);
        break;
      default:
//    case (Phase > 0.517):                                       // waxing moon
        leftFactor  = -1 + 4*(Phase-0.5);
        rightFactor = 1.0;
        break;
    }

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#FFFFFF');
    g.drawMoonPhase(x,y, Radius-1, leftFactor,rightFactor);
  };
})();
