/**
 * Single Track View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - Label
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.SingleTrack = function() {

   var me = this;

   /* ELEMENTS */
   me.window = MS.Helpers.ViewComponents.window();
   me.homeLabel = MS.Helpers.ViewComponents.label('Home', '20%', '10%');
   me.trackListLabel = MS.Helpers.ViewComponents.label('Track List', '30%', '10%');
   me.singleTrackLabel = MS.Helpers.ViewComponents.label('Single Track', '10%', '10%', 'blue');
   me.artistLabel = MS.Helpers.ViewComponents.label(MS.Cache.CurrentTrack.artist, '70%', '10%');
   me.mixLabel = MS.Helpers.ViewComponents.label(MS.Cache.CurrentTrack.title, '80%', '10%');

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', MS.Helpers.Navigation.showHomeScreen);
   me.trackListLabel.addEventListener('click', MS.Helpers.Navigation.showTrackListScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel, me.singleTrackLabel, me.artistLabel, me.mixLabel];
   MS.Helpers.ViewComponents.addToWindow(me.elements, me.window);

   return me.window;
};