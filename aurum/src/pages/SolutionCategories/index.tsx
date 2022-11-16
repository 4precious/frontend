import { Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Divider from '../../components/Divider'
import { ChevronRight } from 'react-native-feather'

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
            fontSize: 16,
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
          onPress={() => navigation.navigate('Solution')}
          title='학업'
        />
        <ItemBox
          title='인간관계'
        />
        <ItemBox
          title='진로'
        />
        <ItemBox
          title='게임'
        />
        <ItemBox
          title='기타'
        />
      </View>
    </SafeAreaView>
  )
}

export default SolutionCategoriesPage