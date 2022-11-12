import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Edit } from 'react-native-feather'

const AnswerDisplay = ({
  answer, editable, typingNow,
  onPress,
  onBlur,
  onChangeText,
}: {
  answer: string,
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
        marginTop: 10,
        marginBottom:10,
      }}
    >
      {
        typingNow ?
        <TextInput
          style={{
            fontSize: 18,
            paddingHorizontal: 24,
            flexShrink: 1,
          }}
          autoFocus={editable}
          onBlur={onBlur}
          onChangeText={onChangeText}
          multiline={true}
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
              fontSize: 18,
              color: '#9A9A9A',
            }}
          >
            {
              answer.length > 0 ?
              answer :
              '답변 작성하기'
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

export default AnswerDisplay