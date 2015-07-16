/**
 * Created by karl on 06/07/15.
 */
/// <reference path='typings/tsd.d.ts' />
'use strict';
function getMiddleware(defaults) {
    if (defaults === void 0) { defaults = {}; }
    return function apiMiddleware(req, res, next) {
        var info = {};
        if (req.headers) {
            Object.keys(req.headers).forEach(function (key) {
                var lcKey = key.toLowerCase();
                if (lcKey.indexOf('x-') === 0) {
                    info[lcKey.substr(2)] = req.headers[key];
                }
            });
        }
        Object.keys(defaults).forEach(function (key) {
            if (info[key] === undefined) {
                info[key] = defaults[key];
            }
        });
        req.info = info;
        next();
    };
}
exports.getMiddleware = getMiddleware;
//# sourceMappingURL=index.js.map