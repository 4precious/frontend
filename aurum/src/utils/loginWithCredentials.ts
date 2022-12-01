import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CONST from './const';

const loginWithCredentials = async (username: string, password: string) => {
  try {
    const response = await axios(`${CONST.API_URL}/rest-auth/login/`, {
      method: 'POST',
      withCredentials: true,
      data: {
        username,
        email: username,
        password,
      },
    })
  
    const sessiontoken = response.data.key;
    console.log(sessiontoken);
  
    AsyncStorage.setItem('sessiontoken', sessiontoken);
  } catch (error: any) {
    console.log(error);
  }
}

export default loginWithCredentials;