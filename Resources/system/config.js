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
Ti.include("../helpers/all.js");
Ti.include("../views/all.js");

// Set View Elements
Android = (Ti.Platform.osname != 'iphone');
Ti.include("android-elements.js");
Ti.include("iphone-elements.js");
MS.Helpers.Elements.setElements();