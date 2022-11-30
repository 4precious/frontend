import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import AngerSvg from '../../../assets/icons/Sentiment/anger.svg';
import AnxietySvg from '../../../assets/icons/Sentiment/anxiety.svg';
import EmbarrassmentSvg from '../../../assets/icons/Sentiment/embarrassment.svg';
import HappinessSvg from '../../../assets/icons/Sentiment/happiness.svg';
import InjurySvg from '../../../assets/icons/Sentiment/injury.svg';
import SadnessSvg from '../../../assets/icons/Sentiment/sadness.svg';
import ArrowSvg from '../../../assets/icons/arrow2.svg';

//dummy 어제의 금쪽이 대표 감정, 대표 감정 몇 %
const yRepEmotion = 'happiness'
const yRepPer = 90.1

type ObjType = {
 [index: string]: any
 }

const icons : ObjType = {
 angry : <AngerSvg width = {40} height = {40}/>,
 anxiety : <AnxietySvg width = {40} height = {40}/>,
 happiness :<HappinessSvg width = {40} height = {40}/>,
 embarrassment : <EmbarrassmentSvg width = {40} height = {40}/>,
 injury : <InjurySvg width = {40} height = {40}/>,
 sadness : <SadnessSvg width = {40} height = {40}/>
}

const CompareYesterday = ({per, src}:{per:any, src:any}) => {
  return(
    <View style={{marginTop: 16, flex:1, flexDirection:'row', alignItems:'center',}}>
        <View style = {{marginRight:20}}>{src}</View>
        <View><Text style = {{color:'#FFC226', fontSize:20, fontWeight:'800'}}>{parseFloat(per.toFixed(1))}%</Text></View>
    </View>
  )
}

type ObjType2 = {
  [index: string]:string
}

const TodayInfo :ObjType2 = {
  angry : '화가 났네요',
  anxiety : '불안하네요',
  happiness : '행복하네요',
  embarrassment : '당황했네요',
  injury : '상처받았네요',
  sadness : '슬프네요'
}

const YesterdayInfo :ObjType2 = {
  angry : '화가났던',
  anxiety : '불안했던',
  happiness : '행복했던',
  embarrassment : '당황했던',
  injury : '상처받았던',
  sadness : '슬펐던'
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
      <View style = {{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <View><CompareYesterday per = {yRepPer} src = {icons[yRepEmotion]}/></View>
        <View style = {{marginTop:15, marginHorizontal:15,}}><ArrowSvg width = {30} height = {30}/></View>
        <View><CompareYesterday per = {repper} src = {icons[repemotion]}/></View>
      </View>
      {(repemotion === yRepEmotion)
      ?
      //어제랑 기분이 같을 경우
      <Text style={{textAlign:'center',color:'#FFC226',fontWeight:'800',fontSize: 15, marginTop:16, lineHeight:20 }}>
        어제는 <Text style = {{color:'#FF7067'}}>{YesterdayInfo[yRepEmotion]}</Text> 우리 금쪽이, 오늘도 기분이 같네요 
      </Text>
      :
      //어제랑 기분이 다를 경우
      <Text style={{textAlign:'center',color:'#FFC226',fontWeight:'800',fontSize: 15, marginTop:16, lineHeight:20}}>
        어제는 <Text style = {{color:'#FF7067'}}>{YesterdayInfo[yRepEmotion]}</Text> 우리 금쪽이,
         오늘은 <Text style = {{color:'#FF7067'}}>{TodayInfo[repemotion]}</Text>
      </Text>
      }
    </View>
  )
}

export default YesterdayDisplay