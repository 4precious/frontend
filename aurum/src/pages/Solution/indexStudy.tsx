import { Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

const SolutionPage2 = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header
        onPressBack={() => navigation.goBack()}
        title='4. 공부할 때, 잡생각이 많은 아이'
      />
        
    </SafeAreaView>
  )
}

export default SolutionPage2