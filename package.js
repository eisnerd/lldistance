Package.describe({
    name: 'sorenriise:lldistance',
    version: '1.0.2',
    summary: "Meteor template for Great Circle distance between longitude-latitude points",
    git: 'https://github.com/sorenriise/lldistance'
});


Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use('templating', 'client');
    
    api.addFiles('distance.html', 'client');
    api.addFiles('init.js'      , 'client');
    api.addFiles('distance.js'  , 'client');
    
    api.export(['lldistance', 'lldistance']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sorenriise:lldistance');
  api.addFiles('lldistance-tests.js');
});
