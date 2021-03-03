import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteModal from './DeleteModal';

// dummy data for testing display, delete when get from backend is implemented
// dummy data means all /plant-list/:plantID links will display the same data
const dummyData = {
  id: 0,
  nickname: 'Snake',
  species: 'D. trifasciata',
  h2oFrequency: '1 time/week',
}

export default function Plant(props) {
  const { plantData, deletePlant } = props
  const history = useHistory()
  // delete useState when connected to backend/pass plant itself as prop in place of plantData
  const [plant, setPlant] = useState(dummyData)
  const [isDeleting, setIsDeleting] = useState(false)

  const onClickDelete = () => {
    setIsDeleting(true)
  }

  const confirmDelete = () => {
    deletePlant(plant.id)
    setIsDeleting(false)
  }

  const cancelDelete = () => {
    setIsDeleting(false)
  }

  const routeToEdit = _ => {
    history.push('/plantform')         // Insert edit form path inside quotes
  }

  return (
    <div className='plant-wrapper'>
      <DeleteModal 
        isOpen={isDeleting}
        text={`Delete ${plant.nickname}?`}
        confirm={confirmDelete}
        cancel={cancelDelete}
      />
      {JSON.stringify(plant)}
      <h2>{plant.nickname}</h2>
      <p>Species: {plant.species}</p>
      <p>Water {plant.h2oFrequency}</p>
      <button 
        className='delete-button'
        onClick={onClickDelete}
        >Delete Plant
      </button>
      <button 
        className='edit-button' 
        onClick={routeToEdit} 
        >Edit Plant
      </button>
    </div>
  )
}
