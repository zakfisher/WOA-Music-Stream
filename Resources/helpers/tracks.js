/**
 * Tracks Helper Class
 * ------------------------------------------
 * Methods for building, caching, and
 * displaying tracks
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Tracks = {
   renderListItems : function(trackList) {

      var E  = MS.Helpers.Elements;
      var N  = MS.Helpers.Navigation;
      var T  = MS.Helpers.Tracks;
      var C  = MS.Cache;
      var CH = MS.Helpers.Cache;
      var TX = MS.Helpers.Text;

      // Create List Items (with embedded track data)
      var tracklistItems = [];
      for (var i in trackList) {
         var track = trackList[i];

         // Select Track if Currently Playing
         var inverse = !(typeof C.CurrentTrackData != 'undefined' && track.id == C.CurrentTrackData.id);
         var labelColor = inverse ? 'black' : '#eeeeee';

         // Create List Item
         var labels = [
            E.label(TX.ellipsis(track.title, 33), '10%', '5%', labelColor, 13, true),
            E.label(TX.ellipsis(track.artist, 33), '35%', '5%', labelColor, 13),
            E.label(track.duration, '60%', '5%', labelColor, 13)
         ];
         var button = E.button((i * 60), labels, inverse, false);
         for (var key in track) { button[key] = track[key]; }

         // Add Event Listeners
         if (inverse) {
            button.index = i;
            for (var j = 0; j < labels.length; j++) { labels[j].index = button.index; }
            button.addEventListener('click', function(e) {
               var target = (this.label != null) ? this.getParent() : this;

               var cacheAndPlay = function() {

                  // Deselect All Buttons (when selecting new track)
                  var listItems = C.listContainer.getChildren();
                  for (var k = 0; k < listItems.length; k++) {
                     var b = listItems[k];
                     b.backgroundImage = '/images/button-down.png';
                     var ls = b.getChildren();
                     for (var l = 0; l < ls.length; l++) { ls[l].color = 'black'; }
                  }

                  // Select Current Button
                  target.backgroundImage = '/images/button-up.png';
                  var lbls = target.getChildren();
                  for (var m = 0; m < lbls.length; m++) { lbls[m].color = '#eeeeee'; }

                  // Cache and Play Track
                  CH.setCurrentTrack(C.TrackList[target.index]);
                  T.selectTrack();
                  C.playPauseIcon.image = '/images/pause-icon.png';
               };

               // A Track is Currently Selected
               if (typeof C.CurrentTrackData != 'undefined' && target.id != C.CurrentTrackData.id) { cacheAndPlay(); }

               // No Tracks Selected or Playing
               else if (typeof C.CurrentTrackData == 'undefined') { cacheAndPlay(); }
            });
         }
         tracklistItems.push(button);
      }

      // Add Tracks to Track List Window
      C.listContainer.contentHeight = tracklistItems.length * 60;
      E.addElements(tracklistItems, C.listContainer);
   },
   buildTrackList : function(refresh) {

      /* ***********************************************************
       * If Track List is Cached, Repopulate List with Cached Data *
       * Otherwise, Refresh and Repopulate List with New Data      *
       *                                                           *
       * Note: User Can Refresh the Track List Manually.           *
       * ********************************************************* */

      var E  = MS.Helpers.Elements;
      var C  = MS.Cache;
      var CH = MS.Helpers.Cache;
      var T  = MS.Helpers.Tracks;

      // Fetch New Data if Cache Doesn't Exist
      if (typeof C.TrackList == 'undefined') { refresh = true; }

      // Issue HTTP Request, and Fetch New Data
      if (refresh) {

         // Add "Loading" to Window
         var loading = E.loading('Loading');
         C.listContainer.add(loading);
         loading.show();

         // Fetch Track Data & Cache
         var compileTrackList = function(tracks) {
            CH.setTrackList(tracks);
            C.listContainer.remove(loading);
            T.renderListItems(tracks);
         };
         MS.Helpers.Network.createRequest('http://www.worldofanarchy.com/dev/music/all_tracks', compileTrackList);
      }

      // Use Cached Data
      else { T.renderListItems(C.TrackList); }
   },
   makeTrack : function(url) {
      return Titanium.Media.createAudioPlayer({url:url});
   },
   autoplayTrack : function() {

      var T = MS.Helpers.Tracks;

      if (Android) { setTimeout(T.startTrack, 100); }
      else { T.startTrack(); }
   },
   startTrack : function() {
      MS.Cache.CurrentTrack.start();
   },
   stopTrack : function() {
      MS.Cache.CurrentTrack.stop();
   },
   pauseTrack : function() {
      MS.Cache.CurrentTrack.pause();
   },
   playPauseTrack : function() {

      var C = MS.Cache;
      var T = MS.Helpers.Tracks;

      // A Track is Currently Selected
      if (typeof C.CurrentTrackData != 'undefined') {

         // Track is Playing
         if (C.CurrentTrack.playing) {
            C.playPauseIcon.image = '/images/play-icon.png';
            T.pauseTrack();
         }

         // Track is Paused
         else {
            C.playPauseIcon.image = '/images/pause-icon.png';
            T.startTrack();
         }
      }

      // No Tracks Selected or Playing
      else {

         // Default to First Track in List
         var tracks = C.listContainer.getChildren();
         tracks[0].fireEvent('click');
      }
   },
   selectTrack : function() {

      var T  = MS.Helpers.Tracks;
      var C  = MS.Cache;
      var TX = MS.Helpers.Text;

      // Play Current Track & Update Now Playing Labels
      T.autoplayTrack();
      C.npTitleLabel.text = TX.ellipsis(C.CurrentTrackData.title, 23);
      C.npArtistLabel.text = TX.ellipsis(C.CurrentTrackData.artist, 40);
   }
};