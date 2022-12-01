import { SafeAreaView, StyleSheet, View, Text, Alert, Keyboard, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect, createContext } from 'react'
import Header from '../../components/Header'
import DateDisplay from '../../components/DateDisplay'
import PrimaryButton from '../../components/PrimaryButton'
import AnswerDisplay from './AnswerDisplay'
import SentimentalAnalysisResulltDisplay from '../../components/SentimentalAnalysisResulltDisplay'
import QuestionDisplay from './QuestionDisplay'
import YesterdayDisplay from './YesterdayDisplay'
 
//dummy (API 문서 보고 똑같이 변수 설정) 나중에 백엔드에서 가져오기!!
const result_happiness = 0.226;
const result_angry = 30.95;
const result_sadness = 5.267;
const result_anxiety = 55.204;
const result_injury = 7.285;
const result_embarrassment = 1.068;

const QuestionPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState('')
  const [editable, setEditable] = useState(true)
  const [answer, setAnswer] = useState('요즘 공부에 집중이 안 돼서 너무 속상해. 저번 시험에서도 내 생각보다 낮은 점수를 받아서 기분이 좋지 않았어. 자꾸 그때 생각이 나서, 이번에도 시험 결과가 안 좋을까봐 너무 걱정돼. 이제 또 시험기간인데, 자꾸만 초조해지고 불안해. 내가 잘 할 수 있을지 모르겠어. 그래도 최선을 다 해볼게.')
  // const [answer, setAnswer] = useState('')
  const [btninfo, setBtninfo] = useState('') //대표 감정에 따른 버튼 내용
  const [repemotion,setRepemotion] = useState('')//대표 감정
  const [repper, setRepper] = useState(0) //대표 감정의 퍼센트

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
  
  const setButtonInfo=(repemotion:any) =>{
    useEffect(()=>{
      for(const emo in buttonInfo){
        if (repemotion === emo){
          setBtninfo(buttonInfo[emo])
        }
      }
    },[repemotion]);    
  }
  setButtonInfo(repemotion) //기본값
  
  const SelectRepEmotion = () =>{
    const result = {
      angry: result_angry,
      anxiety: result_anxiety,
      embarrassment: result_embarrassment,
      happiness: result_happiness,
      injury:result_injury,
      sadness:result_sadness
    };

      const sorted =Object.entries(result).sort((a, b) => b[1] - a[1]);
      var topemotion:any = []
      var toppercent:any = []

    for(let element of sorted) {
      topemotion.push(element[0])
      toppercent.push(element[1])
    }
    useEffect(()=>{
      setRepemotion(topemotion[0])
      setRepper(toppercent[0])
    },[]);
  }

  SelectRepEmotion()

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
          <SentimentalAnalysisResulltDisplay 
            result_happiness={result_happiness} result_angry = {result_angry}
            result_anxiety = {result_anxiety} result_embarrassment = {result_embarrassment}
            result_injury = {result_injury} result_sadness = {result_sadness}
          />
        }
        {
          question.length > 0 && !typingNow && !editable && answer.length > 0 &&
          <YesterdayDisplay repemotion = {repemotion} repper = {repper}/>
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
