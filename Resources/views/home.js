/**
 * Home View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - Label
 *
 * Event Listeners:
 * -
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.Home = function() {

   var me = this;

   /* VIEW ELEMENTS */
   me.window = MS.Helpers.ViewComponents.window();
   me.label = MS.Helpers.ViewComponents.label('Home Screen', '10%', 'auto');
   me.test = MS.Helpers.ViewComponents.label('Halalala', '20%', 'auto');


   /* EVENT LISTENERS */
   me.label.addEventListener('click', function() {
      MS.Helpers.Transitions.openWindow(MS.Views.TrackList());
      MS.Views.Home().close();
   });


   /* ADD VIEW ELEMENTS TO WINDOW */
   me.elements = [me.label, me.test];
   MS.Helpers.ViewComponents.addToWindow(me.elements, me.window);

   return me.window;
};