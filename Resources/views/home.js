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
   var EH = MS.Helpers.Elements;
   var N  = MS.Helpers.Navigation;

   /* ELEMENTS */
   EH.setElements();
   var E = MS.Elements.Home;

   me.window = EH.window();
   me.elements = [
      E.msLogo,
      E.tracklistButton,
      E.aboutButton,
      E.woaLogo
   ];

   /* ADD ELEMENTS TO WINDOW */
   EH.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   E.tracklistButton.addEventListener('click', N.showTrackListScreen);
   E.aboutButton.addEventListener('click', N.showAboutScreen);

   return me.window;
};