/**
 * Home View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - Label
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.Home = function() {

   var me = this;
   me.window = MS.Helpers.Elements.window();

   /* ELEMENTS */
   var E = MS.Helpers.Elements;
   me.msLogo = E.image('music-stream-logo.png', '7%');
   me.tracklistButton = E.Home.button('Give Me Music!', '40%');
   me.aboutButton = E.Home.button('About', '55%');
   me.woaLogo = E.image('logo.png', '65%');

   /* EVENT LISTENERS */
   me.tracklistButton.addEventListener('click', MS.Helpers.Navigation.showTrackListScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.msLogo, me.tracklistButton, me.aboutButton, me.woaLogo];
   MS.Helpers.Elements.addElements(me.elements, me.window);

   return me.window;
};