# Auto Repair Shop Website

## Project Description
This project is a **web application for an auto repair shop**.  
It provides information about the company, its services, and contact options. Visitors can:
- Learn more about the company.
- Browse offered services.
- Book a service appointment by phone or via a feedback form.

Different implementations of the site are provided:
1. **workshop.html** – A custom HTML & CSS version.  
2. **workshop2.html** – A Bootstrap 5–based responsive version.  
3. **workshop.php** – A PHP version .

---

## Tech Stack
- **Frontend:**
  - HTML5  
  - CSS3
  - Bootstrap 5 (in `workshop2.html`)  
  - JavaScript  

- **Backend:**
  - PHP

--- 

## Features
- Company description section
- Services list with visuals
- Contact section with:
  - Phone call button
  - Feedback form (Name, Email, Phone, Message)
- Responsive design (`workshop2.html` with Bootstrap)
- Styled components with hover effects and responsive media queries

--- 

## How to Run the Project Locally
1. Clone or download this repository:
   ```bash
   git clone https://github.com/e1em9nt/my-projects.git
   ```
2. Navigate to the project folder:
   ```bash
   cd projects/car-repair-workshop
   ```
3. Open one of the HTML files in your browser
4. `workshop.php` requires running in a PHP-enabled server.

---  

## Project Structure
```bash
car-repair-workshop/
│── workshop.html        # Static HTML version
│── workshop2.html       # Bootstrap version
│── workshop.php         # PHP version
│── main.css             # Main stylesheet
│── other.css            # Additional styles (animations, slider)
│── script_ad.js         # JavaScript file (ads/interaction logic)
│── assets/              # Images and icons
```

---

## Improvements & Known Limitations
- **Form Handling:** Currently, the feedback form does not process or store submissions. Needs backend integration.  
- **Accessibility:** Could be improved with ARIA labels, alt text optimization, and keyboard navigation.  
- **Validation:** Client-side JavaScript validation could be added to enhance user experience.  
- **Internationalization:** Currently written in Ukrainian; could be extended for multi-language support.  
- **SEO Optimization:** Add meta descriptions, structured data, and Open Graph tags.  
- **Deployment:** Project can be hosted on GitHub Pages (HTML-only version) or a PHP server for backend support.  

---

## Future Enhancements
- Implement user authentication for appointment tracking  
- Add admin dashboard to manage bookings  
- Connect to a database (MySQL/PostgreSQL) for storing client requests  
- Integrate Google Maps for location display  

