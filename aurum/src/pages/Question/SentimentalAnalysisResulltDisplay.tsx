import { View, Text } from 'react-native'
import React from 'react'

const SentimentalAnalysisResulltDisplay = () => {
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
        감정 분석 결과
      </Text>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text>
          감정 분석 결과가 나올 예정입니다.
        </Text>
      </View>
    </View>
  )
}

export default SentimentalAnalysisResulltDisplay