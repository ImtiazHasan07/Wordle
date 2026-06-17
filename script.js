let words = ['ABBEY', 'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADAPT', 'ADMIT', 'ADOBE', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN', 'AGENT', 'AGING', 'AGONY', 'AGREE', 'AHEAD', 'AISLE', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLEY', 'ALLOW', 'ALLOY', 'ALONE', 'ALONG', 'ALOUD', 'ALPHA', 'ALTAR', 'ALTER', 'AMBER', 'AMEND', 'AMINO', 'AMONG', 'AMPLE', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'ANKLE', 'APART', 'APPLE', 'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARMOR', 'AROSE', 'ARRAY', 'ARROW', 'ASIDE', 'ASSAY', 'ASSET', 'ATLAS', 'AUDIO', 'AUDIT', 'AVOID', 'AWAIT', 'AWAKE', 'AWARD', 'AWARE', 'AWFUL', 'BACON', 'BADGE', 'BADLY', 'BAKED', 'BAKER', 'BARON', 'BASES', 'BASIC', 'BASIL', 'BASIN', 'BASIS', 'BATCH', 'BEACH', 'BEARD', 'BEAST', 'BEGAN', 'BEGIN', 'BEGUN', 'BEING', 'BELLY', 'BELOW', 'BENCH', 'BERRY', 'BILLY', 'BIRTH', 'BLACK', 'BLADE', 'BLAME', 'BLANK', 'BLAST', 'BLAZE', 'BLEAK', 'BLEND', 'BLIND', 'BLOCK', 'BLOOD', 'BLOOM', 'BLOWN', 'BLUES', 'BLUNT', 'BOARD', 'BOAST', 'BOBBY', 'BONUS', 'BOOST', 'BOOTH', 'BORNE', 'BOUND', 'BOWEL', 'BOXER', 'BRAIN', 'BRAKE', 'BRAND', 'BRASS', 'BRAVE', 'BREAD', 'BREAK', 'BREED', 'BRENT', 'BRICK', 'BRIDE', 'BRIEF', 'BRING', 'BRINK', 'BRISK', 'BROAD', 'BROKE', 'BROOK', 'BROWN', 'BRUSH', 'BUDDY', 'BUILD', 'BUILT', 'BUNCH', 'BURKE', 'BURNT', 'BURST', 'BUYER', 'CABIN', 'CABLE', 'CACHE', 'CALIF', 'CANAL', 'CANDY', 'CANON', 'CARGO', 'CAROL', 'CARRY', 'CATCH', 'CATER', 'CAUSE', 'CEASE', 'CHAIN', 'CHAIR', 'CHALK', 'CHAOS', 'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEEK', 'CHEER', 'CHESS', 'CHEST', 'CHICK', 'CHIEF', 'CHILD', 'CHILE', 'CHILL', 'CHINA', 'CHOIR', 'CHOSE', 'CHUCK', 'CISCO', 'CIVIC', 'CIVIL', 'CLAIM', 'CLASH', 'CLASS', 'CLEAN', 'CLEAR', 'CLERK', 'CLICK', 'CLIFF', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOTH', 'CLOUD', 'COACH', 'COAST', 'COLON', 'COLOR', 'COMIC', 'CONDO', 'CORAL', 'CORPS', 'COSTA', 'COUCH', 'COUGH', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRACK', 'CRAFT', 'CRANE', 'CRASH', 'CRAZY', 'CREAM', 'CREED', 'CREEK', 'CREST', 'CRIED', 'CRIES', 'CRIME', 'CRISP', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CRUEL', 'CRUSH', 'CRUST', 'CUBIC', 'CURRY', 'CURVE', 'CYCLE', 'DADDY', 'DAILY', 'DAIRY', 'DAISY', 'DANCE', 'DATED', 'DEALT', 'DEATH', 'DEBIT', 'DEBUT', 'DECAY', 'DECOR', 'DELAY', 'DELTA', 'DENSE', 'DEPOT', 'DEPTH', 'DERBY', 'DETER', 'DEVIL', 'DIARY', 'DIGIT', 'DIRTY', 'DODGE', 'DOING', 'DONOR', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAIN', 'DRAMA', 'DRANK', 'DRAWN', 'DREAM', 'DRESS', 'DRIED', 'DRIFT', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DRUNK', 'DUSTY', 'DYING', 'EAGER', 'EAGLE', 'EARLY', 'EARTH', 'EATEN', 'EIGHT', 'ELBOW', 'ELDER', 'ELECT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'ESSAY', 'ETHIC', 'EVENT', 'EVERY', 'EXACT', 'EXCEL', 'EXERT', 'EXILE', 'EXIST', 'EXTRA', 'FAINT', 'FAIRY', 'FAITH', 'FALSE', 'FAMED', 'FANCY', 'FATAL', 'FATTY', 'FAULT', 'FAVOR', 'FEAST', 'FENCE', 'FERRY', 'FETCH', 'FEVER', 'FIBER', 'FIBRE', 'FIELD', 'FIERY', 'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FITCH', 'FIXED', 'FLAME', 'FLASH', 'FLEET', 'FLESH', 'FLIES', 'FLINT', 'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLORA', 'FLOUR', 'FLOWN', 'FLUID', 'FLUNG', 'FLUSH', 'FOCAL', 'FOCUS', 'FORCE', 'FORGE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRIED', 'FRONT', 'FROST', 'FRUIT', 'FULLY', 'FUNNY', 'GAMMA', 'GAUGE', 'GENRE', 'GHOST', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GLORY', 'GLOVE', 'GOING', 'GRACE', 'GRADE', 'GRAIN', 'GRAMS', 'GRAND', 'GRANT', 'GRAPH', 'GRASP', 'GRASS', 'GRAVE', 'GREAT', 'GREED', 'GREEN', 'GREET', 'GRIEF', 'GRILL', 'GROSS', 'GROUP', 'GROVE', 'GROWN', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'GUILD', 'GUILT', 'HABIT', 'HANDY', 'HAPPY', 'HARDY', 'HARRY', 'HARSH', 'HATCH', 'HAVEN', 'HEART', 'HEATH', 'HEAVY', 'HEDGE', 'HEFTY', 'HELLO', 'HENCE', 'HENRY', 'HOBBY', 'HOLLY', 'HOMER', 'HONEY', 'HONOR', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'HURRY', 'IDEAL', 'IMAGE', 'IMPLY', 'INCUR', 'INDEX', 'INNER', 'INPUT', 'INTEL', 'INTER', 'IRONY', 'ISSUE', 'IVORY', 'JAPAN', 'JENNY', 'JEWEL', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'JUICE', 'KNIFE', 'KNOCK', 'KNOWN', 'LABEL', 'LABOR', 'LADEN', 'LANCE', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON', 'LEVEL', 'LEVER', 'LEWIS', 'LIGHT', 'LIMIT', 'LINEN', 'LINKS', 'LIVER', 'LIVES', 'LOBBY', 'LOCAL', 'LODGE', 'LOGIC', 'LOOSE', 'LOTUS', 'LOVER', 'LOWER', 'LOYAL', 'LUCKY', 'LUNCH', 'LYING', 'LYNCH', 'MAGIC', 'MAJOR', 'MAKER', 'MANOR', 'MAPLE', 'MARCH', 'MARIA', 'MARRY', 'MARSH', 'MASON']
let buttons = document.getElementsByClassName('keys')
let letterKeys = document.getElementsByClassName('letters')
let wordsGuessed = []
let word = words[Math.floor(Math.random() * words.length)]

