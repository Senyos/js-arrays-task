// BEGIN

const bubbleSort = (array) => {
    let newArray1 = array.slice()
    const newArray2 = array.slice()
    for (let j = 0; j < newArray1.length - 1; ++j) {
        for (let i = 0; i < newArray1.length - 1; ++i) {
            newArray2[i] = newArray1[i] > newArray1[i+1] ? newArray1.slice()[i+1] : newArray1.slice()[i]
            newArray2[i+1] = newArray1[i] > newArray1[i+1] ? newArray1.slice()[i] : newArray1.slice()[i+1]
            newArray1 = newArray2.slice()
        }
    }
    return newArray2
}

export default bubbleSort

// END
