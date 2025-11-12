# 🚀 Quick Start Guide - Vihaara Business Bay

## Step 1: Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, Framer Motion, etc.)

---

## Step 2: Organize Your Images

You already have images in the `/public/` folder. Let's organize them:

### Option A: Use PowerShell Commands (Automated)

Copy and paste these commands one by one in PowerShell:

```powershell
# Move hero image (choose your best exterior shot)
Move-Item "public\Elevation.png" "public\assets\hero\hero-build.png" -Force

# Move gallery images
Move-Item "public\1.jpg" "public\assets\gallery\exterior-1.jpg" -Force
Move-Item "public\2.jpg" "public\assets\gallery\exterior-2.jpg" -Force
Move-Item "public\16.jpg" "public\assets\gallery\interior-1.jpg" -Force
Move-Item "public\Enscape_2025-03-29-14-59-39.jpg" "public\assets\gallery\render-1.jpg" -Force
Move-Item "public\Enscape_2025-08-12-14-47-16.jpg" "public\assets\gallery\render-2.jpg" -Force

# Move floor plans
Move-Item "public\Basement.jpg" "public\assets\floorplans\basement.jpg" -Force
Move-Item "public\Ground Floor.jpg" "public\assets\floorplans\ground-floor.jpg" -Force
Move-Item "public\1st to 6th floors.jpg" "public\assets\floorplans\typical-floors.jpg" -Force
Move-Item "public\Terrace Plan.jpg" "public\assets\floorplans\terrace.jpg" -Force

# Move location map
Move-Item "public\Location Map.jpg" "public\assets\location-map.jpg" -Force
```

### Option B: Manual (Drag and Drop)

1. Create folders if not created: `public/assets/hero`, `public/assets/gallery`, `public/assets/floorplans`
2. Move images manually:
   - **Elevation.png** → `public/assets/hero/hero-build.png`
   - **1.jpg, 2.jpg, 16.jpg, Enscape files** → `public/assets/gallery/`
   - **Floor plan images** → `public/assets/floorplans/`

---

## Step 3: Update Gallery Component

After moving gallery images, update `components/GalleryGrid.jsx`:

Find the `galleryImages` array (around line 15) and update it:

```javascript
const galleryImages = [
  {
    id: 1,
    src: '/assets/gallery/exterior-1.jpg',
    alt: 'Vihaara Business Bay exterior view',
    title: 'Building Exterior'
  },
  {
    id: 2,
    src: '/assets/gallery/exterior-2.jpg',
    alt: 'Another exterior perspective',
    title: 'Elevation View'
  },
  {
    id: 3,
    src: '/assets/gallery/interior-1.jpg',
    alt: 'Modern office space interior',
    title: 'Office Interior'
  },
  {
    id: 4,
    src: '/assets/gallery/render-1.jpg',
    alt: '3D architectural render',
    title: 'Architectural Render 1'
  },
  {
    id: 5,
    src: '/assets/gallery/render-2.jpg',
    alt: 'Another architectural render',
    title: 'Architectural Render 2'
  },
]
```

---

## Step 4: Update Hero Image (If Needed)

If your hero image has a different name or format, update `components/Hero.jsx`:

Find line ~38 and update:

```javascript
<Image
  src="/assets/hero/hero-build.png"  // Update if you renamed it
  alt="Vihaara Business Bay - India's First Sparkle Tower in Dombivli"
  fill
  priority
  quality={90}
  className="object-cover"
  sizes="100vw"
/>
```

---

## Step 5: Run the Development Server

```powershell
npm run dev
```

Open your browser and go to:
**http://localhost:3000**

You should see:
- ✅ Home page with hero section
- ✅ Navigation menu
- ✅ Gallery images
- ✅ Contact form
- ✅ Footer

---

## Step 6: Test the Website

Click through all pages:
1. **Home** - Check hero image, amenities, contact form
2. **About** - Verify content loads
3. **Amenities** - Check amenity grid
4. **Gallery** - Click images to test lightbox

### Test Contact Form:
1. Fill in all fields
2. Submit the form
3. Check browser console for submission log (since email isn't set up yet)

---

## Step 7: Update Content (Important!)

### Update Site Information

Edit `lib/siteMeta.js` and replace placeholders:

```javascript
export const siteMeta = {
  title: "Vihaara Business Bay - India's First Sparkle Tower in Dombivli",
  url: "https://yourdomain.com", // Your actual domain
  
  contact: {
    phone: "9769045555", // Already set ✅
    email: "info@yourdomain.com", // Update this
    address: {
      street: "Your actual address",
      city: "Dombivli",
      state: "Maharashtra",
      postalCode: "421201", // Update if different
      country: "India"
    }
  },
  
  rera: {
    number: "P51700080851", // Update with actual RERA number
    website: "https://maharera.mahaonline.gov.in"
  },
  
  social: {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    // ... update all social links
  }
}
```

---

## Common Issues & Solutions

### Issue: Images not showing
**Solution:** 
- Check file paths are correct
- Make sure images are in `/public/assets/` folders
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### Issue: "Module not found" errors
**Solution:** 
- Run `npm install` again
- Delete `node_modules` folder and `.next` folder
- Run `npm install` again

### Issue: Contact form not working
**Solution:** 
- Check browser console for errors
- Form submissions are just logged to console for now
- Email integration needs to be set up separately

---

## Next Steps

1. **Add Real Content**
   - Replace placeholder text with actual Vihaara Business Bay information
   - Update hero headlines
   - Add real amenity descriptions

2. **Create Brochure PDF**
   - Save your brochure as `public/assets/brochure.pdf`

3. **Add Logo**
   - Your logo is already in `public/Logo/`
   - Update Navbar component to use it

4. **Set Up Email**
   - Follow instructions in `app/api/contact/route.js`
   - Use SendGrid, Mailgun, or Nodemailer

5. **Deploy**
   - Build: `npm run build`
   - Deploy to Vercel, Netlify, or your hosting provider

---

## 📞 Need Help?

- Check `PROJECT_SUMMARY.md` for complete file list
- Check `IMAGE_ORGANIZATION_GUIDE.md` for image setup
- Check `README.md` for detailed documentation

Contact: 9769045555

---

**Ready to go! 🎉**
