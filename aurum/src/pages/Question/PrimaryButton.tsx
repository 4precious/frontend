import { View, Text, Pressable } from 'react-native'
import React from 'react'

const PrimaryButton = ({
  onPress,
}: {
  onPress?: () => void,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#FFC226',
        justifyContent: 'center',
        height: 60,
        borderRadius: 10,
        marginTop: 16,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
        }}
      >
        작성 완료
      </Text>
    </Pressable>
  )
}

export default PrimaryButton