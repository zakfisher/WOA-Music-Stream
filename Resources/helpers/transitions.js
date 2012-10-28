/**
 * Transitions Helper Class
 * ------------------------------------------
 * Various view transitions
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Transitions = {
   openWindow : function(oldWindow, newWindow, direction) {
      var t = null;
      switch (direction) {
         case 'down':
            t = Titanium.UI.iPhone.AnimationStyle.CURL_DOWN;
            break;
         case 'up':
            t = Titanium.UI.iPhone.AnimationStyle.CURL_UP;
            break;
         case 'left':
            t = Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
            break;
         case 'right':
            t = Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT;
            break;
         default:
      }

      setTimeout(function() {
         newWindow.open(Android ? null : {transition:t});
         oldWindow.close();
      }, 100);
   }
};