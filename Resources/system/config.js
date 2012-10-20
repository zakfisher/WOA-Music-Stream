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
   Helpers : {},
   Views   : {},
   Cache   : {}
};

// Set OS Flag
Android = (Ti.Platform.osname != 'iphone');

alert(Android);

// Include Helpers, View
Ti.include("../helpers/all.js");
Ti.include("../views/all.js");