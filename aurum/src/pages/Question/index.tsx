import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { ChevronLeft, Edit } from 'react-native-feather'
import getTodayInString from '../../utils/getTodayInString'


const QuestionPage = ({ navigation }: any) => {
  const [typingNow, setTypingNow] = useState(false)
  const [question, setQuestion] = useState('')

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        paddingLeft: 36,
        marginTop: 18,
        // marginBottom: 36,
      }}>
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft
            color={'#000'}
          />
        </Pressable>
      </View>
      <View
        style={{
          marginHorizontal: 36,
          marginTop: 0,
        }}
      >
        <Text
          style={{
            fontSize: 48,
          }}
        >
          {getTodayInString().month.toUpperCase()}
        </Text>
        <Text
          style={{
            fontSize: 48,
          }}
        >
          {getTodayInString().date.toString().padStart(2, '0')}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 36,
        }}
      >
        <Pressable
          onPress={() => setTypingNow(true)}
          style={{
            backgroundColor: '#f2f2f2',
            justifyContent: 'center',
            height: 60,
            borderRadius: 10,
            marginVertical: 36,
          }}
        >
          {
            typingNow ?
            <TextInput
              style={{
                fontSize: 18,
                paddingHorizontal: 24,
              }}
              autoFocus
              onBlur={() => setTypingNow(false)}
              onChangeText={(text) => setQuestion(text)}
            /> :
            (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                {
                  question.length > 0 ?
                  question :
                  '오늘의 질문을 입력해주세요'
                }
              </Text>
              <View>
                <Edit color={'#000'} />
              </View>
            </View>
            )
          }
        </Pressable>
        
      </View>
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
