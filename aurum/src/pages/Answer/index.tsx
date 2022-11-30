import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import DateDisplay from '../../components/DateDisplay'
import PrimaryButton from '../../components/PrimaryButton'
import AnswerDisplay from '../Answer/AnswerDisplay'
import QuestionDisplay from '../Answer/QuestionDisplay'
import SentimentalAnalysisResulltDisplay from '../../components/SentimentalAnalysisResulltDisplay'

//dummy (API 문서 보고 똑같이 변수 설정) 나중에 백엔드에서 가져오기!!
const result_happiness = 0.226;
const result_angry = 30.95;
const result_sadness = 5.267;
const result_anxiety = 55.204;
const result_injury = 7.285;
const result_embarrassment = 1.068;

const AnswerPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState('Q. 오늘 학교 생활은 어땠어?')
  const [answer, setAnswer] = useState('')
  const [editable, setEditable] = useState(true)

  const submit = () => {
    Alert.alert("답변 작성을 마칠까요?", "답변이 부모님께 전송됩니다.", [
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
        <View
          style={{
            marginLeft: 36,
          }}
        >
          <DateDisplay
            size={48}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 36,
          }}
        >
          <QuestionDisplay question={question}></QuestionDisplay>
          <AnswerDisplay
            answer={answer}
            editable={editable}
            typingNow={typingNow}
            onPress={() => editable ? setTypingNow(true) : null}
            onBlur={() => setTypingNow(false)}
            onChangeText={(text: string) => setAnswer(text)}
          />
          {
            answer.length > 0 && editable &&
            <PrimaryButton onPress={() => {
              submit()
              Keyboard.dismiss()
            }} />
          }
        </View>
        {
          answer.length > 0 && !typingNow && !editable &&
          <SentimentalAnalysisResulltDisplay 
            result_happiness={result_happiness} result_angry = {result_angry}
            result_anxiety = {result_anxiety} result_embarrassment = {result_embarrassment}
            result_injury = {result_injury} result_sadness = {result_sadness}
          />
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default AnswerPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})
