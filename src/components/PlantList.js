import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getPlantList, deletePlantRequest } from '../utils/requests';
import DeleteModal from './DeleteModal';
import Card from './styled/Card';
import plantImg from '../images/plant-image.png'

export default function PlantList(props) {
  const { userID, plantList, setPlantList, deletePlant } = props;
  const [toDelete, setToDelete] = useState(null);
  const { push } = useHistory();

  useEffect(() => {
    getPlantList(userID).then(res => setPlantList(res.data))
  }, [userID, setPlantList])

  const onClickDelete = ({ id, nickname }) => {
    console.log('onClickDelete', id, nickname);
    setToDelete({ id, nickname })
  }

  const confirmDelete = () => {
    if (toDelete) {
      deletePlantRequest(toDelete.id, push);
      setPlantList(plantList.filter(plant => plant.plant_id !== toDelete.id))
      setToDelete(null);
    }
  }

  const cancelDelete = () => {
    setToDelete(null);
  }

  return (
    <div className="plant-list-wrapper">
      <DeleteModal 
        isOpen={!!toDelete}
        confirm={confirmDelete}
        cancel={cancelDelete}
        text={toDelete ? `Delete ${toDelete.nickname}` : 'Delete this plant?'}

      />
      {plantList.map(plant => (
        <Card 
          key={plant.plant_id} 
          title={plant.nickname}
          image={plant.image || plantImg}
        />
        // <div className="plant-card" key={plant.plant_id}>
        //   <Link to={`/plantlist/${plant.plant_id}`}><h3>{plant.nickname}</h3></Link>
        //   <p>{plant.h2oFrequency}</p>
        //   <button 
        //     className='delete-button'
        //     onClick={_ => onClickDelete({ id: plant.plant_id, nickname: plant.nickname })}
        //     >Delete
        //   </button>
        //   {/* Delete button needs functionality...modal window to confirm?? */}
        // </div>
      ))}
    </div>
  )
}