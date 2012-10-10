/**
 * View Components Helper Class
 * ------------------------------------------
 * Various view components and methods
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.ViewComponents = {
   addToWindow : function(elemArray, window) {
      for (var i = 0; i < elemArray.length; i++) {
         window.add(elemArray[i]);
      }
   },
   window : function() {
      return Titanium.UI.createWindow({
         backgroundColor:'#fff',
         height: '100%',
         width: '100%',
         navBarHidden : true
      });
   },
   label : function(text, top, left) {
      return Titanium.UI.createLabel({
         color:'#999',
         text:text,
         font:{fontSize:20,fontFamily:'Helvetica Neue'},
         textAlign:'center',
         width:'auto',
         top: top,
         left: left
      });
   }
};