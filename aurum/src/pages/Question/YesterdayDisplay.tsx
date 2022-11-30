import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Progress from 'react-native-progress';
import AngerSvg from '../../../assets/icons/Sentiment/anger.svg';
import AnxietySvg from '../../../assets/icons/Sentiment/anxiety.svg';
import EmbarrassmentSvg from '../../../assets/icons/Sentiment/embarrassment.svg';
import HappinessSvg from '../../../assets/icons/Sentiment/happiness.svg';
import InjurySvg from '../../../assets/icons/Sentiment/injury.svg';
import SadnessSvg from '../../../assets/icons/Sentiment/sadness.svg';


type ObjType = {
 [index: string]: any
 }

const icons : ObjType = {
 angry : <AngerSvg/>,
 anxiety : <AnxietySvg/>,
 happiness :<HappinessSvg/>,
 embarrassment : <EmbarrassmentSvg/>,
 injury : <InjurySvg/>,
 sadness : <SadnessSvg/>
}


const YesterdayDisplay = ({repemotion, repper}:{repemotion:string, repper:number}) => {

  return (
    <View
      style={{
        marginVertical: 16,
        marginHorizontal: 36,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: '#000',
          fontWeight: 'bold',
        }}
      >
        어제의 금쪽이
      </Text>
      <View
        style={{
          marginVertical: 16,
        }}
      >
        <Text>

        </Text>
      </View>
    </View>
  )
}

export default YesterdayDisplay