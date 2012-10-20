/**
 * Elements Helper Class
 * ------------------------------------------
 * Various view components and methods
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Elements = {
   addElements : function(elemArray, window) {
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
   view : function(bgImg, width, height, top, left) {
      return Ti.UI.createView({
         backgroundImage : bgImg,
         width: width,
         height: height,
         top: top,
         left: left
      });
   },
   scrollView : function(top) {
      return Ti.UI.createScrollView({
         contentWidth: 'auto',
         contentHeight: 'auto',
         showVerticalScrollIndicator: true,
         showHorizontalScrollIndicator: false,
         height: '100%',
         top: (typeof top == 'undefined') ? '0' : top,
         width: '100%'
      });
   },
   label : function(text, top, left, color) {
      return Titanium.UI.createLabel({
         color: (typeof color == 'undefined') ? '#999' : color,
         text:text,
         font:{
            fontSize:(Ti.Platform.osname == 'iphone') ? 20 : 30,
            fontFamily:'Helvetica Neue'
         },
         textAlign:'center',
         width:'auto',
         top: top,
         left: left
      });
   }
};