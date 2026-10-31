# AJ'S GAFFERS & ACCESSORIES — Cinematic Editorial Website

A bespoke, editorial-grade business information website crafted for **AJ's Gaffers & Accessories**, established in 2013 in Cebu City, Philippines.

Designed around the aesthetic of **Editorial Luxury × Heritage Craftsmanship × Modern Industrial**, the website delivers a continuous scroll-driven visual narrative showcasing craftsmanship, business heritage, owner philosophy, and direct communication channels.

---

## ✦ Technology Stack

- **React 18** (JavaScript JSX only)
- **Vite** for optimized development & building
- **Tailwind CSS** with custom brand palette & typography
- **GSAP & GSAP ScrollTrigger** for scroll-driven storytelling, pinned narrative moments, and text reveals
- **Lenis** for smooth cinematic scrolling
- **Lucide React** for minimal icons

---

## ✦ Brand Color Palette

- **Deep Charcoal**: `#171918`
- **Warm Ivory**: `#F3F0E9`
- **Muted Beige**: `#D6CDBE`
- **Antique Bronze**: `#A68A64`
- **Soft White**: `#FAF9F6`

---

## ✦ Chapters & Structure

1. **Chapter 01 — The Introduction (`Hero.jsx`)**
   - Full-screen entrance with atmospheric background parallax
   - Character-by-character headline reveal: *"CRAFTED THROUGH EXPERIENCE."*
   - Established 2013 badge, live scroll indicator, and direct Facebook link

2. **Chapter 02 — The Business Story (`OurStory.jsx`)**
   - Transition to Warm Ivory
   - Headline: *"BUILT ON EXPERIENCE. ROOTED IN CEBU."*
   - Split editorial layout with horizontal movement
   - **Pinned Storytelling Moment**: Left header pins while 4 core craft pillars scroll through

3. **Chapter 03 — The Visual Gallery (`Gallery.jsx`)**
   - Transition to Deep Charcoal
   - Headline: *"THE CRAFT IN FOCUS."*
   - Asymmetrical editorial grid with category filters
   - Interactive Lightbox modal with specifications and inquiry link

4. **Chapter 04 — Meet the Owner (`OwnerProfile.jsx`)**
   - Warm neutral editorial layout
   - Headline: *"BEHIND EVERY BUSINESS IS A STORY."*
   - **Pinned Portrait Storytelling**: Portrait frame pins on scroll alongside owner biography & philosophy quote

5. **Chapter 05 — Business Information (`BusinessInfo.jsx`)**
   - Organized credential cards: Establishment (2013), Cebu Headquarters, Primary Specialization, Official Facebook Channel
   - One-click copy buttons for contact coordinates and consultation hours

6. **Chapter 06 — Contact & Connection (`Contact.jsx`)**
   - Headline: *"LET'S START A CONVERSATION."*
   - Primary Facebook Page direct action card
   - Web3Forms direct email inquiry form

---

## ✦ Content Management (`src/data/businessData.js`)

All business details, owner profile, gallery items, contact coordinates, and descriptions are decoupled from layout code in [`src/data/businessData.js`](file:///c:/Users/hanzc/Documents/AjGaffers/src/data/businessData.js).

You can easily edit:
- Business name, tagline, establishment year
- Official Facebook URL (`facebook.url`) & Messenger URL
- Mobile and phone numbers
- Official email address
- Physical address notes
- Gallery items, titles, categories, and images
- Owner biography and philosophy quotes

---

## ✦ Environment Variables (`.env`)

To receive direct emails through the inquiry form:
1. Obtain a free access key from [web3forms.com](https://web3forms.com).
2. Create or edit `.env` in the root folder:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_web3forms_key_here
   ```

*(If the key is not set, the form gracefully simulates receipt and guides visitors to your official Facebook page).*

---

## ✦ Running the Project

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
