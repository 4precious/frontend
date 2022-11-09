import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import MainCard from './components/MainCard'

const Root = (props: any) => {
  return (
    <View style={styles.container}>
      <MainCard>
        <Text>test</Text>
        <Button
          title='질문 작성하기'
          onPress={() => props.navigation.navigate('Question')}
        />
      </MainCard>
    </View>
  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
})
