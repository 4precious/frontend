import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect, createContext } from 'react'
import Header from '../../components/Header'
import DateDisplay from '../../components/DateDisplay'
import PrimaryButton from '../../components/PrimaryButton'
import AnswerDisplay from './AnswerDisplay'
import SentimentalAnalysisResulltDisplay from '../../components/SentimentalAnalysisResulltDisplay'
import QuestionDisplay from './QuestionDisplay'
import YesterdayDisplay from './YesterdayDisplay'
import { Answer, Question } from '../../interfaces/text'
import getQuestion from '../../utils/getQuestion'
import getAnswer from '../../utils/getAnswer'
import uploadQuestion from '../../utils/uploadQuestion'
 
const QuestionPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState<Question | null>(null)
  const [editable, setEditable] = useState(true)
  const [answer, setAnswer] = useState<Answer | null>(null)
  // const [answer, setAnswer] = useState('')
  const [btninfo, setBtninfo] = useState('') //대표 감정에 따른 버튼 내용
  const [repemotion,setRepemotion] = useState('')//대표 감정
  const [repper, setRepper] = useState(0) //대표 감정의 퍼센트
  const [emotions, setEmotions] = useState({
    happiness: 0,
    angry: 0,
    sadness: 0,
    anxiety: 0,
    injury: 0,
    embarrassment: 0,
  }) //감정들

  useEffect(() => {(async () => {
    const questionData = await getQuestion(
      'parent2@email.me',
      new Date().toISOString().split('T')[0]
    )
    if (questionData) {
      setQuestion(questionData)
      setEditable(false)
    }
  })()}, [])

  useEffect(() => {(async () => {
    if (question) {
      const answerData = await getAnswer(question.id)
      if (answerData) {
        setAnswer(answerData)
      }
    }
  })()}, [question])

  useEffect(() => {
    if (answer) {
      console.log(answer)
      setEmotions({
        happiness: answer.result_happiness ?? -1,
        angry: answer.result_anger ?? -1,
        sadness: answer.result_sadness ?? -1,
        anxiety: answer.result_anxiety ?? -1,
        injury: answer.result_injury ?? -1,
        embarrassment: answer.result_embarrassment ?? -1,
      })
    }
  }, [answer])


  type ObjType = {
    [index: string]: string
  }

  //감정에 따라서 버튼 인포 변경
  const buttonInfo : ObjType = {
    'default':'우리 아이, 육아 코칭 살펴보기',//기본값
    'happiness':'행복한 우리 아이, 육아 코칭 살펴보기',//기쁨
    'angry':'화가 난 우리 아이, 육아 코칭 살펴보기',//분노
    'sadness':'슬픈 우리 아이, 육아 코칭 살펴보기',//슬픔
    'anxiety':'불안한 우리 아이, 육아 코칭 살펴보기',//불안
    'embarrassment':'깜짝 놀란 우리 아이, 육아 코칭 살펴보기',//당황
    'injury':'상처받은 우리 아이, 육아 코칭 살펴보기',//상처
  }
  
  useEffect(() => {
    for(const emo in buttonInfo){
      if (repemotion === emo){
        setBtninfo(buttonInfo[emo])
      }
    }
  }, [repemotion, buttonInfo])
  
  useEffect(() => {
    const sorted = Object.entries(emotions).sort((a, b) => b[1] - a[1]);
    let topemotion: any = []
    let toppercent: any = []
  
    for(let element of sorted) {
      topemotion.push(element[0])
      toppercent.push(element[1])
    }

    setRepemotion(topemotion[0])
    setRepper(toppercent[0])
  }, [emotions])

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
          uploadQuestion(question?.content || '')
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
            question={question?.content || ''}
            editable={editable}
            typingNow={typingNow}
            onPress={() => editable ? setTypingNow(true) : null}
            onBlur={() => setTypingNow(false)}
            onChangeText={(text: string) => setQuestion({ ...(question ?? {} as any), content: text })}
          />
          {
            question && question.content.length > 0 && editable &&
            <PrimaryButton onPress={() => {
              submit()
              Keyboard.dismiss()
            }} />
          }
        </View>
        {
          question && question.content.length > 0 && !typingNow && !editable &&
          <AnswerDisplay answer={answer?.content || ''} />
        }
        {
          question && question.content.length > 0 && answer && answer.content.length > 0 &&
          <SentimentalAnalysisResulltDisplay 
            result_happiness = {answer.result_happiness ?? 0}
            result_angry = {answer.result_anger ?? 0}
            result_anxiety = {answer.result_anxiety ?? 0}
            result_embarrassment = {answer.result_embarrassment ?? 0}
            result_injury = {answer.result_injury ?? 0}
            result_sadness = {answer.result_sadness ?? 0}
          />
        }
        {
          question && question.content.length > 0 && !typingNow && !editable && answer && answer.content.length > 0 &&
          <YesterdayDisplay repemotion = {repemotion} repper = {repper}/>
        }
        {
          question && question.content.length > 0 && !typingNow && !editable && answer && answer.content.length > 0 &&
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
                {btninfo}
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
