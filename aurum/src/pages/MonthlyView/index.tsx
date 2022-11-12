import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import MonthDisplay from './MonthDisplay'
import Calendar from './Calendar'

const MonthlyViewPage = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <Header
        onPressBack={() => navigation.goBack()}
      />
      <View
        style={{
          marginLeft: 36,
          marginVertical: 36,
        }}
      >
        <MonthDisplay size={48} />
      </View>
      <View
        style={{
          marginHorizontal: 36,
        }}
      >
        <Calendar />
      </View>
    </SafeAreaView>
  )
}

export default MonthlyViewPage