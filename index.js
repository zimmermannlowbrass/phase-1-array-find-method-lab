// code your solution here
function superbowlWin(array) {
    let foundWin = array.find(isWin)
    if (foundWin === undefined) {
        return undefined
    }
    return foundWin.year
}

function isWin(element) {
    return element.result === "W"
}
