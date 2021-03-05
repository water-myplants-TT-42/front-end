import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { getPlantList, deletePlantRequest } from '../utils/requests';

import Container from './styled/Container'
import DeleteModal from './DeleteModal';
import PlantCard from './PlantCard';
import Button from './styled/Button';

const PlantListWrapper = styled(Container)`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const EmptyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: ${props => props.theme.fontSize};
    margin-bottom: ${props => props.theme.space};
  }
`

export default function PlantList(props) {
  const { userID, plantList, setPlantList } = props;
  const [toDelete, setToDelete] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    getPlantList(userID).then(res => setPlantList(res.data))
  }, [userID, setPlantList])

  const onClickDelete = ({ plant_id, nickname }) => {
    console.log('onClickDelete', plant_id, nickname);
    setToDelete({ plant_id, nickname })
  }

  const confirmDelete = () => {
    if (toDelete) {
      deletePlantRequest(toDelete.plant_id, push);
      setPlantList(plantList.filter(plant => plant.plant_id !== toDelete.id))
      setToDelete(null);
    }
  }

  const cancelDelete = () => {
    setToDelete(null);
  }

  return (
    <PlantListWrapper maxWidth="768px">
      <DeleteModal 
        isOpen={!!toDelete}
        confirm={confirmDelete}
        cancel={cancelDelete}
        text={toDelete ? `Delete ${toDelete.nickname}` : 'Delete this plant?'}

      />
      {plantList.length === 0 && (
        <EmptyListWrapper>
          <p>You don't have any plants!</p>
          <Button 
            children='Add Plant'
            variant='success'
            size='normal'
            onClick={() => push('/plantform')}
          />
        </EmptyListWrapper>
      )}
      {plantList.length !== 0 && plantList.map(plant => (
        <PlantCard 
          key={plant.plant_id} 
          plant={plant}
          deletePlant={onClickDelete}
        />
      ))}
    </PlantListWrapper>
  )
}