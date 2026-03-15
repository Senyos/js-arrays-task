// BEGIN

const getMax = ([first, ...array]) => {
    if (array.length === 0) return null

    let maxNum = first;
    for (const number of array) {
        maxNum = number > maxNum ? number : maxNum
    }
    return maxNum
}

export { getMax }

// END
