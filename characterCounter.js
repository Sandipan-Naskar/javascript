function countCharacters() {
    const str = document.getElementById('string').value;
    let alphabets = 0, digits = 0, specialChars = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            alphabets++;
        } else if (/[0-9]/.test(char)) {
            digits++;
        } else {
            specialChars++;
        }
    }

    document.getElementById('result').textContent = `Alphabets: ${alphabets}, Digits: ${digits}, Special Characters: ${specialChars}`;
}
