## 0.2.8 (2015-12-22)

  - Support handlebars partials

## 0.2.7 (2015-12-13)

  - Update dependencies to working versions

## 0.2.4 (2015-06-23)

  - Copy-resources task which copies images by default.

## 0.2.3 (2015-06-17)

  - Include karma-phantomjs-launcher.

## 0.2.2 (2015-06-15)

  - Fix default value for rev-all option dontRenameFile.

## 0.2.1 (2015-06-14)

  - Upgrade all dependencies to latest versions.

## 0.2.0 (2015-05-29)

  - Upgrade to tsify 0.11.1 (and TypeScript 1.5-beta)

## 0.1.8 (2015-05-15)

  - Throw exception if trying to `require('angular-templates')` in watch-mode. This means you don't have
    to pass an explicit flag for using template-cache, since you can just try to require the module:
    
        try {
            require('angular-templates');
            angularModules.push('angular-templates');
        } catch (ignored) {
            console.debug("running system without template cache");
        }
