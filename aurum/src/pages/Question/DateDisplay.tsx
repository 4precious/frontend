import { View, Text } from 'react-native'
import React from 'react'
import getTodayInString from '../../utils/getTodayInString'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const DateDisplay = ({ size }: { size: number }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
            marginBottom: - (size / 6),
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