const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let words = expr.split('**********');
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].match(/.{1,10}/g);
        for (let j = 0; j < letters.length; j++) {
            result += MORSE_TABLE[letters[j].replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-")];
        }
        if (i != words.length - 1) {
            result += " ";
        }
    }
    return result;
}

module.exports = {
    decode
}