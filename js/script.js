// THE BEAUTY CLINIC JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {


// FAQ ACCORDION FUNCTIONALITY

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;

        const isOpen = question.getAttribute("aria-expanded") === "true";

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


// SERVICE SEARCH AND FILTER FUNCTIONALITY

const searchInput = document.getElementById("serviceSearch");

const categoryFilter = document.getElementById("categoryFilter");

const serviceCards = document.querySelectorAll(".service-card");

const serviceCount = document.getElementById("serviceCount");

const noServices = document.getElementById("noServices");


// Check whether the service search exists on this page.

if (searchInput && categoryFilter) {

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


        // Update the number of matching services.

        serviceCount.textContent =
            "Showing " + visibleServices + " service(s).";


        // Display a message when no services match.

        noServices.hidden = visibleServices !== 0;

    }


    // Search when the visitor types.

    searchInput.addEventListener("input", filterServices);


    // Filter when the visitor selects a category.

    categoryFilter.addEventListener("change", filterServices);

}


});
