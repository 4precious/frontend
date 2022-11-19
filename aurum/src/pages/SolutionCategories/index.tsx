import {  Pressable, Button, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { ChevronRight, ChevronLeft } from 'react-native-feather'
import StudySolution from '../Solution/indexStudy'

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
      <View
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
          title='친구'
        />
        <ItemBox
          title='훈육'
        />
        <ItemBox
          title='형제'
        />
        <ItemBox
          title='사춘기'
        />
      </View>
    </SafeAreaView>

  );
}


export const Notifications = ()=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>고고</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation screenOptions={{drawerPosition:'right'}}>
      <Drawer.Screen name="솔루션 카테고리" component={Main} />
      <Drawer.Screen name="Notifications" component={StudySolution} />
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


