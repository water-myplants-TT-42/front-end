import React from 'react'
import styled from 'styled-components'

const InputLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.theme.inputLabelMargin};

    label {
        padding-left: ${props => props.theme.inputLabelPadding};
        font-size: ${props => props.theme.fontSize}
    }
    p {
        padding-right: ${props => props.theme.inputLabelPadding};
        color: ${props => props.theme.errorRed};
        font-size: ${props => props.theme.errorFontSize};
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