import React from 'react'
import styled from 'styled-components'

import Button from './styled/Button'

const DeleteModalWrapper = styled.div`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.blurBackground};
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        background-color: white;
        text-align: center;
        padding: 1rem;
        width: ${props => props.theme.modalSize};
        height: ${props => props.theme.modalSize};
        max-width: 400px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h4 {
            margin-bottom: 2rem;
            font-size: 2rem;
            overflow-wrap: break-word;
            word-wrap: break-word;
            word-break: break-all;
            hyphens: auto;
        }

        & > div {
            display: flex;
            justify-content: space-between;
        }
    }
`

export default function DeleteModal(props) {
    const { isOpen, text, confirm, cancel } = props

    if (!isOpen) return null

    const handleClick = (evt) => {
        const { id } = evt.target
        if (!id) return

        if (id === 'confirm-delete') {
            return confirm()
        }

        return cancel()
    }

    return (
        <DeleteModalWrapper
            onClick={handleClick}
            id="delete-modal"
        >
            <div>
                <h4>{text}</h4>
                <div>
                    <Button size="small" variant="success" id="cancel-delete" onClick={handleClick}>Cancel</Button>
                    <Button size="small" variant="danger" id="confirm-delete" onClick={handleClick}>Confirm</Button>
                </div>
            </div>
        </DeleteModalWrapper>
    )
}