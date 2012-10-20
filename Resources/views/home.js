/**
 * Home View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - MS Logo
 * - Tracklist Nav Button
 * - About Nav Button
 * - WOA Logo
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.Home = function() {

   var me = this;
   var E = MS.Helpers.Elements;
   var N = MS.Helpers.Navigation;

   /* ELEMENTS */
   me.window = E.window();
   me.msLogo = E.image('music-stream-logo.png', '7%');
   me.tracklistButton = E.Home.button('Give Me Music!', '40%');
   me.aboutButton = E.Home.button('About', '55%', true);
   me.woaLogo = E.image('logo.png', '65%');

   /* EVENT LISTENERS */
   me.tracklistButton.addEventListener('click', N.showTrackListScreen);
   me.aboutButton.addEventListener('click', N.showAboutScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.msLogo, me.tracklistButton, me.aboutButton, me.woaLogo];
   MS.Helpers.Elements.addElements(me.elements, me.window);

   return me.window;
};