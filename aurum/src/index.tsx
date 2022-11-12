import { StyleSheet, SafeAreaView, Text, Button, View, Pressable } from 'react-native'
import React from 'react'
import MainCard from './components/MainCard'
import { Bell, Calendar, User } from 'react-native-feather';
import getTodayInString from './utils/getTodayInString';
import DateDisplay from './pages/Question/DateDisplay';
import Logo from './components/Logo';
import NotificationBell from './components/NotificationBell';

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
          <View
            style={{
              marginLeft: 8,
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
              size={60}
            />
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
            fontSize: 16,
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

