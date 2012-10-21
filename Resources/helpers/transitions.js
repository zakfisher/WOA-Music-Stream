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
   openWindow : function(window) {
      var settings = Android ? null : {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT};
      setTimeout(function() { window.open(settings); }, 100);
   }
};