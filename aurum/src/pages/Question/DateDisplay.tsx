import { View, Text } from 'react-native'
import React from 'react'
import getTodayInString from '../../utils/getTodayInString'

const DateDisplay = () => {
  return (
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
  )
}

export default DateDisplay