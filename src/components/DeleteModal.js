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
        <div style={{
            position: 'fixed',
            top: 0, left: 0,
            bottom: 0, right: 0,
            backgroundColor: `rgba(100, 100, 100, 0.7)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}
            onClick={handleClick}
            id="delete-modal"
        >
            <div style={{
                background: 'white',
                textAlign: 'center',
                padding: '1rem'
            }}>
                <h4>{text}</h4>
                <button id="confirm-delete" onClick={handleClick}>Confirm</button>
                <button id="cancel-delete" onClick={handleClick}>Cancel</button>
            </div>
        </div>
    )
}