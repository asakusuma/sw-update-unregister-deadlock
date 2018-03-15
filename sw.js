// Change the version to create a new worker version
const version = '40.0.0';

function updateAndUnregister() {
  self.registration.update();
  return self.registration.unregister();
}

self.addEventListener('activate', event => {
  console.log('activate', version);
  event.waitUntil(clients.claim());
});

self.addEventListener('message', (e) => {
  updateAndUnregister();
});