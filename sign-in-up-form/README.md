# Sign In & Sign Up forms

## Description
This project was developed as part of my **Bachelor's Diploma** with the topic "**Using OWASP Top 10 in Frontend Development**". It implements a **client-side registration and sign-in form with a focus on security best practices by incorporating the OWASP Top 10 2021 security controls**. The project addresses common vulnerabilities such as **Cross-Site Scripting (XSS)**, **Security Misconfiguration**, **Vulnerable and Outdated Components**, and **Identification and Authentication Failures**, among others. 
The goal is to ensure that basic user input validation and security mechanisms are implemented directly on the frontend, promoting safe user interactions.

## Tech Stack
- **HTML** - ensures semantic markup and proper element hierarchy, which improves content indexing by browsers and search engines
- **CSS / SCSS** - structure styles according to the **BEM methodology**, leveraging nesting and variables to reduce style duplication and ease maintenance
- **Vanilla JavaScript** - provides complete control over page behavior and user interaction, ensuring that the entire code is custom-built and can be thoroughly scanned for OWASP compliance

This technologies was intentionally chosen to minimize external dependencies and maximize code transparency.

### Tools & Dependencies  
- **@eslint/js** - JavaScript linting
- **@eslint/css** - CSS linting
- **@eslint/json** - JSON linting
- **eslint-plugin-security** - Security-focused linting rules
- **eslint-plugin-no-unsanitized** - Plugin to avoid unsanitized inputs that may lead to XSS
- **Prettier** - Code formatter for maintaining consistent coding style
- **SASS** - Preprocessor to handle CSS with variables and better structure

## Security Testing Tools and Results
### ESLint
**Purpose**: ESLint is a static code analysis tool (SAST) that helps identify and fix problems in CSS, JavaScript and JSON code. It is configured here with security-focused plugins to detect potential vulnerabilities, such as insecure functions, risky patterns, or other security flaws in the codebase.

**Results**: ESLint detected a few warnings related to CSS 'outline' property with unpredictable behavior across different browsers. However, no critical security flaws were found in the code.

### npm audit
**Purpose**: npm audit is used to analyze the project's dependencies for known vulnerabilities (CVE - Common Vulnerabilities and Exposures). It performs Software Composition Analysis (SCA) to ensure that the libraries and packages used do not contain known security risks.

**Results**: No vulnerable dependencies or CVEs were detected. This indicates that the project uses up-to-date and secure packages, ensuring that third-party libraries do not introduce any security risks.

### OWASP ZAP (Zed Attack Proxy)
**Purpose**: OWASP ZAP is a dynamic application security testing (DAST) tool designed to find security vulnerabilities in web applications. It performs active scanning to identify common web application vulnerabilities like XSS, SQL injection, and security misconfigurations by interacting with the deployed web app.

**Results**:
- 9 alerts were found in total:
  - **4 medium risk**
  - **1 low risk**
  - **4 informational alerts**
  
**Notable Findings**:
  - Missing **Anti-CSRF tokens** for protecting against Cross-Site Request Forgery attacks.
  - Insufficient details in the **Content Security Policy (CSP)**, which can help prevent XSS attacks.
  - Missing security headers such as **Anti-clickjacking (X-Frame-Options)** and **X-Content-Type-Options**, which help prevent clickjacking attacks and ensure proper content type handling.
  
While these issues were identified in the client-side code, they mostly stem from server-side configuration, which can be adjusted in the server settings for more robust protection.

## How to Run the Project
To run this project on your local machine, follow these steps:

1. **Clone the repository and navigate to the project folder:**
```bash
git clone https://github.com/e1em9nt/projects.git
cd sign-in-up-form
```
2. **Install dependencies:**  
This project uses Node.js and npm for managing dependencies
```bash
npm install
```
3. **Run the application:**  
- To build the sign-in form CSS:
  ```bash
  npm run build:signin
  ```
- To build the sign-up form CSS:
  ```bash
  npm run build:signup
  ```
- Alternatively, you can run the monitor command to keep an eye on changes to the SCSS files:
  ```bash
  npm run monitor
  ```
4. **Open the forms:**
 - `signInForm.html` for the sign-in form;
 - `signUpForm.html` for the sign-up form.

## Project structure
```bash
sign-in-up-form/
│── eslint.config.mjs        # ESLint configuration for linting JS, CSS, and JSON files
│── package.json             # Project metadata and dependencies
│── package-lock.json        # Lock file for exact dependency versions
│── src/
│   ├── css/                 # Folder for CSS files
│   │   ├── signInForm.css   # CSS file for sign-in form
│   │   └── signUpForm.css   # CSS file for sign-up form
│   ├── html/                # Folder for HTML files
│   │   ├── signInForm.html  # HTML file for sign-in form
│   │   └── signUpForm.html  # HTML file for sign-up form
│   ├── scss/                # Folder for SCSS files
│   │   ├── _base.scss       # Base SCSS file with common styles
│   │   ├── signInForm.scss  # SCSS file for sign-in form styles
│   │   └── signUpForm.scss  # SCSS file for sign-up form styles
│   └── form.js              # JavaScript file for form validation and logic
```

## Known Limitations & Potential Improvements
- **Security Headers**: The implementation of Content Security Policy (CSP) in HTML is commented out (to allow the code to run smoothly on platforms like GitHub Pages or on localhost without issues related to external resources). For production environments, it is recommended to enable CSP to enhance security.
- **Form Validation**: While the forms include basic client-side validation, it is important to note that these checks should be mirrored on the server side for full protection.  
- **Error Handling**: The forms currently only display basic error messages. It would be beneficial to enhance this with more specific, user-friendly messages and handle edge cases like network issues during submission.
- **Input Sanitization**: Client-side sanitization can be further improved. Consider integrating libraries such as DOMPurify for additional protection against XSS.
