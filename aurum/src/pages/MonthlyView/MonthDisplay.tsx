import { View, Text } from 'react-native'
import React from 'react'
// import getTodayInString from '../../utils/getTodayInString'
import { useFonts } from 'expo-font';

const MonthDisplay = ({ size }: { size: number }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../../assets/fonts/Poppins-Regular.ttf'),
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
            marginBottom: - (size / 6),
          }}
        >
          22'
        </Text>
        <Text
          style={{
            fontSize: size,
            fontFamily: 'Poppins-Regular',
          }}
        >
          NOV
        </Text>
      </View>
    )
  }
}

export default MonthDisplay