/**
 * Track List View
 * ------------------------------------------
 * View Elements:
 * -
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Views.TrackList = function() {
   var me = this;

   /* VIEW ELEMENTS */

   me.window = Titanium.UI.createWindow({
      backgroundColor:'#fff',
      height: '100%',
      width: '100%'
   });

   me.label = Titanium.UI.createLabel({
      color:'#999',
      text:'Track List',
      font:{fontSize:20,fontFamily:'Helvetica Neue'},
      textAlign:'center',
      width:'auto'
   });


   /* EVENT LISTENERS */

   me.label.addEventListener('click', function() {
      MS.Helpers.Transitions.openWindow(MS.Views.Home());
      MS.Views.TrackList().close();
   });


   /* ADD VIEW ELEMENTS TO WINDOW */
   me.window.add(me.label);

   return me.window;
};