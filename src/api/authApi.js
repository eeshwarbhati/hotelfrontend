import client from './axiosClient';

const authApi = {
  login: (data) => client.post('/auth/login', data),
  signup: (data) => client.post('/auth/signup', data),
};

export default authApi;
