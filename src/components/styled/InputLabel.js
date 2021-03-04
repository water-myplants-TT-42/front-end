import React from 'react'
import styled from 'styled-components'

import { Theme } from './theme'

const InputLabelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${Theme.inputLabelMargin};

    label {
        padding-left: ${Theme.inputLabelPadding};
        fontSize: ${Theme.fontSize}
    }
    p {
        padding-right: ${Theme.inputLabelPadding};
        color: ${Theme.errorRed};
        fontSize: ${Theme.errorFontSize};
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