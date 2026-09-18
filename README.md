# THE BEAUTY CLINIC WEBSITE

## 1. Project Overview

The Beauty Clinic website is a multi-page website created for a professional beauty salon that specialises in hair and nail services.

The purpose of the website is to provide customers with useful information about The Beauty Clinic, including the services offered, service prices, salon information and contact details.

The website was developed using HTML5. CSS and JavaScript were excluded from this version of the project.

---

## 2. Website Objectives

The main objectives of The Beauty Clinic website are:

- To introduce The Beauty Clinic to potential customers.
- To provide information about the salon.
- To display the hair and nail services offered.
- To provide clear service prices.
- To provide contact information.
- To display the salon's opening hours.
- To provide a customer enquiry form.
- To create an easy-to-use navigation system.
- To demonstrate the use of HTML5 semantic elements.
- To create a logical and well-organised website structure.
- To provide relevant and detailed content.

---

## 3. Website Pages

The website consists of four main HTML pages.

### Home Page - index.html

The Home page introduces The Beauty Clinic and provides an overview of the salon.

The page includes:

- The Beauty Clinic logo
- Salon name
- Salon tagline
- Introduction to the salon
- Hair services overview
- Nail services overview
- Special occasion services
- Reasons to choose The Beauty Clinic
- Contact information
- Navigation links

---

### About Us Page - about.html

The About Us page provides information about The Beauty Clinic.

The page includes:

- About The Beauty Clinic
- The salon's story
- Mission statement
- Vision statement
- Business values
- Customer experience information
- Contact information

---

### Services Page - services.html

The Services page provides detailed information about the hairstyles and nail services offered by The Beauty Clinic.

#### Hairstyles

The following hairstyles are included:

- Benny and Betty - R80
- Ponytail - R150
- Cornrows - Straight - R100
- Cornrows - Any Style - R150
- Straight Up and Back - R190
- Braids - Short - R150
- Braids - Medium - R200
- Braids - Long - R250
- Lemonade - R250
- Boho Braids - R250

#### Nails

### Manicure - Plain

- Short - R80
- Medium - R100
- Long - R120

### Manicure - Designs

- Short - R100
- Medium - R120
- Long - R140

### Pedicure

- Plain - R80
- Design - R100

### Extras

- Soak Off - R100
- Buff and Shine - R80

---

### Contact Page - contact.html

The Contact page provides information about how customers can contact The Beauty Clinic.

The page includes:

- Salon address
- Telephone number
- Email address
- Opening hours
- Opening hours table
- Customer enquiry form
- Social media links

---

## 4. Technologies Used

The website was developed using:

- HTML5

---

## 5. HTML5 Semantic Elements

The website uses HTML5 semantic elements to create a logical and meaningful structure.

The semantic elements used include:

- `<header>` - identifies the header of the webpage.
- `<nav>` - contains the website navigation.
- `<main>` - contains the main content.
- `<section>` - divides content into logical sections.
- `<article>` - contains individual pieces of related content.
- `<aside>` - contains additional information.
- `<footer>` - contains footer information.
- `<address>` - displays contact information.
- `<form>` - creates the enquiry form.
- `<fieldset>` - groups related form fields.
- `<legend>` - identifies groups of form controls.
- `<table>` - displays structured opening-hour information.
- `<thead>` - contains table headings.
- `<tbody>` - contains table data.
- `<th>` - identifies table headings.
- `<td>` - contains table information.

---

## 6. Website Navigation

The website has a consistent navigation menu on every page.

The main navigation contains:

- Home
- About Us
- Services
- Contact Us

The navigation allows users to move between the different pages easily.

The Services page also contains links to relevant sections of the page.

---

## 7. Contact Form

The Contact page contains an enquiry form.

Visitors can enter:

- Name
- Email address
- Phone number
- Subject
- Message

The form contains:

- Text input
- Email input
- Telephone input
- Textarea
- Submit button
- Reset button

Required fields are used to ensure that important information is provided.

---

## 8. Logo

The Beauty Clinic logo is included in the header of the website.

The logo is displayed using an HTML `<img>` element.

The image includes alternative text using the `alt` attribute to improve accessibility.

The logo can be displayed as a circular image using:

---

## 9. CSS Styling - Part 2

For Part 2 of the project, CSS was introduced to improve the visual appearance, layout and usability of The Beauty Clinic website.

A separate CSS file was created:

`css/style.css`

The CSS file is linked to all four HTML pages so that the website has a consistent design.

The CSS styling includes:

* A CSS reset
* A default font family
* Font sizes
* Font weights
* Line height
* Letter spacing
* Background colours
* Text colours
* Margins and padding
* Borders
* Border radius
* Box shadows
* Button styling
* Navigation styling
* Image styling
* Form styling
* Table styling
* Footer styling

---

