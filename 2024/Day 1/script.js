const fs = require('fs');

try {

    // Read File Content

    const data = fs.readFileSync('data.txt', 'utf8');

    // Split puzzle input

    let arr = data.split("\r\n");

    let arr1 = []
    let arr2 = []

    arr = arr.forEach(item => {
        let value = item.split("   ");
        arr1.push(value[0]);
        arr2.push(value[1]);
    });

    // *****************************
    // *** First Part
    // *****************************

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += Math.abs(arr1[i] - arr2[i]);
    }

    console.log('Part 1 --- The total distance between the lists:', sum);

    // *****************************
    // *** Second Part
    // *****************************

    let similarity = 0;
    let diff = 0;

    for (let i of arr1) {
        diff = 0
        for (let j of arr2) {
            if (i == j) {
                diff++;
            }
        }
        similarity += diff * i;
    }

    console.log('Part 2 --- The similarity score:', similarity);

} catch (err) {
    console.error('Error reading file:', err);
}