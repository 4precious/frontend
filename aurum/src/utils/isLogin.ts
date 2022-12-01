import AsyncStorage from '@react-native-async-storage/async-storage';

const isLogin = () => {
  const token = AsyncStorage.getItem('sessiontoken');
  return token !== null;
}

export default isLogin;