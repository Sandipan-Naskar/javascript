function bubbleSort() {
    const array = document.getElementById('array').value.split(',').map(Number);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    document.getElementById('result').textContent = `Sorted array: ${array.join(', ')}`;
}
