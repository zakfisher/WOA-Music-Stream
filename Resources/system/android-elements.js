/**
 * Android Elements Class
 * ------------------------------------------
 * Define Elements for Android OS
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

AndroidElements = function() {

   var me = this;
   var EH = MS.Helpers.Elements;
   var C  = MS.Cache;
   var TX = MS.Helpers.Text;
   var trackPlaying = (typeof C.CurrentTrackData != 'undefined');

   me.Home = {
      msLogo          : EH.image('music-stream-logo.png', '7%'),
      tracklistButton : EH.button('40%', [EH.label('Give Me Music!', '25%', '10%', '#eeeeee', 20, true)], false, true),
      aboutButton     : EH.button('55%', [EH.label('About', '25%', '10%', 'black', 20, true)], true, true),
      woaLogo         : EH.image('logo.png', '65%')
   };

   me.TrackList = {
      npBG             : EH.view('now-playing-bg.png', 320, 104, 0, 0, 2),
      homeIcon         : EH.icon('home-icon.png', {top:77,left:'10%'}),
      searchIcon       : EH.icon('search-icon.png', {top:77,right:'10%'}),
      listContainerBG  : EH.view('list-container-bg.png', 289, 568, 0),
      npLabel          : EH.label('Now Playing', 8, 85, 'black', 12),
      npTitleLabel     : EH.label(trackPlaying ? TX.ellipsis(C.CurrentTrackData.title, 23) : '', 22, 85, 'black', 14, true),
      npArtistLabel    : EH.label(trackPlaying ? TX.ellipsis(C.CurrentTrackData.artist, 40) : '', 40, 85, 'black', 12),
      playPauseIcon    : EH.icon(typeof C.CurrentTrack != 'undefined' ? (C.CurrentTrack.playing ? 'pause-icon.png' : 'play-icon.png') : 'play-icon.png', {top:447}),
      listContainer    : EH.scrollView(103, Titanium.Platform.displayCaps.platformHeight - 104 - 45),
      playerControlsBG : EH.view('player-controls-bg.png', 320, 45, 435)
   };

   return me;
};