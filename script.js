document.getElementById('loginButton').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
        // Redirect to profile.html
        window.location.href = 'profile.html';
    } else {
        alert('Please fill in both email and password.');
    }
});
