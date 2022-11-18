import { StyleSheet, SafeAreaView, Text, Button, Image, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import MainCard from './components/MainCard'
import { Calendar, User } from 'react-native-feather';
import getTodayInString from './utils/getTodayInString';
import NotificationBell from './components/NotificationBell';

const ChildRoot = (props: any) => {
  const [question, setQuestion] = useState('오늘 학교 생활은 어땠어?')
  //버튼 눌러야해서 일단 질문 있는거로 가정, true로 놓고 함

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        paddingLeft: 36,
        marginTop: 18,
      }}>
        <Pressable
          onPress={() => props.navigation.navigate('Root')}
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
          <View
            style={{
              marginHorizontal: 8,
            }}
          >
            <Calendar
              color={'#000'}
            />
          </View>
          <View
            style={{
              marginLeft: 8,
            }}
          >
            <User
              color={'#000'}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 36,
          marginHorizontal: 36,
        }}
      >
        <MainCard>
          <View
            style={{
              margin: 16,
            }}
          >
            <Text
              style={{
                fontSize: 50,
              }}
            >
              {getTodayInString().month.toUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: 50,
              }}
            >
              {getTodayInString().date.toString().padStart(2, '0')}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            {question
              ?
              <View
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    backgroundColor:"#F2F2F2",
                    borderRadius: 10,
                    overflow: 'hidden',
                    fontSize: 16,
                    fontWeight: '500',
                    padding: 16,
                    minHeight:48,
                    alignItems: question.length > 0 ? 'flex-start' : 'center',
                    justifyContent: question.length > 0 ? 'flex-start' : 'center',
                  }}
                  ellipsizeMode='tail'
                  numberOfLines={2}
                >
                  {question}
                </Text>
                <Image 
                  source = {require('../assets/icons/vector412.png')}
                />
              </View>
              :
              <Text/>
            }
            <Image source=
            {question 
              ? 
              require('../assets/icons/loveletter.png') 
              : 
              require('../assets/icons/leaves.png')
            }/>
          </View>
          {
            question 
            ?
            <Pressable
              style={{
                borderRadius: 10,
                borderColor: '#000',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: 48,
              }}
              onPress={() => props.navigation.navigate('Answer')}
            >
              <Text
                style={{
                  fontSize: 16,
                }}
              >답변 작성하기</Text>
            </Pressable>
            :
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
                marginBottom : 30,
              }}
            >아직 질문이 도착하지 않았어요</Text>
          }
        </MainCard>
      </View>
      <View
        style={{
          marginVertical: 36,
          alignItems: 'center',
        }}
      >
      </View>
    </SafeAreaView>
  )
}

export default ChildRoot

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})

