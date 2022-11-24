import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronLeft } from 'react-native-feather'
import Speaker from './Speaker'

const Header = ({
  onPressBack,
  title,
}: {
  onPressBack?: () => void,
  title?: string,
}) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48,
      paddingHorizontal: 24,
      marginRight:5,
      marginTop: 18,
    }}>
      <Pressable
        onPress={onPressBack}
      >
        <ChevronLeft
          color={'#000'}
        />
      </Pressable>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
      <Speaker/>
    </View>
  )
}

export default Header