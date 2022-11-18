import { Pressable, SafeAreaView, Text, Image, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Divider from '../../components/Divider'
import { Bold, ChevronRight } from 'react-native-feather'



const ItemBox = ({ title, onPress }: { title: string, onPress?: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        height: 100,
        borderRadius: 10,
        marginTop: 10,
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

const SolutionCategoriesPage = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Header
        onPressBack={() => navigation.goBack()}
        title='솔루션 카테고리'
      />
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <ItemBox
          onPress={() => navigation.navigate('SolutionFriend')}
          title='친구'
        />
        <ItemBox
          onPress={() => navigation.navigate('SolutionStudy')}
          title='공부'
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
  )
}

export default SolutionCategoriesPage