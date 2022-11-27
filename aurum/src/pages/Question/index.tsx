import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import DateDisplay from '../../components/DateDisplay'
import PrimaryButton from '../../components/PrimaryButton'
import AnswerDisplay from './AnswerDisplay'
import SentimentalAnalysisResulltDisplay from '../../components/SentimentalAnalysisResulltDisplay'
import SolutionDisplay from './KeywordDisplay'
import QuestionDisplay from './QuestionDisplay'
 
const QuestionPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState('')
  const [editable, setEditable] = useState(true)
  const [answer, setAnswer] = useState('lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl tincidunt nunc, eget aliquam nisl nisl sit amet nunc.')
  // const [answer, setAnswer] = useState('')
  const [emotion,setEmotion] = useState('')

  type ObjType = {
    [index: string]: string
  }

  const buttonInfo : ObjType = {
    'default':'우리 아이, 육아 코칭 살펴보기',//기본값
    'happy':'행복한 우리 아이, 육아 코칭 살펴보기',//기쁨
    'angry':'화가 난 우리 아이, 육아 코칭 살펴보기',//분노
    'sad':'슬픈 우리 아이, 육아 코칭 살펴보기',//슬픔
    'fear':'불안한 우리 아이, 육아 코칭 살펴보기',//공포
    'surprise':'깜짝 놀란 우리 아이, 육아 코칭 살펴보기',//당황
    'hurt':'상처받은 우리 아이, 육아 코칭 살펴보기',//상처
  }
  
  const setButtonInfo=(emotion:any) =>{
    useEffect(()=>{
      console.log(emotion)
      for(const emo in buttonInfo){
        if (emotion === emo){
          setEmotion(buttonInfo[emo])
        }
      }
    },[]);    
  }
  setButtonInfo('default') //기본값

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
        <View
          style={{
            marginHorizontal: 36,
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
          question.length > 0 && !typingNow && !editable && answer.length > 0 &&
          <SentimentalAnalysisResulltDisplay />
        }
        {
          question.length > 0 && !typingNow && !editable && answer.length > 0 &&
          <SolutionDisplay />
        }
        {
          question.length > 0 && !typingNow && !editable && answer.length > 0 &&
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
                  fontSize: 16,
                }}
              >
                {emotion}
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
