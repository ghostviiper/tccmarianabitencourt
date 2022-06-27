import react from "react";
import { StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const button = ({onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Ionicons 
            name="eye-off-outline" 
            size={22} 
            color="black" 
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        marginVertical: 5,
        borderRadius: 5,
        marginLeft: 150,
        marginTop: 50
    },
})
export default button