// THE BEAUTY CLINIC JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // FAQ ACCORDION FUNCTIONALITY

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;

            const isOpen =
                question.getAttribute("aria-expanded") === "true";

            faqQuestions.forEach(function (otherQuestion) {

                otherQuestion.setAttribute("aria-expanded", "false");

                otherQuestion.nextElementSibling.hidden = true;

            });

            if (!isOpen) {

                question.setAttribute("aria-expanded", "true");

                answer.hidden = false;

            }

        });

    });


    // SERVICE SEARCH, FILTER AND SORT FUNCTIONALITY

    const searchInput = document.getElementById("serviceSearch");

    const categoryFilter = document.getElementById("categoryFilter");

    const sortServices = document.getElementById("sortServices");

    const serviceCards = document.querySelectorAll(".service-card");

    const serviceCount = document.getElementById("serviceCount");

    const noServices = document.getElementById("noServices");


    if (searchInput && categoryFilter) {

        // Save the original order of services.

        const serviceSections = document.querySelectorAll(
            "#hairstyles, #nails, #extras"
        );

        const originalOrder = new Map();

        serviceSections.forEach(function (section) {

            originalOrder.set(
                section,
                Array.from(section.querySelectorAll(".service-card"))
            );

        });


        // SORT SERVICES BY PRICE

        function sortServiceCards() {

            const sortOption = sortServices
                ? sortServices.value
                : "default";

            serviceSections.forEach(function (section) {

                const cards = Array.from(
                    section.querySelectorAll(".service-card")
                );

                if (sortOption === "default") {

                    const originalCards = originalOrder.get(section);

                    originalCards.forEach(function (card) {

                        section.appendChild(card);

                    });

                } else {

                    cards.sort(function (a, b) {

                        const priceA = Number(a.dataset.price);

                        const priceB = Number(b.dataset.price);

                        if (sortOption === "low-high") {

                            return priceA - priceB;

                        }

                        if (sortOption === "high-low") {

                            return priceB - priceA;

                        }

                        return 0;

                    });

                    cards.forEach(function (card) {

                        section.appendChild(card);

                    });

                }

            });

        }


        // FILTER SERVICES

        function filterServices() {

            const searchText = searchInput.value.toLowerCase().trim();

            const selectedCategory = categoryFilter.value;

            let visibleServices = 0;

            serviceCards.forEach(function (card) {

                const serviceName = card.textContent.toLowerCase();

                const serviceCategory = card.getAttribute("data-category");

                const matchesSearch = serviceName.includes(searchText);

                const matchesCategory =
                    selectedCategory === "all" ||
                    serviceCategory === selectedCategory;

                if (matchesSearch && matchesCategory) {

                    card.hidden = false;

                    visibleServices++;

                } else {

                    card.hidden = true;

                }

            });


            // UPDATE SERVICE COUNT

            serviceCount.textContent =
                "Showing " + visibleServices + " service(s).";


            // DISPLAY MESSAGE IF NO SERVICES MATCH

            noServices.hidden = visibleServices !== 0;

        }


        // SEARCH WHEN THE VISITOR TYPES

        searchInput.addEventListener("input", filterServices);


        // FILTER WHEN THE VISITOR SELECTS A CATEGORY

        categoryFilter.addEventListener("change", filterServices);


        // SORT WHEN THE VISITOR SELECTS A PRICE ORDER

        if (sortServices) {

            sortServices.addEventListener("change", function () {

                sortServiceCards();

                filterServices();

            });

        }

        // Apply the initial filter.

        filterServices();

    }


    // IMAGE GALLERY AND LIGHTBOX

    const galleryImages = document.querySelectorAll(".gallery-image");

    const lightbox = document.getElementById("imageLightbox");

    const lightboxImage = document.getElementById("lightboxImage");

    const lightboxCaption = document.getElementById("lightboxCaption");

    const closeLightbox = document.getElementById("closeLightbox");


    if (lightbox && lightboxImage && closeLightbox) {

        // OPEN IMAGE WHEN CLICKED

        galleryImages.forEach(function (image) {

            function openImage() {

                lightboxImage.src = image.src;

                lightboxImage.alt = image.alt;

                lightboxCaption.textContent = image.alt;

                lightbox.showModal();

            }


            image.addEventListener("click", openImage);


            // ALLOW KEYBOARD USERS TO OPEN IMAGES

            image.addEventListener("keydown", function (event) {

                if (event.key === "Enter" || event.key === " ") {

                    event.preventDefault();

                    openImage();

                }

            });

        });


        // CLOSE IMAGE USING THE CLOSE BUTTON

        closeLightbox.addEventListener("click", function () {

            lightbox.close();

        });


        // CLOSE WHEN CLICKING OUTSIDE THE IMAGE

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.close();

            }

        });

    }


    // CONTACT FORM VALIDATION AND EMAIL FUNCTIONALITY

    const contactForm = document.getElementById("contactForm");

    const sendButton = document.getElementById("sendContactMessage");


    if (contactForm && sendButton) {

        sendButton.addEventListener("click", function () {

            // VALIDATE THE FORM

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }


            // GET VISITOR INFORMATION

            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const phone = document.getElementById("phone").value.trim();

            const subject = document.getElementById("subject").value.trim();

            const message = document.getElementById("message").value.trim();

            const formMessage = document.getElementById("formMessage");


            // PREPARE EMAIL INFORMATION

            const emailSubject = encodeURIComponent(subject);

            const emailBody = encodeURIComponent(

                "Name: " + name +
                "\nEmail: " + email +
                "\nPhone: " + phone +
                "\n\nMessage:\n" + message

            );


            const mailtoLink =
                "mailto:preciousramodipa19@gmail.com" +
                "?subject=" + emailSubject +
                "&body=" + emailBody;


            // OPEN EMAIL APPLICATION

            window.open(mailtoLink, "_blank");


            formMessage.textContent =
                "Your message has been prepared. Please send it using your email application.";

        });

    }

});


