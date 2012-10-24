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
   Views    : {}
};

// Include Helpers & Views
Ti.include("helpers.js");
Ti.include("views.js");

// Set OS Flag
Android = (Ti.Platform.osname != 'iphone');

// Define MS.Elements (OS Specific)
MS.Helpers.Elements.setElements();

// Set BG Media Session (for playback outside of app)
Ti.Media.defaultaudioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;