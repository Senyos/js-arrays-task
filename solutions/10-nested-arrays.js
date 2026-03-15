// BEGIN

const getSuperSeriesWinner = (scores) => {
    let ussrWin = 0
    for (const game of scores) {
        if (game[1] > game[0]) ussrWin += 1
        if (game[1] < game[0]) ussrWin -= 1
    }

    if (ussrWin === 0) return null
    if (ussrWin > 0) return 'ussr'
    return 'canada'
}

export default getSuperSeriesWinner

// END
