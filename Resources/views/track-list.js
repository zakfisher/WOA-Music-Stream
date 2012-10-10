/**
 * Track List View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - Label
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.TrackList = function() {

   var me = this;

   /* VIEW ELEMENTS */
   me.window = MS.Helpers.ViewComponents.window();
   me.label = MS.Helpers.ViewComponents.label('Track List Screen');


   /* EVENT LISTENERS */
   me.label.addEventListener('click', function() {
      MS.Helpers.Transitions.openWindow(MS.Views.Home());
      MS.Views.TrackList().close();
   });


   /* ADD VIEW ELEMENTS TO WINDOW */
   me.elements = [me.label];
   MS.Helpers.ViewComponents.addToWindow(me.elements, me.window);

   return me.window;
};