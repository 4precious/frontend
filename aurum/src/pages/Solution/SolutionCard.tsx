import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const SolutionCard = ({
  onPress,
}: {
  onPress?: () => void,
}) => {
  return (
    <View
      style={styles.container}
      onTouchEnd={onPress}
    >
    </View>
  )
}

export default SolutionCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfdfdf',
    padding: 16,
    borderRadius: 20,
    width:260, 
    height:185,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 5 },
    marginRight:20,
  },
})