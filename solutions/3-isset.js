// BEGIN

const get = (array, index, byDefault = null) => {
    if (index < array.length && index >= 0)
        return array[index]
    return byDefault
}

export { get }

// END
