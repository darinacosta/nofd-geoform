var saved = define.amd;
define.amd = false;
define([
  "application/wrapper/main-jquery-deps",
  "js/vendor/summernote/summernote.min.js",
  "js/vendor/jquery.ui.touch-punch.min.js"
], function () {
  define.amd = saved;
});