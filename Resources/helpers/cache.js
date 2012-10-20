/**
 * Cache Helper Class
 * ------------------------------------------
 * Caching methods
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Cache = {
   setCurrentTrack : function(data) {

      var C = MS.Cache;
      var T = MS.Helpers.Tracks;

      // Remove Current Track
      if (typeof C.CurrentTrack != 'undefined') {
         T.stopTrack();
         if (Android) { C.CurrentTrack.release(); }
         delete C.CurrentTrack;
      }
      if (typeof C.CurrentTrackData != 'undefined') { delete C.CurrentTrackData; }

      // Init Current Track & Stash Track Data
      C.CurrentTrack = T.makeTrack(data.url);
      C.CurrentTrackData = data;
   },
   setTrackList : function(data) {

      var C = MS.Cache;

      // If TrackList exists, delete & re-init
      if (typeof C.TrackList != 'undefined') { delete C.TrackList; }
      C.TrackList = data;
   }
};