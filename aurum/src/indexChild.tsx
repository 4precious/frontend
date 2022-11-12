import { StyleSheet, SafeAreaView, Text, Button, Image, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import MainCard from './components/MainCard'
import { Calendar, User } from 'react-native-feather';
import getTodayInString from './utils/getTodayInString';

const ChildRoot = (props: any) => {
  const [question, setQuestion] = useState(true)
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
        marginBottom: 36,
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
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >오늘의 질문</Text>
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
