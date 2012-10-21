/**
 * Network Helper Class
 * ------------------------------------------
 * Create HTTP request and send/receive data.
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Network = {
   createRequest : function(url, callback, data) {
      var requestInitTime = new Date();

      // Create new HTTP Request
      var request = Ti.Network.createHTTPClient({

         // Success
         onload: function() {
            //Ti.API.info("Status: " + this.status);
            var json = JSON.parse(this.responseText);
            callback.call(this, json);

            // Total Request Time
            var responseInitTime = new Date();
            responseInitTime -= requestInitTime;
            //console.log('response time: ' + responseInitTime);
         },

         // Fail
         onerror: function() {
            //alert('Network Error');
            return false;
         },

         // Connection Timeout
         timeout : 10000
      });

      // Open + Send Request
      if (typeof data !== 'undefined') {
         request.open('POST', url);
         request.setRequestHeader("Content-Type", "application/json");
         request.send(data);
      }
      else {
         request.open('GET', url);
         request.send();
      }
   }
};