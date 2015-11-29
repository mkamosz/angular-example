// karma.conf.js
module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        files: [
            'app/assets/js/libs/angular.js',
            'app/assets/js/libs/angular-route.js',
            'app/app.mdl.js',
            'app/app.rout.js',
            'app/common/services/connection.js',
            'app/common/services/path.js',
            'app/common/services/commonFunctions.js',
            'app/core/homepage/homepage-ctrl.js',
            'app/core/error/error-ctrl.js',

            'app/**/tests/**/*.js'
        ]
    });
};