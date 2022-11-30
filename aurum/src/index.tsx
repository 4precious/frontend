import { StyleSheet, SafeAreaView, Text, Button, Image, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainCard from './components/MainCard'
import { Bell, Calendar, User } from 'react-native-feather';
import getTodayInString from './utils/getTodayInString';
import DateDisplay from './components/DateDisplay';
import Logo from './components/Logo';
import NotificationBell from './components/NotificationBell';

import ChildDefaultSvg from '../assets/icons/ChildIcons/ChildDefault.svg';
import ChildAngrySvg from '../assets/icons/ChildIcons/ChildAngry.svg';
import ChildHappySvg from '../assets/icons/ChildIcons/ChildHappiness.svg';
import ChildSadSvg from '../assets/icons/ChildIcons/ChildSad.svg';

import getQuestions from './utils/getQuestions';
import loginWithCredentials from './utils/loginWithCredentials';
import axios from 'axios';
import uploadQuestion from './utils/uploadQuestion';
import { Answer, Question } from './interfaces/text';
import getAnswer from './utils/getAnswer';
import getQuestion from './utils/getQuestion';

type ObjType = {
  [index: string]: any
  }
 
 const icons : ObjType = {
  default: <ChildDefaultSvg/>,//기본값
  angry : <ChildAngrySvg/>,
  anxiety : <ChildDefaultSvg/>,//사진 없음
  happiness :<ChildHappySvg/>,
  embarrassment : <ChildDefaultSvg/>,//사진 없음
  injury : <ChildSadSvg/>,
  sadness : <ChildSadSvg/>
 }
 
const Root = (props: any) => {
  // useEffect(() => {
  //   loginWithCredentials('parent2@email.me', '1234567!')
  //   getQuestions();
  //   uploadQuestion('test question');
  // })

  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState<Answer | null>(null);

  const [repemotion, setRepemotion] = useState<string>('default');

  useEffect(() => {(async () => {
    const questionData = await getQuestion(
      'parent2@email.me',
      new Date().toISOString().split('T')[0]
    )
    if (!questionData || questionData.content.length === 0) {
      console.error('No question data')
      return;
    }
    setQuestion(questionData);
  })()}, [])

  useEffect(() => {(async () => {
    if (question) {
      const answerData = await getAnswer(question.id)
      if (!answerData) {
        console.error('No answer data')
        return;
      }
      setAnswer(answerData)
    }
  })()}, [question])

  useEffect(() => {
    if (answer) {
      const emotion: {
        [emotion: string]: number,
      } = {
        angry : answer.result_anger ?? 0,
        anxiety : answer.result_anxiety ?? 0,
        happiness : answer.result_hapiness ?? 0,
        embarrassment : answer.result_embarrassment ?? 0,
        injury : answer.result_injury ?? 0,
        sadness : answer.result_sadness ?? 0,
      }

      let max = 0;
      Object.keys(emotion).forEach((key) => {
        if (emotion[key] > max) {
          max = emotion[key];
          setRepemotion(key);
        }
      })
    }
  }, [answer])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        paddingLeft: 36,
        marginTop: 18,
        marginBottom: 36,
      }}>
        <Pressable
          onPress={() => props.navigation.navigate('ChildRoot')}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >4GZZ</Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 36,
          }}
        >
          <View
            style={{
              marginRight: 8,
            }}
          >
            <NotificationBell
              notification
            />
          </View>
          <Pressable
            style={{
              marginLeft: 8,
              marginRight: 8,
            }}
            onPress={() => props.navigation.navigate('MonthlyView')}
          >
            <Calendar
              color={'#000'}
            />
          </Pressable>
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <Pressable onPress={() => props.navigation.navigate('Login')}>
              <User
                color={'#000'}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 36,
        }}
      >
        <MainCard>
          <View
            style={{
              marginHorizontal: 8,
              marginVertical: 8,
            }}
          >
            <DateDisplay
              size={50}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            {icons[repemotion]}
          </View>
          <Pressable
            style={{
              borderRadius: 10,
              borderColor: '#000',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 48,
            }}
            onPress={() => props.navigation.navigate('Question')}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >{
              question ? '답변 확인하기' : '질문 작성하기'
            }</Text>
          </Pressable>
        </MainCard>
      </View>
      <View
        style={{
          marginVertical: 36,
          alignItems: 'center',
        }}
      >
        {
          !question && <Text
          style={{
            fontSize: 16,
          }}
        >오늘의 질문을 입력해주세요</Text>}
      </View>
    </SafeAreaView>
  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})

