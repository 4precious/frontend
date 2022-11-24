import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../components/Logo';

const Login = (props: any) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [parents, setParents] = useState(true);//학부모 회원일 경우 true

    return(
        <SafeAreaView style={styles.container}>
            <Logo size={48}></Logo>
            <View style = {styles.loginbox}>
                <TextInput
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    style={styles.input}
                    placeholder="이메일"
                    placeholderTextColor={'#424242'}
                />
                <TextInput
                    autoCapitalize={'none'}
                    style={styles.input}
                    placeholder="비밀번호"
                    placeholderTextColor={'#424242'}
                />
                <TouchableOpacity onPress={() => parents? props.navigation.navigate('Root'): props.navigation.navigate('ChildRoot')} style = {styles.login}>
                    <Text style = {{textAlign:'center', fontSize:16, fontWeight:'500',}}>
                        로그인
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('AdminCategory')} style = {styles.admin}>
                    <Text style = {{color:'#8B8B8B',textAlign:'center', fontSize:16, fontWeight:'400',textDecorationLine:'underline'}}>
                        회원가입
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop: 225,
    },
    loginbox:{
        marginTop:95,
        alignItems:'center',
        flex:1,
    },
    input: {
        width:350,
        height:50,
        marginBottom:7,
        borderColor:'#D3D3D3',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
    },
    login:{
        width:350,
        height:50,
        backgroundColor: '#FFC226',
        borderRadius: 10,
        justifyContent:'center',
        marginTop:15,
    },
    admin:{
        marginTop:21,
    }

})