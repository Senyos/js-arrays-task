// BEGIN

const swap = (array) => {
    if (array.length === 0) return array
    if (array.length === 1) return array

    const newArray = array.slice()
    const last = newArray.length - 1

    array[0]    = newArray[last]
    array[last] = newArray[0]

    return array
}

export { swap }

// END
