function updateAndUnregister() {
  self.registration.update();
  return self.registration.unregister();
}

self.addEventListener('install', function (event) {
  event.waitUntil(updateAndUnregister());
});