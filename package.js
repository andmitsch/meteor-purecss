Package.describe({
  name: 'andmitsch:purecss',
  version: '0.0.2',
  summary: 'No bullshit CSS resets, yet everything you need',
  git: 'https://github.com/andmitsch/meteor-purecss',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('purecss.css');
});
