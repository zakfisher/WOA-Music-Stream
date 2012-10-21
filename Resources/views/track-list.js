/**
 * Track List View
 * ------------------------------------------
 * Features:
 * - Browse Tracks
 * - Select/Play/Pause Current Track
 * - Search Tracks
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

   // Now Playing
   me.npBG            = E.view('now-playing-bg.png', 320, 104, 0, 0, 2);
   C.npLabel          = E.label('Now Playing', 8, 85, 'black', 12);
   C.npTitleLabel     = E.label(trackPlaying ? TX.ellipsis(C.CurrentTrackData.title, 23) : '', 22, 85, 'black', 14, true);
   C.npArtistLabel    = E.label(trackPlaying ? TX.ellipsis(C.CurrentTrackData.artist, 40) : '', 40, 85, 'black', 12);
   me.homeIcon        = E.icon('home-icon.png', {top:77,left:'10%'});
   me.searchIcon      = E.icon('search-icon.png', {top:77,right:'10%'});

   // Player Controls
   me.playerControlsBG = E.view('player-controls-bg.png', 320, 45, 435);
   C.prevTrackLabel    = E.label('Prev', '20%', '10%');
   C.playPauseIcon     = E.icon(typeof C.CurrentTrack != 'undefined' ? (C.CurrentTrack.playing ? 'pause-icon.png' : 'play-icon.png') : 'play-icon.png', {top:447});
   C.nextTrackLabel    = E.label('Next', '20%', '78%');

   // List Container
   me.listContainerBG = E.view('list-container-bg.png', 289, 568, 0);
   C.listContainer    = E.scrollView(103, Titanium.Platform.displayCaps.platformHeight - me.npBG.height - me.playerControlsBG.height);

   // Fetch Track Data & Add List Items to View
   T.buildTrackList(null);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [
      me.npBG,
      C.npLabel,
      C.npTitleLabel,
      C.npArtistLabel,
      me.homeIcon,
      me.searchIcon,
      me.listContainerBG,
      C.listContainer,
      me.playerControlsBG,
      C.playPauseIcon
   ];
   E.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.homeIcon.addEventListener('click', N.showHomeScreen);
   C.playPauseIcon.addEventListener('click', T.playPauseTrack);

   return me.window;
};