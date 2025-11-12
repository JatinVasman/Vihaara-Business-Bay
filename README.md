# Vihaara Business Bay

**India's First Sparkle Tower in Dombivli**

A premium commercial real estate project featuring modern office spaces and retail opportunities in the heart of Dombivli.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your assets:**
   - Copy all images from Google Drive into the `public/assets/` folders:
     - Hero images → `public/assets/hero/`
     - Gallery images → `public/assets/gallery/`
     - Floor plans → `public/assets/floorplans/`
     - Logo → `public/Logo/`
     - Any other assets → appropriate subfolders in `public/assets/`

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🗂️ Project Structure

```
/
├─ app/                  # Next.js 14 App Router
│  ├─ layout.js         # Root layout with Navbar & Footer
│  ├─ page.js           # Home page
│  ├─ about/            # About page
│  ├─ amenities/        # Amenities page
│  ├─ gallery/          # Gallery page
│  └─ api/contact/      # Contact form API endpoint
├─ components/          # Reusable React components
├─ lib/                 # Utilities and metadata
├─ public/assets/       # Static images and files
└─ styles/              # Global CSS and Tailwind
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons/Animations:** Lottie React
- **Forms:** Axios for API calls
- **Image Optimization:** Next.js Image component

## 📝 Customization

### Update Site Metadata
Edit `lib/siteMeta.js` to update site-wide information like title, description, contact details, and RERA information.

### Add Content
Replace placeholder comments in components with actual content from the Vihaara Business Bay brochure:
- `components/Hero.jsx` - Update headlines and CTAs
- `components/AmenitiesGrid.jsx` - Add real amenities
- `app/about/page.js` - Add project description
- `lib/siteMeta.js` - Update contact and RERA details

### Upload Images
Make sure to add high-quality images in WebP format for best performance:
- Hero background images
- Gallery photos
- Floor plan diagrams
- Logo files

## 🔒 SEO & Accessibility

- Semantic HTML throughout
- Proper heading hierarchy
- Alt text for all images
- ARIA labels for interactive elements
- JSON-LD structured data
- Open Graph and Twitter Card meta tags
- Prefers-reduced-motion support

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1920px+)

## 📞 Contact

**Vihaara Business Bay**
- Phone: 9769045555
- Location: Dombivli, Maharashtra

## 📄 License

Private project - All rights reserved.

---

**Note:** This is a starter template. Replace all placeholder content with actual project information and upload real images from your Google Drive to the appropriate folders.
