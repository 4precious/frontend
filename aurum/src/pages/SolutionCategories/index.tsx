import {  Pressable, SafeAreaView, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ChevronRight } from 'react-native-feather'
import StudySolution from '../Solution/indexStudy'
import Header from '../../components/Header'
import Recipe from '../Solution/recipe';
import RecipeDetail from '../Solution/RecipeDetail';

const ItemBox = ({ title, onPress }: { title: string, onPress?: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        height: 100,
        borderRadius: 10,
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      > 
        <Text
          style={{
            fontSize:16,
            fontWeight: '500'
          }}
        >
          {title}
        </Text>
        <ChevronRight
          color={'#000'}
        />
      </View>
    </Pressable>
  )
}

export const Main = ({ navigation }:any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header
        onPressBack={() => navigation.navigate('App',{screen: 'Question'})}
        title='육아 코칭 카테고리'
      />
      <ScrollView
        style={{
          marginTop:6,
          paddingHorizontal: 16,
        }}
      >
        <ItemBox
          onPress={() => navigation.openDrawer()}
          title='공부'
        />
        <ItemBox
          title='친구관계'
        />
        <ItemBox
          title='훈육법'
        />
        <ItemBox
          title='형제관계'
        />
        <ItemBox
          title='사춘기'
        />
      </ScrollView>
    </SafeAreaView>

  );
}

export const DUMMY = ()=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>dummy</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation screenOptions={{drawerPosition:'right', drawerActiveBackgroundColor:'#FFC226',drawerActiveTintColor:'#000'}}>
      <Drawer.Screen name="공부 육아 코칭" component={Main}
      options={{
        headerShown:false
      }} />
      <Drawer.Screen name="1. 도대체 가만히 앉아있지를 못해요" component={Recipe} 
      options={{
        headerShown:false
      }}/>
      <Drawer.Screen name="2. 공부를 생각한다면, 육아에서 경계해아 할 것" component={RecipeDetail}
      options={{
        headerShown:false
      }} />
      <Drawer.Screen name="3. 꼭 특출할 필요까지는 없어" component={DUMMY} />
      <Drawer.Screen name="4. 공부할 때, 잡생각이 많은 아이" component={StudySolution}
      options={{
        headerShown:false
      }}/>
      <Drawer.Screen name="5. 공부는 지루하고 지겨운거야" component={DUMMY} />
      <Drawer.Screen name="6. 늦게 숙제하려니까 힘들지 않았어?" component={DUMMY} />
      <Drawer.Screen name="7. '최선'에 대해서 어떻게 생각하세요" component={DUMMY} />
      <Drawer.Screen name="8. 열심히 하는 게 제일 중요해" component={DUMMY} />
    </Drawer.Navigator>
  );
}

const SolutionPage = ({navigation} :any) => {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  )
}

export default SolutionPage


