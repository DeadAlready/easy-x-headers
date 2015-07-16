/**
 * Created by karl on 06/07/15.
 */

/// <reference path='typings/tsd.d.ts' />

'use strict';

import express = require('express');

export function getMiddleware(): express.RequestHandler {
    return function apiMiddleware(req:any, res:express.Response, next: Function): void {

        var info:any = {};
        if(req.headers) {
            Object.keys(req.headers).forEach(function (key) {
                var lcKey = key.toLowerCase();
                if(lcKey.indexOf('x-') === 0) {
                    info[lcKey.substr(2)] = req.headers[key];
                }
            });
        }

        req.info = info;

        next();
    }
}