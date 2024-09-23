// Function to display an alert when the header is clicked
document.querySelector('header').addEventListener('click', () => {
    alert('Header clicked!');
});

// Function to smoothly scroll to section when a nav link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle form switching
document.addEventListener('DOMContentLoaded', function() {
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const loginSection = document.getElementById('login');
    const signupSection = document.getElementById('signup');
    
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });
});
