import axios from 'axios';

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