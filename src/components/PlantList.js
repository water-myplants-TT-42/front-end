import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
  // change useState to initialize plantList when connected to backend
  const [plants, setPlants] = useState(dummyList)

  return (
    <div className="plant-list-wrapper">
      {plants.map(plant => (
        <Link to={`/plant-list/${plant.id}`}>
          <div className="plant-card" key={plant.id}>
            <h3>{plant.nickname}</h3>
            <p>{plant.h2oFrequency}</p>
            <button 
              className='delete-button'
            //   onClick={deletePlant(plant.id)}
              >Delete
            </button>
            {/* Delete button needs functionality...modal window to confirm?? */}
          </div>
        </Link>
      ))}
    </div>
  )
}