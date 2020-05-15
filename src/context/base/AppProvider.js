import React from 'react'
import providers from './providers'

export default ({ children }) => {
    let result = children
    providers.forEach(Wrapper => result = <Wrapper>{result}</Wrapper>)
    return result
}