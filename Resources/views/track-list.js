/**
 * Track List View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - Label
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.TrackList = function() {

   var me = this;
   var E = MS.Helpers.Elements;
   var N = MS.Helpers.Navigation;
   var T = MS.Helpers.Tracks;

   /* ELEMENTS */
   me.window         = E.window();
   me.listContainer  = E.scrollView('30%');
   me.trackListLabel = E.label('Track List', '10%', '10%', 'blue');
   me.homeLabel      = E.label('Home', '20%', '10%');

   // Fetch Track Data & Add List Items to View
   T.buildTrackList(me.listContainer, null);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel, me.listContainer];
   E.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', N.showHomeScreen);

   return me.window;
};