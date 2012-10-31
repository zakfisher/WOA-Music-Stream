/**
 * iPhone Elements Class
 * ------------------------------------------
 * Define View Elements for iOS
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Elements = new function() {

   var me = this;
   var EH = MS.Helpers.Elements;
   var listContainerHeight = MS.Device.H - 104 - 45;
   var tracklistControlBGTop = MS.Device.H - 45;
   var tracklistControlTop = MS.Device.H - 33;

   me.Home = {
      msLogo          : EH.image('music-stream-logo.png', '7%'),
      tracklistButton : EH.button('40%', [EH.label('Give Me Music!', '25%', '10%', '#eeeeee', 20, true)], false, true),
      aboutButton     : EH.button('55%', [EH.label('About', '25%', '10%', 'black', 20, true)], true, true),
      woaLogo         : EH.image('logo.png', '65%')
   };

   me.TrackList = {
      npBG             : EH.view('now-playing-bg.png', 320, 104, 0, 0, 2),
      homeIcon         : EH.icon('home-icon.png', {top:77,left:'10%'}),
      searchIcon       : EH.icon('search-icon.png', {top:77,right:'11%'}),
      npLabel          : EH.label('Now Playing', 8, 85, 'black', 12),
      npTitleLabel     : EH.label('[select a track]', 22, 85, 'black', 14, true),
      npArtistLabel    : EH.label('', 40, 85, 'black', 12),
      playPauseIcon    : EH.icon('play-icon.png', {top:tracklistControlTop}),
      prevIcon         : EH.icon('prev-icon.png', {top:tracklistControlTop,left:'20%'}),
      nextIcon         : EH.icon('next-icon.png', {top:tracklistControlTop,right:'20%'}),
      listContainer    : EH.scrollView(103, listContainerHeight),
      playerControlsBG : EH.view('player-controls-bg.png', 320, 45, tracklistControlBGTop),
      searchField      : EH.textField('', 70)
   };

};