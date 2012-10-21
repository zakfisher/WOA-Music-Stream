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
         backgroundImage: '/images/bg.png',
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
   scrollView : function(top, height) {
      return Ti.UI.createScrollView({
         contentWidth: 'auto',
         contentHeight: 'auto',
         showVerticalScrollIndicator: true,
         showHorizontalScrollIndicator: false,
         height: height,
         top: (typeof top == 'undefined') ? '0' : top,
         width: '100%'
      });
   },
   loading : function(text) {
      return Titanium.UI.createActivityIndicator({
         top: 0,
         height: 50,
         style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
         font: {
            fontFamily:'Helvetica Neue',
            fontSize:15,
            fontWeight:'bold'
         },
         color: 'black',
         message: text,
         zIndex: 20
      });
   },
   image : function(img, top) {
      return Ti.UI.createImageView({
         image:'/images/' + img,
         top: top
      });
   },
   label : function(text, top, left, color, size, bold) {
      return Titanium.UI.createLabel({
         color: (typeof color == 'undefined') ? '#999' : color,
         text:text,
         font: {
            fontSize: (typeof size != 'undefined') ? size : 20,
            fontFamily: 'Helvetica Neue',
            fontWeight: (typeof bold != 'undefined') ? 'bold' : 'normal'
         },
         textAlign: 'left',
         width: 'auto',
         top: top,
         left: left
      });
   },
   button : function(top, labels, inverse) {

      var E = MS.Helpers.Elements;

      // Define Up/Down States
      var upImg = inverse ? 'button-down.png' : 'button-up.png';
      var upColor = inverse ? 'black' : '#eeeeee';
      var downImg = !inverse ? 'button-down.png' : 'button-up.png';
      var downColor = !inverse ? 'black' : '#eeeeee';

      // Init Button View
      var view = E.view(upImg, 273, 54, top);
      E.addElements(labels, view);

      // Add Touch Events
      view.addEventListener('touchstart', function() {
         view.backgroundImage = '/images/' + downImg;
         for (var i = 0; i < labels.length; i++) { labels[i].color = downColor; }
      });

      view.addEventListener('touchend', function() {
         view.backgroundImage = '/images/' + upImg;
         for (var i = 0; i < labels.length; i++) { labels[i].color = upColor; }
      });

      return view;
   }
};