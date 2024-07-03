function checkPrime() {
    const num = parseInt(document.getElementById('number').value);
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    document.getElementById('result').textContent = isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
}
