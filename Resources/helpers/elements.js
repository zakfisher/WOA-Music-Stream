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
         navBarHidden : true,
         fullscreen : true
      });
   },
   view : function(bgImg, width, height, top, left) {
      var view = Ti.UI.createView({
         backgroundImage : '/images/' + bgImg,
         width: width,
         height: height,
         top: top
      });
      if (typeof left != 'undefined') { view.left = left; }
      return view;
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
   image : function(img, top) {
      return Ti.UI.createImageView({
         image:'/images/' + img,
         top: top
      });
   },
   label : function(text, top, left, color, bold) {
      return Titanium.UI.createLabel({
         color: (typeof color == 'undefined') ? '#999' : color,
         text:text,
         font:{
            fontSize: Android ? 30 : 20,
            fontFamily: 'Helvetica Neue',
            fontWeight: (typeof bold != 'undefined') ? 'bold' : 'normal'
         },
         textAlign:'center',
         width:'auto',
         top: top,
         left: left
      });
   },
   Home : {
      button : function(title, top, inverse) {

         // Define Up/Down States
         var upImg = (typeof inverse != 'undefined') ? 'button-down.png' : 'button-up.png';
         var upColor = (typeof inverse != 'undefined') ? 'black' : '#eeeeee';
         var downImg = (typeof inverse == 'undefined') ? 'button-down.png' : 'button-up.png';
         var downColor = (typeof inverse == 'undefined') ? 'black' : '#eeeeee';

         // Init Button View
         var view = MS.Helpers.Elements.view(upImg, 273, 54, top);
         var label = MS.Helpers.Elements.label(title, '25%', '10%', upColor, true);
         view.add(label);

         // Add Touch Events
         view.addEventListener('touchstart', function() {
            view.backgroundImage = '/images/' + downImg;
            label.color = downColor;
         });

         view.addEventListener('touchend', function() {
            view.backgroundImage = '/images/' + upImg;
            label.color = upColor;
         });

         return view;
      }
   }
};