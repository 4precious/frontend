import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const MainCard = ({
  onPress,
  children,
}: {
  onPress?: () => void,
  children?: React.ReactNode,
}) => {
  return (
    <View
      style={styles.container}
      onTouchEnd={onPress}
    >
      {children}
    </View>
  )
}

export default MainCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 16,
    borderRadius: 20,
  },
})