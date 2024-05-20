document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById('imageModal');

    // Ensure modal is correctly selected
    console.log(modal); // Check if this prints the modal element

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // Get all buttons with class="flip-button"
    var buttons = document.getElementsByClassName('flip-button');

    // Get the image and caption elements in the modal
    var modalImg = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');

    // Loop through all buttons and attach a click event listener
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            // Get the image path from the data-image attribute
            var imgSrc = this.getAttribute('data-image');
            // Set the modal image source to the clicked button's data-image value
            modalImg.src = imgSrc;
            // Display the modal
            modal.style.display = 'block'; // Ensure modal is displayed
        });
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
