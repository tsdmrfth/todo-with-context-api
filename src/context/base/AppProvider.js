import React from 'react'
import providers from 'context/base/providers'

providers.reverse()

export default ({ children }) => {
    let result = children
    providers.forEach(Wrapper => result = <Wrapper>{result}</Wrapper>)
    return result
}