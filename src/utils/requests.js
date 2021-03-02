import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

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

export const loginRequest = (values, push) => {
  return axios
    .post('https://water-plants-app-tt42.herokuapp.com/api/users/login', values)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        push('/plantlist');
    })
    .catch(err => {
        console.log('login failure', {err});
    })
}

export const addPlantRequest = (values, push) => {
  return axiosWithAuth()
    .post('/api/plants', values)
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