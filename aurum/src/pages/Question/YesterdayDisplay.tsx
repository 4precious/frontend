import { View, Text } from 'react-native'
import React from 'react'

const YesterdayDisplay = () => {
  return (
    <View
      style={{
        marginVertical: 16,
        marginHorizontal: 36,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: '#000',
          fontWeight: 'bold',
        }}
      >
        어제의 금쪽이
      </Text>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text>
          내일 할게요~..ㅠ
        </Text>
      </View>
    </View>
  )
}

export default YesterdayDisplay