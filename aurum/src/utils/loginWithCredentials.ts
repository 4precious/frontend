import axios from 'axios';
import CONST from './const';

const loginWithCredentials = async (username: string, password: string) => {
  const response = await axios.post(`${CONST.API_URL}/rest-auth/login/`, {
    username,
    email: username,
    password,
  })
  console.log(response);
}

export default loginWithCredentials;