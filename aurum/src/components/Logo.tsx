import { View, Text } from 'react-native'
import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Logo = ({ size }: { size: number }) => {
  let [fontsLoaded] = useFonts({
    'Poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View>
        <Text
            style={{
              fontSize: size,
              fontFamily: 'Poppins-Bold',
            }}
          >4GZZ</Text>
      </View>
    )
  }
}

export default Logo