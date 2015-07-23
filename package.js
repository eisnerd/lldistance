Package.describe({
    name: 'sorenriise:lldistance',
    version: '1.0.0',
    summary: "Meteor template for Great Circle distance between longitude-latitude points",
    git: 'https://github.com/sorenriise/lldistance'
});


Package.onUse(function(api) {
    api.versionsFrom('1.0');
    
    api.addFiles('distance.js'  , 'client');
    api.addFiles('init.js'      , 'client');
    api.addFiles('distance.html', 'web');
    
    api.export(['lldistance', 'lldistance']);
})