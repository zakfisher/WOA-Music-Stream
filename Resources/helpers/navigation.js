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
   enterApp : function() {
      setTimeout(function() { MS.Helpers.Transitions.openWindowRight(MS.Views.Home()); }, 3000);
   },
   showHomeScreen : function() {
      MS.Helpers.Transitions.openWindowLeft(MS.Views.Home());
   },
   showAboutScreen : function() {
      MS.Helpers.Transitions.openWindowRight(MS.Views.About());
   },
   showTrackListScreen : function() {
      MS.Helpers.Transitions.openWindowRight(MS.Views.TrackList());
   },
   showSingleTrackScreen : function() {
      MS.Helpers.Transitions.openWindowRight(MS.Views.SingleTrack());
   }
};