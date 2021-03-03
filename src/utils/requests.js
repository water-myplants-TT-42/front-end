import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export const signupRequest = (values, push) => {
  return axios
    .post('https://water-plants-app-tt42.herokuapp.com/api/users/register', values)
    .then(() => {
      push('/login')
    })
    .catch(err => {
      console.log('signup failure', {err})
    })
}

export const loginRequest = (values, push, setUserID) => {
  return axios
    .post('https://water-plants-app-tt42.herokuapp.com/api/users/login', values)
    .then(res => {
        setUserID(res.data.user_id);
        localStorage.setItem('token', res.data.token);
        push('/plantlist');
    })
    .catch(err => {
        console.log('login failure', {err});
    })
}

export const getPlantList = (userID) => {
  return axiosWithAuth()
    .get(`https://water-plants-app-tt42.herokuapp.com/api/users/${userID}/plants`)
    .then(res => {
      console.log(res);
      return res
      // setPlantList(res.data);
    })
    .catch(err => console.log({err}))
}

export const addPlantRequest = (values, push) => {
  return axiosWithAuth()
    .post('https://water-plants-app-tt42.herokuapp.com/api/plants', values)
    .then(res => {
      push('/plantlist')
    })
    .catch(err => console.log({err}))
}

export const editPlantRequest = (values, push) => {
  return axiosWithAuth()
    .put('/api/plants', values)
    .then(() => {
      push(`/plant-list/${values.id}`)
    })
    .catch(err => console.log({err}))
}

export const editUserRequest = (values, push) => {
  return axiosWithAuth()
    .put('/api/users', values)
    .then(() => {
      push('/plantlist')
    })
    .catch(err => console.log({err}))
}

export const deletePlantRequest = (id, push) => {
  return axiosWithAuth()
    .delete(`api/plants/${id}`)
    .then(() => {
      push('/plantlist')
    })
    .catch(err => console.log({err}))
}

export const getPlant = (id) => {
  return axiosWithAuth()
    .get(`https://water-plants-app-tt42.herokuapp.com/api/plants/${id}`)
    .then(res => {
      console.log("Got plant:", res)
      return res.data
    })
    .catch(err => console.log({err}))
}