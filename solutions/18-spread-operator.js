// BEGIN

const flatten = (arrays) => {
    if (arrays.length === 0) return arrays

    let array = [...arrays]
    let newArray = []
    for (let i = 0; i < array.length; ++i) {
        if (typeof array[i][Symbol.iterator] === 'function') {
            newArray.push(...array[i])
        } else {
            newArray.push(array[i])
        }
    }

    return newArray
}

export { flatten }

// END
