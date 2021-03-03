import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div{
        margin-bottom: 10px;
    }
`

export default function Form(props) {
    const { children, onSubmit, ...rest } = props

    return (
        <FormWrapper onSubmit={onSubmit} {...rest}>
            {children}
        </FormWrapper>
    )
}