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

   me.window = Titanium.UI.createWindow({
      backgroundColor:'#fff',
      height: '100%',
      width: '100%'
   });

   me.label = Titanium.UI.createLabel({
      color:'#999',
      text:'Home',
      font:{fontSize:20,fontFamily:'Helvetica Neue'},
      textAlign:'center',
      width:'auto'
   });


   /* EVENT LISTENERS */

   me.label.addEventListener('click', function() {
      MS.Views.Home().close();
      MS.Views.TrackList().open();
   });


   /* ADD VIEW ELEMENTS TO WINDOW */
   me.window.add(me.label);

   return me.window;
};