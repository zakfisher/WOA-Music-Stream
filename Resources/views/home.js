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
   me.window = MS.Helpers.ViewComponents.window();

   /* ELEMENTS */
   me.homeLabel = MS.Helpers.ViewComponents.label('Home', '10%', '10%', 'blue');
   me.trackListLabel = MS.Helpers.ViewComponents.label('Track List', '20%', '10%');

   /* EVENT LISTENERS */
   me.trackListLabel.addEventListener('click', MS.Helpers.Navigation.showTrackListScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.trackListLabel];
   MS.Helpers.ViewComponents.addToWindow(me.elements, me.window);

   return me.window;
};