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
   var E = MS.Helpers.Elements;
   var N = MS.Helpers.Navigation;
   var T = MS.Helpers.Tracks;
   var C = MS.Cache;

   /* ELEMENTS */
   me.window           = E.window();
   me.homeLabel        = E.label('Home', '20%', '10%');
   me.trackListLabel   = E.label('Track List', '30%', '10%');
   me.singleTrackLabel = E.label('Single Track', '10%', '10%', 'blue');
   me.artistLabel      = E.label(C.CurrentTrackData.artist, '70%', '10%');
   me.mixLabel         = E.label(C.CurrentTrackData.title, '80%', '10%');
   me.playTrackLabel   = E.label('Play', '50%', '10%');
   me.pauseTrackLabel  = E.label('Pause', '60%', '10%');

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel, me.singleTrackLabel, me.artistLabel, me.mixLabel, me.playTrackLabel, me.pauseTrackLabel];
   E.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', N.showHomeScreen);
   me.trackListLabel.addEventListener('click', N.showTrackListScreen);
   me.playTrackLabel.addEventListener('click', T.startTrack);
   me.pauseTrackLabel.addEventListener('click', T.pauseTrack);

   /* AUTOPLAY TRACK */
   T.autoplayTrack();

   return me.window;
};