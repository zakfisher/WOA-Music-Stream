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
   var E  = MS.Helpers.Elements;
   var N  = MS.Helpers.Navigation;
   var T  = MS.Helpers.Tracks;
   var C  = MS.Cache;
   var TX = MS.Helpers.Text;

   /* ELEMENTS */
   me.window          = E.window();
   me.listContainer   = E.scrollView('25%', '75%');
   me.homeLabel       = E.label('Home', '2%', '10%', 'black', 12, true);
   me.nowPlayingLabel = E.label((typeof C.CurrentTrackData != 'undefined') ? TX.ellipsis(C.CurrentTrackData.title, 40) : '', '8%', '10%', 'black', 12, true);
   me.prevTrackLabel  = E.label('Prev', '20%', '10%');
   me.playPauseLabel  = E.label((typeof C.CurrentTrack != 'undefined') ? 'Pause' : 'Play', '20%', '43%');
   me.nextTrackLabel  = E.label('Next', '20%', '78%');

   // Fetch Track Data & Add List Items to View
   T.buildTrackList(me.listContainer, null);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel,me.listContainer, me.nowPlayingLabel, me.prevTrackLabel, me.playPauseLabel, me.nextTrackLabel];
   E.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', N.showHomeScreen);

   return me.window;
};