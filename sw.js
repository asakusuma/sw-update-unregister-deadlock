// Change the version to create a new worker version
const version = '21.0.0';

function forceUpdateOrUnregister() {
  self.registration.update();
  if (!self.registration.waiting) {
    console.log('unregister');
    return self.registration.unregister();
  }
}

function onInstall() {
  return forceUpdateOrUnregister();
}

self.addEventListener('install', function (event) {
  event.waitUntil(onInstall());
});

self.addEventListener('message', (e) => {
  forceUpdateOrUnregister();
});