function validate() {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumberInput = document.getElementById('companyNumber');
    const validDiv = document.getElementById('valid');

    companyCheckbox.addEventListener('change', () => {
        if (companyCheckbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Username validation
        const username = usernameInput.value;
        if (!/^[a-zA-Z0-9]{3,20}$/.test(username)) {
            isValid = false;
            usernameInput.style.borderColor = 'red';
        } else {
            usernameInput.style.borderColor = 'none';
        }

        // Email validation
        const email = emailInput.value;
        if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
            isValid = false;
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.borderColor = 'none';
        }

        // Password validation
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (!/^\w{5,15}$/.test(password)) {
            isValid = false;
            passwordInput.style.borderColor = 'red';
        } else {
            passwordInput.style.borderColor = 'none';
        }

        // Confirm Password validation
        if (password !== confirmPassword) {
            isValid = false;
            confirmPasswordInput.style.borderColor = 'red';
        } else {
            confirmPasswordInput.style.borderColor = 'none';
        }

        // Company Number validation
        if (companyCheckbox.checked) {
            const companyNumber = companyNumberInput.value;
            if (!/^\d{4}$/.test(companyNumber) || companyNumber < 1000 || companyNumber > 9999) {
                isValid = false;
                companyNumberInput.style.borderColor = 'red';
            } else {
                companyNumberInput.style.borderColor = 'none';
            }
        }

        // Show/Hide validDiv
        if (isValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    });
}