console.log(word)

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
    let button = document.getElementById(element.innerText)
    if (button.style.backgroundColor === '#d3d6da' || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#787c7e'
        button.style.color = '#ffffff'
    }

    element.style.border = '2px solid #787c7e'
    element.style.backgroundColor = '#787c7e'
    element.style.color = '#ffffff'
    return
}

function toIncorrectOrder(element) {
    let button = document.getElementById(element.innerText)
    if (['#d3d6da', '787c7e'].includes(button.style.backgroundColor) || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#c9b458'
        button.style.color = '#ffffff'
    }

    element.style.border = '2px solid #c9b458'
    element.style.backgroundColor = '#c9b458'
    element.style.color = '#ffffff'
    return
}

function toCorrectOrder(element) {
    let button = document.getElementById(element.innerText)
    if (['#d3d6da', '787c7e', 'c9b458'].includes(button.style.backgroundColor) || button.style.backgroundColor === '') {
        button.style.backgroundColor = '#6aaa64'
        button.style.color = '#ffffff'
    }

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
    element.hidden = true
    return
}

function showElement(element) {
    element.hidden = false
    return
}

function errorMessage(message) {
    let element = document.getElementById('prompt')
    showElement(element)

    document.body.innerHTML = document.body.innerHTML.replace('$promptMessage', message)

    setTimeout(() => hideElement(document.getElementById('prompt')), 3000)
}

function gameEndedMessage(message, word, wordsGuessed) {
    let element = document.getElementById('popup-container')

    showElement(element)
    document.body.innerHTML = document.body.innerHTML.replace('$outcome', message)
    document.body.innerHTML = document.body.innerHTML.replace('$word', word.toLowerCase())
    document.body.innerHTML = document.body.innerHTML.replace('$tries', (wordsGuessed.length + 1))

    document.getElementById('close').addEventListener('click', () => hideElement(document.getElementById('popup-container')))
    document.getElementById('continue').addEventListener('click', () => location.reload())
}


