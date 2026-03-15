// BEGIN

const getSameParity = (array) => {
    if (array.length === 0) return array

    let newArray = []
 
    if (array[0] % 2 === 0) {
        for (let i = 0; i < array.length; ++i) {
            const element = array[i]
            if (element % 2 === 0) newArray.push(element)
        }
    } else {
        for (let i = 0; i < array.length; ++i) {
            const element = array[i]
            if (element % 2 !== 0) newArray.push(element)
        }
    }

    return newArray
}

export default getSameParity

// END
