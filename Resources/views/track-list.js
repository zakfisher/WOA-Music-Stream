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
   me.window = MS.Helpers.ViewComponents.window();

   /* ELEMENTS */
   me.trackListLabel = MS.Helpers.ViewComponents.label('Track List', '10%', '10%', 'blue');
   me.homeLabel = MS.Helpers.ViewComponents.label('Home', '20%', '10%');

   // Fetch Track Data & Add List Items to View
   me.tracks = MS.Helpers.Tracks.buildTrackList();

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', MS.Helpers.Navigation.showHomeScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel];
   for (var i = 0; i < me.tracks.length; i++) { me.elements.push(me.tracks[i]); }
   MS.Helpers.ViewComponents.addToWindow(me.elements, me.window);

   return me.window;
};