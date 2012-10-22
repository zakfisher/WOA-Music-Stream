/**
 * Application Entry Point
 * ------------------------------------------
 * Load App Config & Open Home View
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

// Config
Ti.include("system/config.js");

// Instantiate Home View
setTimeout(MS.Helpers.Navigation.showHomeScreenFirstTime, 3000);