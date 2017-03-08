/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    packages: {
      app: {
        defaultExtension: 'js'
      }
    },
    meta: {
      '@angular/core': { esModule: true, format: 'system' },
      '@angular/common': { esModule: true },
      '@angular/compiler': { esModule: true },
      '@angular/platform-browser': { esModule: true },
      '@angular/platform-browser-dynamic': { esModule: true },
      '@angular/http': { esModule: true },
      '@angular/router': { esModule: true },
      '@angular/forms': { esModule: true },
    }
  });
})(this);
