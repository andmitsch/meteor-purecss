Package.describe({
  name: 'andmitsch:purecss',
  summary: "No bullshit CSS resets, yet everything you need",
  version: '1.0.0',
  git: 'https://github.com/andmitsch/meteor-purecss'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('andmitsch:purecss.css', 'client');
});
