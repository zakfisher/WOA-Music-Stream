/**
 * Home View
 * ------------------------------------------
 * Features:
 * - Navigate to Track List View
 * - Navigate to About View
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
   me.window          = E.window();
   me.msLogo          = E.image('music-stream-logo.png', '7%');
   me.tracklistButton = E.button('40%', [E.label('Give Me Music!', '25%', '10%', '#eeeeee', 20, true)], false, true);
   me.aboutButton     = E.button('55%', [E.label('About', '25%', '10%', 'black', 20, true)], true, true);
   me.woaLogo         = E.image('logo.png', '65%');

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.msLogo, me.tracklistButton, me.aboutButton, me.woaLogo];
   E.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.tracklistButton.addEventListener('click', N.showTrackListScreen);
   me.aboutButton.addEventListener('click', N.showAboutScreen);

   return me.window;
};