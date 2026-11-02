// ======================================
// THE BEAUTY CLINIC - JAVASCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;
            const isOpen = question.getAttribute("aria-expanded") === "true";

            // Close all FAQ answers
            faqQuestions.forEach(function (otherQuestion) {
                otherQuestion.setAttribute("aria-expanded", "false");

                const otherAnswer = otherQuestion.nextElementSibling;
                otherAnswer.hidden = true;
            });

            // Open the selected answer if it was previously closed
            if (!isOpen) {
                question.setAttribute("aria-expanded", "true");
                answer.hidden = false;
            }

        });

    });

});