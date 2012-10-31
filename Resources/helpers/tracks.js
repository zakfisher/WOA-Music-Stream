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
      var T  = MS.Helpers.Tracks;
      var C  = MS.Cache;
      var CH = MS.Helpers.Cache;
      var TX = MS.Helpers.Text;

      // Populate List Container with Tracks
      if (trackList !== null) {

         // Create List Items (with embedded track data)
         var tracklistItems = [];
         for (var i in trackList) {
            var track = trackList[i];

            // Select Track if Currently Playing
            var notPlaying = !(typeof C.CurrentTrackData != 'undefined' && track.id == C.CurrentTrackData.id);
            var labelColor = notPlaying ? 'black' : 'white';
            var bgImage = notPlaying ? 'track-unselected.png' : 'track-selected.png';

            // Create List Item
            var item = E.view(bgImage, '100%', 60, (i * 60), 0);
            item.index = i;
            item.active = false;
            var labels = [
               E.label(TX.ellipsis(track.title, 40), '10%', '5%', labelColor, 13, true),
               E.label(TX.ellipsis(track.artist, 33), '35%', '5%', labelColor, 13),
               E.label(track.duration, '60%', '5%', labelColor, 13)
            ];
            E.addElements(labels, item);

            // Add Event Listener
            item.addEventListener('click', function(e) {
               var target = (this.label != null) ? this.getParent() : this;

               if (!target.active) {
                  var cacheAndPlay = function() {

                     // Deselect All Buttons (when selecting new track)
                     var listItems = C.listContainer.getChildren();
                     for (var k = 0; k < listItems.length; k++) {
                        var b = listItems[k];
                        b.backgroundImage = MS.Images + 'track-unselected.png';
                        b.active = false;
                        var ls = b.getChildren();
                        for (var l = 0; l < ls.length; l++) { ls[l].color = 'black'; }
                     }

                     // Select Current Button
                     target.backgroundImage = MS.Images + 'track-selected.png';
                     target.active = true;
                     var lbls = target.getChildren();
                     for (var m = 0; m < lbls.length; m++) { lbls[m].color = 'white'; }

                     // Cache and Play Track
                     CH.setCurrentTrack(C.TrackList[target.index]);
                     T.selectTrack();
                     C.playPauseIcon.image = MS.Images + 'pause-icon.png';
                  };

                  // A Track is Currently Selected
                  if (typeof C.CurrentTrackData != 'undefined' && target.id != C.CurrentTrackData.id) { cacheAndPlay(); }

                  // No Tracks Selected or Playing
                  else if (typeof C.CurrentTrackData == 'undefined') { cacheAndPlay(); }
               }
            });
            tracklistItems.push(item);
         }

         // Add Tracks to Track List Window
         C.listContainer.contentHeight = tracklistItems.length * 60;
         E.addElements(tracklistItems, C.listContainer);
      }

      // No Tracks to Show (empty List Container & reset)
      else {
         var listItems = C.listContainer.getChildren();
         E.removeElements(listItems, C.listContainer);
      }
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
      var track = Titanium.Media.createAudioPlayer({url:url});
      Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
      return track;
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
            C.playPauseIcon.image = MS.Images + 'play-icon.png';
            T.pauseTrack();
         }

         // Track is Paused
         else {
            C.playPauseIcon.image = MS.Images + 'pause-icon.png';
            T.startTrack();
         }
      }

      // No Tracks Selected or Playing
      else {

         // Default to First Track in List
         var tracks = C.listContainer.getChildren();
         tracks[0].fireEvent('click');
         C.listContainer.scrollTo(0,0);
      }
   },
   nextTrack : function() {

      var C = MS.Cache;

      var tracks = C.listContainer.getChildren();

      // A Track is Currently Selected
      if (typeof C.CurrentTrackData != 'undefined') {

         // Not Last Item
         if (!tracks[tracks.length - 1].active) {
            for (var i = 0; i < tracks.length; i++) {
               if (tracks[i].active) {
                  tracks[i + 1].fireEvent('click');
                  C.listContainer.scrollTo(0,((i + 1) * 60));
               }
            }
         }

         // Play First Item
         else {
            tracks[0].fireEvent('click');
            C.listContainer.scrollTo(0,0);
         }
      }

      // No Tracks Selected or Playing (default to first track)
      else {
         tracks[0].fireEvent('click');
         C.listContainer.scrollTo(0,0);
      }
   },
   prevTrack : function() {

      var C = MS.Cache;

      var tracks = C.listContainer.getChildren();

      // A Track is Currently Selected
      if (typeof C.CurrentTrackData != 'undefined') {

         // Not First Item
         if (!tracks[0].active) {
            for (var i = 0; i < tracks.length; i++) {
               if (tracks[i].active) {
                  tracks[i - 1].fireEvent('click');
                  C.listContainer.scrollTo(0,((i - 1) * 60));
               }
            }
         }

         // Play Last Item
         else {
            tracks[tracks.length - 1].fireEvent('click');
            C.listContainer.scrollToBottom();
         }
      }

      // No Tracks Selected or Playing (default to first track)
      else {
         tracks[0].fireEvent('click');
         C.listContainer.scrollTo(0,0);
      }

   },
   selectTrack : function() {

      var T  = MS.Helpers.Tracks;
      var C  = MS.Cache;
      var TX = MS.Helpers.Text;
      var E  = MS.Helpers.Elements;

      // Play Current Track & Update Now Playing Labels
      T.autoplayTrack();
      C.npTitleLabel.text = TX.ellipsis(C.CurrentTrackData.title, 23);
      C.npArtistLabel.text = TX.ellipsis(C.CurrentTrackData.artist, 40);

      // Add Loading while Waiting for Track to Start
      var loading = E.loading('', {right:5,height:20,top:5});
      MS.TrackList.add(loading);
      loading.show();
      var int = setInterval(function() {
         if (!C.CurrentTrack.waiting) {
            MS.TrackList.remove(loading);
            clearInterval(int);
         }
      }, 100);
   },
   toggleSearchField : function() {

      var C = MS.Cache;
      var V = MS.TrackList;
      var T = MS.Helpers.Tracks;

      // Show Search Field
      if (!C.searchIcon.active) {
         V.add(C.searchField);
         C.searchIcon.active = true;
         C.searchField.focus();
         T.renderListItems(null);
      }

      // Hide Search Field & Reset Track List
      else {
         V.remove(C.searchField);
         C.searchIcon.active = false;
         T.buildTrackList(null);
      }
   },
   executeSearch : function() {

      var C = MS.Cache;
      var T = MS.Helpers.Tracks;

      var searchVal = C.searchField.value.toLowerCase();
      var results = [];

      for (var i = 0; i < C.TrackList.length; i++) {
         var track = C.TrackList[i];
         var artist = track.artist.toLowerCase();
         var title = track.title.toLowerCase();

         if (artist.indexOf(searchVal) != -1 || title.indexOf(searchVal) != -1) { results.push(track); }
      }

      T.renderListItems(null);
      T.renderListItems(results);
   }
};