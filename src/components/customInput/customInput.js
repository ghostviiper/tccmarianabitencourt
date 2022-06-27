import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const customInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        opacity: .57,
        width: '70%',
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 5,
    },
    input: {
        
    },
})
export default customInput