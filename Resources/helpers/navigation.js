/**
 * Navigation Helper Class
 * ------------------------------------------
 * Global navigation methods
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Navigation = {
   startApp : function() {
      var startApp = function() { MS.Helpers.Transitions.openWindow(MS.Views.Home()); };
      setTimeout(startApp, 3000);
   },
   showHomeScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.Home());
   },
   showTrackListScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.TrackList());
   },
   showSingleTrackScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.SingleTrack());
   }
};