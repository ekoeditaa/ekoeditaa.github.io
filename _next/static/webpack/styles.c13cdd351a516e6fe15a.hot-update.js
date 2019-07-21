webpackHotUpdate("styles",{

/***/ "./components/Bio/style.scss":
/*!***********************************!*\
  !*** ./components/Bio/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"bio_wrapper":"bio_wrapper___15SCE","bio_title":"bio_title___1kOzQ","project_link_prompt":"project_link_prompt___2-Gku","project_link":"project_link___3y01U"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1563713949049");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c13cdd351a516e6fe15a.hot-update.js.map