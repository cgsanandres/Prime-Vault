document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameEmailInput = document.getElementById('usernameEmail');
        const passwordInput = document.getElementById('password');

        const usernameEmail = usernameEmailInput.value.trim();
        const password = passwordInput.value.trim();

        if (usernameEmail === '' || password === '') {
            alert('Please enter both your Callsign/Email and Security Code.');
            return;
        }

        console.log('Login attempt with:', { usernameEmail, password });

        window.location.href = 'index.html';
    });

    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('google-login')) {
                alert('Initiating Google Comms login...');
            } else if (button.classList.contains('apple-login')) {
                alert('Initiating Apple Protocols login...');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newCallsignInput = document.getElementById('newCallsign');
        const newEmailInput = document.getElementById('newEmail');
        const newPasswordInput = document.getElementById('newPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        const newCallsign = newCallsignInput.value.trim();
        const newEmail = newEmailInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (newCallsign === '' || newEmail === '' || newPassword === '' || confirmPassword === '') {
            alert('All fields are required to establish your Hangar.');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('Security Codes do not match. Please re-enter.');
            newPasswordInput.value = '';
            confirmPasswordInput.value = '';
            newPasswordInput.focus();
            return;
        }

        console.log('Register attempt with:', { newCallsign, newEmail, newPassword });

        alert('Hangar established successfully! Redirecting to login...');
        window.location.href = 'login.html';
    });

    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('google-login')) {
                alert('Initiating Google Comms registration...');
            } else if (button.classList.contains('apple-login')) {
                alert('Initiating Apple Protocols registration...');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    forgotPasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailResetInput = document.getElementById('emailReset');
        const emailReset = emailResetInput.value.trim();

        if (emailReset === '') {
            alert('Please enter your Callsign or Email to request a reset link.');
            return;
        }

        console.log('Password reset request for:', emailReset);
        alert('A security code reset link has been dispatched to your comms channel (if registered).');
        emailResetInput.value = '';
    });
});

