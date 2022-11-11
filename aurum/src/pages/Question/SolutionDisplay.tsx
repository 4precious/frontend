import { View, Text } from 'react-native'
import React from 'react'

const SolutionDisplay = () => {
  return (
    <View
      style={{
        marginVertical: 24,
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
        솔루션
      </Text>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text>
          솔루션이 제공될 예정입니다.
        </Text>
      </View>
    </View>
  )
}

export default SolutionDisplay