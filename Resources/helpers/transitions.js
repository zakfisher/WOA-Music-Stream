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
   openWindowLeft : function(window) {
      setTimeout(function() { window.open(Android ? null : {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT}); }, 100);
   },
   openWindowRight : function(window) {
      var settings = Android ? null : {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT};
      setTimeout(function() { window.open(settings); }, 100);
   }
};