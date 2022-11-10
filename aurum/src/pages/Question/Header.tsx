import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronLeft } from 'react-native-feather'

const Header = ({ onPressBack }: {
  onPressBack?: () => void,
}) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      paddingLeft: 36,
      marginTop: 18,
      // marginBottom: 36,
    }}>
      <Pressable
        onPress={onPressBack}
      >
        <ChevronLeft
          color={'#000'}
        />
      </Pressable>
    </View>
  )
}

export default Header