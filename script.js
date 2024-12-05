document.getElementById('submitBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('inputValue').value;
    document.getElementById('output').innerText = `You entered: ${inputValue}`;
});
