// BEGIN

const countUniqChars = (text) => {
    if (text.length === 0) return 0
    
    let count = 0
    for (let i = 0; i <= 128; ++i)
    if (text.includes(String.fromCharCode(i))) ++count

    return count
}

export default countUniqChars

// END
