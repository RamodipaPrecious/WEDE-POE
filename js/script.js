// THE BEAUTY CLINIC JAVASCRIPT

document.addEventListener("DOMContentLoaded", function () {

    // Select all FAQ buttons
    const faqQuestions = document.querySelectorAll(".faq-question");

    // Add click functionality to each question
    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;

            // Check whether the selected answer is open
            const isOpen = question.getAttribute("aria-expanded") === "true";

            // Close all FAQ answers
            faqQuestions.forEach(function (otherQuestion) {

                otherQuestion.setAttribute("aria-expanded", "false");

                otherQuestion.nextElementSibling.hidden = true;

            });

            // Open the selected answer if it was closed
            if (!isOpen) {

                question.setAttribute("aria-expanded", "true");

                answer.hidden = false;

            }

        });

    });

});