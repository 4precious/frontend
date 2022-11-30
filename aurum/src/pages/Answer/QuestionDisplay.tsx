import { View, Text } from 'react-native'
import React from 'react'
import { Question } from '../../interfaces/text'

const QuestionDisplay = ({ question }: { question: Question }) => {
  return (
    <View
      style={{
        marginVertical: 16,
        padding: 16,
        borderRadius: 10,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        minHeight:60,
        alignItems: question.content.length > 0 ? 'flex-start' : 'center',
        justifyContent: question.content.length > 0 ? 'flex-start' : 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: question.content.length > 0 ? '#000' : '#9A9A9A',
        }}
      >
        {question.content}
      </Text>
        </View>
  )
}

export default QuestionDisplay