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
      var t = direction == 'left' ? Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT : Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT;
      setTimeout(function() {
         newWindow.open(Android ? null : {transition:t});
         oldWindow.close();
      }, 200);
   }
};