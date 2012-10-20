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
   me.window = MS.Helpers.Elements.window();
   me.window.test = 'abc';

   /* ELEMENTS */
   me.trackListLabel = MS.Helpers.Elements.label('Track List', '10%', '10%', 'blue');
   me.homeLabel = MS.Helpers.Elements.label('Home', '20%', '10%');

   // Fetch Track Data & Add List Items to View
   MS.Helpers.Tracks.buildTrackList(me.window);

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', MS.Helpers.Navigation.showHomeScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel];
   MS.Helpers.Elements.addToWindow(me.elements, me.window);

   return me.window;
};