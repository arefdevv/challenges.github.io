const maxCharacter = (str) => {
    const strObject = {};

    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (strObject[char]) {
            strObject[char]++;
        } else {
            strObject[char] = 1;
        }
    }

    for (let char in strObject) {
        if (strObject[char] > max) {
            max = strObject[char];
            maxChar = char;
        }
    }
    console.log(maxChar);
};

maxCharacter("mohammad");
