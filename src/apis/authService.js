import axiosClient from './axiosClient';

const register = async (body) => {
  return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
  return await axiosClient.post('/login', body);
};

const getInfo = async () => {
  return await axiosClient.get('/user/info/b8d97856-65ec-45db-a41c-c6ee9abf5d54');
};

export { register, signIn, getInfo };
