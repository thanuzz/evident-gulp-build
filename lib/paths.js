"use strict";

var path = require('path');

var outputPath = './wwwroot/build/web';

module.exports = {
    output: outputPath,
    appRoot: './wwwroot/src',
    sassRoots: ['./wwwroot/src/**/*.sass', './wwwroot/src/**/*.scss'],
    templates: ['./wwwroot/src/**/*.html'],
    entryPointCandidates: ['./wwwroot/src/main.js', './wwwroot/src/main.ts'],
    handlebarsViews: './views/**/*.hbs',
    build: {
        get dest() { return path.join(outputPath, 'static'); },
        get optimized() { return path.join(outputPath, 'optimized'); },
        get tmp() { return path.join(outputPath, 'tmp'); }
    }
};

