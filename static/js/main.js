function sendForm() {
    const form = document.codeForm;
    let input = document.createElement('input');
    input.innerHTML = document.getElementById('code').value;
    input.style = 'display: none;';
    input.name = 'code-text';
    form.append(input);
    form.submit();
}