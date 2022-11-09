import { StyleSheet, SafeAreaView, Text, Button, View, Pressable } from 'react-native'
import React from 'react'
import MainCard from './components/MainCard'
import { Calendar, User } from 'react-native-feather';

const Root = (props: any) => {
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
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >4GZZ</Text>
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
                fontSize: 64,
              }}
            >
              {getTodayInString().month.toUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: 64,
              }}
            >
              {getTodayInString().date.toString().padStart(2, '0')}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >

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
            >질문 작성하기</Text>
          </Pressable>
        </MainCard>
      </View>
      <View
        style={{
          marginVertical: 36,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
          }}
        >오늘의 질문을 입력해주세요</Text>
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

const getTodayInString = () => {
  // get today in Month Date like NOV 12
  const today = new Date()
  // get month in string like NOV, DEC
  const month = today.toLocaleString('en-US', { month: 'short' })
  const date = today.getDate()
  return {
    month: month,
    date: date,
  }
}