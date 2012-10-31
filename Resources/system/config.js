/**
 * App Configuration
 * ------------------------------------------
 * Instantiate and define MS Global Object
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

// Init Music Stream Global Obj
MS = {
   Cache    : {},
   Helpers  : {},
   Elements : {},
   Views    : {},
   Device   : {
      H : Ti.Platform.displayCaps.platformHeight,
      W : Ti.Platform.displayCaps.platformWidth
   }
};

// Set OS Flag
Android = (Ti.Platform.osname != 'iphone');
if (Android) { MS.Device.Density = Ti.Platform.displayCaps.logicalDensityFactor; }

// Set Audio Session Mode
Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;

// Include Helpers
Ti.include("helpers.js");

// Define MS.Elements & MS.Images (OS Specific)
MS.Images = '/images/' + Ti.Platform.osname + '/';
Ti.include("/elements/" + (Android ? "android" : "iphone") + ".js");

// Create Cached Elements
MS.Helpers.Cache.cacheElements();

// Define Views
Ti.include("views.js");
MS.Home = MS.Views.Home();
MS.TrackList = MS.Views.TrackList();
MS.About = MS.Views.About();


console.log(MS.Device);