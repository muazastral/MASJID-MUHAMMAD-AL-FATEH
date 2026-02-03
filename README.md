# Masjid Muhammad Al-Fateh - E-Certificate Generator

An elegant electronic certificate generator for Masjid Muhammad Al-Fateh. This web-based application allows you to create, customize, and download professional certificates for Islamic courses, programs, and events.

## Features

- **User-Friendly Interface**: Simple form-based input for certificate details
- **Professional Design**: Beautiful certificate layout with Islamic aesthetic
- **Customizable**: Enter recipient name, course title, dates, and instructor information
- **Auto-Generated Certificate Numbers**: Unique certificate numbers with MMF prefix
- **Download as Image**: Save certificates as high-quality PNG files
- **Print Support**: Print certificates directly from the browser
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Real-time Preview**: See certificate updates as you type

## Usage

### Getting Started

1. Open `index.html` in your web browser
2. Fill in the certificate details:
   - **Recipient Name** (required): Full name of the certificate recipient
   - **Course/Program Title** (required): Name of the course or program completed
   - **Completion Date** (required): Date when the course was completed
   - **Certificate Number** (optional): Custom number or auto-generated
   - **Instructor Name** (optional): Name of the instructor or authority

3. Click "Generate Certificate" to create the certificate
4. Review the certificate preview
5. Use "Download Certificate" to save as PNG or "Print Certificate" to print

### Certificate Number Format

Certificates are automatically assigned unique numbers in the format:
```
MMF-YYYY-XXXX
```
Where:
- `MMF` = Masjid Muhammad Al-Fateh prefix
- `YYYY` = Current year
- `XXXX` = Random 4-digit number

Example: `MMF-2026-1234`

## File Structure

```
.
├── index.html      # Main HTML file with form and certificate template
├── styles.css      # Styling for the application
├── script.js       # JavaScript for certificate generation and download
└── README.md       # Documentation
```

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and responsive design
- **JavaScript (ES6)**: Interactive functionality
- **html2canvas**: Library for converting HTML to image for download

## Browser Compatibility

The application works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Customization

### Changing Colors

Edit `styles.css` to customize the color scheme:
- Primary color: `#2c5f2d` (green)
- Accent color: `#d4af37` (gold)
- Background gradient: `.667eea` to `#764ba2`

### Modifying Certificate Layout

Edit the certificate template in `index.html` within the `<div id="certificate">` section.

### Adding Logo

Replace the SVG placeholder in the certificate header with your own logo:
```html
<div class="logo-placeholder">
    <img src="your-logo.png" alt="Masjid Logo">
</div>
```

## License

This project is open source and available for use by Masjid Muhammad Al-Fateh and the community.

## Support

For issues or questions, please contact the Masjid administration.

---

**Developed for Masjid Muhammad Al-Fateh**