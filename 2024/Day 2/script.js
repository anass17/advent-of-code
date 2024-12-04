const fs = require('fs');

try {

    // Read File Content

    const data = fs.readFileSync('data.txt', 'utf8');

    // Split puzzle input

    let arr = data.split('\r\n');

    let count = 0;
    let increasing;

    // **********************
    // *** First Part
    // **********************

    arr.forEach((line, index) => {
        let rowItems = line.split(' ');
        increasing = null;

        for (let i = 0; i < rowItems.length - 1; i++) {
            diff = rowItems[i] - rowItems[i + 1];
            if (Math.abs(diff) <= 3) {
                if (diff < 0 && increasing != false) {
                    increasing = true;
                } else if (diff > 0 && increasing != true) {
                    increasing = false;
                } else {
                    return;
                }
            } else {
                return;
            }
        }
        count++;
    });

    console.log("Part 1 --- The number of safe reports:", count);

    // **********************
    // *** Second Part
    // **********************

    count = 0;

    arr.forEach((line, index) => {
        let rowItems = line.split(' ');
        let removedItemsCount = 0;
        increasing = null;

        for (let i = 0; i < rowItems.length - 1; i++) {
            diff = rowItems[i] - rowItems[i + 1];
            if (Math.abs(diff) <= 3) {
                if (diff < 0 && increasing != false) {
                    increasing = true;
                } else if (diff > 0 && increasing != true) {
                    increasing = false;
                } else if (removedItemsCount > 0) {
                    console.log(index + 1);
                    return;
                } else {
                    removedItemsCount++;
                    rowItems.splice(i + 1, 1);
                    i = i > 1 ? i - 2 : 0;
                }
            } else if (removedItemsCount > 0) {
                console.log(index + 1);
                return;
            } else {
                removedItemsCount++;
                rowItems.splice(i + 1, 1);
                i = i > 1 ? i - 2 : 0;
            }
        }
        count++;
    });

    console.log("Part 2 --- The number of safe reports:", count);


} catch (err) {
    console.error('Error reading file:', err);
}