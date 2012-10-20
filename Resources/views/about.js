/**
 * About View
 * ------------------------------------------
 * View Elements:
 * - Window
 * - Label
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.About = function() {

   var me = this;
   me.window = MS.Helpers.Elements.window();

   /* ELEMENTS */
   me.aboutLabel = MS.Helpers.Elements.label('About', '10%', '10%', 'blue');
   me.homeLabel = MS.Helpers.Elements.label('Home', '20%', '10%');

   /* EVENT LISTENERS */
   me.homeLabel.addEventListener('click', MS.Helpers.Navigation.showHomeScreen);

   /* ADD ELEMENTS TO WINDOW */
   me.elements = [me.homeLabel, me.aboutLabel];
   MS.Helpers.Elements.addElements(me.elements, me.window);

   return me.window;
};