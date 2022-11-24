import { SafeAreaView ,ScrollView, Text, StyleSheet, View, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../components/Logo';
import RNPickerSelect from 'react-native-picker-select';

const AdminInfo = (props:any) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [parents, setParents] = useState(true);
    const [selectedValue, setSelectedValue] = useState("");

    const onChangeText = (value:any) => {
        setSelectedValue(value);
    } 

    return(
        <SafeAreaView style={styles.container}>
            <Logo size={25}></Logo>
            <Text style = {styles.category}>회원 정보 입력</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style = {styles.info}>이메일</Text>
                <TextInput style = {styles.infobox} keyboardType={'email-address'} placeholder="이메일 입력"placeholderTextColor={'#6E6E6E'}></TextInput>
                <Text style = {styles.info}>비밀번호</Text>
                <TextInput style = {styles.infobox} placeholder="8~16자리 영문, 숫자 조합"placeholderTextColor={'#6E6E6E'}></TextInput>
                <Text style = {styles.info}>이름</Text>
                <TextInput style = {styles.infobox} placeholder="이름 입력"placeholderTextColor={'#6E6E6E'}></TextInput>
                <Text style = {styles.info}>생년월일</Text>
                <TextInput style = {styles.infobox} keyboardType={'number-pad'} placeholder="YYYYMMDD"placeholderTextColor={'#6E6E6E'}></TextInput>
                <Text style = {styles.info}>성별</Text>
                <RNPickerSelect
                    onValueChange={value => onChangeText(value)}
                    placeholder={{
                        label: '성별 입력',
                    }}
                    items={[
                        { label: '남자', value: '남자' },
                        { label: '여자', value: '여자' },
                    ]}
                    style={pickerSelectStyles}
                />
                <Text style = {styles.info}>전화번호</Text>
                <TextInput style = {styles.infobox} keyboardType={'number-pad'} placeholder="'-' 빼고 숫자만 입력"placeholderTextColor={'#6E6E6E'}></TextInput>
                <Text style = {styles.info}>부모 ID</Text>
                <TextInput style = {styles.infobox} placeholder="부모 ID 입력"placeholderTextColor={'#6E6E6E'}></TextInput>
                <TouchableOpacity style = {styles.finish} onPress={() => props.navigation.navigate('Login')}>
                    <Text style = {{textAlign:'center', fontSize:16, fontWeight:'500',}}>
                        가입완료
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AdminInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 65,
    },
    category:{
        fontSize:22,
        fontWeight: '700',
        marginTop: 15,
        marginBottom:15,
    },
    finish:{
        height:50,
        backgroundColor: '#FFC226',
        borderRadius: 10,
        justifyContent:'center',
        marginTop:10,
    },
    infobox:{
        height:45,
        marginBottom:7,
        borderColor:'#D3D3D3',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
    },
    info:{
        fontSize:15, 
        fontWeight:'400', 
        marginBottom:7, 
        marginTop:5
    },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height:45,
        marginBottom:7,
        borderColor:'#D3D3D3',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
    }
})