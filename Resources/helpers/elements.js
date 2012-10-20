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
   label : function(text, top, left, color, fontWeight) {
      var label = Titanium.UI.createLabel({
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
      if (typeof fontWeight != 'undefined') { label.font.fontWeight = fontWeight; }
      return label;
   },
   Home : {
      button : function(title, top) {
         var E = MS.Helpers.Elements;

         // Init Button View
         var view = E.view('button-up.png', 273, 54, top);
         var label = E.label(title, '25%', '10%', 'white', 'bold');
         view.add(label);

         // Add Touch Events
         view.addEventListener('touchstart', function() {
            view.backgroundImage = '/images/button-down.png';
            label.color = 'black';
         });

         view.addEventListener('touchend', function() {
            view.backgroundImage = '/images/button-up.png';
            label.color = 'white';
         });

         return view;
      }
   }
};