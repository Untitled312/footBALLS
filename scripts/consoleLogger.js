document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;

        console.clear();

        console.log('Full name:', formData.fullname);
        console.log('Phone number:', formData.phone);
        console.log('Email:', formData.email);
        console.log('Message:', formData.message || '(empty)');

        const timestamp = new Date().toLocaleString();
        console.log('Time:', timestamp);
    });
});