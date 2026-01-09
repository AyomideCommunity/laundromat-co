# Laundry and Co - Conversion Notes

## ✅ Completed

1. **React App Created**: Created `laundry-and-co` using Create React App
2. **Assets Copied**: 
   - `_next/` folder copied to `public/_next/`
   - Favicon copied to `public/`
   - Source HTML saved as `public/source.html` for reference
3. **CSS Linked**: All 4 original CSS files linked in `public/index.html` in the same order
4. **Basic Structure**: Created React component structure matching the original layout
5. **Brand Name Replacement**: 
   - "Launderette NYC" → "Laundry and Co"
   - "Launderette New York LLC" → "Laundry and Co LLC"
   - Instagram handle: `@launderettenyc` → `@laundryandco`
6. **GitHub Pages Setup**: 
   - Installed `gh-pages`
   - Added `homepage` field to `package.json`
   - Added `predeploy` and `deploy` scripts

## ⚠️ Still Needed

The HTML downloaded by HTTrack was Next.js serialized data, not fully rendered HTML. The following components need to be implemented:

1. **Navbar Component**: Navigation bar with menu items
2. **HomePageContent Component**: Main page content (hero section, features, etc.)
3. **FAQComponent**: FAQ accordion functionality
4. **InstagramCarousel**: Instagram feed carousel
5. **FooterNewsletter**: Newsletter signup form
6. **SocialMedia**: Social media links component

## How to Complete

### Option 1: Inspect Original Site
1. Visit https://www.launderettenyc.com/ in a browser
2. Use DevTools to inspect the actual rendered HTML
3. Copy the DOM structure for each component
4. Convert to React JSX

### Option 2: Use Browser to Render Downloaded HTML
1. Open `public/source.html` in a browser (may need to serve it locally)
2. Let JavaScript execute to see the rendered page
3. Inspect the DOM and copy the structure

### Option 3: Re-download with Better Settings
Re-run HTTrack with settings that wait for JavaScript execution, or use a tool like Puppeteer/Playwright to capture the fully rendered HTML.

## Current Structure

The app currently has:
- Basic layout structure (main, section, footer)
- Footer links and structure
- CSS classes matching the original
- Brand names updated

## Testing

1. **Local Development**: `npm start`
2. **Production Build**: `npm run build`
3. **Deploy to GitHub Pages**: `npm run deploy`

## Important Notes

- **Asset Paths**: The `homepage` field in `package.json` is set to `https://ayomidebakre.github.io/laundry-and-co`. Update this if your GitHub username or repo name is different.
- **CSS Paths**: CSS files use `%PUBLIC_URL%` which will work for GitHub Pages project pages
- **Fonts**: Font files are in `public/_next/static/media/` and should load automatically
- **Images**: Any images referenced (like `/logo-white.webp`) need to be in the `public/` folder

## Next Steps

1. Fill in the component placeholders in `src/App.js`
2. Test locally with `npm start`
3. Verify all assets load correctly
4. Test interactive features (FAQ accordion, mobile nav, carousel)
5. Deploy with `npm run deploy`
