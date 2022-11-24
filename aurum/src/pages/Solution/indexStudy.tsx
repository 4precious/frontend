import { StyleSheet, Alert, SafeAreaView, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Solution/Header'
import SolutionCard from './SolutionCard'

const SolutionStudy = ({ navigation }: any) => {

  const press = (text:string, info:string) => {
    Alert.alert(text, info, [
      {
        text: "취소",
        style: "cancel"
      },
      {
        text: "확인",
        onPress: () => {
          console.log('작동중')
        }
      }
    ])
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header
        onPressBack={() => navigation.goBack()}
        title='4. 공부할 때, 잡생각이 많은 아이'
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 26,
            alignItems: 'center',
            marginHorizontal:30,
          }}>
          <Image source = {require('../../../assets/icons/studychild.png')} //이미지 변경 예정 (구림..)
          style = {{width: 250, height:200}} />
          <Text
            style={styles.title}>
            공부할 때 잡다한 생각이 많은 아이,{'\n'}어떻게 해야 좀 더 집중할 수 있을까요?
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              marginTop:25,
              lineHeight:24,
            }}>
            <Text style = {styles.highlight}>우선 아이가 책상에 앉으면 눈앞에 보이는 물건이 없어야 합니다.</Text>
            책상에 책꽂이도 두지 않는 것이 좋아요.
            눈앞에 보이는 책만으로도 끊임없이 상상의 나래를 펴거든요.
            책상도 되도록 아무것도 없이 비워 두는 것이 좋습니다.{'\n'}{'\n'}
            <Text style = {styles.highlight}>아이 방 자체도 심플해야 해요.</Text>
            장식품이 많거나 벽지가 화려해도 집중하는데 방해가 됩니다.{'\n'}{'\n'}
            <Text style = {styles.highlight}>당연히 컴퓨터나 스마트폰은 아이방이 아니라 거실에 두어야합니다.</Text>
            상황이 안된다면 최소한 책상 앞에 앉았을 때 보이지 않는 위치에 두세요.{'\n'}{'\n'}
            잡생각이 많은 아이들은 시끄러워도 집중이 안됩니다.
            거실에서 부모가 소곤소곤 이야기하는 소리만 들려도 그쪽으로 귀가 열려서 집중할 수 없어요.{'\n'}
            <Text style = {styles.highlight}>아이가 공부한다고 앉으면 부모는 전화통화나 TV를 보는 것도 삼가는 것이 좋아요</Text>{'\n'}{'\n'}
            아이가 주변을 정리한다음, 공부를 시작할 때는 부모가 간단하게는 공부할 내용의 개요와 단계를 설명해주세요. 
            뭘 하기 위해 책상 위에 앉은 것인지 확인시키는 것이죠. <Text style = {styles.highlight}>아이에게 단기목표를 설정해 주는 겁니다. </Text>
            이렇듯 자신이 할 일의 분량과 시간들을 명확하게 정하면 잡생각이 좀 덜 떠오릅니다.{'\n'}{'\n'}
          </Text>
        </View>
        <Text style = {{fontSize: 15, color: '#FFC226', fontWeight: '700', lineHeight:28, marginLeft:30, }}>
          # 우리 아이를 위한 추천
        </Text>
        <Text style={{ fontSize: 20, color: '#000', fontWeight: '700',  marginLeft:30, marginBottom:12,}}>
          다양한 맞춤형 서비스가 있어요!
        </Text>
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false} style = {{height:230, marginLeft:30,}}>
            <SolutionCard 
              onPress = {()=>{press('1번 가전 작동할까요???','TV 그만봐!!')}} 
              title = 'TV 시청제한'
              card = 'TV'
              info = 'LG 스마트 TV의 시청제한 기능으로 집중력 향상'/>
            <SolutionCard 
              onPress = {()=>{press('2번 가전 작동할까요???','피톤치드 칙칙')}} 
              title = '피톤치드로 집중력 향상'
              card = 'diffuser'
              info = 'LG 스마트 아우라 디퓨저의 피톤치드 향으로 집중력 향상'/>
        </ScrollView>
      </ScrollView>       
    </SafeAreaView>
  )
}

export default SolutionStudy

const styles = StyleSheet.create({
  highlight: {
    backgroundColor:'rgba(255,194,38,0.5)',fontWeight:'500'
  },
  title:{
    fontSize: 20, color: '#000', fontWeight: '700', marginTop:30, lineHeight:28,
  }
})