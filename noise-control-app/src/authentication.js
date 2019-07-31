import axios from 'axios';

const auth = {
  register(user) {
    return axios
      .post('https://noise-controller-backend.herokuapp.com/api/teachers/register', user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  },
  login(user, setTeachers) {
    return axios
      .post('https://noise-controller-backend.herokuapp.com/api/teachers/login', user)
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default auth;
