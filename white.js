let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

document.getElementById('form-group').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'yourusername' && password === 'yourpassword') {
        alert('Login successful!');

    } else {
        alert('Login failed. Please check your username and password.');
    }
});