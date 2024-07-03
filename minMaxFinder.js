function findMinMax() {
    const array = document.getElementById('array').value.split(',').map(Number);
    const min = Math.min(...array);
    const max = Math.max(...array);

    document.getElementById('result').textContent = `Min value: ${min}, Max value: ${max}`;
}
