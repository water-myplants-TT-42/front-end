import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

  const routeTo = (location) => {       // Once Plant is passed routeTo Prop from App, delete this
    history.push(location)              // function and destructure routeTo from the props
  }

  return (
    <div className='plant-wrapper'>
      {JSON.stringify(plant)}
      <h2>{plant.nickname}</h2>
      <p>Species: {plant.species}</p>
      <p>Water {plant.h2oFrequency}</p>
      <button 
        className='delete-button'
        // onClick={deletePlant(plant.id)}
        >Delete Plant
      </button>
      {/* Delete button needs onClick functionality...modal window to confirm?? */}
      <button 
        className='edit-button' 
        onClick={routeTo('/plantform')} 
        >Edit Plant
      </button>
    </div>
  )
}
