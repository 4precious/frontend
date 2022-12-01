import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import WalnutSvg from '../../../assets/icons/walnut.svg';
import OvenSvg from '../../../assets/icons/oven.svg';


const RecipeDetail = ({ navigation }: any) => {

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#fff'}}>
        <Header 
            onPressBack={() => navigation.navigate('1. 도대체 가만히 앉아있지를 못해요')}
            title = '호두파이 레시피'/>
        <ScrollView>
            <View style = {styles.container}>
                <View style = {{borderBottomColor:'#E6E6E6', borderBottomWidth:1, marginBottom:5}}>
                    <Text style = {styles.title}>재료</Text>
                </View>
                <View style = {styles.content}><Text>밀가루 박력분</Text><Text>180g</Text></View>
                <View style = {styles.content}><Text>소금</Text><Text>1/4 작은술</Text></View>
                <View style = {styles.content}><Text>무염버터</Text><Text>100g</Text></View>
                <View style = {styles.content}><Text>달걀 노른자</Text><Text>1개</Text></View>
                <View style = {styles.content}><Text>찬물</Text><Text>2 큰술</Text></View>
                <View style = {{borderBottomColor:'#E6E6E6', borderBottomWidth:1, marginBottom:5}}>
                    <View style = {{marginTop:15}}><Text style = {styles.title}>필링재료</Text></View>
                </View>
                <View style = {styles.content}><Text>달걀</Text><Text>2개</Text></View>
                <View style = {styles.content}><Text>녹인 무염버터</Text><Text>30g</Text></View>
                <View style = {styles.content}><Text>흑설탕</Text><Text>30g</Text></View>
                <View style = {styles.content}><Text>물엿</Text><Text>150ml</Text></View>
                <View style = {styles.content}><Text>계피가루</Text><Text>1 작은술</Text></View>
                <View style = {styles.content}><Text>호두</Text><Text>100g</Text></View>
            </View>
            <View style = {styles.container}>
                <View style = {{borderBottomColor:'#E6E6E6', borderBottomWidth:1, marginBottom:5}}>
                    <Text style = {styles.title}>조리순서</Text>
                </View>
                <View style = {styles.content2}>
                    <Text style = {{width:40, fontSize:18}}>①</Text>
                    <Text style = {{width:220, fontSize:15}}>달걀은 실온에 미리 빼두시고, 오븐은 <Text style = {styles.highlight}>170도</Text>로 예열해주세요.</Text>
                </View>
                <View style = {styles.content2}>
                <Text style = {{width:40, fontSize:18}}>②</Text>
                    <Text style = {{width:220, fontSize:15}}>볼에 체 친 밀가루(박력분), 소금, 차가운 버터를 넣고 볼을 돌려가며 주걱으로 자르듯이 섞은 후 달걀과 찬물을 넣어 한덩어리로 만들어주세요. 반죽을 비닐에 넣어 냉장고에서 <Text style = {styles.highlight}>30분</Text> 정도 휴지시켜주세요.</Text>
                </View>
                <View style = {styles.content2}>
                    <Text style = {{width:40, fontSize:18}}>③</Text>
                    <Text style = {{width:220, fontSize:15}}>호두는 손으로 4등분 정도되는 크기로 잘라주세요. 볼에 달걀 2개를 풀어 준 후 필링 재료를 넣어 섞어주세요.</Text>
                </View>
                <View style = {styles.content2}>
                    <Text style = {{width:40, fontSize:18}}>④</Text>
                    <Text style = {{width:220, fontSize:15}}>파이지 반죽을 얇게 밀어 타르트 틀에 넣고, 포크로 콕콕 찍어 구멍을 내준 후,</Text>
                </View>
                <View style = {styles.content2}>
                    <Text style = {{width:40, fontSize:18}}>⑤</Text>
                    <Text style = {{width:220, fontSize:15}}>섞어 놓은 필링 재료를 8부 정도 채워주세요.</Text>
                </View>
                <View style = {styles.content2}>
                    <Text style = {{width:40, fontSize:18}}>⑥</Text>
                    <Text style = {{width:220, fontSize:15}}><Text style = {styles.highlight}>170도</Text>로 예열한 오븐에서 <Text style = {styles.highlight}>35~40분</Text>간 구워주세요</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RecipeDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF',
    shadowColor: "#848484",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal:20,
    marginVertical:10,
    padding:20,
  },
  title:{
    fontWeight:'800',
    fontSize:15,
    marginBottom:5,
  },
  content:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginBottom:7,
  },
  content2:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginBottom:5,
    marginTop:10
  },
  highlight:{
    color:'#F78181',
    fontWeight:'800'
  }

})