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
      MS.Cache.CurrentTrack = data;
   },
   setTrackList : function(data) {
      MS.Cache.TrackList = data;
   }
};