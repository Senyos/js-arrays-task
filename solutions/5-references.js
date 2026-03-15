// BEGIN

const reverse = (array) => {
    const newArray = array.slice()
    const last = newArray.length - 1

    for (let i = 0; i <= last; ++i) {
        array[i] = newArray[last - i]
    }
}

export { reverse }

// END
