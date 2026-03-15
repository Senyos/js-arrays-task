// BEGIN

const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) return ''

    let ret = ''
    for (const definition of definitions) {
        const tag  = definition[0]
        const desc = definition[1]
 
        ret += `<dt>${tag}</dt><dd>${desc}</dd>`
    }

    return `<dl>${ret}</dl>`
}

export default buildDefinitionList

// END
