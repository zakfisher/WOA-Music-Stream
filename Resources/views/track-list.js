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

   /* ELEMENTS */
   EH.setElements();
   var E = MS.Elements.TrackList;

   C.npLabel        = E.npLabel;
   C.npTitleLabel   = E.npTitleLabel;
   C.npArtistLabel  = E.npArtistLabel;
   C.playPauseIcon  = E.playPauseIcon;
   C.listContainer  = E.listContainer;
   me.window = EH.window();
   me.elements = [
      E.npBG,
      E.homeIcon,
      E.searchIcon,
      E.listContainerBG,
      C.npLabel,
      C.npTitleLabel,
      C.npArtistLabel,
      C.listContainer,
      C.playPauseIcon,
      E.playerControlsBG
   ];

   /* BUILD TRACK LIST */
   T.buildTrackList(null);

   /* ADD ELEMENTS TO WINDOW */
   EH.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   E.homeIcon.addEventListener('click', N.showHomeScreen);
   C.playPauseIcon.addEventListener('click', T.playPauseTrack);

   return me.window;
};