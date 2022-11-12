import { View, Text } from 'react-native'
import React from 'react'

const QuestionDisplay = ({ question }: { question: string }) => {
  return (
    <View
      style={{
        marginVertical: 16,
        padding: 16,
        borderRadius: 10,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        height:60,
        alignItems: question.length > 0 ? 'flex-start' : 'center',
        justifyContent: question.length > 0 ? 'flex-start' : 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: question.length > 0 ? '#000' : '#9A9A9A',
        }}
      >
      </Text>
        </View>
  )
}

export default QuestionDisplay