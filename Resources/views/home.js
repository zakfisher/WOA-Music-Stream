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
   var E  = MS.Elements.Home;

   /* ELEMENTS */
   me.elements = [
      E.msLogo,
      E.tracklistButton,
      E.aboutButton,
      E.woaLogo
   ];

   /* ADD ELEMENTS TO WINDOW */
   me.window = EH.window();
   EH.addElements(me.elements, me.window);

   /* EVENT LISTENERS */
   me.events = [
      [E.tracklistButton, 'click', N.HomeToTrackList],
      [E.aboutButton,     'click', N.HomeToAbout]
   ];
   EH.addEvents(me.events);

   return me.window;
};