// ENQUIRY FORM AND PRICE ESTIMATOR

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    const selectedService = document.getElementById("selectedService");

    const estimatedPrice = document.getElementById("estimatedPrice");

    const submitEnquiry = document.getElementById("submitEnquiry");

    const enquiryMessage = document.getElementById("enquiryMessage");


    // UPDATE THE ESTIMATED PRICE

    if (selectedService && estimatedPrice) {

        selectedService.addEventListener("change", function () {

            const selectedOption =
                selectedService.options[selectedService.selectedIndex];

            const price = selectedOption.getAttribute("data-price");

            if (price) {

                estimatedPrice.textContent = "R" + price;

            } else {

                estimatedPrice.textContent = "Please select a service.";

            }

        });

    }


    // SUBMIT ENQUIRY

    if (enquiryForm && submitEnquiry) {

        submitEnquiry.addEventListener("click", function () {

            // VALIDATE ENQUIRY FORM

            if (!enquiryForm.checkValidity()) {

                enquiryForm.reportValidity();

                return;

            }


            // GET CUSTOMER INFORMATION

            const name =
                document.getElementById("customerName").value.trim();

            const email =
                document.getElementById("customerEmail").value.trim();

            const phone =
                document.getElementById("customerPhone").value.trim();

            const service = selectedService.value;

            const option =
                selectedService.options[selectedService.selectedIndex];

            const price = option.getAttribute("data-price");

            const message =
                document.getElementById("customerMessage").value.trim();


            // PREPARE EMAIL SUBJECT

            const subject = encodeURIComponent(
                "Service Enquiry - " + service
            );


            // PREPARE EMAIL BODY

            const body = encodeURIComponent(

                "Customer Name: " + name +
                "\nEmail Address: " + email +
                "\nPhone Number: " + phone +
                "\nSelected Service: " + service +
                "\nEstimated Price: R" + price +
                "\n\nAdditional Information:\n" + message

            );


            // DISPLAY SUCCESS MESSAGE

            enquiryMessage.textContent =
                "Your enquiry is prepared. Please send it using Gmail.";


            // OPEN GMAIL WITH THE ENQUIRY DETAILS

            const gmailLink =
                "https://mail.google.com/mail/?view=cm&fs=1" +
                "&to=preciousramodipa19@gmail.com" +
                "&su=" + subject +
                "&body=" + body;

            window.open(gmailLink, "_blank");

        });

    }

});
// DYNAMIC CONTENT LOADING

document.addEventListener("DOMContentLoaded", function () {

    const tipsContainer = document.getElementById("tipsContainer");

    // Check whether the tips section exists.

    if (tipsContainer) {

        // Load tips from the JSON file.

        fetch("data/featured-tips.json")

            .then(function (response) {

                if (!response.ok) {

                    throw new Error("Unable to load tips.");

                }

                return response.json();

            })

            .then(function (tips) {

                // Clear the loading message.

                tipsContainer.innerHTML = "";

                // Display each tip dynamically.

                tips.forEach(function (tip) {

                    const article = document.createElement("article");

                    article.classList.add("tip-card");

                    const heading = document.createElement("h3");

                    heading.textContent = tip.title;

                    const category = document.createElement("p");

                    category.textContent = tip.category;

                    const description = document.createElement("p");

                    description.textContent = tip.description;

                    article.appendChild(heading);

                    article.appendChild(category);

                    article.appendChild(description);

                    tipsContainer.appendChild(article);

                });

            })

            .catch(function (error) {

                tipsContainer.textContent =
                    "Hair and nail care tips are currently unavailable.";

                console.error(error);

            });

    }

});
// =================================
//  SCROLL FADE-IN ANIMATION
// =================================

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("main section");

    sections.forEach(function (section) {
        section.classList.add("fade-in-section");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });

    } else {

        sections.forEach(function (section) {
            section.classList.add("visible");
        });

    }

});