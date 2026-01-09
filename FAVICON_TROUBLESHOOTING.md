# Favicon and Title Troubleshooting

If you can't see the favicon or page title:

1. **Hard Refresh the Browser:**
   - Chrome/Brave: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
   - This clears the cache for the current page

2. **Restart the Dev Server:**
   - Stop the server (Ctrl+C)
   - Run `npm start` again

3. **Clear Browser Cache:**
   - Go to browser settings
   - Clear cached images and files
   - Reload the page

4. **Check Browser Console:**
   - Open DevTools (F12 or Cmd+Option+I)
   - Check Console tab for any errors
   - Check Network tab to see if favicon files are loading

5. **Verify Files Exist:**
   - Check that these files exist in `public/`:
     - favicon.svg
     - favicon-32x32.png
     - favicon-16x16.png
     - favicon.ico

The favicon should show "LC" in white text on black background.
The page title should update when you navigate between pages.
