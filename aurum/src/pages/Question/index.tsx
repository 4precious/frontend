import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import DateDisplay from './DateDisplay'
import PrimaryButton from './PrimaryButton'
import AnswerDisplay from './AnswerDisplay'
import SentimentalAnalysisResulltDisplay from './SentimentalAnalysisResulltDisplay'
import SolutionDisplay from './KeywordDisplay'
import QuestionDisplay from './QuestionDisplay'
 
const QuestionPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState('')
  const [editable, setEditable] = useState(true)
  const [answer, setAnswer] = useState('lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl tincidunt nunc, eget aliquam nisl nisl sit amet nunc.')
  // const [answer, setAnswer] = useState('')

  const submit = () => {
    Alert.alert("질문 작성을 마칠까요?", "질문이 아이에게 전송됩니다.", [
      {
        text: "취소",
        style: "cancel"
      },
      {
        text: "확인",
        onPress: () => {
          setEditable(false)
          // navigation.navigate('Root')
        }
      }
    ])
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Header
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView>
        <DateDisplay />
        <View
          style={{
            paddingHorizontal: 36,
          }}
        >
          <QuestionDisplay
            question={question}
            editable={editable}
            typingNow={typingNow}
            onPress={() => editable ? setTypingNow(true) : null}
            onBlur={() => setTypingNow(false)}
            onChangeText={(text: string) => setQuestion(text)}
          />
          {
            question.length > 0 && editable &&
            <PrimaryButton onPress={() => {
              submit()
              Keyboard.dismiss()
            }} />
          }
        </View>
        {
          question.length > 0 && !typingNow && !editable &&
          <AnswerDisplay answer={answer} />
        }
        {
          question.length > 0 && !typingNow && !editable &&
          <SentimentalAnalysisResulltDisplay />
        }
        {
          question.length > 0 && !typingNow && !editable &&
          <SolutionDisplay />
        }
        {
          question.length > 0 && !typingNow && !editable &&
          <View
            style={{
              marginHorizontal: 36,
              marginBottom: 36,
            }}
          >
            <Pressable
              onPress={() => navigation.navigate('SolutionCategories')}
              style={{
                justifyContent: 'center',
                height: 48,
                borderRadius: 10,
                marginTop: 16,
                alignItems: 'center',

                borderColor: '#000',
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                솔루션 살펴보기
              </Text>
            </Pressable>
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default QuestionPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})
