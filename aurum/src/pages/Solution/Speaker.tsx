import { Pressable, Alert } from 'react-native'
import React from 'react'
import { Headphones } from 'react-native-feather'

const Speaker = ()=>{
    const onPressFunction = () =>{
        Alert.alert("스피커로 들으실래요?",'NUGU로 솔루션 듣기',[
            {
                text:"취소",
                style:"cancel"
            },
            {
                text:"확인",
                onPress: () => {
                    console.log('NUGU야 들려줭')
                  }
            }
        ])
    }
    
    return (
    <Pressable
        onPress={onPressFunction}>
      <Headphones
        color={'#000'}
      />
    </Pressable>
  )
}

export default Speaker