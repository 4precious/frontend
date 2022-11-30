import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const fetchWithAuthentication = async <R>(url: string, options: any = {}) => {
  const token = await AsyncStorage.getItem('sessiontoken');
  // check is token in local storage
  if (token) {
    return axios<unknown, R>({
      url,
      headers: {
        Authorization: `token ${token}`,
      },
      ...options,
    });
  } else {
    throw Error('No token in local storage');
  }
}

export default fetchWithAuthentication;