# sw-update-unregister-deadlock

`python -m SimpleHTTPServer 8000`

Open `http://localhost:8000/` in Chrome stable. Now open dev tools and notice there is an installing worker, which is deadlocked in the installing state. Updating `sw.js` does nothing. Restarting Chrome does not fix the problem.

After refreshing, you should see this error:

`sw.js:1 Uncaught (in promise) TypeError: Failed to update a ServiceWorker: Not found`

Now open Chrome Canary, and try to navigate to `http://localhost:8000/`. The page never loads. Seems like there's some shared deadlock state between Chrome instances.