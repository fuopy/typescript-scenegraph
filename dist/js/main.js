 // main.js

requirejs.config({
    baseUrl: './js',
    paths: {
        'app':'app'
    }
});

require(['app'], function() {
    console.log("Application Starting!");
});
