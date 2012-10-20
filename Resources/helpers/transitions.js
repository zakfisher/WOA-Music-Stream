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
      var settings = (Ti.Platform.osname == 'iphone') ? {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT} : {animated:true};
      window.open(settings);
   }
};