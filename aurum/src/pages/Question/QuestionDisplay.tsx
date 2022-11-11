import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Edit } from 'react-native-feather'

const QuestionDisplay = ({
  question, editable, typingNow,
  onPress,
  onBlur,
  onChangeText,
}: {
  question: string,
  editable: boolean,
  typingNow: boolean,
  onPress?: () => void,
  onBlur?: () => void,
  onChangeText?: (text: string) => void,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        height: 60,
        borderRadius: 10,
        marginTop: 36,
      }}
    >
      {
        typingNow ?
        <TextInput
          style={{
            fontSize: 16,
            paddingHorizontal: 24,
          }}
          autoFocus={editable}
          onBlur={onBlur}
          onChangeText={onChangeText}
        /> :
        (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {
              question.length > 0 ?
              question :
              '오늘의 질문을 입력해주세요'
            }
          </Text>
          {
            editable ?
            <View>
              <Edit color={'#000'} />
            </View> :
            null
          }
        </View>
        )
      }
    </Pressable>
  )
}

export default QuestionDisplay