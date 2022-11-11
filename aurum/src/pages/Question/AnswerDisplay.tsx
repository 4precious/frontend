import { View, Text } from 'react-native'
import React from 'react'

const AnswerDisplay = ({ answer }: { answer: string }) => {
  return (
    <View
      style={{
        marginVertical: 16,
        marginHorizontal: 36,
        padding: 16,
        borderRadius: 10,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        alignItems: answer.length > 0 ? 'flex-start' : 'center',
        justifyContent: answer.length > 0 ? 'flex-start' : 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: answer.length > 0 ? '#000' : '#9A9A9A',
        }}
      >
        {answer.length > 0 ? answer : '아직 대답이 작성되지 않았어요'}
      </Text>
        </View>
  )
}

export default AnswerDisplay