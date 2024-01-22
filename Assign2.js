function modifyString(s) {
    const isValidAscii = (value) => value >= 0 && value <= 127;

    let result = [];
    let changedChars = new Set();

    for (let i = 0; i < s.length; i++) {
        let asciiValue = s.charCodeAt(i);

        if (i % 2 === 0 && i < s.length - 1 && !changedChars.has(i + 1)) {

            let increment = (asciiValue % 7) - 3;
            let modifiedAscii = (asciiValue + increment) % 128;
            if (!isValidAscii(modifiedAscii)) {
                modifiedAscii = 83;
            }
            result.push(String.fromCharCode(modifiedAscii));
            changedChars.add(i + 1);
        } else if (i % 2 === 1 && i > 0 && !changedChars.has(i - 1)) {
            let decrement = (asciiValue % 5) + 3;
            let modifiedAscii = (asciiValue - decrement + 128) % 128;
            if (!isValidAscii(modifiedAscii)) {
                modifiedAscii = 83;
            }
            result.push(String.fromCharCode(modifiedAscii));
            changedChars.add(i - 1);
        } else {
            result.push(String.fromCharCode(asciiValue));
        }
    }

    return `Final Answer: ${s.split('').map(c => c.charCodeAt(0)).join('-')} => ${result.join('')}`;
}
let s = "sHQen}";
let finalResult = modifyString(s);
console.log(finalResult);