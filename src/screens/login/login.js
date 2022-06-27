import React, {useState} from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import logologin from '../../../assets/logologin.png';
import entrar from '../../../assets/Entrar.png';
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton/customButton";


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    return (
        <View style={styles.container}>
            <Image source={logologin} style={[styles.logo, {height: height * 0.2}]} resizeMode="contain"/>
            <Image source={entrar} style={[styles.entrar]} resizeMode="contain"/>
            <CustomInput placeholder="Usuario" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Senha" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton onPress={ () => navigation.navigate('Home')}/>
            <Text style={[styles.mais, {marginTop: 335}]}>Criar conta</Text>
            <Text style={[styles.mais, {marginBottom: 50}]}>Mais opcoes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#005CA9',
        alignItems: 'center',
    },
    logo: {
        width: '70%',
        maxHeight: 200,
        maxWidth: 300,
        marginTop: 30,
        marginBottom: 50,
    },
    entrar: {
        alignSelf: 'flex-start',
        marginLeft: 60,
    },
    mais: {
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 60,
        fontSize: 15,
        fontFamily: 'sans-serif',
    }
})

export default Login