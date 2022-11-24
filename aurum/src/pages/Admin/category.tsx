import { SafeAreaView, Alert, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../components/Logo';
import { nodeModuleNameResolver } from 'typescript';

const AdminCategory = (props:any) => {
    const [isSelect,setIsSelect] = useState(false);
    const [parents, setParents] = useState(true);

    const onPress = () => {
        setParents(false)
        setIsSelect(true)
    }
    const onPress2 = () => {
        setParents(true)
        setIsSelect(true)
    }
    const press = () => {
        isSelect
        ?
        props.navigation.navigate('AdminInfo')
        :
        Alert.alert('회원 유형을 선택하지 않았습니다')
      }

    return(
        <SafeAreaView style={styles.container}>
            <Logo size={25}></Logo>
            <Text style = {styles.category}>회원 유형 선택</Text>
            <View style = {{height:200,marginBottom:135}}>
                <TouchableOpacity onPress = {onPress} style = {isSelect&&!parents ?styles.select :styles.categorybox}>
                    <Image source = {require('../../../assets/icons/BabyChick.png')}/>
                    <Text style = {styles.info}>자녀입니다</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {onPress2} style = {isSelect&&parents ?styles.select :styles.categorybox}>
                    <Image source = {require('../../../assets/icons/Chicken.png')}/>
                    <Text style = {styles.info}>학부모입니다</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.next} onPress= {press}>
                <Text style = {{textAlign:'center', fontSize:16, fontWeight:'500',}}>
                    다음
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default AdminCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 65,
    },
    category:{
        fontSize:22,
        fontWeight: '700',
        marginTop: 40,
    },
    categorybox:{
        borderColor:'#D3D3D3',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        marginTop:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    select:{
        borderColor:'#D3D3D3',
        backgroundColor:'#D3D3D3',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        marginTop:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    info:{
        marginLeft:20,
        fontWeight:'400',
        fontSize:16.5,

    },
    next:{
        height:50,
        backgroundColor: '#FFC226',
        borderRadius: 10,
        justifyContent:'center',
        marginTop:15,
    }
    

})