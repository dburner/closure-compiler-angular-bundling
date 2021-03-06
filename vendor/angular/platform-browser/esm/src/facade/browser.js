goog.module('_angular$platform_browser$src$facade$browser');
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var /** @type {?} */ win = typeof window !== 'undefined' && window || ({});
exports.window = win;
exports.document = win.document;
exports.location = win.location;
exports.gc = win['gc'] ? () => win['gc']() : () => null;
exports.performance = win['performance'] ? win['performance'] : null;
exports.Event = win['Event'];
exports.MouseEvent = win['MouseEvent'];
exports.KeyboardEvent = win['KeyboardEvent'];
exports.EventTarget = win['EventTarget'];
exports.History = win['History'];
exports.Location = win['Location'];
exports.EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map