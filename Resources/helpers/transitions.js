/**
 * Transitions Helper Class
 * ------------------------------------------
 *
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Transitions = {
   openWindow : function(view) {
      var settings = (Ti.Platform.osname == 'iphone') ? {transition: Titanium.UI.iPhone && Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT} : {};
      view.open(settings);
   }
};