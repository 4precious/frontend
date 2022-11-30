import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import DateDisplay from '../../components/DateDisplay'
import PrimaryButton from '../../components/PrimaryButton'
import AnswerDisplay from '../Answer/AnswerDisplay'
import QuestionDisplay from '../Answer/QuestionDisplay'
import SentimentalAnalysisResulltDisplay from '../../components/SentimentalAnalysisResulltDisplay'
import uploadAnswer from '../../utils/uploadAnswer'
import { Answer, Question } from '../../interfaces/text'
import getQuestion from '../../utils/getQuestion'
import getAnswer from '../../utils/getAnswer'

const AnswerPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState<Question>({
    content: 'Q. 오늘 학교 생활은 어땠어?',
    created_at: new Date(),
    id: -1,
    user_id: -1,
  })
  const [answer, setAnswer] = useState<Answer>({
    id: -1,
    user_email: '',
    question: -1,
    content: '',
    created_at: new Date(),
  })

  const [editable, setEditable] = useState(true)

  useEffect(() => {(async () => {
    const questionData = await getQuestion(
      'parent2@email.me',
      new Date().toISOString().split('T')[0]
    )
    setQuestion(questionData)
  })()}, [])

  useEffect(() => {(async () => {
    const answerData = await getAnswer(question.id)
    setAnswer(answerData)
  })()}, [answer])

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

          uploadAnswer({
            questionId: question.id,
            content: answer.content,
          })
          navigation.navigate('Root')
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
            answer={answer.content}
            editable={editable}
            typingNow={typingNow}
            onPress={() => editable ? setTypingNow(true) : null}
            onBlur={() => setTypingNow(false)}
            onChangeText={(text: string) => setAnswer({
              ...answer,
              content: text,
            })}
          />
          {
            answer.content.length > 0 && editable &&
            <PrimaryButton onPress={() => {
              submit()
              Keyboard.dismiss()
            }} />
          }
        </View>
        {
          answer.content.length > 0 && !typingNow && !editable &&
          <SentimentalAnalysisResulltDisplay 
            result_happiness={answer.result_hapiness ?? 0}
            result_sadness={answer.result_sadness ?? 0}
            result_anxiety={answer.result_anxiety ?? 0}
            result_angry={answer.result_anger ?? 0}
            result_embarrassment={answer.result_embarrassment ?? 0}
            result_injury={answer.result_injury ?? 0}
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
