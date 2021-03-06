import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { getPlant, deletePlantRequest } from '../utils/requests';

import Container from './styled/Container';
import Image from './styled/Image';
import Button from './styled/Button';

// dummy data for testing display, delete when get from backend is implemented
// dummy data means all /plant-list/:plantID links will display the same data
const dummyData = {
  id: 0,
  nickname: 'Snake',
  species: 'D. trifasciata',
  h2oFrequency: '1 time/week',
}

const PlantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
      font-size: ${props => props.theme.h1FontSize};
      margin-bottom: ${props => props.theme.space};
  }

  p {
    font-size: ${props => props.theme.fontSize};
    margin-bottom: ${props => props.theme.space};
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;


  button {
    margin-left: ${props => props.theme.navBarSpace};
    margin-right: ${props => props.theme.navBarSpace};
  }
`

export default function Plant(props) {
  const { plantList, setPlantList, userID } = props;
  const history = useHistory();
  // delete useState when connected to backend/pass plant itself as prop in place of plantData
  const params = useParams();
  console.log("useParams",useParams(),"params",params)
  const [plant, setPlant] = useState(dummyData);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (userID == null) {
      history.push('/')
    }
    else {
      getPlant(params.id).then(res => setPlant(res))
    }
  }, [])

  const onClickDelete = () => {
    setIsDeleting(true)
  }

  const confirmDelete = () => {
    deletePlantRequest(plant.plant_id, history.push);
    setPlantList(plantList.filter(each => each.plant_id !== plant.plant_id))
    setIsDeleting(false)
  }

  const cancelDelete = () => {
    setIsDeleting(false)
  }

  const routeToEdit = _ => {
    history.push({pathname: '/plantform', state: {plant:plant}})         // Insert edit form path inside quotes
  }

  return (
    <PlantWrapper className='plant-wrapper'>

      <DeleteModal 
        isOpen={isDeleting}
        text={`Are you sure you want to delete ${plant.nickname}?`}
        confirm={confirmDelete}
        cancel={cancelDelete}
      />

      <Image size='30rem'/>

      <h1>{plant.nickname}</h1>
      <p>Species: {plant.species}</p>
      <p>Water {plant.h2oFrequency}</p>
      
      <ButtonsWrapper className='buttons-wrapper'>
        <Button
          children='Delete'
          variant='danger'
          size='med'
          onClick={onClickDelete}
        />

        <Button
          children='Edit'
          variant='success'
          size='med'
          onClick={routeToEdit}
        />
      </ButtonsWrapper>

    </PlantWrapper>
  )
}
