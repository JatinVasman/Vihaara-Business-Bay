# ✅ Pre-Deployment Checklist

Use this checklist before deploying Vihaara Business Bay to production.

## 📋 Content & Assets

- [ ] All images moved to `/public/assets/` folders
- [ ] Gallery has at least 8-10 high-quality images
- [ ] Hero image is optimized (< 500KB)
- [ ] Logo files are in place
- [ ] Brochure PDF added (`/public/assets/brochure.pdf`)
- [ ] Open Graph image created (1200x630px, `/public/assets/og-image.jpg`)
- [ ] All placeholder text replaced with actual content
- [ ] Project statistics updated (floors, area, parking)
- [ ] Floor plans added

## 🔧 Configuration

- [ ] Site metadata updated in `lib/siteMeta.js`:
  - [ ] Company name and title
  - [ ] Description and keywords
  - [ ] Actual domain URL
  - [ ] Contact email
  - [ ] Full address with postal code
  - [ ] RERA registration number
  - [ ] Possession date
  - [ ] All social media links
- [ ] Google Fonts loading correctly
- [ ] Favicon added (create `app/favicon.ico`)

## 📱 Functionality

- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Email notifications set up (optional)
- [ ] Form validation working
- [ ] Gallery lightbox opens and closes
- [ ] All buttons and CTAs functional
- [ ] Phone number links work (`tel:` links)
- [ ] Download brochure link works
- [ ] Social media links open in new tabs

## 🎨 Design & Responsiveness

- [ ] Mobile view tested (320px - 768px)
- [ ] Tablet view tested (768px - 1024px)
- [ ] Desktop view tested (1024px+)
- [ ] All images display correctly on all devices
- [ ] Navigation menu works on mobile
- [ ] Footer is readable on mobile
- [ ] Forms are usable on touch devices
- [ ] No horizontal scrolling issues

## ♿ Accessibility

- [ ] All images have meaningful alt text
- [ ] Headings in logical order (h1 → h2 → h3)
- [ ] Skip-to-content link works
- [ ] Form labels associated with inputs
- [ ] Error messages are announced to screen readers
- [ ] Keyboard navigation works everywhere
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA standards
- [ ] ARIA labels present where needed

## 🚀 Performance

- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Images optimized (WebP format preferred)
- [ ] No console errors in browser
- [ ] Page load time < 3 seconds
- [ ] Lazy loading working for gallery images
- [ ] No broken links (404 errors)

## 🔍 SEO

- [ ] Meta titles unique for each page
- [ ] Meta descriptions unique for each page
- [ ] JSON-LD structured data present
- [ ] Canonical URLs set correctly
- [ ] Open Graph tags configured
- [ ] Twitter Card tags configured
- [ ] robots.txt created (optional)
- [ ] sitemap.xml generated (optional)
- [ ] Google Search Console verification (optional)
- [ ] Google Analytics added (optional)

## 🔒 Security & Legal

- [ ] RERA information displayed correctly
- [ ] Disclaimer text present in footer
- [ ] Privacy Policy page created (optional)
- [ ] Terms & Conditions page created (optional)
- [ ] HTTPS enabled (handled by hosting)
- [ ] Environment variables secure (not committed to Git)

## 🧪 Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

## 📊 Pre-Build Tests

```powershell
# Run these commands before building:

# 1. Install dependencies
npm install

# 2. Check for build errors
npm run build

# 3. Test production build locally
npm start

# 4. Visit http://localhost:3000 and test all features
```

## 🌐 Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```

2. Login to Vercel:
   ```powershell
   vercel login
   ```

3. Deploy:
   ```powershell
   vercel
   ```

4. Follow prompts to configure project

5. For production deployment:
   ```powershell
   vercel --prod
   ```

### Option 2: Deploy to Netlify

1. Build the project:
   ```powershell
   npm run build
   ```

2. Install Netlify CLI:
   ```powershell
   npm install -g netlify-cli
   ```

3. Login:
   ```powershell
   netlify login
   ```

4. Deploy:
   ```powershell
   netlify deploy --prod
   ```

### Option 3: Manual Deployment

1. Build:
   ```powershell
   npm run build
   ```

2. The build output is in `.next` folder

3. Upload to your hosting provider

4. Make sure Node.js is installed on server

5. Run:
   ```powershell
   npm start
   ```

## 📝 Post-Deployment

- [ ] Test live site on actual domain
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if using)
- [ ] Test contact form on live site
- [ ] Check all links work on live domain
- [ ] Verify social media previews (Facebook, Twitter)
- [ ] Monitor error logs for issues
- [ ] Set up uptime monitoring (optional)

## 🔄 Ongoing Maintenance

- [ ] Regular backups configured
- [ ] Update contact form submissions database
- [ ] Monitor and respond to inquiries
- [ ] Update content as needed
- [ ] Keep dependencies updated (`npm update`)
- [ ] Check for security updates

## 🎯 Success Criteria

Your site is ready for production when:
- ✅ All checklist items above are completed
- ✅ Lighthouse scores are 90+ for all metrics
- ✅ No console errors on any page
- ✅ Works perfectly on mobile and desktop
- ✅ Contact form sends emails successfully
- ✅ All real content is in place
- ✅ RERA information is accurate

---

## 📞 Launch Day Tasks

1. **Announce on social media**
   - Prepare posts for all platforms
   - Include link to website
   - Use relevant hashtags

2. **Email marketing** (if applicable)
   - Send to existing leads
   - Include site tour invitation

3. **Monitor performance**
   - Check analytics
   - Monitor contact form submissions
   - Watch for any errors

4. **Customer support ready**
   - Ensure phone lines are ready
   - Email monitored regularly
   - WhatsApp Business active (if using)

---

**Good luck with your launch! 🚀**

Contact: 9769045555
