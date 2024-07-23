document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.getElementById('username');
    var errorSpan = document.getElementById('error');

    usernameInput.addEventListener('input', function() {
        if (usernameInput.value.length < 3) {
            errorSpan.style.display = 'block';
        } else {
            errorSpan.style.display = 'none';
        }
    });
});
