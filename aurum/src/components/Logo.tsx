import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Logo = ({ size }: { size: number }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  else {
    return (
      <View>
        <Text
            style={{
              fontSize: size,
              fontFamily: 'Poppins-Bold',
            }}
          >GoldenChild</Text>
      </View>
    )
  }
}

export default Logo