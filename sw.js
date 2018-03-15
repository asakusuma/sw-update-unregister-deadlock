// Change the version to create a new worker version
const version = '21.0.0';

function updateAndUnregister() {
  self.registration.update();
  return self.registration.unregister();
}

function onInstall() {
  return updateAndUnregister();
}

self.addEventListener('install', function (event) {
  event.waitUntil(onInstall());
});

self.addEventListener('message', (e) => {
  updateAndUnregister();
});