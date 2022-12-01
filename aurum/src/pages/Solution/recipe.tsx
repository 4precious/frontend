import { StyleSheet, Alert, SafeAreaView, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import WalnutSvg from '../../../assets/icons/walnut.svg';
import BlueberrySvg from '../../../assets/icons/blueberry.svg';
import FishSvg from '../../../assets/icons/fish.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import OvenSvg from '../../../assets/icons/oven.svg';

const press = (text:string, info:string) => {
  Alert.alert(text, info, [
    {
      text: "취소",
      style: "cancel"
    },
    {
      text: "확인",
    }
  ])
}

const RecipeBox = ({ navigation, title, onPress, src, oven }: { navigation:any, title: string, onPress?: () => void , src: any, oven:string}) =>{
  return(
    <View
      style={styles.recipeBox}
    > 
      <View>
        {src}
      </View>
      <View style = {styles.recipeContent}>
        <Text style={{fontSize:16,fontWeight: '700',color:'#585858',marginBottom:15,}}>
          {title}
        </Text>
        <View style = {{flex:1, flexDirection:'row'}}>
          <OvenSvg width={20} height={20}/>
          <Text style={styles.recipeText}>
            {oven}
          </Text>
        </View>
        <TouchableOpacity onPress = {()=>{press('오븐 예열을 시작합니다',oven)}}>
          <View style = {styles.recipeButton}>
            <Text style={styles.recipeButtonText}>오븐 예열하기</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=>navigation.navigate('2. 공부를 생각한다면, 육아에서 경계해아 할 것')}>
          <View style = {styles.recipeButton}>
            <Text style={styles.recipeButtonText}>
              레시피 보러가기
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const icons = {
  blueberry : <BlueberrySvg/>,
  walnut : <WalnutSvg/>,
  fish : <FishSvg/>
};

const Recipe = ({ navigation }: any) => {

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header 
        onPressBack={() => navigation.navigate('4. 공부할 때, 잡생각이 많은 아이')}
        title = '집중력에 좋은 요리'/>
        <ScrollView>
          <RecipeBox title = "호두파이" navigation = {navigation} src = {icons.walnut} oven = " 170℃  35min"/>
          <RecipeBox title = "블루베리파이" navigation = {navigation} src = {icons.blueberry} oven = " 210℃  20min"/>
          <RecipeBox title = "고등어구이" navigation = {navigation} src = {icons.fish} oven = " 250℃  35min"/>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default Recipe

const styles = StyleSheet.create({
  recipeBox: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#fff',
    borderRadius:20,
    height:185,
    shadowColor: "#848484",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 5 },
    marginHorizontal:20,
    marginBottom:10,
    marginTop:25,
  },
  recipeContent:{
    flex:1,
    flexDirection:'column',
    padding:20,
  },
  recipeText:{
    fontSize:16,
    fontWeight: '400',
    color:'#585858',
    marginBottom:15,
  },
  recipeButton:{
    backgroundColor:'#f2f2f2',
    borderRadius: 10,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    height:30,
  },
  recipeButtonText:{
    fontSize:16,
    fontWeight: '400',
    color:'#848484',
  }

})