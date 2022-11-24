import { StyleSheet, Image, View, Text, Pressable } from 'react-native'
import React from 'react'

const SolutionCard = ({
  onPress,
  title,
  card,
  info,
}: {
  onPress?: () => void,
  title:string,
  card:string,
  info:string,
}) => {
  return (
    <Pressable onPress={onPress}>
        <View style={styles.container}>
          <View style = {{height:60, justifyContent:'center',marginBottom:18}}>
            {(card==='TV') 
              ?
              <Image source = {require('../../../assets/icons/TV.png')}/>
              :
              <Image source = {require('../../../assets/icons/Diffuser.png')}/>
            }
          </View>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.info}>{info}</Text>
        </View>
    </Pressable>
  )
}

export default SolutionCard

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#dfdfdf',
    padding: 24,
    borderRadius: 20,
    width:260, 
    height:185,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 5 },
    marginRight:20,
  },
  title:{
    fontSize: 20, color: '#2E2E2E', fontWeight: '700', lineHeight:28,
  },
  info:{
    marginTop:6,  color: '#6E6E6E', fontSize: 14, fontWeight: '700',
  }
})