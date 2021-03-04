import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default function Form(props) {
    const { children, onSubmit, ...rest } = props

    return (
        <FormWrapper onSubmit={onSubmit} {...rest}>
            {children}
        </FormWrapper>
    )
}