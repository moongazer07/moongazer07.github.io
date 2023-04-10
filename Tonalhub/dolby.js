'use strict';
var Dolby = Dolby || {};
!function() {
 Dolby.supportDDPlus = false;
 var a = new Audio;
 if ("" != a.canPlayType('audio/mp4;codecs="ec-3"')) {
   if (!(navigator.userAgent.indexOf("CPU iPhone OS 10_0") == -1 && navigator.userAgent.indexOf("CPU OS 10_0") == -1 || navigator.userAgent.indexOf("Safari") == -1 || navigator.userAgent.indexOf("Version/10") == -1)) {
     Dolby.supportDDPlus = true;
   }
   if (navigator.userAgent.indexOf("Mac OS X 10_12") != -1 && navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Version/10") != -1) {
     Dolby.supportDDPlus = true;
   }
   if (navigator.userAgent.indexOf("Edge") != -1) {
     Dolby.supportDDPlus = true;
   }
   if (navigator.userAgent.indexOf("Windows Phone 10") != -1) {
     Dolby.supportDDPlus = false;
   }
 }
 Dolby.checkDDPlus = function() {
   return Dolby.supportDDPlus;
 };
}();
