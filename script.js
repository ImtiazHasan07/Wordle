// import config from './config.json' assert { type: 'JSON' };
// import words from './words.json' assert { type: 'JSON' };
// const fs = require('fs');

let buttons = document.getElementsByClassName('keys')
let letterKeys = document.getElementsByClassName('letters')
let letters = {
    Unused: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    NotInWord: [],
    IncorrectOrder: [],
    CorrectOrder: []
}
let wordsGuessed = []

let word;
// if (config.chosen_word === '') {
//     word = words[Math.floor(Math.random() * words.length)]
// } else {
//     // fs.writeFile('config.json', json, 'utf8', callback);
// }
word = 'ABCDE'

function toUnused(element) {
    element.style.border = '2px solid #d3d6da'
    element.style.backgroundColor = '#ffffff'
    element.style.color = '#000000'
    return
}

function toInput(element) {
    element.style.border = '2px solid #878a8c'
    element.style.backgroundColor = '#ffffff'
    element.style.color = '#000000'
    return
}

function toNotInWord(element) {
    element.style.border = '2px solid #787c7e'
    element.style.backgroundColor = '#787c7e'
    element.style.color = '#ffffff'
    return
}


function toIncorrectOrder(element) {
    element.style.border = '2px solid #c9b458'
    element.style.backgroundColor = '#c9b458'
    element.style.color = '#ffffff'
    return
}

function toCorrectOrder(element) {
    element.style.border = '2px solid #6aaa64'
    element.style.backgroundColor = '#6aaa64'
    element.style.color = '#ffffff'
    return
}

function componentToHex(colour) {
    let hex = parseInt(colour).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(colours) {
    return `#${componentToHex(colours[0])}${componentToHex(colours[1])}${componentToHex(colours[2])}`;
}

function hideElement(element) {
    element.setAttribute('hidden', true)
    return
}

function showElement(element) {
    element.setAttribute('hidden', false)
    return
}

Object.values(buttons).forEach((element) => {
    element.addEventListener('click', function (event) {
        if (event.defaultPrevented) {
            return
        }
        event.preventDefault()

        let id = element.id
        let classList = element.classList

        if (id == 'ENTER') {
            for (let x = 0; x < 6; x++) {
                if (!wordsGuessed[x]) {
                    let userGuess;
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                            // prompt('Please enter a word!')
                            return
                        }
                        if (!userGuess) {
                            userGuess = document.getElementsByClassName(`letter${y}`)[x].innerText
                        } else {
                            userGuess += document.getElementsByClassName(`letter${y}`)[x].innerText
                        }
                    }
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === word[y - 1]) {
                            console.log(1)
                            toCorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                            if (userGuess === word) {
                                alert('You won!')
                            }
                        } else if (word.includes(document.getElementsByClassName(`letter${y}`)[x].innerText)) {
                            console.log(2)
                            toIncorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                        } else {
                            console.log(3)
                            toNotInWord(document.getElementsByClassName(`letter${y}`)[x])
                        }
                        // 
                    }
                    wordsGuessed.push(userGuess)
                    break
                }
                if (wordsGuessed[6]) {
                    alert('You lose!')
                }
            }
        } else if (id == 'BACKSPACE') {
            for (let x = (document.getElementsByClassName('square').length - 1); x >= 0; x--) {
                let element = document.getElementsByClassName('square')[x]
                if (element.innerText != '' && rgbToHex(element.style.backgroundColor.slice(4, -1).split(', ')) === '#ffffff') {
                    element.innerText = ''
                    toUnused(element)
                    break
                }
                // else {
                //     prompt('Nothing to remove!')
                // }
            }
        } else {
            for (let x = 0; x < 6; x++) {
                if (!wordsGuessed[x]) {
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                            document.getElementsByClassName(`letter${y}`)[x].innerText = id
                            toInput(document.getElementsByClassName(`letter${y}`)[x])
                            break
                        }
                    }
                    break
                }
            }
        }
    })
})