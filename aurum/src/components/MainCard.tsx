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
    flexGrow: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 30,
  },
})