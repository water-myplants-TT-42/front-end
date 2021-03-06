import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseUrl: 'https://water-plants-app-tt42.herokuapp.com/'
    })
}