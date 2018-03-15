// Change the version to create a new worker version
const version = '21.0.0';

function updateAndUnregister() {
  self.registration.update();
  return self.registration.unregister();
}

self.addEventListener('message', (e) => {
  updateAndUnregister();
});