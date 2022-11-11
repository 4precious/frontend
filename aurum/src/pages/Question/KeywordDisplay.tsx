import { View, Text } from 'react-native'
import React from 'react'

const KeywordDisplay = () => {
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
        키워드
      </Text>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text>
          키워드가 제공될 예정입니다.
        </Text>
      </View>
    </View>
  )
}

export default KeywordDisplay