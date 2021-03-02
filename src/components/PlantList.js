import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DeleteModal from './DeleteModal';

// dummy data for testing display, delete when get from backend is implemented
const dummyList = [
  {
    id: 0,
    nickname: 'Snake',
    species: 'D. trifasciata',
    h2oFrequency: '1 time/week',
  },
  {
    id: 1,
    nickname: 'Spider',
    species: 'S. arachnoideum',
    h2oFrequency: '1 time/week',
  },
  {
    id: 2,
    nickname: 'Frilly',
    species: 'A. pedatum',
    h2oFrequency: '3 times/week',
  },
]

export default function PlantList(props) {
  const { plantList , deletePlant } = props;
  console.log('plantlist props', props)
  // change useState to initialize plantList when connected to backend
  const [plants, setPlants] = useState(dummyList)
  const [toDelete, setToDelete] = useState(null)

  const onClickDelete = ({ id, nickname }) => {
    console.log('onClickDelete', id, nickname)
    setToDelete({ id, nickname })
  }

  const confirmDelete = () => {
    if (toDelete) {
      deletePlant(toDelete.id)
      setToDelete(null)
    }
  }

  const cancelDelete = () => {
    setToDelete(null)
  }

  return (
    <div className="plant-list-wrapper">
      <DeleteModal 
        isOpen={!!toDelete}
        confirm={confirmDelete}
        cancel={cancelDelete}
        text={toDelete ? `Delete ${toDelete.nickname}` : 'Delete this plant?'}

      />
      {plants.map(plant => (
        <div className="plant-card" key={plant.id}>
          <Link to={`/plantlist/${plant.id}`}><h3>{plant.nickname}</h3></Link>
          <p>{plant.h2oFrequency}</p>
          <button 
            className='delete-button'
            onClick={_ => onClickDelete({ id: plant.id, nickname: plant.nickname})}
            >Delete
          </button>
          {/* Delete button needs functionality...modal window to confirm?? */}
        </div>
      ))}
    </div>
  )
}