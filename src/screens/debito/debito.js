import React, {useState} from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from "react-native";
import Cartao from '../../../assets/Cartao.png'
import Button from "./button";
import { Divider } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';

const Debito = ({ navigation }) => {
    const {height} = useWindowDimensions();
    return (
        <ScrollView>
            <View style={styles.container} />
            <Image source={Cartao} style={[styles.cartao, {height: height * 0.25}]} resizeMode="contain"/>
            <View style={styles.saldorow}>
                <View>
                    <Text style={styles.saldo}>Saldo</Text>
                    <Text style={styles.saldovalor}>3.345,09</Text>
                </View>
                <Button />
            </View>

            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View flexDirection="row" alignItems= "center">
                    <View>
                        <Ionicons name="chevron-up-outline" size={22} color="black" alignSelf= "center"/>
                    </View>
                    <View>
                        <Text style={styles.transacao}>Compra no debito</Text>
                        <Text style={styles.descricao}>Farmacia</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.data}>15 ABR</Text>
                    <Text style={styles.valor}>R$ 9,90</Text>
                </View>
            </View>

            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View flexDirection="row" alignItems= "center">
                    <View>
                        <Ionicons name="chevron-up-outline" size={22} color="black" alignSelf= "center"/>
                    </View>
                    <View>
                        <Text style={styles.transacao}>Compra no debito</Text>
                        <Text style={styles.descricao}>Supermercado</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.data}>15 ABR</Text>
                    <Text style={styles.valor}>R$ 245,98</Text>
                </View>
            </View>

            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View flexDirection="row" alignItems= "center">
                    <View>
                        <Ionicons name="chevron-down-outline" size={22} color="black" alignSelf= "center"/>
                    </View>
                    <View>
                        <Text style={styles.transacao}>PIX recebido</Text>
                        <Text style={styles.descricao}>Maria da Silva</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.data}>12 ABR</Text>
                    <Text style={styles.valor}>R$ 75,00</Text>
                </View>
            </View>

            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View flexDirection="row" alignItems= "center">
                    <View>
                        <Ionicons name="chevron-up-outline" size={22} color="black" alignSelf= "center"/>
                    </View>
                    <View>
                        <Text style={styles.transacao}>Compra no debito</Text>
                        <Text style={styles.descricao}>Streaming</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.data}>10 ABR</Text>
                    <Text style={styles.valor}>R$ 55,00</Text>
                </View>
            </View>

            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View flexDirection="row" alignItems= "center">
                    <View>
                        <Ionicons name="chevron-down-outline" size={22} color="black" alignSelf= "center"/>
                    </View>
                    <View>
                        <Text style={styles.transacao}>PIX recebido</Text>
                        <Text style={styles.descricao}>Pedro Santos</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.data}>5 ABR</Text>
                    <Text style={styles.valor}>R$ 10,00</Text>
                </View>
            </View>

            <Divider style={styles.divider}/>
            <View style={styles.saldorow}>
                <View flexDirection="row" alignItems= "center">
                    <View>
                        <Ionicons name="chevron-down-outline" size={22} color="black" alignSelf= "center"/>
                    </View>
                    <View>
                        <Text style={styles.transacao}>PIX recebido</Text>
                        <Text style={styles.descricao}>Paulo Ribeiro</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.data}>1 ABR</Text>
                    <Text style={styles.valor}>R$ 15,00</Text>
                </View>
            </View>

            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    all: {
        position: "absolute"
    },
    container: {
        backgroundColor: '#005CA9',
        alignItems: 'center',
        height: 200
    },
    cartao: {
        marginTop: -150,
        flexWrap: "nowrap",
        marginLeft: 50
    },
    saldorow: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-around",
        width: '80%',
    },
    saldo: {
        fontSize: 15,
        color: '#535353',
        marginLeft: 30,
        marginTop: 30,    
    },
    transacao: {
        fontSize: 17,
        color: '#535353',
        marginLeft: 10
    },
    data: {
        color: '#535353',
        fontSize: 10,
        alignSelf: "flex-end",
        alignItems: "flex-end",
    },
    valor: {
        color: '#535353',
        fontSize: 17,
        alignSelf: "flex-end",
        alignItems: "flex-end",
        marginTop: 3
    },
    descricao: {
        color: '#535353',
        fontSize: 12,
        marginTop: 3,
        marginLeft: 10
    },
    saldovalor: {
        fontSize: 30,
        color: '#535353',
        marginLeft: 30,
        marginTop: 5,
        fontWeight: "bold",
    },
    divider: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    },
})

export default Debito