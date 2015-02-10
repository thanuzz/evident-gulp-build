"use strict";

var path = require('path');
var settings = require('./settings');

// Paths for various assets.
module.exports = {
    get sassRoots() { return [path.join(settings.paths.appRoot, '**/*.scss'), path.join(settings.paths.appRoot, '**/*.sass')]; },
    get templates() { return path.join(settings.paths.appRoot, '**/*.html'); },
    get handlebarsViews() { return path.join(settings.paths.viewRoot, '**/*.hbs'); },
    build: {
        get dest() { return path.join(settings.paths.output, 'static'); },
        get tmp() { return path.join(settings.paths.output, 'tmp'); }
    },
    vendor: {
        stylesheets: [
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/font-awesome/css/font-awesome.min.css',
            './bower_components/animate.css/animate.min.css'
        ],
        fonts: [
            './bower_components/bootstrap/dist/fonts/*',
            './bower_components/font-awesome/fonts/*'
        ]
    }
};