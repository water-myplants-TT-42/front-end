import React from 'react'
import styled from 'styled-components'

import InputLabel from './InputLabel'

const InputWrapper = styled.div`
    width: ${props => props.theme.inputWidth};
    margin-bottom: ${props => props.theme.space};

    input, select {
        border-radius: ${props => props.theme.borderRadius};
        border: ${props => (
            props.error
                ? props.theme.inputErrorBorder
                : 'none'
        )};
        background-color: ${props => props.theme.inputGray};
        color: ${props => props.theme.inputTextGray};
        font-size: ${props => props.theme.fontSize};
        width: ${props => props.theme.inputWidth};
        height: ${props => props.theme.inputHeight};
        padding: ${props => props.theme.inputFieldPadding};
        outline: none;

        &:focus {
            border: ${(props) => (
                props.error 
                    ? props.theme.inputErrorBorder 
                    : `2px solid ${props.theme.borderGray}`
            )};
        }
    }
`

const WaterInputWrapper = styled(InputWrapper)`
    margin-bottom: ${props => props.theme.space};
    
    .inline-input-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    input {
        width: ${props => props.theme.numberInputWidth};
    }

    select {
        width: ${props => props.theme.dropdownWidth};
    }

    .inline-input-wrapper div label {
        padding-right: ${props => props.theme.inputLabelPadding};
    }

`

export default function TextInput(props) {
    const { onChange, value, name, type, error, labelText} = props
    return (
        <InputWrapper error={error}>
            <InputLabel labelText={labelText} name={name} error={error} />
            <input name={name} onChange={onChange} value={value} type={type} />
        </InputWrapper>
    )
}

export function WaterInput(props) {
    const { names, values, onChange, error, labelTexts, numMax } = props
    return (
        <WaterInputWrapper>
            <InputLabel 
                name={names[0]} 
                labelText={labelTexts[0]} 
                error={error} 
            />
            <div className='inline-input-wrapper'>
                <input 
                    id={names[0]} 
                    name={names[0]} 
                    value={values[0]} 
                    type='number'
                    onChange={onChange} 
                    min={1}
                    max={numMax}
                    step={1}
                />

                <InputLabel 
                    name={names[1]} 
                    labelText={labelTexts[1]}
                />

                <select 
                    id={names[1]} 
                    name={names[1]}
                    value={values[1]} 
                    onChange={onChange}
                    >
                        <option value="daily">Day</option>
                        <option value="weekly">Week</option>
                        <option value="monthly">Month</option>
                </select>
            </div>
        </WaterInputWrapper>
    )
}