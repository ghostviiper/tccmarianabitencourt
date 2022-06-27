import react from "react";
import { StyleSheet, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const customButton = ({onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Ionicons 
            name="arrow-forward-outline" 
            size={32} 
            color="white" 
            style={{ marginVertical: 7 }}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F39200',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        marginRight: 60,
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
})
export default customButton