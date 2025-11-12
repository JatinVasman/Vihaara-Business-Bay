# Image Organization Guide

This guide will help you organize the existing images in your project into the correct folders.

## Current Images in `/public/`

Based on the files currently in your `/public/` folder, here's how to organize them:

### 📁 Move to `/public/assets/hero/`
**Hero/Background Images:**
- `Elevation.png` → Rename to `hero-build.webp` (or keep as .png)
- `Enscape_2025-03-29-14-59-39.jpg` → Could be used as hero image
- `Enscape_2025-08-12-14-47-16.jpg` → Could be used as hero image

**Instructions:**
1. Choose your best exterior/elevation image for the hero section
2. Move it to `/public/assets/hero/`
3. Rename to `hero-build.webp` (or keep original name and update code)

### 📁 Move to `/public/assets/gallery/`
**Gallery Images:**
- `1.jpg` → Rename to `exterior-1.jpg`
- `2.jpg` → Rename to `exterior-2.jpg`
- `16.jpg` → Rename to `interior-1.jpg`
- `Enscape_2025-03-29-14-59-39.jpg` → Rename to `render-1.jpg`
- `Enscape_2025-08-12-14-47-16.jpg` → Rename to `render-2.jpg`

**Instructions:**
1. Move all render/photo images to `/public/assets/gallery/`
2. Give them descriptive names
3. Update the `galleryImages` array in `/components/GalleryGrid.jsx`

### 📁 Move to `/public/assets/floorplans/`
**Floor Plan Images:**
- `Basement.jpg`
- `Ground Floor.jpg`
- `1st to 6th floors.jpg`
- `Terrace Plan.jpg`

**Instructions:**
1. Move all floor plan images to `/public/assets/floorplans/`
2. Optionally rename for consistency:
   - `basement.jpg`
   - `ground-floor.jpg`
   - `typical-floors.jpg`
   - `terrace.jpg`

### 📁 Keep in `/public/`
**Root Level Files:**
- `Logo/` folder (keep as is)
- `Location Map.jpg` (can move to `/public/assets/` if needed)
- `QR_Vihaara_Business_Bay_RERA_P51700080851.PNG` (keep for RERA reference)

### 📁 Additional Recommendations

**Create a brochure:**
- Create a PDF brochure and save it as `/public/assets/brochure.pdf`
- This is referenced in the Hero and other components

**Create an OG image:**
- Create a 1200x630px image for social media sharing
- Save as `/public/assets/og-image.jpg`
- Update in `/lib/siteMeta.js`

## Quick Commands (PowerShell)

Run these commands from the project root to organize your images:

```powershell
# Move hero image
Move-Item "public/Elevation.png" "public/assets/hero/hero-build.png"

# Move gallery images
Move-Item "public/1.jpg" "public/assets/gallery/exterior-1.jpg"
Move-Item "public/2.jpg" "public/assets/gallery/exterior-2.jpg"
Move-Item "public/16.jpg" "public/assets/gallery/interior-1.jpg"
Move-Item "public/Enscape_2025-03-29-14-59-39.jpg" "public/assets/gallery/render-1.jpg"
Move-Item "public/Enscape_2025-08-12-14-47-16.jpg" "public/assets/gallery/render-2.jpg"

# Move floor plans
Move-Item "public/Basement.jpg" "public/assets/floorplans/basement.jpg"
Move-Item "public/Ground Floor.jpg" "public/assets/floorplans/ground-floor.jpg"
Move-Item "public/1st to 6th floors.jpg" "public/assets/floorplans/typical-floors.jpg"
Move-Item "public/Terrace Plan.jpg" "public/assets/floorplans/terrace.jpg"

# Move location map
Move-Item "public/Location Map.jpg" "public/assets/location-map.jpg"
```

## After Moving Images

### Update Gallery Component
Edit `/components/GalleryGrid.jsx` and update the `galleryImages` array:

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
    alt: 'Another exterior view',
    title: 'Facade Detail'
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
    alt: '3D render of the building',
    title: 'Architectural Render'
  },
  {
    id: 5,
    src: '/assets/gallery/render-2.jpg',
    alt: 'Another architectural render',
    title: 'Evening View'
  },
]
```

### Update Hero Component
If you renamed the hero image, update `/components/Hero.jsx`:

```javascript
<Image
  src="/assets/hero/hero-build.png"  // Update extension if needed
  alt="Vihaara Business Bay - India's First Sparkle Tower in Dombivli"
  fill
  priority
  quality={90}
  className="object-cover"
  sizes="100vw"
/>
```

## Image Optimization Tips

1. **Convert to WebP** (optional but recommended for better performance):
   - Use online tools or image editing software
   - WebP provides better compression than JPG/PNG

2. **Resize large images**:
   - Hero images: 1920x1080px or larger
   - Gallery images: 800x600px to 1200x900px
   - Thumbnails: 400x300px

3. **Optimize file sizes**:
   - Use tools like TinyPNG, Squoosh, or ImageOptim
   - Target < 200KB per image for web

## Need Help?

If you need assistance with image organization or have questions, refer to the main README.md file.
