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
   var EH = MS.Helpers.Elements;
   var N  = MS.Helpers.Navigation;
   var T  = MS.Helpers.Tracks;
   var C  = MS.Cache;
   var E  = MS.Elements.TrackList;

   /* ELEMENTS */
   me.elements = [
      E.npBG,
      E.homeIcon,
      E.searchIcon,
      C.npLabel,
      C.npTitleLabel,
      C.npArtistLabel,
      C.listContainer,
      C.playPauseIcon,
      E.prevIcon,
      E.nextIcon,
      E.playerControlsBG
   ];

   /* BUILD TRACK LIST */
   T.buildTrackList(null);

   /* ADD ELEMENTS TO WINDOW */
   me.window = EH.window();
   EH.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   E.homeIcon.addEventListener('click', N.TrackListToHome);
   C.playPauseIcon.addEventListener('click', T.playPauseTrack);
   E.prevIcon.addEventListener('click', T.prevTrack);
   E.nextIcon.addEventListener('click', T.nextTrack);

   return me.window;
};