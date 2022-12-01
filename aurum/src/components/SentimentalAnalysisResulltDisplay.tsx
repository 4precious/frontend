import {View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Progress from 'react-native-progress';
import AngerSvg from '../../assets/icons/Sentiment/anger.svg';
import AnxietySvg from '../../assets/icons/Sentiment/anxiety.svg';
import EmbarrassmentSvg from '../../assets/icons/Sentiment/embarrassment.svg';
import HappinessSvg from '../../assets/icons/Sentiment/happiness.svg';
import InjurySvg from '../../assets/icons/Sentiment/injury.svg';
import SadnessSvg from '../../assets/icons/Sentiment/sadness.svg';
 

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

const SentimentResult = ({per, src}:{per: number, src:any}) =>{
  return(
    <View style={{marginTop: 16, flex:1, flexDirection:'row', alignItems:'center',}}>
        <View style = {{marginRight:20}}>{src}</View>
        <View style = {{marginRight:20}}><Progress.Bar width={210} progress={per}  color={'#FFC226'}/></View>
        <View><Text style = {{color:'#FFC226'}}>{parseFloat(per.toFixed(3))*100}%</Text></View>
    </View>
  )
}

const SentimentalAnalysisResulltDisplay = ({
  result_happiness,
  result_angry,
  result_anxiety,
  result_embarrassment,
  result_injury,
  result_sadness}
  :{ result_happiness : number,
    result_angry : number,
    result_anxiety : number,
    result_embarrassment : number,
    result_injury : number,
    result_sadness : number
  }) => {
  const [emotion1, setEmotion1] = useState('');
  const [emotion2, setEmotion2] = useState('');
  const [emotion3, setEmotion3] = useState('');
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);
  const [per3, setPer3] = useState(0);

  useEffect(() =>{
    console.log(1)
    const result = {
      angry: result_angry,
      anxiety: result_anxiety,
      embarrassment: result_embarrassment,
      happiness: result_happiness,
      injury:result_injury,
      sadness:result_sadness
    };
  
    const sorted =Object.entries(result).sort((a, b) => b[1] - a[1]);
    var topemotion:any = []
    var toppercent:any = []

    for(let element of sorted) {
      topemotion.push(element[0])
      toppercent.push(element[1])
    }


    setEmotion1(topemotion[0])
    setEmotion2(topemotion[1])
    setEmotion3(topemotion[2])
    setPer1(toppercent[0])
    setPer2(toppercent[1])
    setPer3(toppercent[2])
  }, [])

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
        감정 분석 결과
      </Text>
      <SentimentResult per = {per1} src = {icons[emotion1]}/>
      <SentimentResult per = {per2} src = {icons[emotion2]}/>
      <SentimentResult per = {per3} src = {icons[emotion3]}/>
    </View>
  )
}

export default SentimentalAnalysisResulltDisplay
