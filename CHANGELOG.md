
# CHANGELOG – THE BEAUTY CLINIC

This file records the major changes, improvements and updates made to The Beauty Clinic website throughout its development.

---

# Version 3.0.0

**Date:** 2 November 2026

### JavaScript Functionality, Interactivity and SEO – Part 3

The website was further developed by introducing JavaScript functionality, interactive features, dynamic content and search engine optimisation techniques.

### JavaScript Functionality Added

A JavaScript file was created:

`js/script.js`

The following functionality was implemented:

* Interactive FAQ accordion on the About Us page.
* Service search functionality.
* Service category filtering.
* Service price sorting.
* Image gallery with a lightbox.
* Contact form validation.
* Enquiry form validation.
* Estimated service price calculations.
* Dynamic content loading using JavaScript.
* Scroll-based fade-in effects.

### Dynamic Content

A JSON file was created:

`data/featured-tips.json`

JavaScript Fetch functionality was used to load hair and nail care tips dynamically from the JSON file.

This allows the website to display additional content without manually adding every tip to the HTML page.

### Image Gallery

An interactive image gallery was added to the Services page.

The gallery includes:

* Clickable images.
* Keyboard accessibility.
* Lightbox functionality.
* Image captions.
* A close button.

### FAQ Accordion

An interactive FAQ section was added to the About Us page.

Visitors can expand and collapse questions to view additional information.

### Search and Filtering

The Services page was improved by adding:

* A service search field.
* Category filtering for hair, nails and extras.
* Price sorting.
* A service count display.
* A message when no matching services are found.

### Forms and Validation

JavaScript validation was added to the contact and enquiry forms.

The improvements include:

* Checking required fields.
* Validating email input.
* Checking user information.
* Providing feedback when information is missing or invalid.
* Preparing email messages using the mailto and Gmail compose functionality.
* Calculating estimated service prices on the enquiry page.

### SEO Improvements

Search engine optimisation techniques were introduced across the website.

The improvements include:

* Updated page titles.
* Meta descriptions.
* Meta keywords.
* Improved heading structures.
* Descriptive image alternative text.
* Relevant local search terms.
* Improved internal linking.
* Search-friendly page content.

### SEO Files Added

Two additional files were created:

* `robots.txt` – provides instructions for search engine crawlers.
* `sitemap.xml` – lists the website pages for search engine discovery.

### Visual and Animation Improvements

Additional visual improvements were introduced using CSS.

These include:

* Hover effects.
* Smooth transitions.
* Scroll-based fade-in animations.
* Improved interactive element styling.
* Responsive layouts.
* Improved keyboard focus visibility.

### Testing

The website was tested using Microsoft Edge and Visual Studio Code with Live Server.

The following were checked:

* All five website pages load correctly.
* Navigation links work correctly.
* Images display correctly.
* FAQ accordion functions correctly.
* Service search and filtering work.
* Price sorting works.
* Image gallery opens and closes.
* Dynamic care tips load from the JSON file.
* Contact form validation works.
* Enquiry form validation works.
* Estimated service prices are calculated.
* Website layouts display correctly on desktop, tablet and mobile screens.

### Project Structure Updated

The project structure was expanded to include JavaScript, JSON and SEO files.

New files and folders include:

* `enquiry.html`
* `js/script.js`
* `data/featured-tips.json`
* `robots.txt`
* `sitemap.xml`

### Documentation and GitHub

The project documentation was updated to reflect the new website features and technologies.

The latest website changes were also committed and pushed to the GitHub repository.

---

# Version 2.0.0

**Date:** 18 September 2026

### CSS Styling and Responsive Design – Part 2

The website was updated from the HTML-only version by introducing CSS styling and responsive design.

### CSS Styling Added

A shared stylesheet was created:

`css/style.css`

The stylesheet was linked to all four HTML pages.

The following styling was added:

* CSS reset.
* Default font family.
* Font sizes and weights.
* Line height and letter spacing.
* Colour scheme.
* Margins and padding.
* Borders and rounded corners.
* Box shadows.
* Navigation styling.
* Button styling.
* Form styling.
* Table styling.
* Footer styling.
* Image styling.

