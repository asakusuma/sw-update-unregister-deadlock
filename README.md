# sw-update-unregister-deadlock

`python -m SimpleHTTPServer 8000`

1. Open `http://localhost:8000/` in Chrome stable. 
2. Open devtools
3. Click the "Update and unregister" button multiple times.

You should see this error:

`Uncaught (in promise) TypeError: Failed to update a ServiceWorker: Not found`