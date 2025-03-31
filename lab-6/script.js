function sortNumbers() {
    let input = document.getElementById('numbers').value;
    let numArray = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));

    // Bubble Sort
    for (let i = 0; i < numArray.length; i++) {
        for (let j = 0; j < numArray.length - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }

    document.getElementById('output').textContent = numArray.join(', ');
}
