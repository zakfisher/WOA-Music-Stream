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
      setTimeout(function() {
         MS.Home.open(Android ? null : {transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
      }, 3000);
   },
   HomeToTrackList : function() {
      MS.Helpers.Cache.getListContainerTop();
      MS.Helpers.Transitions.openWindow(MS.Home, MS.TrackList, 'up');
   },
   HomeToAbout : function() {
      MS.Helpers.Transitions.openWindow(MS.Home, MS.About, 'up');
   },
   TrackListToHome : function() {
      MS.Helpers.Cache.setListContainerTop();
      MS.Helpers.Transitions.openWindow(MS.TrackList, MS.Home, 'down');
   },
   AboutToHome : function() {
      MS.Helpers.Transitions.openWindow(MS.About, MS.Home, 'down');
   }
};