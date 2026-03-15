// BEGIN

const makeCensored = (text, stopWords) => {
    let newText = text.slice()
    newText = ` ${newText} `
    for (const stopWord of stopWords) {
        newText = newText.replaceAll(` ${stopWord} `, `  ${stopWord}  `)
        newText = newText.replaceAll(` ${stopWord} `, '$#%!')
    }
    return newText.slice(1, newText.length - 1)
}

export default makeCensored

// END
