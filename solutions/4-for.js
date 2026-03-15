// BEGIN

//const addPrefix = (names, prefix) => {
//}

const addPrefix = (names, prefix) => {
    const newNames = names.slice()
    for (let i = 0; i < newNames.length; ++i) {
        newNames[i] = `${prefix} ${newNames[i]}`
    }
    return newNames
}

export default addPrefix

// END
