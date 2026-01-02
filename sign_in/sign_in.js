document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // For demo purposes, check against hardcoded values
    if (username === 'student' && password === 'password') {
        alert('Sign in successful!');
        // Redirect to main app page (placeholder)
        // window.location.href = '../main/index.html';
    } else {
        alert('Invalid username or password.');
    }
}); javascript