# 🖼️ How to Add Cat Images to Your Website

## 📋 Images You Need

Your website needs these images:

### Cat Photos (9 total)
- `cat1.jpg` - Whiskers (Tabby)
- `cat2.jpg` - Luna (Siamese)
- `cat3.jpg` - Oliver (Maine Coon)
- `cat4.jpg` - Bella (Persian)
- `cat5.jpg` - Max (British Shorthair)
- `cat6.jpg` - Chloe (Calico)
- `cat7.jpg` - Charlie (Domestic Shorthair)
- `cat8.jpg` - Daisy (Ragdoll)
- `cat9.jpg` - Simba (Orange Tabby)

### Other Images
- `hero-placeholder.jpg` - Hero section background (1920x600px recommended)
- `team-placeholder.jpg` - Team member photos (300x300px recommended)
- `placeholder-cat.jpg` - Fallback image for missing photos

## 🎯 Quick Method: Download Free Cat Photos

### Step 1: Download Cat Photos

Visit these free stock photo sites:

**Unsplash (Recommended):**
- Go to: https://unsplash.com/s/photos/cat-portrait
- Search for specific breeds if needed
- Click on a photo → Click "Download free" button
- Save as `cat1.jpg`, `cat2.jpg`, etc.

**Pexels:**
- Go to: https://www.pexels.com/search/cat/
- Click on a photo → Click "Download" button
- Save with the correct name

**Pixabay:**
- Go to: https://pixabay.com/images/search/cat/
- Download and rename

### Step 2: Rename Your Downloaded Images

After downloading, rename them to match:
- First cat photo → `cat1.jpg`
- Second cat photo → `cat2.jpg`
- And so on...

### Step 3: Place Images in the Correct Folder

1. Open your `frontend-cat-adoption` folder
2. Navigate to `assets/images/`
3. Copy all your renamed cat photos into this folder

Your folder structure should look like:
```
frontend-cat-adoption/
├── assets/
│   └── images/
│       ├── cat1.jpg
│       ├── cat2.jpg
│       ├── cat3.jpg
│       ├── cat4.jpg
│       ├── cat5.jpg
│       ├── cat6.jpg
│       ├── cat7.jpg
│       ├── cat8.jpg
│       ├── cat9.jpg
│       ├── hero-placeholder.jpg
│       ├── team-placeholder.jpg
│       └── placeholder-cat.jpg
```

## 🚀 Push Images to GitHub

After adding images:

```bash
# Navigate to your project folder
cd frontend-cat-adoption

# Add all images
git add assets/images/

# Commit
git commit -m "Add cat photos and images"

# Push to GitHub
git push
```

## 📸 Image Specifications

### Cat Photos
- **Format**: JPG or PNG
- **Size**: 800x600px or similar (4:3 aspect ratio works best)
- **File size**: Under 500KB each (compress if needed)

### Hero Image
- **Format**: JPG
- **Size**: 1920x600px (wide landscape)
- **File size**: Under 1MB

### Team Photos
- **Format**: JPG or PNG
- **Size**: 300x300px (square)
- **File size**: Under 200KB each

## 🎨 Image Recommendations by Cat

1. **cat1.jpg (Whiskers - Tabby)**: Brown/gray striped cat
2. **cat2.jpg (Luna - Siamese)**: Cream/brown Siamese with blue eyes
3. **cat3.jpg (Oliver - Maine Coon)**: Large, fluffy long-haired cat
4. **cat4.jpg (Bella - Persian)**: Fluffy Persian with flat face
5. **cat5.jpg (Max - British Shorthair)**: Gray/blue round-faced cat
6. **cat6.jpg (Chloe - Calico)**: Multi-colored (orange, black, white) cat
7. **cat7.jpg (Charlie - Domestic Shorthair)**: Any regular short-haired cat
8. **cat8.jpg (Daisy - Ragdoll)**: White/cream fluffy cat with blue eyes
9. **cat9.jpg (Simba - Orange Tabby)**: Orange/ginger striped cat

## 🔧 Using Your Own Photos

If you have your own cat photos:

1. **Resize them** (use online tools like:
   - https://www.iloveimg.com/resize-image
   - https://www.resizepixel.com/

2. **Compress them** (to reduce file size):
   - https://tinyjpg.com/
   - https://compressor.io/

3. **Rename** to match the required names

4. **Copy** to `assets/images/` folder

## ✅ Verify Images Are Working

1. Open `index.html` in your browser
2. Go to the "Adopt" page
3. You should see all 9 cat photos in the grid
4. Click on a cat card - the modal should show the image

## 🌐 On GitHub Pages

After pushing images:
- Wait 2-3 minutes for GitHub Pages to rebuild
- Visit: https://varenyatripathi.github.io/Purrfect-Paws-Adoption-Center/
- Hard refresh: `Ctrl + Shift + R`

## 🆘 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive!)
- Check files are in `assets/images/` folder
- Check file extensions (.jpg not .jpeg)
- Hard refresh browser: `Ctrl + Shift + R`

**Images too large?**
- Compress them using TinyJPG
- Resize to recommended dimensions

**Wrong cat showing?**
- Check the file name matches the cat number
- The JavaScript loads them in order (cat1.jpg = first cat)

## 💡 Pro Tips

1. **Use consistent image sizes** for a professional look
2. **Compress images** to make your site load faster
3. **Use high-quality photos** - they make a huge difference!
4. **Portrait orientation** works best for cat photos
5. **Good lighting** makes photos more appealing

## 🎯 Quick Start (5 Minutes)

1. Go to https://unsplash.com/s/photos/cat-portrait
2. Download 9 different cat photos
3. Rename them cat1.jpg through cat9.jpg
4. Copy to `frontend-cat-adoption/assets/images/`
5. Run:
   ```bash
   git add assets/images/
   git commit -m "Add cat photos"
   git push
   ```
6. Done! 🎉

---

**Need help finding specific images? Let me know and I can suggest exact photos to download!** 📸
