/**
 * Created by karl on 06/07/15.
 */
/// <reference path='typings/tsd.d.ts' />
'use strict';
function getMiddleware() {
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
        req.info = info;
        next();
    };
}
exports.getMiddleware = getMiddleware;
//# sourceMappingURL=index.js.map