## 10. Typography

Typography was added to make the website easier to read and to create a consistent visual appearance.

The CSS uses properties such as:

* `font-family`
* `font-size`
* `font-weight`
* `line-height`
* `letter-spacing`

Relative units such as `rem` are used for font sizes and spacing where appropriate.

Different heading sizes are used to create a clear hierarchy between the main headings, section headings and normal paragraph text.

---

## 11. Layout and CSS Techniques

The website uses modern CSS layout techniques to organise the content.

### Flexbox

Flexbox is used for elements such as the navigation menu and other areas where content needs to be arranged horizontally or vertically.

The following properties are used where appropriate:

* `display: flex`
* `flex-direction`
* `justify-content`
* `align-items`
* `gap`

### CSS Grid

CSS Grid is used to arrange service cards and other content into columns.

The number of columns changes depending on the available screen size.

This allows the website to display multiple service items on larger screens while allowing the content to stack on smaller screens.

---

## 12. Visual Styling

CSS visual styling was added throughout the website to create a consistent salon-themed appearance.

The styling includes:

* Background colours
* Text colours
* Borders
* Rounded corners
* Box shadows
* Spacing between sections
* Styled navigation links
* Styled buttons
* Styled service cards
* Responsive images

Interactive states were also added using:

* `:hover`
* `:focus`
* `:active`

These states provide visual feedback when users interact with navigation links and buttons.

---

## 13. Responsive Web Design

The website was designed to work on different screen sizes, including desktop computers, tablets and mobile phones.

CSS media queries were used to modify the layout depending on the screen width.

### Desktop

On larger screens, content can be displayed in multiple columns where appropriate.

### Tablet

On tablet-sized screens, the number of columns is reduced so that the content remains readable and well organised.

### Mobile

On smaller screens, content is changed to a single-column layout where necessary.

The navigation menu is also adjusted for smaller screens.

The responsive design helps prevent content from becoming too small or extending outside the screen.

---

## 14. Responsive Units

Relative CSS units were used to make the website more flexible.

The website uses:

* `rem` for typography and spacing
* `%` for flexible widths
* `em` where appropriate

Using relative units allows elements to adapt better to different screen sizes.

---

## 15. Responsive Images

Images were styled so that they can resize within their containers without causing horizontal scrolling.

Responsive image techniques were considered when testing the website at different screen sizes.

The images were tested using the browser's developer tools at desktop, tablet and mobile dimensions.

---

## 16. Responsive Testing

The website was tested using Microsoft Edge and the browser's Developer Tools.

The responsive design was tested at different device sizes, including:

* Desktop view
* Tablet view
* Mobile view

The following aspects were checked:

* Navigation
* Logo
* Text
* Service cards
* Images
* Contact form
* Tables
* Buttons
* Overall page layout

The website remained usable and readable across the tested screen sizes.

Screenshots were taken during the responsive testing process as evidence of the different layouts.

---

## 17. Accessibility

Accessibility was considered during the development of the website.

The website includes:

* Alternative text for images
* Semantic HTML5 elements
* Labels for form controls
* Clear headings
* Readable text
* Visible focus states for interactive elements

These features help make the website easier for users to understand and navigate.

---

## 18. Part 2 Improvements

The following improvements were made during Part 2:

* Added a complete CSS stylesheet.
* Added a CSS reset.
* Added consistent typography.
* Added a consistent colour scheme.
* Improved spacing and alignment.
* Added Flexbox layouts.
* Added CSS Grid layouts.
* Added service card styling.
* Added navigation styling.
* Added hover effects.
* Added focus and active states.
* Added responsive layouts.
* Added mobile and tablet media queries.
* Improved image responsiveness.
* Improved contact form styling.
* Improved table styling.
* Improved footer styling.
* Tested the website on desktop, tablet and mobile screen sizes.
* Corrected the email links so that they use the `mailto:` format.
* Removed inline table borders so that the table can be styled using CSS.

---

## 19. Project Structure

The current project structure is:

```text
The Beauty Clinic/
│
├── index.html
├── about.html
├── services.html
├── contact.html
│
├── css/
│   └── style.css
│
├── images/
│   ├── logo.webp
│   ├── hair1.webp
│   ├── hair2.webp
│   ├── nail1.webp
│   ├── nail1.jpg
│   └── nail2.webp
│
├── README.md
├── CHANGELOG.md
└── REFERENCE.md
```

---

## 20. Part 2 Testing Summary

The Beauty Clinic website was tested across desktop, tablet and mobile screen sizes.

The testing confirmed that:

* The pages load correctly.
* Navigation links work.
* Images display correctly.
* Service information remains readable.
* The layout adapts to smaller screens.
* Content does not extend unnecessarily outside the screen.
* Forms and buttons remain usable.
* The website maintains a consistent appearance across the pages.

---
