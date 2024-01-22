function printShortestSubstrings(s, x) {
    let result = [];
    let charIndices = {};

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (charIndices[currentChar] !== undefined) {
            let lastIndex = charIndices[currentChar];
            let substring = s.substring(lastIndex, i + 1);

            if (substring.length >= x && substring[0] === substring.slice(-1)) {
                if (!result[0] || substring.length < result[0].length) {
                    result = [substring];
                } else if (substring.length === result[0].length) {
                    result.push(substring);
                }
            }
        }

        charIndices[currentChar] = i;
    }

    if (result.length === 0) {
        console.log("Answer: not-found");
    } else {
        console.log("Answer:", result.join(" "));
    }
}

let s = "abccdbacca";

let x = 3;
console.log("x =", x);
printShortestSubstrings(s, x);

x = 4;
console.log("x =", x);
printShortestSubstrings(s, x);

x = 5;
console.log("x =", x);
printShortestSubstrings(s, x);

x = 6;
console.log("x =", x);
printShortestSubstrings(s, x);

x = 7;
console.log("x =", x);
printShortestSubstrings(s, x);

x = 8;
console.log("x =", x);
printShortestSubstrings(s, x);