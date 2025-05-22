/* Simple clock that appears in the widget bar. We update once per minute. date has been added*/
WIDGETS["wdclk"]={area:"tl",width:104/* g.stringWidth("00:00") */,draw:function() {
  if (!this.width) return; // if not visible, return (never triggered)
g.reset().setFontCustom(atob("AAAAAAAAAAIAAAQCAQAAAd0BgMBdwAAAAAAAdwAB0RiMRcAAAERiMRdwAcAQCAQdwAcERiMRBwAd0RiMRBwAAEAgEAdwAd0RiMRdwAcERiMRdwAFAAd0QiEQdwAdwRCIRBwAd0BgMBAAABwRCIRdwAd0RiMRAAAd0QiEQAAAAAAAAAA="), 32, atob("BgAAAAAAAAAAAAAAAAYCAAYGBgYGBgYGBgYCAAAAAAAABgYGBgYG"), 512+9).setFontAlign(0,0);
  var time = require("locale").time(new Date(),1);
  const now = Date();
  month = now.getMonth() + 1;
  day = now.getDate();
  g.clearRect(this.x, this.y, this.x+this.width-1, this.y+23).drawString(time+ " "+day+'.'+month, this.x+this.width/2, this.y+12); // 5 * 6*2 = 60
  // queue draw in one minute
  if (this.drawTimeout) clearTimeout(this.drawTimeout);
  this.drawTimeout = setTimeout(()=>{
    this.drawTimeout = undefined;
    this.draw();
  }, 60000 - (Date.now() % 60000));
}};