### Layout Improvements

Modern CSS layout techniques were introduced to improve the organisation of website content.

The following were implemented:

* Flexbox.
* CSS Grid.
* Flexible widths.
* Multi-column layouts.
* Single-column layouts for smaller screens.
* Improved spacing and alignment.

### Navigation Improvements

The navigation menu was styled to provide a consistent appearance across the website.

Interactive states were added using:

* `:hover`
* `:focus`
* `:active`

The navigation layout was also adjusted for smaller screens.

### Service Page Improvements

The Services page was visually improved by:

* Styling the hairstyle sections.
* Styling the nail sections.
* Creating service cards.
* Improving spacing between services.
* Styling service prices.
* Adding image styling.
* Adding hover effects.

### Contact Page Improvements

The Contact page was improved by:

* Styling the contact information.
* Making the Google Maps iframe responsive.
* Styling the opening-hours table.
* Styling the enquiry form.
* Styling form fields.
* Styling submit and reset buttons.
* Adding focus states to form controls.

### Responsive Design

Media queries were added to make the website responsive.

The website was tested at:

* Desktop screen sizes.
* Tablet screen sizes.
* Mobile screen sizes.

The layout changes depending on the available screen width.

### Responsive Units

Relative CSS units were used to improve flexibility.

These include:

* `rem`
* `em`
* `%`

### Responsive Images

Images were styled so that they can resize within their containers and remain suitable for different screen sizes.

The website was tested using Microsoft Edge Developer Tools at different device sizes.

### Testing

The website was tested on desktop, tablet and mobile views.

The following were checked:

* Navigation.
* Logo.
* Text.
* Images.
* Service cards.
* Contact form.
* Opening-hours table.
* Buttons.
* Overall page layout.

### Corrections and Improvements

The following corrections were also made:

* Email links were corrected to use the `mailto:` format.
* Inline table borders were removed so that the table could be styled using CSS.
* Website spacing and alignment were improved.
* Website pages were given a consistent visual design.
* Responsive behaviour was tested and adjusted.

---

# Version 1.0.0

**Date:** 13 August 2026

### Initial Website Development – Part 1

The first complete version of The Beauty Clinic website was developed using HTML5.

The website was created as a multi-page salon website specialising in hairstyles and nail services.

### Home Page

The Home page was created with:

* The Beauty Clinic logo.
* Salon name.
* Salon tagline.
* Salon introduction.
* Hair services overview.
* Nail services overview.
* Special occasion information.
* Reasons to choose the salon.
* Contact information.
* Navigation menu.
* Footer navigation.

### About Us Page

The About Us page was created with:

* About The Beauty Clinic.
* Our Story.
* Our Mission.
* Our Vision.
* Our Values.
* Customer Experience.
* Contact information.

### Services Page

The Services page was created to display the actual services and prices required for the project.

#### Hairstyles Added

* Benny and Betty – R80.
* Ponytail – R150.
* Cornrows – Straight – R100.
* Cornrows – Any Style – R150.
* Straight Up and Back – R190.
* Braids – Short – R150.
* Braids – Medium – R200.
* Braids – Long – R250.
* Lemonade – R250.
* Boho Braids – R250.

#### Manicure Services Added

**Plain**

* Short – R80.
* Medium – R100.
* Long – R120.

**Designs**

* Short – R100.
* Medium – R120.
* Long – R140.

#### Pedicure Services Added

* Plain – R80.
* Design – R100.

#### Extra Services Added

* Soak Off – R100.
* Buff and Shine – R80.

### Contact Page

The Contact page was created with:

* Salon address.
* Telephone number.
* Email address.
* Opening hours.
* Opening-hours table.
* Customer enquiry form.
* Social media links.

### Navigation

A consistent navigation menu was added to all website pages.

The navigation includes:

* Home.
* About Us.
* Services.
* Contact Us.

Footer navigation was also included.

### Logo

A salon logo was added to the website header.

The logo uses an HTML `<img>` element and alternative text.
