import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronLeft } from 'react-native-feather'

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
      paddingLeft: 24,
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
      <View 
        style={{
          width: 24,
          height: 24,
          marginRight: 36,
        }}
      />
    </View>
  )
}

export default Header