Object.values(buttons).forEach((element) => {
    element.addEventListener('click', function (event) {
        if (event.defaultPrevented) {
            return
        }
        event.preventDefault()

        if (document.getElementById('popup-container').hidden === false) return;

        let id = element.id

        if (id == 'ENTER') {
            for (let x = 0; x < 6; x++) {
                if (!wordsGuessed[x]) {
                    let userGuess;
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                            errorMessage('Please enter a word!')
                            return
                        }
                        if (!userGuess) {
                            userGuess = document.getElementsByClassName(`letter${y}`)[x].innerText
                        } else {
                            userGuess += document.getElementsByClassName(`letter${y}`)[x].innerText
                        }
                    }
                    if (!words.includes(userGuess)) {
                        errorMessage('Please enter a valid word!')
                        return
                    }
                    for (let y = 1; y < 6; y++) {
                        if (document.getElementsByClassName(`letter${y}`)[x].innerText === word[y - 1]) {
                            toCorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                            if (userGuess === word) {
                                gameEndedMessage('You have won!', word, wordsGuessed)
                            }
                        } else if (word.includes(document.getElementsByClassName(`letter${y}`)[x].innerText)) {
                            toIncorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                        } else {
                            toNotInWord(document.getElementsByClassName(`letter${y}`)[x])
                        }
                    }
                    wordsGuessed.push(userGuess)
                    break
                }
                if (wordsGuessed[6]) {
                    gameEndedMessage('You have lost!', word, wordsGuessed)
                }
            }
        } else if (id == 'BACKSPACE') {
            for (let x = (document.getElementsByClassName('boxes').length - 1); x >= 0; x--) {
                let element = document.getElementsByClassName('boxes')[x]
                if (element.innerText !== '' && rgbToHex(element.style.backgroundColor.slice(4, -1).split(', ')) === '#ffffff') {
                    element.innerText = ''
                    toUnused(element)
                    break
                }
                // else {
                //     errorMessage('There is nothing to remove!')
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

window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault()

    if (document.getElementById('popup-container').hidden === false) return;

    if (event.key.toUpperCase() == 'ENTER') {
        for (let x = 0; x < 6; x++) {
            if (!wordsGuessed[x]) {
                let userGuess;
                for (let y = 1; y < 6; y++) {
                    if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                        errorMessage('Please enter a word!')
                        return
                    }
                    if (!userGuess) {
                        userGuess = document.getElementsByClassName(`letter${y}`)[x].innerText
                    } else {
                        userGuess += document.getElementsByClassName(`letter${y}`)[x].innerText
                    }
                }
                if (!words.includes(userGuess)) {
                    errorMessage('Please enter a valid word!')
                    return
                }
                for (let y = 1; y < 6; y++) {
                    if (document.getElementsByClassName(`letter${y}`)[x].innerText === word[y - 1]) {
                        toCorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                        if (userGuess === word) {
                            gameEndedMessage('You have won!', word, wordsGuessed)
                        }
                    } else if (word.includes(document.getElementsByClassName(`letter${y}`)[x].innerText)) {
                        toIncorrectOrder(document.getElementsByClassName(`letter${y}`)[x])
                    } else {
                        toNotInWord(document.getElementsByClassName(`letter${y}`)[x])
                    }
                }
                wordsGuessed.push(userGuess)
                break
            }
            if (wordsGuessed.length >= 5) {
                gameEndedMessage('You have lost!', word, wordsGuessed)
            }
        }
    } else if (event.key.toUpperCase() == 'BACKSPACE') {
        for (let x = (document.getElementsByClassName('boxes').length - 1); x >= 0; x--) {
            let element = document.getElementsByClassName('boxes')[x]
            if (element.innerText !== '' && rgbToHex(element.style.backgroundColor.slice(4, -1).split(', ')) === '#ffffff') {
                element.innerText = ''
                toUnused(element)
                break
            }
            // else {
            //     errorMessage('There is nothing to remove!')
            // }
        }
    } else if (['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].includes(event.key.toUpperCase())) {
        for (let x = 0; x < 6; x++) {
            if (!wordsGuessed[x]) {
                for (let y = 1; y < 6; y++) {
                    if (document.getElementsByClassName(`letter${y}`)[x].innerText === '') {
                        document.getElementsByClassName(`letter${y}`)[x].innerText = event.key.toUpperCase()
                        toInput(document.getElementsByClassName(`letter${y}`)[x])
                        break
                    }
                }
                break
            }
        }
    } else {
        return
    }
})