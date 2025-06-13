document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openMenuIcon = document.getElementById('open-menu');
    const closeMenuIcon = document.getElementById('close-menu');
    const navbar = document.getElementById('navbar');

    mobileMenuButton.addEventListener('click', function () {
        if (mobileMenu.style.display === 'none') {
            mobileMenu.style.display = 'block';
            openMenuIcon.style.display = 'none';
            closeMenuIcon.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
            openMenuIcon.style.display = 'block';
            closeMenuIcon.style.display = 'none';
        }

        // Toggle shadow based on mobile menu state
        if (mobileMenu.style.display === 'block') {
            navbar.classList.remove('shadow-md'); // Remove shadow when menu is open
        } else {
            navbar.classList.add('shadow-md'); // Add shadow when menu is closed
        }
    });
});

// Function to handle scroll event (optional - for hiding navbar on scroll)

