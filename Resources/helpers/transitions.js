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
      MS.Helpers.Elements.setElements();
      setTimeout(function() { window.open(Android ? null : {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT}); }, 100);
   },
   openWindowRight : function(window) {
      MS.Helpers.Elements.setElements();
      var settings = Android ? null : {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT};
      setTimeout(function() { window.open(settings); }, 100);
   }
};