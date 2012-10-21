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
   var trackPlaying = (typeof C.CurrentTrackData != 'undefined');

   /* ELEMENTS */
   me.window          = E.window();
   me.homeLabel       = E.label('Home', '2%', '10%', 'black', 12, true);
   me.prevTrackLabel  = E.label('Prev', '20%', '10%');
   me.playPauseLabel  = E.label((typeof C.CurrentTrack != 'undefined') ? 'Pause' : 'Play', '20%', '43%');
   me.nextTrackLabel  = E.label('Next', '20%', '78%');
   C.listContainer    = E.scrollView('25%', '75%');

   // Elements for Currently Playing Track
   C.npLabel = E.label(trackPlaying ? 'Now Playing' : '', '6%', '10%', 'black', 12);
   C.npTitleLabel = E.label(trackPlaying ? TX.ellipsis(C.CurrentTrackData.title, 35) : '', '9%', '10%', 'black', 14, true);
   C.npArtistLabel = E.label(trackPlaying ? TX.ellipsis(C.CurrentTrackData.artist, 40) : '', '13%', '10%', 'black', 12);

   // Fetch Track Data & Add List Items to View
   T.buildTrackList(null);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.prevTrackLabel, me.playPauseLabel, me.nextTrackLabel, C.listContainer, C.npLabel, C.npTitleLabel, C.npArtistLabel];
   E.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', N.showHomeScreen);

   return me.window;
};