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
   me.window = MS.Helpers.Elements.window();
   me.homeLabel = MS.Helpers.Elements.label('Home', '20%', '10%');
   me.trackListLabel = MS.Helpers.Elements.label('Track List', '30%', '10%');
   me.singleTrackLabel = MS.Helpers.Elements.label('Single Track', '10%', '10%', 'blue');
   me.artistLabel = MS.Helpers.Elements.label(MS.Cache.CurrentTrackData.artist, '70%', '10%');
   me.mixLabel = MS.Helpers.Elements.label(MS.Cache.CurrentTrackData.title, '80%', '10%');
   me.playTrackLabel = MS.Helpers.Elements.label('Play', '50%', '10%');
   me.pauseTrackLabel = MS.Helpers.Elements.label('Pause', '60%', '10%');

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', MS.Helpers.Navigation.showHomeScreen);
   me.trackListLabel.addEventListener('click', MS.Helpers.Navigation.showTrackListScreen);
   me.playTrackLabel.addEventListener('click', MS.Helpers.Tracks.startTrack);
   me.pauseTrackLabel.addEventListener('click', MS.Helpers.Tracks.pauseTrack);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel, me.singleTrackLabel, me.artistLabel, me.mixLabel, me.playTrackLabel, me.pauseTrackLabel];
   MS.Helpers.Elements.addElements(me.elements, me.window);

   /* AUTOPLAY TRACK */
   MS.Helpers.Tracks.startTrack();

   return me.window;
};