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
   addElements : function(elemArray, parentObj) {
      for (var i = 0; i < elemArray.length; i++) {
         parentObj.add(elemArray[i]);
      }
   },
   addEvents : function(eventArray) {
      for (var i = 0; i < eventArray.length; i++) {
         var event = eventArray[i];
         event[0].addEventListener(event[1], event[2]);
      }
   },
   window : function() {
      return Titanium.UI.createWindow({
         backgroundColor:'#fff',
         backgroundImage: MS.Images + 'bg.png',
         height: '100%',
         width: '100%',
         navBarHidden : true,
         fullscreen : true
      });
   },
   view : function(bgImg, width, height, top, left, zIndex) {
      var view = Ti.UI.createView({
         width: width,
         height: height,
         top: top
      });
      if (typeof bgImg != 'undefined') { view.backgroundImage = MS.Images + bgImg; }
      if (typeof left != 'undefined') { view.left = left; }
      if (typeof zIndex != 'undefined') { view.zIndex = zIndex; }
      return view;
   },
   scrollView : function(top, height) {
      return Ti.UI.createScrollView({
         backgroundColor: 'white',
         contentWidth: 'auto',
         contentHeight: 'auto',
         showVerticalScrollIndicator: false,
         showHorizontalScrollIndicator: false,
         height: height,
         top: (typeof top == 'undefined') ? '0' : top,
         width: '100%'
      });
   },
   loading : function(text, extras) {
      var loading = Titanium.UI.createActivityIndicator({
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
      if (typeof extras != 'undefined') {
         for (var key in extras) { loading[key] = extras[key]; }
      }
      return loading;
   },
   image : function(img, top) {
      return Ti.UI.createImageView({
         image: MS.Images + img,
         top: top
      });
   },
   label : function(text, top, left, color, size, bold) {
      var label = Titanium.UI.createLabel({
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
      label.label = true;
      label.zIndex = 3;
      return label;
   },
   button : function(top, labels, inverse, events) {

      var E = MS.Helpers.Elements;

      // Define Up/Down States
      var upImg     =  inverse ? 'button-down.png' : 'button-up.png';
      var upColor   =  inverse ? 'black' : '#eeeeee';
      var downImg   = !inverse ? 'button-down.png' : 'button-up.png';
      var downColor = !inverse ? 'black' : '#eeeeee';

      // Init Button View
      var view = E.view(upImg, 273, 54, top);
      E.addElements(labels, view);

      // Add Touch Events
      if (events) {
         view.addEventListener('touchstart', function() {
            view.backgroundImage = MS.Images + downImg;
            for (var i = 0; i < labels.length; i++) { labels[i].color = downColor; }
         });

         view.addEventListener('touchend', function() {
            view.backgroundImage = MS.Images + upImg;
            for (var i = 0; i < labels.length; i++) { labels[i].color = upColor; }
         });
      }

      return view;
   },
   icon : function(img, position) {

      var E = MS.Helpers.Elements;

      var icon = E.image(img, position.top);
      icon.zIndex = 3;
      if (typeof position.left != 'undefined') { icon.left = position.left; }
      if (typeof position.right != 'undefined') { icon.right = position.right; }

      return icon;
   }
};