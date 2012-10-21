/**
 * Text Helper Class
 * ------------------------------------------
 * Various text utilities
 *
 * ------------------------------------------
 * by Zachary Fisher :: zfisher@zfidesign.com
 *
 */

MS.Helpers.Text = {
   ellipsis : function(str, limit) {
      var newStr = str.substring(0, limit);
      newStr += (str.length > limit ? '...' : '');
      return newStr;
   }
};