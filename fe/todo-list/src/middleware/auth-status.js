import axios from 'axios';

export const isLoggedIn = async () => {
  return await axios.get('/auth/isAuthenticated')
      .then(res => {
          return res.status === 200;
      })
      .catch(err => {
          return false;
      });
};
