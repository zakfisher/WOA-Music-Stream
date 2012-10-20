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
      // Remove Current Track
      if (typeof MS.Cache.CurrentTrack != 'undefined') {
         MS.Helpers.Tracks.stopTrack();
         if (Ti.Platform.osname != 'iphone') { MS.Cache.CurrentTrack.release(); }
         delete MS.Cache.CurrentTrack;
      }
      if (typeof MS.Cache.CurrentTrackData != 'undefined') { delete MS.Cache.CurrentTrackData; }

      // Init Current Track & Stash Track Data
      MS.Cache.CurrentTrack = MS.Helpers.Tracks.makeTrack(data.url);
      MS.Cache.CurrentTrackData = data;
   },
   setTrackList : function(data) {
      // If TrackList exists, delete & re-init
      if (typeof MS.Cache.TrackList != 'undefined') { delete MS.Cache.TrackList; }
      MS.Cache.TrackList = data;
   }
};