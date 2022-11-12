import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import DateDisplay from '../Question/DateDisplay'
import PrimaryButton from '../Question/PrimaryButton'
import AnswerDisplay from '../Answer/AnswerDisplay'
import QuestionDisplay from '../Answer/QuestionDisplay'
import SentimentalAnalysisResulltDisplay from '../Question/SentimentalAnalysisResulltDisplay'

const AnswerPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState('lorem ipsum dolor sit amet, consectetur adipiscing elit?')
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
          <SentimentalAnalysisResulltDisplay />
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
