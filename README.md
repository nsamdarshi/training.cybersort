# Cybersort Training Landing Page

A premium, conversion-optimized landing page for Cybersort's Cyber Safety & Fraud Prevention Workshop.

## 🎨 Design Features

- **Dark Premium Theme**: Purple-blue gradient color scheme matching cybersort.in
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Smooth Animations**: Scroll-triggered reveals, hover effects, and micro-interactions
- **Mobile-First Design**: Fully responsive with sticky mobile CTA
- **Performance Optimized**: Minimal dependencies, fast load times

## 📁 File Structure

```
cybersort-training/
├── index.html          # Main landing page
├── styles.css          # Premium dark theme styles
├── script.js           # Interactive features & analytics
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Basic Setup

1. Upload all files to your web server at `training.cybersort.in`
2. Update WhatsApp number in `index.html` (search for `919876543210`)
3. Update workshop dates and times
4. Test all CTA buttons

### 2. WhatsApp Integration

Replace the placeholder phone number in ALL WhatsApp links:

```html
<!-- Find and replace -->
https://wa.me/919876543210
<!-- With your actual number -->
https://wa.me/91XXXXXXXXXX
```

Locations to update:
- Hero CTA section
- Registration section
- Final CTA section
- Footer contact

### 3. Payment Gateway Setup (Razorpay)

#### Step 1: Create Razorpay Account
- Sign up at https://razorpay.com
- Complete KYC verification
- Get your API keys

#### Step 2: Create Payment Button
1. Go to Razorpay Dashboard → Payment Links/Buttons
2. Create new button for ₹999
3. Customize button text: "Register Now - Pay ₹999"
4. Copy the button code

#### Step 3: Replace CTA Buttons

Replace this section in `index.html`:

```html
<!-- Current code -->
<a href="#register" class="btn btn-primary btn-large btn-glow">
    Register Now - Pay ₹999
    <span class="btn-arrow">→</span>
</a>

<!-- Replace with Razorpay button wrapped in styled container -->
<div class="btn btn-primary btn-large btn-glow" style="cursor: pointer;">
    <script src="https://checkout.razorpay.com/v1/payment-button.js" 
            data-payment_button_id="pl_YOUR_BUTTON_ID" async>
    </script>
</div>
```

Or create a custom Razorpay integration:

```html
<button class="btn btn-primary btn-large btn-glow" id="rzp-button">
    Register Now - Pay ₹999
    <span class="btn-arrow">→</span>
