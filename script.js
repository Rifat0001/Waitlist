// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;

            // Toggle active class
            accordionItem.classList.toggle('active');

            // Show/hide content
            const content = accordionItem.querySelector('.accordion-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // "Read More" functionality
    function toggleReadMore() {
        const contentDiv = document.getElementById('read-me-div');
        const readMoreSpans = document.querySelectorAll('.readmore'); // Select all buttons with 'readmore' class

        if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
            contentDiv.style.display = 'block';
            contentDiv.style.marginBottom = '20px'; // Add margin-bottom
            readMoreSpans.forEach(span => span.textContent = 'Close'); // Update text for all buttons
        } else {
            contentDiv.style.display = 'none';
            contentDiv.style.marginBottom = '0'; // Remove margin-bottom
            readMoreSpans.forEach(span => span.textContent = 'Read more'); // Update text for all buttons
        }
    }

    // Add event listener to all buttons with the 'readmore' class
    document.querySelectorAll('.readmore').forEach(button => {
        button.addEventListener('click', toggleReadMore);
    });
    // "Read More" functionality rifat


    // Function to toggle the visibility of the div
    // Function to toggle the visibility of the div
    // Function to toggle the visibility of the div
    function toggleRifat() {
        const contentDiv = document.getElementById('rifat-me');  // Get the div to toggle
        const rifatButton = document.querySelector('.rifat');    // Get the button text

        // Check if the div is currently hidden or not
        if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
            contentDiv.style.display = 'block';  // Show the div
            rifatButton.textContent = 'Close';   // Change the button text to 'Close'
        } else {
            contentDiv.style.display = 'none';   // Hide the div
            rifatButton.textContent = 'Rifat';   // Change the button text back to 'Rifat'
        }
    }

    // Ensure DOM is fully loaded before adding event listener
    document.addEventListener('DOMContentLoaded', () => {
        // Add event listener to the button with the class 'rifat'
        document.querySelector('.rifat').addEventListener('click', toggleRifat);
    });



    // "Notify Me" functionality
    const notifyButton = document.getElementById('notify-btn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const modal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    // Event listener for Notify Me button
    if (notifyButton) {
        notifyButton.addEventListener('click', () => {
            // Get input values
            const name = nameInput.value;
            const email = emailInput.value;

            // Log values to console
            console.log(`Name: ${name}, Email: ${email}`);

            // Clear the input fields
            nameInput.value = '';
            emailInput.value = '';

            // Show modal
            modal.style.display = 'block';
        });
    }

    // Event listener for closing the modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
