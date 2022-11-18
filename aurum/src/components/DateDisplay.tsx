import { View, Text } from 'react-native'
import React from 'react'
import getTodayInString from '../utils/getTodayInString'
import SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const DateDisplay = ({ size }: { size: number }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  else {
    return (
      <View
        style={{
          marginHorizontal: 0,
          marginTop: 0,
        }}
      >
        <Text
          style={{
            fontSize: size,
            fontFamily: 'Poppins-Regular',
            padding: 0,
            marginBottom: - (size / 3),
          }}
        >
          {getTodayInString().month.toUpperCase()}
        </Text>
        <Text
          style={{
            fontSize: size,
            fontFamily: 'Poppins-Regular',
          }}
        >
          {getTodayInString().date.toString().padStart(2, '0')}
        </Text>
      </View>
    )
  }
}

export default DateDisplay