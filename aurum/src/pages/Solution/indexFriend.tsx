import { Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'

const SolutionPage = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header
        onPressBack={() => navigation.goBack()}
        title='친구'
      />
        
    </SafeAreaView>
  )
}

export default SolutionPage