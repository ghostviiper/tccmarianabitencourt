import React from "react";
import { View, Image, StyleSheet, TextInput, Text } from "react-native";
import headerhome from '../../../assets/headerhome.png';
import { Divider } from "react-native-paper";
import Button from "./button";
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = ({ navigation }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={headerhome} style={[styles.header]} resizeMode="contain"/>
                <View style={styles.notificacao}>
                    <Text style={styles.notificacaotexto}>Você pode pegar um empréstimo de ate R$9,000,00! Simule agora.</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="black"/>
                </View>
            </View>
            <View >
                <TextInput style={styles.searchbar} placeholder="Procurar"/>
            </View>
            <View style={styles.saldorow}>
                <View>
                    <Text style={styles.saldo}>Saldo da conta</Text>
                    <Text style={styles.saldovalor}>3.345,09</Text>
                </View>
                <Button onPress={ () => navigation.navigate('Debito')}/>
            </View>
            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View>
                    <Text style={styles.saldo}>Fatura</Text>
                    <Text style={styles.saldovalor}>436,87</Text>
                    <Text style={styles.limite}>Limite disponivel: 1,658,09</Text>
                </View>
                <Button onPress={ () => navigation.navigate('Debito')}/>
            </View>
            <View style={styles.banner2}>
                    <Text style={styles.notificacaotexto}> <Text style={{fontWeight: "bold"}}>Saque extraordinario do FTGS</Text> {'\n'}Consulte se voce tem direito e veja a data do credito</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="black"/>
            </View>
            <View style={styles.iconsrow}>
                <View style={styles.iconscolumn}>
                <Ionicons name="barcode-outline" size={35} color="black"/>
                <Text style={styles.icones}>Pagar</Text>
                </View>

                <View style={styles.iconscolumn}>
                <Ionicons name="infinite-outline" size={35} color="black"/>
                <Text style={styles.icones}>PIX</Text>
                </View>

                <View style={styles.iconscolumn}>
                <Ionicons name="card-outline" size={35} color="black"/>
                <Text style={styles.icones}>Cartoes</Text>
                </View>

                <View style={styles.iconscolumn}>
                <Ionicons name="exit-outline" size={35} color="black"/>
                <Text style={styles.icones}>Transferir</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#005CA9',
        alignItems: 'center',
    },
    header: {
        width: '90%',
        maxHeight: 200,
        maxWidth: 300,
        marginTop: 50,
        
    },
    popup: {
        width: '80%',
        marginBottom: 30,
        marginTop: 20,
    },
    searchbar: {
        width: '80%',
        borderColor: '#707070',
        borderRadius: 20,
        borderWidth: 0.5,
        borderStyle: "solid",
        marginTop: 45,
        marginLeft: 40,
        height: 60,
        fontSize: 15,
        paddingHorizontal: 20,
    },
    icSearch: {
        height: 18, 
        width: 18
    },
    saldo: {
        fontSize: 15,
        color: '#535353',
        marginLeft: 40,
        marginTop: 30,
    },
    saldovalor: {
        fontSize: 30,
        color: '#535353',
        marginLeft: 40,
        marginTop: 5,
        fontWeight: "bold",
    },
    divider: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 40
    },
    saldorow: {
        flexDirection: "row",
        alignItems: "center"
    },
    limite: {
        fontSize: 10,
        color: '#535353',
        marginLeft: 40,
    },
    iconsrow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        width: '80%',
        marginLeft: 40,
        marginRight: 40,
        justifyContent: "space-around"
    },
    icones: {
        fontSize: 12,
        color: '#535353',
    },
    iconscolumn: {
        alignItems: "center"
    },
    banner2: {
        width: '80%',
        justifyContent: "space-around",
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "#eaecee",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        borderStyle: "solid",
    },
    notificacaotexto: {
        fontSize: 15,
        color: '#535353',
        margin: 10
    },
    notificacao: {
        backgroundColor: "#b3cee5",
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
        borderStyle: "solid",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    }
})

export default Home;