function checkPerfect() {
    const num = parseInt(document.getElementById('number').value);
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    const isPerfect = sum === num && num !== 0;
    document.getElementById('result').textContent = isPerfect ? `${num} is a perfect number.` : `${num} is not a perfect number.`;
}
