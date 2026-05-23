# Image Assets

Place your images in this directory:

## Required Images

- **logo.png** - Main NEAIST logo (recommended: 200x200px or larger)
- **logo-192.png** - PWA icon (192x192px)
- **logo-512.png** - PWA icon (512x512px)
- **favicon.ico** - Browser favicon (16x16px, 32x32px)

## Optional Images

- Team photos
- Event photos
- Background images for hero section
- Gallery images

## Image Optimization Tips

1. **Format**: Use WebP for better compression (with PNG/JPG fallback)
2. **Size**: Optimize images before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
3. **Dimensions**: Don't upload images larger than needed
4. **Alt Text**: Always add descriptive alt text in HTML

## Tools for Image Optimization

- **Online**: 
  - TinyPNG (https://tinypng.com/)
  - Squoosh (https://squoosh.app/)
  
- **CLI**:
  ```bash
  # ImageMagick
  convert input.jpg -quality 85 output.jpg
  
  # For WebP
  cwebp input.jpg -q 80 -o output.webp
  ```

## Example Usage in HTML

```html
<img src="images/logo.png" alt="NEAIST Logo" width="200" height="200">
```
