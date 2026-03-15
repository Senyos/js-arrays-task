const _ = require("lodash"); 

// BEGIN

const getSameCount = (array1, array2) => {
    let uniqArray1 = _.uniq(array1)
    let uniqArray2 = _.uniq(array2)

    let count = 0
    for (const elem1 of uniqArray1) {
        for (const elem2 of uniqArray2) {
            if (elem1 === elem2) ++count
        }
    }

    return count
}

export default getSameCount

// END
