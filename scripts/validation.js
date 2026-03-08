document.addEventListener('DOMContentLoaded', function() {
 const form = document.getElementById('feedbackForm');
 if (!form) return;
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        document.querySelectorAll('.input.is-danger, .textarea.isdanger').forEach(el => {
            el.classList.remove('is-danger');
        });
        document.querySelectorAll('.help.is-danger').forEach(el => el.remove());

        let isValid = true;

        const fullname = document.getElementById('fullname');
        const fullnameValue = fullname.value.trim();

        if (fullnameValue === '') {
            showError(fullname, 'Enter your first and last name!');
            isValid = false;
        } else if (fullnameValue.split(' ').length < 2) {
            showError(fullname, 'Enter your first and last name!');
            isValid = false;
        }

        const phone = document.getElementById('phone');
        const phoneValue = phone.value.trim();
        const phoneDigits = phoneValue.replace(/\D/g, '');

        if (phoneValue === '') {
            showError(phone, 'Enter your phone number!');
            isValid = false;
        } else if (phoneDigits.length < 10) {
            showError(phone, 'Enter 10 digits phone number');
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailValue = email.value.trim();

        if (emailValue === '') {
            showError(email, 'Enter your email!');
            isValid = false;
        } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
            showError(email, 'Enter a correct email!');
            isValid = false;
        }

        const agree = document.getElementById('agree');
        if (agree.checked == false) {
            showError(agree, 'Accept Terms of Service!');
            isValid = false;
        }

        if (isValid) {
            const formData = {
            fullname: fullnameValue,
            phone: phoneValue,
            email: emailValue,
            message: document.getElementById('message').value.trim() || '(empty)'
            };

            const event = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(event);

            alert('Форма отправлена! Данные в консоли.');
        }
    });
    function showError(input, message) {
        input.classList.add('is-danger');
        const help = document.createElement('p');
        help.classList.add('help', 'is-danger');
        help.textContent = message;
        input.parentNode.parentNode.appendChild(help);
        }

        document.querySelectorAll('.input, .textarea').forEach(input => {
        input.addEventListener('input', function() {
        this.classList.remove('is-danger');
        const parent = this.parentNode.parentNode;
        const errors = parent.querySelectorAll('.help.is-danger');
        errors.forEach(el => el.remove());
        });
    });
});