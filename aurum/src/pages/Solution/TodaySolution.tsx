import { Pressable, Alert } from 'react-native'
import React from 'react'
import { CheckCircle } from 'react-native-feather'

const TodaySolution = ()=>{
    const onPressFunction = () =>{
        Alert.alert("오늘의 솔루션으로 지정할까요?",'4. 공부할 때, 잡생각이 많은 아이',[
            {
                text:"취소",
                style:"cancel"
            },
            {
                text:"확인",
                onPress: () => {
                    console.log('오늘의 솔루션 : 4. 공부할 때, 잡생각이 많은 아이')
                  }
            }
        ])
    }
    
    return (
    <Pressable
        onPress={onPressFunction}>
      <CheckCircle
        color={'#000'}
      />
    </Pressable>
  )
}

export default TodaySolution