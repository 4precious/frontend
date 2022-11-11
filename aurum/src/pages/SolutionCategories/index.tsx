import { Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Divider from '../../components/Divider'

const SolutionCategoriesPage = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header
        onPressBack={() => navigation.goBack()}
        title='솔루션 카테고리'
      />
      <View>
        <Divider />
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 36
          }}
        >
          <Text>
            학업
          </Text>
        </Pressable>
        <Divider />
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 36
          }}
        >
          <Text>
            인간관계
          </Text>
        </Pressable>
        <Divider />
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 36
          }}
        >
          <Text>
            기타
          </Text>
        </Pressable>
        <Divider />
      </View>
    </SafeAreaView>
  )
}

export default SolutionCategoriesPage