import { View, Text } from 'react-native'
import React from 'react'
import { Bell } from 'react-native-feather'

const NotificationBell = ({
  onPress,
  notification,
}: {
  onPress?: () => void,
  notification?: boolean,
}) => {
  return (
    <View>
      <Bell
        color={'#000'}
      />
      {
        notification && (
          <View
            style={{
              position: 'absolute',
              bottom: -1,
              right: -4,
              backgroundColor: '#DC4343',
              borderWidth: 2,
              borderColor: '#fff',
              borderRadius: 7,
              width: 14,
              height: 14,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )
      }
    </View>
  )
}

export default NotificationBell