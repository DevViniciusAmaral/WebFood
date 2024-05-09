import { api } from '../api';
import Service from '@ember/service';

export default class UserService extends Service {
  findAllUsers = async () => {
    try {
      const { data } = await api.get('/user');
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  createUser = async (data) => {
    try {
      const { data: response } = await api.post('/user', data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  updateUser = async (data) => {
    try {
      const { data: response } = await api.put('/user', data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async (id) => {
    try {
      await api.delete(`/user/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}