</button>

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
document.getElementById('rzp-button').onclick = function(e){
    e.preventDefault();
    var options = {
        "key": "YOUR_RAZORPAY_KEY_ID",
        "amount": "99900", // 999 * 100 (in paise)
        "currency": "INR",
        "name": "Cybersort Training",
        "description": "Cyber Safety Workshop Registration",
        "image": "https://cybersort.in/logo.png",
        "handler": function (response){
            // Send to your backend or WhatsApp
            window.location.href = "https://wa.me/91XXXXXXXXXX?text=Payment%20successful!%20Payment%20ID:%20" + response.razorpay_payment_id;
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "theme": {
            "color": "#6B46C1"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}
</script>
```

### 4. Update Workshop Details

Edit the details section in `index.html`:

```html
<!-- Update these values -->
<div class="detail-value">Saturday, 15 March 2026 / Sunday, 16 March 2026</div>
<div class="detail-value">10:00 AM - 1:00 PM IST / 3:00 PM - 6:00 PM IST</div>
```

### 5. Customize Seat Count

Update the urgency badge:

```html
<div class="urgency-badge">
    <span class="pulse-dot"></span>
    Only 12 seats remaining <!-- Change this number -->
</div>
```

And mobile CTA:

```html
<div class="mobile-cta-seats">Only 12 seats left</div>
```

## 🎨 Customization Guide

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-purple: #6B46C1;    /* Primary purple */
    --accent-blue: #2563EB;      /* Primary blue */
    --accent-cyan: #06B6D4;      /* Accent cyan */
    /* Change these to match your brand */
}
```

### Fonts

Current fonts: **Outfit** (primary) and **Space Mono** (monospace)

To change:

```html
<!-- In index.html <head> -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

```css
/* In styles.css */
:root {
    --font-primary: 'YOUR_FONT', sans-serif;
}
```

### Logo

Replace the emoji logo with your actual logo:

```html
<!-- Current -->
<div class="logo">
    <span class="logo-icon">🛡️</span>
    <span class="logo-text">Cybersort<span class="logo-sub">Training</span></span>
</div>

<!-- Replace with -->
<div class="logo">
    <img src="logo.png" alt="Cybersort Training" height="40">
    <span class="logo-text">Cybersort<span class="logo-sub">Training</span></span>
</div>
```

## 📊 Analytics Setup

### Google Analytics 4

Add before `</head>` in `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Events are already tracked in `script.js`:
- CTA clicks
- FAQ interactions
- WhatsApp clicks
- Scroll depth

### Facebook Pixel

Add before `</head>`:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

Track conversions:

```javascript
// Add to script.js after successful payment
fbq('track', 'Purchase', {
    value: 999,
    currency: 'INR'
});
```

## 🔗 Integration Options

### Option 1: WhatsApp Only

- Users click CTA → WhatsApp opens with pre-filled message
- You confirm manually and send payment link
- Simple, no technical setup

### Option 2: WhatsApp + Razorpay

- Users click CTA → Razorpay payment modal opens
- After payment → Auto-redirect to WhatsApp with payment ID
- Best balance of automation and personal touch

### Option 3: Full Automation

- Payment → Webhook → Send email/SMS automatically
- Requires backend server
- Most complex but fully automated

**Recommended: Option 2** for best conversion + simplicity

## 📱 Mobile Testing Checklist

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check sticky mobile CTA visibility
- [ ] Verify payment flow on mobile
- [ ] Test WhatsApp link opening
- [ ] Check scroll performance
- [ ] Verify all sections are readable
- [ ] Test FAQ accordion

## ⚡ Performance Optimization

### Already Implemented
✅ Minimal external dependencies
✅ CSS animations over JavaScript
✅ Lazy loading for images
✅ Optimized font loading
✅ Compressed file sizes

### Additional Optimizations

1. **Image Optimization**
   - Use WebP format
   - Compress to <100KB per image
   - Use `loading="lazy"` attribute

2. **Minification**
   ```bash
   # Minify CSS
   npx csso styles.css -o styles.min.css
   
   # Minify JS
   npx terser script.js -o script.min.js
   ```

3. **CDN Setup**
   - Use Cloudflare for caching
   - Enable auto-minification
   - Enable Brotli compression

4. **Lighthouse Score Target**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

## 🔒 Security Checklist

- [ ] Use HTTPS only
- [ ] Validate all form inputs
- [ ] Sanitize payment webhook data
- [ ] Add CAPTCHA to contact forms (if added)
- [ ] Set proper CORS headers
- [ ] Keep dependencies updated
- [ ] Use Content Security Policy headers

## 📧 Email Automation (Optional)

### Using Razorpay Webhooks

Create a simple backend to handle payment confirmations:

```javascript
// example webhook handler (Node.js)
app.post('/webhook', (req, res) => {
    const secret = 'YOUR_WEBHOOK_SECRET';
    const signature = req.headers['x-razorpay-signature'];
    
    // Verify signature
    const generated = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(req.body))
        .digest('hex');
    
    if (generated === signature) {
        // Send confirmation email
        sendEmail({
            to: req.body.payload.payment.entity.email,
            subject: 'Workshop Registration Confirmed',
            html: confirmationTemplate
        });
    }
    
    res.json({ status: 'ok' });
});
```

### Email Template

Create `confirmation-email.html` with:
- Workshop details
- Zoom/Meet link
- Calendar invite (.ics file)
- Preparation checklist
- Support contact

## 🎯 Conversion Rate Optimization Tips

1. **A/B Test Headlines**
   - Current: "Your Digital Life Is Under Attack"
   - Alternative: "Don't Become The Next Cyber Fraud Victim"
   - Test which performs better

2. **Social Proof**
   - Add testimonials from beta batch
   - Show "X people registered today"
   - Add trust badges

3. **Urgency Tactics**
   - Real-time seat counter
   - Early bird deadline timer
   - "Next batch in 2 months" messaging

4. **Exit Intent Popup**
   - Offer 10% discount code
   - Ask "What's holding you back?"
   - Capture email for follow-up

## 📞 Support & Troubleshooting

### Common Issues

**FAQ accordion not working?**
- Check console for JavaScript errors
- Ensure `script.js` is loaded

**Payment button not showing?**
- Verify Razorpay script is loaded
- Check API key is correct
- Test in incognito mode

**WhatsApp link not opening on iOS?**
- Use `https://wa.me/` format (not `whatsapp://`)
- Ensure number has country code

**Mobile CTA not sticky?**
- Check viewport height
- Test on actual device, not just emulator

## 🚀 Deployment

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/cybersort-training
git push -u origin main
```

Enable GitHub Pages in repo settings

### Netlify
1. Drag and drop folder to netlify.com
2. Configure custom domain
3. Done!

### cPanel/Traditional Hosting
1. Upload files via FTP
2. Point subdomain to folder
3. Ensure mod_rewrite is enabled

## 📈 Post-Launch Checklist

Week 1:
- [ ] Monitor analytics daily
- [ ] Track conversion rate
- [ ] A/B test headlines
- [ ] Respond to all WhatsApp inquiries within 2 hours

Week 2-4:
- [ ] Add testimonials
- [ ] Create retargeting ads
- [ ] Email nurture campaign
- [ ] Social media promotion

Ongoing:
- [ ] Update seat count
- [ ] Refresh workshop dates
- [ ] Add new FAQs based on questions
- [ ] Optimize based on data

## 📝 License

© 2026 Cybersort. All rights reserved.

---

**Need Help?**
- Email: training@cybersort.in
- WhatsApp: +91-XXXXXXXXXX
- Visit: https://cybersort.in

Built with ❤️ for digital safety awareness.
