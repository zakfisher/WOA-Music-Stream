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
   showHomeScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.Home());
   },
   showAboutScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.About());
   },
   showTrackListScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.TrackList());
   },
   showSingleTrackScreen : function() {
      MS.Helpers.Transitions.openWindow(MS.Views.SingleTrack());
   }
};