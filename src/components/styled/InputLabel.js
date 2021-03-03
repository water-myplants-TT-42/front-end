import React from 'react'
import styled from 'styled-components'

const InputLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0 25px;

    * {
        margin: 0;
    }
    p {
        color: ${(props) => props.theme.dangerColor};
    }
`

export default function InputLabel(props) {
    const { labelText, name, error } = props

    return (
        <InputLabelWrapper>
            <label htmlFor={name}>{labelText}</label>
            {error && <p>{error}</p>}
        </InputLabelWrapper>
    )
}